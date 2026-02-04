import React, { useState } from 'react';
import {
    View,
    Text,
    TextInput,
    TouchableOpacity,
    StyleSheet,
    ActivityIndicator,
    KeyboardAvoidingView,
    Platform,
    Alert,
    StatusBar
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { COLORS, SHADOWS } from '../constants/theme';

const JournalEntryScreen = ({ navigation }) => {
    const [journalText, setJournalText] = useState('');
    const [isLoading, setIsLoading] = useState(false);

    const handleAnalyze = async () => {
        if (!journalText.trim()) return;

        setIsLoading(true);
        try {
            // Mock for now
            await new Promise(resolve => setTimeout(resolve, 1500));
            const result = {
                emotion: 'Reflective',
                confidence: 0.88,
                text: journalText
            };

            navigation.navigate('EmotionResult', result);
        } catch (error) {
            Alert.alert("Error", "Failed to analyze emotion.");
        } finally {
            setIsLoading(false);
        }
    };

    return (
        <SafeAreaView style={styles.container}>
            <StatusBar barStyle="light-content" backgroundColor={COLORS.background} />
            <KeyboardAvoidingView
                behavior={Platform.OS === "ios" ? "padding" : "height"}
                style={styles.keyboardView}
            >
                <Text style={styles.headerTitle}>Journal AI</Text>
                <Text style={styles.subtitle}>How are you feeling today?</Text>

                <View style={styles.inputContainer}>
                    <TextInput
                        style={styles.input}
                        multiline
                        placeholder="Write your thoughts..."
                        placeholderTextColor={COLORS.textTertiary}
                        value={journalText}
                        onChangeText={setJournalText}
                        textAlignVertical="top"
                    />
                </View>

                <TouchableOpacity
                    style={[
                        styles.button,
                        (!journalText.trim() || isLoading) && styles.buttonDisabled
                    ]}
                    onPress={handleAnalyze}
                    disabled={isLoading || !journalText.trim()}
                    activeOpacity={0.8}
                >
                    {isLoading ? (
                        <ActivityIndicator color="#fff" />
                    ) : (
                        <Text style={styles.buttonText}>Analyze Emotion</Text>
                    )}
                </TouchableOpacity>
            </KeyboardAvoidingView>
        </SafeAreaView>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: COLORS.background,
    },
    keyboardView: {
        flex: 1,
        padding: 24,
    },
    headerTitle: {
        fontSize: 32,
        fontWeight: '800',
        color: COLORS.textPrimary,
        marginBottom: 8,
        marginTop: 20,
        letterSpacing: -1,
    },
    subtitle: {
        fontSize: 18,
        color: COLORS.textSecondary,
        marginBottom: 30,
    },
    inputContainer: {
        flex: 1,
        backgroundColor: COLORS.surface,
        borderRadius: 20,
        marginBottom: 24,
        borderWidth: 1,
        borderColor: COLORS.border,
        ...SHADOWS.small,
    },
    input: {
        flex: 1,
        padding: 20,
        fontSize: 17,
        color: COLORS.textPrimary,
        lineHeight: 24,
    },
    button: {
        backgroundColor: COLORS.primary,
        paddingVertical: 18,
        borderRadius: 16,
        alignItems: 'center',
        ...SHADOWS.medium,
    },
    buttonDisabled: {
        backgroundColor: COLORS.surfaceLight,
        shadowOpacity: 0,
    },
    buttonText: {
        color: '#fff',
        fontSize: 18,
        fontWeight: '700',
        letterSpacing: 0.5,
    },
});

export default JournalEntryScreen;

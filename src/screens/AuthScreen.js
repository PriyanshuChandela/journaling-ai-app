import React, { useState } from 'react';
import {
    View,
    Text,
    TextInput,
    TouchableOpacity,
    StyleSheet,
    KeyboardAvoidingView,
    Platform,
    Alert,
    StatusBar
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { COLORS, SHADOWS } from '../constants/theme';

const AuthScreen = ({ navigation }) => {
    const [isLogin, setIsLogin] = useState(true);
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [name, setName] = useState('');

    const isValidEmail = (email) => {
        return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
    };

    const handleAuth = () => {
        if (!email.trim() || !password.trim()) {
            Alert.alert('Error', 'Please fill in all fields.');
            return;
        }

        if (!isValidEmail(email)) {
            Alert.alert('Wrong Email', 'Please enter again.');
            setEmail(''); // Clear the field so user has to enter again
            return;
        }

        if (!isLogin && !name.trim()) {
            Alert.alert('Error', 'Please enter your name.');
            return;
        }

        // Authenticate (Mock)
        // navigation.replace('JournalEntry');
        // Using navigate to allow going back if needed, but usually replace is better for auth
        navigation.reset({
            index: 0,
            routes: [{ name: 'JournalEntry' }],
        });
    };

    return (
        <SafeAreaView style={styles.container}>
            <StatusBar barStyle="light-content" backgroundColor={COLORS.background} />
            <KeyboardAvoidingView
                behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
                style={styles.content}
            >
                <View style={styles.header}>
                    <Text style={styles.title}>
                        {isLogin ? 'Welcome Back.' : 'Create Account.'}
                    </Text>
                    <Text style={styles.subtitle}>
                        {isLogin
                            ? 'Sign in to access your emotional journey.'
                            : 'Start tracking your mental wellness today.'}
                    </Text>
                </View>

                <View style={styles.form}>
                    {!isLogin && (
                        <View style={styles.inputGroup}>
                            <Text style={styles.label}>Name</Text>
                            <TextInput
                                style={styles.input}
                                placeholder="Your Name"
                                placeholderTextColor={COLORS.textSecondary}
                                value={name}
                                onChangeText={setName}
                            />
                        </View>
                    )}

                    <View style={styles.inputGroup}>
                        <Text style={styles.label}>Email</Text>
                        <TextInput
                            style={styles.input}
                            placeholder="name@example.com"
                            placeholderTextColor={COLORS.textSecondary}
                            value={email}
                            onChangeText={setEmail}
                            autoCapitalize="none"
                            keyboardType="email-address"
                        />
                    </View>

                    <View style={styles.inputGroup}>
                        <Text style={styles.label}>Password</Text>
                        <TextInput
                            style={styles.input}
                            placeholder="••••••••"
                            placeholderTextColor={COLORS.textSecondary}
                            value={password}
                            onChangeText={setPassword}
                            secureTextEntry
                        />
                    </View>

                    {/* Primary Action Button */}
                    <TouchableOpacity
                        style={styles.button}
                        onPress={handleAuth}
                        activeOpacity={0.8}
                    >
                        <Text style={styles.buttonText}>
                            {isLogin ? 'Log In' : 'Sign Up'}
                        </Text>
                    </TouchableOpacity>

                    <View style={styles.dividerContainer}>
                        <View style={styles.divider} />
                        <Text style={styles.dividerText}>OR</Text>
                        <View style={styles.divider} />
                    </View>

                    {/* Toggle Button displayed as a secondary action button */}
                    <TouchableOpacity
                        style={styles.secondaryButton}
                        onPress={() => setIsLogin(!isLogin)}
                    >
                        <Text style={styles.secondaryButtonText}>
                            {isLogin ? 'Create Account' : 'Log In Instead'}
                        </Text>
                    </TouchableOpacity>
                </View>
            </KeyboardAvoidingView>
        </SafeAreaView>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: COLORS.background,
    },
    content: {
        flex: 1,
        padding: 24,
        justifyContent: 'center',
    },
    header: {
        marginBottom: 32,
    },
    title: {
        fontSize: 40,
        fontWeight: '800',
        color: COLORS.textPrimary,
        marginBottom: 12,
        letterSpacing: -1,
    },
    subtitle: {
        fontSize: 16,
        color: COLORS.textSecondary,
        lineHeight: 24,
    },
    form: {
        backgroundColor: COLORS.surface,
        padding: 24,
        borderRadius: 24,
        borderWidth: 1,
        borderColor: COLORS.border,
        // Glow effect
        shadowColor: COLORS.primary,
        shadowOffset: { width: 0, height: 10 },
        shadowOpacity: 0.1,
        shadowRadius: 20,
        elevation: 5,
    },
    inputGroup: {
        marginBottom: 20,
    },
    label: {
        fontSize: 12,
        fontWeight: '700',
        color: COLORS.textSecondary,
        marginBottom: 8,
        textTransform: 'uppercase',
        letterSpacing: 1,
    },
    input: {
        backgroundColor: COLORS.surfaceLight,
        borderWidth: 1,
        borderColor: COLORS.border,
        borderRadius: 16,
        padding: 16,
        fontSize: 16,
        color: COLORS.textPrimary, // Ensure text is white
    },
    button: {
        backgroundColor: COLORS.primary,
        paddingVertical: 18,
        borderRadius: 16,
        alignItems: 'center',
        marginTop: 12,
        ...SHADOWS.medium,
    },
    buttonText: {
        color: '#fff',
        fontSize: 16,
        fontWeight: '700',
        letterSpacing: 0.5,
    },
    dividerContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        marginVertical: 20,
    },
    divider: {
        flex: 1,
        height: 1,
        backgroundColor: COLORS.border,
    },
    dividerText: {
        marginHorizontal: 10,
        color: COLORS.textTertiary,
        fontSize: 12,
        fontWeight: '600',
    },
    secondaryButton: {
        backgroundColor: 'transparent',
        borderWidth: 1,
        borderColor: COLORS.textSecondary,
        paddingVertical: 16,
        borderRadius: 16,
        alignItems: 'center',
    },
    secondaryButtonText: {
        color: COLORS.textPrimary,
        fontSize: 16,
        fontWeight: '600',
    },
});

export default AuthScreen;

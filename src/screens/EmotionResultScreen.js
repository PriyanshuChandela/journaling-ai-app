import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, ScrollView } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { COLORS, SHADOWS } from '../constants/theme';

const EmotionResultScreen = ({ route, navigation }) => {
  const { emotion, confidence, text } = route.params || {};
  const [saved, setSaved] = useState(false);

  // Normalize emotion key for color lookup
  const emotionKey = emotion?.toLowerCase() || 'reflective';
  const emotionColor = COLORS.emotions[emotionKey] || COLORS.primary;

  const handleSave = async () => {
    // Mock save
    setSaved(true);
    // TODO: Call API to save entry
    setTimeout(() => {
      navigation.navigate('Trends');
    }, 800);
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerTitle}>Analysis Result</Text>
      </View>

      <ScrollView contentContainerStyle={styles.content}>
        <View style={[styles.mainCard, { borderTopColor: emotionColor }]}>
          <Text style={styles.label}>Dominant Emotion</Text>
          <Text style={[styles.emotionText, { color: emotionColor }]}>
            {emotion || 'Unknown'}
          </Text>
          <Text style={styles.confidenceText}>
            {confidence ? `${(confidence * 100).toFixed(0)}% Confidence` : ''}
          </Text>

          <View style={styles.divider} />

          <Text style={styles.journalPreview} numberOfLines={3}>
            "{text}"
          </Text>
        </View>

        <View style={styles.breakdownContainer}>
          <Text style={styles.sectionTitle}>Emotion Breakdown</Text>
          {/* Dummy Breakdown Data */}
          {['Happy', 'Calm', 'Anxious'].map((item, index) => (
            <View key={item} style={styles.breakdownRow}>
              <Text style={styles.breakdownLabel}>{item}</Text>
              <View style={styles.progressBarBg}>
                <View style={[
                  styles.progressBarFill,
                  { width: `${60 - index * 20}%`, backgroundColor: COLORS.emotions[item.toLowerCase()] || COLORS.secondary }
                ]} />
              </View>
              <Text style={styles.breakdownValue}>{60 - index * 20}%</Text>
            </View>
          ))}
        </View>
      </ScrollView>

      <View style={styles.footer}>
        <TouchableOpacity
          style={[styles.button, styles.secondaryButton]}
          onPress={() => navigation.goBack()}
        >
          <Text style={[styles.buttonText, styles.secondaryButtonText]}>Discard</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={[styles.button, styles.primaryButton]}
          onPress={handleSave}
          disabled={saved}
        >
          <Text style={styles.buttonText}>{saved ? 'Saved!' : 'Save Entry'}</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.background,
  },
  header: {
    paddingHorizontal: 24,
    paddingTop: 10,
    paddingBottom: 20,
  },
  headerTitle: {
    fontSize: 28,
    fontWeight: '800',
    color: COLORS.textPrimary,
  },
  content: {
    paddingHorizontal: 24,
    paddingBottom: 100,
  },
  mainCard: {
    backgroundColor: COLORS.surface,
    borderRadius: 24,
    padding: 30,
    alignItems: 'center',
    marginBottom: 30,
    borderTopWidth: 6,
    borderWidth: 1,
    borderColor: COLORS.border,
    ...SHADOWS.medium,
  },
  label: {
    fontSize: 14,
    color: COLORS.textSecondary,
    textTransform: 'uppercase',
    letterSpacing: 1,
    marginBottom: 10,
  },
  emotionText: {
    fontSize: 42,
    fontWeight: '800',
    marginBottom: 8,
  },
  confidenceText: {
    fontSize: 16,
    color: COLORS.textSecondary,
    fontWeight: '500',
    marginBottom: 24,
  },
  divider: {
    height: 1,
    width: '100%',
    backgroundColor: COLORS.border,
    marginBottom: 20,
  },
  journalPreview: {
    fontSize: 16,
    color: COLORS.textTertiary,
    lineHeight: 24,
    fontStyle: 'italic',
    textAlign: 'center',
  },
  breakdownContainer: {
    backgroundColor: COLORS.surface,
    borderRadius: 20,
    padding: 24,
    borderWidth: 1,
    borderColor: COLORS.border,
    ...SHADOWS.small,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: '700',
    color: COLORS.textPrimary,
    marginBottom: 20,
  },
  breakdownRow: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 16,
  },
  breakdownLabel: {
    width: 70,
    fontSize: 15,
    color: COLORS.textSecondary,
    fontWeight: '500',
  },
  progressBarBg: {
    flex: 1,
    height: 8,
    backgroundColor: COLORS.surfaceLight,
    borderRadius: 4,
    marginHorizontal: 10,
    overflow: 'hidden',
  },
  progressBarFill: {
    height: '100%',
    borderRadius: 4,
  },
  breakdownValue: {
    width: 40,
    fontSize: 14,
    fontWeight: '600',
    color: COLORS.textPrimary,
    textAlign: 'right',
  },
  footer: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    padding: 24,
    paddingBottom: 40,
    backgroundColor: COLORS.background,
    flexDirection: 'row',
    justifyContent: 'space-between',
    borderTopWidth: 1,
    borderTopColor: COLORS.border,
  },
  button: {
    flex: 0.48,
    paddingVertical: 16,
    borderRadius: 16,
    alignItems: 'center',
    justifyContent: 'center',
  },
  primaryButton: {
    backgroundColor: COLORS.primary,
    ...SHADOWS.medium,
  },
  secondaryButton: {
    backgroundColor: 'transparent',
    borderWidth: 1,
    borderColor: COLORS.textSecondary,
  },
  buttonText: {
    fontSize: 16,
    fontWeight: '700',
    color: '#fff',
  },
  secondaryButtonText: {
    color: COLORS.textSecondary,
  },
});

export default EmotionResultScreen;

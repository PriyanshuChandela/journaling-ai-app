import React, { useEffect, useState } from 'react';
import { View, Text, StyleSheet, Dimensions, ScrollView, ActivityIndicator, Alert, StatusBar } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { LineChart, BarChart } from 'react-native-chart-kit';
import { COLORS, SHADOWS } from '../constants/theme';
import { fetchTrends } from '../services/api';

const screenWidth = Dimensions.get("window").width;

const TrendsScreen = ({ navigation }) => {
    const [loading, setLoading] = useState(true);
    const [data, setData] = useState(null);

    useEffect(() => {
        loadTrends();
    }, []);

    const loadTrends = async () => {
        try {
            // Mock data for demonstration
            await new Promise(resolve => setTimeout(resolve, 1000));
            setData({
                weekly: {
                    labels: ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"],
                    datasets: [{ data: [65, 59, 80, 81, 56, 55, 40] }]
                },
                topEmotions: {
                    labels: ["Happy", "Calm", "Anxious", "Sad"],
                    datasets: [{ data: [40, 30, 20, 10] }]
                }
            });
            setLoading(false);
        } catch (error) {
            Alert.alert("Error", "Failed to load trends.");
            setLoading(false);
        }
    };

    if (loading) {
        return (
            <View style={[styles.container, styles.center]}>
                <ActivityIndicator size="large" color={COLORS.primary} />
            </View>
        );
    }

    return (
        <SafeAreaView style={styles.container}>
            <StatusBar barStyle="light-content" backgroundColor={COLORS.background} />
            <ScrollView contentContainerStyle={styles.scrollContent}>
                <View style={styles.header}>
                    <Text style={styles.headerTitle}>Mood Trends</Text>
                    <Text style={styles.subtitle}>Your emotional journey this week</Text>
                </View>

                <View style={styles.chartContainer}>
                    <Text style={styles.chartTitle}>Weekly Positivity</Text>
                    <LineChart
                        data={data.weekly}
                        width={screenWidth - 48}
                        height={220}
                        yAxisLabel=""
                        yAxisSuffix=""
                        chartConfig={chartConfig}
                        bezier
                        style={styles.chart}
                    />
                </View>

                <View style={styles.chartContainer}>
                    <Text style={styles.chartTitle}>Top Emotions</Text>
                    <BarChart
                        data={data.topEmotions}
                        width={screenWidth - 48}
                        height={220}
                        yAxisLabel=""
                        chartConfig={{
                            ...chartConfig,
                            color: (opacity = 1) => `rgba(108, 93, 211, ${opacity})`, // primary
                        }}
                        style={styles.chart}
                        verticalLabelRotation={0}
                    />
                </View>
            </ScrollView>
        </SafeAreaView>
    );
};

const chartConfig = {
    backgroundColor: COLORS.surface,
    backgroundGradientFrom: COLORS.surface,
    backgroundGradientTo: COLORS.surface,
    decimalPlaces: 0,
    color: (opacity = 1) => `rgba(108, 93, 211, ${opacity})`, // primary color
    labelColor: (opacity = 1) => COLORS.textSecondary,
    style: {
        borderRadius: 16
    },
    propsForDots: {
        r: "5",
        strokeWidth: "2",
        stroke: COLORS.primary
    }
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: COLORS.background,
    },
    center: {
        justifyContent: 'center',
        alignItems: 'center',
    },
    scrollContent: {
        paddingBottom: 40,
    },
    header: {
        padding: 24,
    },
    headerTitle: {
        fontSize: 28,
        fontWeight: '800',
        color: COLORS.textPrimary,
        marginBottom: 4,
        letterSpacing: -1,
    },
    subtitle: {
        fontSize: 16,
        color: COLORS.textSecondary,
    },
    chartContainer: {
        marginHorizontal: 24,
        marginBottom: 24,
        padding: 16,
        backgroundColor: COLORS.surface,
        borderRadius: 24,
        borderWidth: 1,
        borderColor: COLORS.border,
        ...SHADOWS.small,
    },
    chartTitle: {
        fontSize: 18,
        fontWeight: '700',
        color: COLORS.textPrimary,
        marginBottom: 16,
    },
    chart: {
        borderRadius: 16,
        paddingRight: 0,
    }
});

export default TrendsScreen;

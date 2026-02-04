export const COLORS = {
    // Base Colors
    background: '#000000', // Pure Black for OLED impact
    surface: '#121212', // Slightly lighter for cards
    surfaceLight: '#1E1E1E', // For secondary cards/inputs

    // Accents
    primary: '#6C5DD3', // Modern Purple/Blurple
    secondary: '#00D1FF', // Cyan/Neon Blue
    accent: '#FF3D71', // Pink/Red for errors or highlights

    // Text
    textPrimary: '#FFFFFF',
    textSecondary: '#A0A0A0',
    textTertiary: '#666666',

    // Interface
    border: '#2A2A2A',
    success: '#00E096',
    warning: '#FFAA00',
    error: '#FF3D71',

    // Emotions (Neon/Vibrant)
    emotions: {
        happy: '#FFD93D', // Bright Yellow
        sad: '#5D9CEC', // Soft Blue
        angry: '#FF4D4D', // Red
        anxious: '#FF9F43', // Orange
        calm: '#4BCFFA', // Cyan
        reflective: '#A55EEA', // Purple
    }
};

export const SHADOWS = {
    small: {
        shadowColor: '#6C5DD3', // Colored shadow for glow effect
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.15,
        shadowRadius: 8,
        elevation: 3,
    },
    medium: {
        shadowColor: '#6C5DD3',
        shadowOffset: { width: 0, height: 4 },
        shadowOpacity: 0.3, // Stronger glow
        shadowRadius: 16,
        elevation: 8,
    },
    glow: {
        shadowColor: '#00D1FF',
        shadowOffset: { width: 0, height: 0 },
        shadowOpacity: 0.5,
        shadowRadius: 20,
        elevation: 10,
    }
};

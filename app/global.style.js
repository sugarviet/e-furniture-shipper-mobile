import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    title_lg: {
        fontSize: 32,
        lineHeight: 42,
        fontWeight: '700',
    },
    title_md: {
        fontSize: 24,
        lineHeight: 32,
        fontWeight: '700',
    },
    title_sm: {
        fontSize: 16,
        lineHeight: 24,
        fontWeight: '700',
    },
    text_color: (color) => ({
        color: color
    }),
    margin_col_sm: {
        marginVertical: 12,
    },
    shadow: {
        shadowColor: 'rgba(0, 0, 0, 0.3)',
        shadowOffset: { width: 2, height: 2 },
        shadowOpacity: 0.5,
        shadowRadius: 5,
    }
});

export default styles;
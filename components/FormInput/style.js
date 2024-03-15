import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    inputContainer: (error) => ({
        padding: 10,
        width: '100%',
        height: 48,
        backgroundColor: '#f0f3f8',
        borderWidth: 1,
        borderColor: error ? '#e63757' : 'transparent',
        borderRadius: 10,
        alignItems: 'center',
        flexDirection: 'row',
        marginVertical: 6,
    }),
    input: {
        flex: 1,
        fontSize: 14,
    },
    errorMessage: {
        fontSize: 12,
        color: '#e63757',
    },
})

export default styles;
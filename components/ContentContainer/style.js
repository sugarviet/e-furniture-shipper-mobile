import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    safe_area: (color = "#fff") => ({
        backgroundColor: color,
        flex: 1,
    }),
    container: (color = "#fff") => ({
        backgroundColor: color,
        paddingHorizontal: 20,
        paddingVertical: 16,
    })
})

export default styles;
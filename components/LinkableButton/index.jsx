import { TouchableOpacity, Text } from "react-native";
import styles from "./style";

function LinkableButton({ children, handlePress, style }) {
  return (
    <TouchableOpacity style={[styles.container, style]} onPress={handlePress}>
      <Text style={styles.content}>{children}</Text>
    </TouchableOpacity>
  );
}

export default LinkableButton;

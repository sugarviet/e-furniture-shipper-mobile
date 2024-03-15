import { Keyboard, TouchableWithoutFeedback, View } from "react-native";
import styles from "./style";
import { SafeAreaView } from "react-native";

function ContentContainer({ color, children }) {
  return (
    <SafeAreaView style={styles.safe_area(color)}>
      <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
        <View style={styles.container(color)}>{children}</View>
      </TouchableWithoutFeedback>
    </SafeAreaView>
  );
}

export default ContentContainer;

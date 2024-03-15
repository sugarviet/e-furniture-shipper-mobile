import { Text, View } from "react-native";
import ContentContainer from "../../components/ContentContainer";
import SignInForm from "../../components/SignInForm";

import styles from "../global.style";

const SignIn = () => {
  return (
    <ContentContainer>
      <Text
        style={[styles.title_lg, styles.margin_col_sm, { textAlign: "center" }]}
      >
        E_FURNITURE LOGO
      </Text>
      <View style={{ justifyContent: "center" }}>
        <Text style={[styles.title_md, styles.text_color("#4B4B4B")]}>
          Sign in to continue your delivery jobs
        </Text>
        <SignInForm />
      </View>
    </ContentContainer>
  );
};

export default SignIn;

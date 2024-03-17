import { Stack } from "expo-router";
import HeaderButton from "../../components/HeaderButton";
import useNavigation from "../../hooks/useNavigation";
import { IMAGES } from "../../constants/image";

const UserLayout = () => {
  const { go_back } = useNavigation();

  return (
    <Stack
      screenOptions={{
        headerShown: false,
        animation: "slide_from_bottom",
      }}
    />
  );
};

export default UserLayout;

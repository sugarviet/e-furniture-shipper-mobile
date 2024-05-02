import { Slot } from "expo-router";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import withAuthentication from "../hocs/withAuthentication";
import { GestureHandlerRootView } from "react-native-gesture-handler";
import { LogBox } from "react-native";
import FlashMessage from "react-native-flash-message";

const RootLayout = () => {
  LogBox.ignoreAllLogs();
  const queryClient = new QueryClient();

  return (
    <QueryClientProvider client={queryClient}>
      <GestureHandlerRootView style={{ flex: 1 }}>
        <FlashMessage position="top" />
        <Slot />
      </GestureHandlerRootView>
    </QueryClientProvider>
  );
};

export default withAuthentication(RootLayout);

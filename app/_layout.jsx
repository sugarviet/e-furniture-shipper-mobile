import { Slot } from "expo-router";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import withAuthentication from "../hocs/withAuthentication";
import { GestureHandlerRootView } from "react-native-gesture-handler";
import useSocket from "../hooks/useSocket";
import { useEffect } from "react";
import { LogBox } from "react-native";
import { useAuthStore } from "../stores/useAuthStore";

const RootLayout = () => {
  LogBox.ignoreAllLogs();
  const queryClient = new QueryClient();
  const { token } = useAuthStore();

  // const { registerId, subscribeStateChange, subscribeCheckRegister } =
  //   useSocket();

  // useEffect(() => {
  //   if (!token) return;
  //   registerId();
  //   subscribeStateChange();
  //   subscribeCheckRegister();
  // }, [token]);

  return (
    <QueryClientProvider client={queryClient}>
      <GestureHandlerRootView style={{ flex: 1 }}>
        <Slot />
      </GestureHandlerRootView>
    </QueryClientProvider>
  );
};

export default withAuthentication(RootLayout);

import { Slot } from "expo-router";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import withAuthentication from "../hocs/withAuthentication";
import { GestureHandlerRootView } from "react-native-gesture-handler";
import useSocket from "../hooks/useSocket";
import { useEffect } from "react";

const RootLayout = () => {
  const queryClient = new QueryClient();

  const { registerId, subscribeStateChange, subscribeCheckRegister } =
    useSocket();

  useEffect(() => {
    registerId();
    subscribeStateChange();
    subscribeCheckRegister();
  }, []);

  return (
    <QueryClientProvider client={queryClient}>
      <GestureHandlerRootView style={{ flex: 1 }}>
        <Slot />
      </GestureHandlerRootView>
    </QueryClientProvider>
  );
};

export default withAuthentication(RootLayout);

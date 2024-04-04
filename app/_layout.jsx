import { Slot } from "expo-router";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import withAuthentication from "../hocs/withAuthentication";
import { useEffect } from "react";
import useSocket from "../hooks/useSocket";

const RootLayout = () => {
  const queryClient = new QueryClient();
  const { subcribeHello } = useSocket();

  useEffect(() => {
    subcribeHello();
  }, []);

  return (
    <QueryClientProvider client={queryClient}>
      <Slot />
    </QueryClientProvider>
  );
};

export default withAuthentication(RootLayout);

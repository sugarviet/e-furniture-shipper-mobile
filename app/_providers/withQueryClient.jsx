import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

const withQueryClient = (WrappedComponent) => {
    return () => {
        const queryClient = new QueryClient();
        return <QueryClientProvider client={queryClient}>{WrappedComponent()}</QueryClientProvider>;
    }
}

export default withQueryClient;
import { useEffect } from "react";
import { router } from "expo-router";
import { useAuth } from "../../stores/useAuth";

const withAuthenticate = (WrappedComponent) => {
  return () => {
    const { token } = useAuth();
    
    useEffect(() => {
      if (!token) return router.replace("/sign-in");
      return router.replace("/");
    }, []);
    return <WrappedComponent />;
  };
};

export default withAuthenticate;

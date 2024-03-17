import { router } from "expo-router";

function useNavigation() {
    const go_to_sign_in = () => router.push('/sign-in')
    const go_to_home = () => router.push('/home')
    const go_to_delivery = () => router.push('/delivery')
    const go_back = () => router.back();
    return { go_to_sign_in, go_to_home, go_back, go_to_delivery };
}

export default useNavigation;
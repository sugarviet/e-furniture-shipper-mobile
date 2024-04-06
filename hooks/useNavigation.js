import { router } from "expo-router";

function useNavigation() {
    const go_to_sign_in = () => router.push('/sign-in')
    const go_to_home = () => router.push('/home')
    const go_to_delivery = (orders) => router.push({ pathname: '/delivery', params: { data: JSON.stringify(orders) } })
    const go_to_pick_up_package = () => router.push('/pick-up-package')
    const go_back = () => router.back();
    return { go_to_sign_in, go_to_home, go_back, go_to_delivery, go_to_pick_up_package };
}

export default useNavigation;
import { Slot } from "expo-router"
import { withProviders } from "./_providers"

const RootLayout = () => {
  return (
    <Slot />
  )
}

export default withProviders(RootLayout)
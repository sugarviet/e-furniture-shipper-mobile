import { Text, View } from "react-native"
import MapView from "../../../components/map-view"

const location = {
  id: "1",
  name: "Trường Đại học FPT TP.HCM",
  street: "Lô E2a-7, Đường D1, Đ. D1, Long Thạnh Mỹ",
  city: "Thành phố Thủ Đức",
  province: "Thành phố Hồ Chí Minh",
  longitude: 106.80988299437283,
  latitude: 10.841243500137622,
}

const Menu = () => {
  return (
    <View style={{ flex: 1 }}>
      <MapView center={location} />
    </View>
  )
}

export default Menu
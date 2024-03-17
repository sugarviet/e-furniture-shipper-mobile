import { useState } from "react";
import { View, Text } from "react-native";
import StepIndicator from "react-native-step-indicator";
import { COLORS } from "../../constants/color";
import Icon from "../Icon";
import { IMAGES } from "../../constants/image";

const labels = [
  "Address 1, District 1",
  "Address 2, District 2",
  "Address 3, District 3",
  "Address 4, District 4",
];
const customStyles = {
  stepIndicatorSize: 15,
  currentStepIndicatorSize: 35,
  separatorStrokeWidth: 2,
  currentStepStrokeWidth: 2,
  stepStrokeCurrentColor: COLORS.primary,
  stepStrokeWidth: 2,
  stepStrokeFinishedColor: COLORS.primary,
  stepStrokeUnFinishedColor: "#aaaaaa",
  separatorFinishedColor: COLORS.primary,
  separatorUnFinishedColor: "#aaaaaa",
  stepIndicatorFinishedColor: COLORS.primary,
  stepIndicatorUnFinishedColor: "#aaaaaa",
  stepIndicatorCurrentColor: "#ffffff",
  stepIndicatorLabelCurrentColor: COLORS.primary,
  stepIndicatorLabelFinishedColor: "#ffffff",
  stepIndicatorLabelUnFinishedColor: "#aaaaaa",
  labelColor: "#999999",
  currentStepLabelColor: COLORS.primary,
  labelSize: 10,
  currentStepLabelColor: COLORS.primary,
};

function ShipmentStep() {
  const [step, setStep] = useState(1);
  return (
    <View className="mt-4">
      <StepIndicator
        renderStepIndicator={({ position }) => (
          <Icon
            className="w-4 h-4"
            tintColor={step === position ? COLORS.primary : "transparent"}
            source={IMAGES.delivery_truck}
          />
        )}
        stepCount={labels.length}
        labels={labels}
        currentPosition={step}
        customStyles={customStyles}
      />
    </View>
  );
}

export default ShipmentStep;

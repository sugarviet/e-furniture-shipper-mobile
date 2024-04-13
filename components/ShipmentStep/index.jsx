import { useState } from "react";
import { View } from "react-native";
import StepIndicator from "react-native-step-indicator";
import { COLORS } from "../../constants/color";
import AnimationView from "../AnimationView";
import { ANIMATIONS } from "../../constants/animations";

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

function ShipmentStep({ orderShippings, currentShipment }) {
  const labels = orderShippings.map((order) => {
    const { address, district, ward, location } = order;
    const street = address || location;
    return `${street} ${district} ${ward}`;
  });
  return (
    <View className="mt-4">
      <StepIndicator
        renderStepIndicator={({ position }) => {
          return position === currentShipment ? (
            <AnimationView className="w-10 h-10" source={ANIMATIONS.delivery} />
          ) : null;
        }}
        stepCount={orderShippings.length}
        labels={labels}
        currentPosition={currentShipment}
        customStyles={customStyles}
      />
    </View>
  );
}

export default ShipmentStep;

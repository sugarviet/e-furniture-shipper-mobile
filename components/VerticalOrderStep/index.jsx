import { Text, View } from "react-native";
import StepIndicator from "react-native-step-indicator";
import { COLORS } from "../../constants/color";
import { formatDateWithType, formatTime } from "../../utils/formatDate";
import Icon from "../Icon";
import { IMAGES } from "../../constants/image";

function convertToSnakeCase(text) {
  return text.toLowerCase().split(" ").join("_");
}

const STEPS = {
  return_to_warehouse: {
    activeIcon: (
      <Icon
        className="w-6 h-6"
        tintColor={COLORS.primary}
        source={IMAGES.reverse_logistic}
      />
    ),
    unactiveIcon: (
      <Icon
        className="w-6 h-6"
        tintColor="#d3d3d3"
        source={IMAGES.reverse_logistic}
      />
    ),
  },
  pick_up_package: {
    activeIcon: (
      <Icon
        className="w-5 h-5"
        tintColor={COLORS.primary}
        source={IMAGES.pick_up_package_location}
      />
    ),
    unactiveIcon: (
      <Icon
        className="w-5 h-5"
        tintColor="#d3d3d3"
        source={IMAGES.pick_up_package_location}
      />
    ),
  },
};

const customStyles = {
  stepIndicatorSize: 25,
  currentStepIndicatorSize: 30,
  separatorStrokeWidth: 1,
  currentStepStrokeWidth: 1,
  stepStrokeWidth: 1,
  stepStrokeFinishedColor: "#d3d3d3",
  stepStrokeCurrentColor: COLORS.primary,
  stepStrokeUnFinishedColor: `#d3d3d3`,
  separatorUnFinishedColor: `#d3d3d3`,
  stepIndicatorFinishedColor: "white",
  stepIndicatorUnFinishedColor: `white`,
  separatorFinishedColor: COLORS.primary,
  stepIndicatorCurrentColor: "white",
  stepIndicatorLabelFinishedColor: "whitte",
  stepIndicatorLabelUnFinishedColor: "white",
  labelColor: "#999999",
  currentStepLabelColor: COLORS.primary,
  labelAlign: "left",
  labelSize: 12,
};

const classNameMap = {
  1: "h-16",
  2: "h-28",
  3: "h-48",
  4: "h-60",
  5: "h-full",
};

function VerticalOrderStep({ data, labels }) {
  const note = data.map((track) => track.note).reverse();
  const date = data.map((track) => track.time).reverse();

  const currentPosition = 0;

  const deliveryLength = data.length;

  const className = classNameMap[deliveryLength] || "h-32";

  const renderLabel = ({ position, label, currentPosition }) => {
    const color = position === currentPosition ? COLORS.primary : "#cfcfcf";
    const dateColor = position === currentPosition ? COLORS.primary : "#aaa";
    return (
      <View className="pl-2 flex flex-row justify-between w-full pr-10 relative">
        <View className="flex flex-col">
          <Text className="text-xs" style={{ color }}>
            {label}
          </Text>
          <Text style={{ color }}>
            {label === "Processing"
              ? "Efurniture staff is preparing the order"
              : note[position]}
          </Text>
        </View>
        <View className="absolute left-[-85px] top-1/2 -translate-y-3 flex items-center">
          <Text
            style={{ color: dateColor }}
            className="text-[11px] font-urbanistMedium text-grey2"
          >
            {formatDateWithType(date[position], "DD, MMM")}
          </Text>
          <Text
            style={{ color: dateColor }}
            className="text-[11px] font-urbanistMedium text-grey2"
          >
            {formatTime(date[position])}
          </Text>
        </View>
      </View>
    );
  };

  return (
    <View className={`pl-14 ${className}`}>
      <StepIndicator
        renderStepIndicator={({ position }) => {
          const state = convertToSnakeCase(labels[position]);
          return (
            <View>
              {state in STEPS ? (
                currentPosition === position ? (
                  STEPS[state].activeIcon
                ) : (
                  STEPS[state].unactiveIcon
                )
              ) : currentPosition === position ? (
                <Icon className="w-4 h-4" source={IMAGES.delivery_truck} />
              ) : (
                <Icon
                  className="w-4 h-4"
                  tintColor="#d3d3d3"
                  source={IMAGES.delivery_truck}
                />
              )}
            </View>
          );
        }}
        stepCount={labels.length}
        labels={labels}
        renderLabel={renderLabel}
        currentPosition={currentPosition}
        customStyles={customStyles}
        direction="vertical"
      />
    </View>
  );
}

export default VerticalOrderStep;

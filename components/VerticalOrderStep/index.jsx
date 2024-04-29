import { Text, View } from "react-native";
import StepIndicator from "react-native-step-indicator";
import { COLORS } from "../../constants/color";
import { formatDateWithType, formatTime } from "../../utils/formatDate";

const STEPS = {
  //   Pending: {
  //     activeIcon: <Icon2D name="pending" activated={COLORS.primary} size={15} />,
  //     unactiveIcon: <Icon2D name="pending" activated="#d3d3d3" size={15} />,
  //   },
  //   Processing: {
  //     activeIcon: <Icon2D name="package" activated={COLORS.primary} size={15} />,
  //     unactiveIcon: <Icon2D name="package" activated="#d3d3d3" size={15} />,
  //   },
  //   Shipping: {
  //     activeIcon: <Icon2D name="ship" activated={COLORS.primary} size={12} />,
  //     unactiveIcon: <Icon2D name="ship" activated="#d3d3d3" size={10} />,
  //   },
  //   Done: {
  //     activeIcon: <Icon2D name="done" activated={COLORS.primary} size={18} />,
  //     unactiveIcon: <Icon2D name="done" activated="#d3d3d3" size={15} />,
  //   },
  //   Failed: {
  //     activeIcon: <Icon2D name="fail" activated={COLORS.primary} size={15} />,
  //     unactiveIcon: <Icon2D name="fail" activated="#d3d3d3" size={13} />,
  //   },
  //   Refunded: {
  //     activeIcon: <Icon2D name="refund" activated={COLORS.primary} size={17} />,
  //     unactiveIcon: <Icon2D name="refund" activated="#d3d3d3" size={15} />,
  //   },
  //   Cancelled: {
  //     activeIcon: <Icon2D name="cancel" activated={COLORS.primary} size={18} />,
  //     unactiveIcon: <Icon2D name="cancel" activated="#d3d3d3" size={16} />,
  //   },
};

const customStyles = {
  stepIndicatorSize: 25,
  currentStepIndicatorSize: 30,
  separatorStrokeWidth: 1,
  currentStepStrokeWidth: 1,
  stepStrokeWidth: 1,
  stepStrokeFinishedColor: "#d3d3d3",
  stepStrokeCurrentColor: "black",
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
  1: "h-20",
  2: "h-36",
  3: "h-64",
  4: "h-80",
  5: "h-full",
};

function VerticalOrderStep({ data }) {
  const labels = data.map((track) => track.name).reverse();
  const note = data.map((track) => track.note).reverse();
  const date = data.map((track) => track.date).reverse();

  const currentPosition = 0;

  const deliveryLength = data.length;

  const className = classNameMap[deliveryLength] || "h-32";

  const renderLabel = ({ position, label, currentPosition }) => {
    const color = position === currentPosition ? "#000" : "#cfcfcf";
    const dateColor = position === currentPosition ? "#000" : "#aaa";
    return (
      <View className="pl-2 flex flex-row justify-between w-full pr-10 relative">
        <View className="flex flex-col max-w-[250px]">
          <Text className="font-urbanistSemiBold" style={{ color }}>
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
          const state = labels[position];
          return (
            <View>
              {state in STEPS
                ? currentPosition === position
                  ? STEPS[state].activeIcon
                  : STEPS[state].unactiveIcon
                : null}
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

import LottieView from "lottie-react-native";

function AnimationView({ width, height, source }) {
  return (
    <LottieView
      style={{
        width: width,
        height: height,
      }}
      autoPlay
      loop
      source={source}
    />
  );
}

export default AnimationView;

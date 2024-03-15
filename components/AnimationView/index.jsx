import LottieView from "lottie-react-native";

function AnimationView({ className, source }) {
  return <LottieView className={className} autoPlay loop source={source} />;
}

export default AnimationView;

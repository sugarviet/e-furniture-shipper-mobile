import React, { forwardRef, useMemo } from "react";
import GorhomeBottomSheet from "@gorhom/bottom-sheet";

const BottomSheet = ({ children }) => {
  const snapPoints = useMemo(() => ["30%", "60%"], []);

  return (
    <GorhomeBottomSheet
      index={1}
      snapPoints={snapPoints}
      handleIndicatorStyle={{ backgroundColor: "#ccc" }}
      keyboardBehavior="fillParent"
      backgroundStyle={{ backgroundColor: "#fbfbfb" }}
    >
      {children}
    </GorhomeBottomSheet>
  );
};

export default BottomSheet;

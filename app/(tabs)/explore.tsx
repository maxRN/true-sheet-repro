import {
  ReanimatedTrueSheet,
  useReanimatedTrueSheet,
} from "@lodev09/react-native-true-sheet/reanimated";
import Animated, {
  useAnimatedStyle,
  interpolate,
  Extrapolation,
  useDerivedValue,
} from "react-native-reanimated";
import { Button, Text, View } from "react-native";
import { TrueSheet } from "@lodev09/react-native-true-sheet";
import { useRef } from "react";
import { useSafeAreaInsets } from "react-native-safe-area-context";

export default function TabTwoScreen() {
  const insets = useSafeAreaInsets();
  const sheet = useRef<TrueSheet>(null);
  const { animatedIndex, animatedDetent } = useReanimatedTrueSheet();

  useDerivedValue(() => {
    console.log({ index: animatedIndex.get(), detent: animatedDetent.get() });
  });

  const showIfOpen = useAnimatedStyle(() => ({
    opacity: interpolate(
      animatedIndex.value,
      [0, 1],
      [0, 1],
      Extrapolation.CLAMP,
    ),
  }));

  const showIfClosed = useAnimatedStyle(() => ({
    opacity: interpolate(
      animatedIndex.value,
      [0, 1],
      [1, 0],
      Extrapolation.CLAMP,
    ),
  }));

  return (
    <View style={{ flex: 1, paddingTop: insets.top }}>
      <Button onPress={() => sheet.current?.present()} title="present sheet" />
      <ReanimatedTrueSheet
        ref={sheet}
        detents={[0.25, 0.9]}
        dismissible={false}
        header={<View style={{ padding: 30 }} />}
      >
        <Button onPress={() => sheet.current?.dismiss()} title="dismiss" />
        <Animated.View style={[showIfOpen, { backgroundColor: "red" }]}>
          <Text>The sheet is open</Text>
        </Animated.View>
        <Animated.View style={[showIfClosed, { backgroundColor: "blue" }]}>
          <Text>The sheet is CLOSED</Text>
        </Animated.View>
      </ReanimatedTrueSheet>
    </View>
  );
}

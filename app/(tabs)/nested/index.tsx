import { TrueSheet } from "@lodev09/react-native-true-sheet";
import { usePreventRemove } from "@react-navigation/native";
import { useRouter } from "expo-router";
import { useRef } from "react";
import { Button, View } from "react-native";

export default function Page() {
  const sheet = useRef<TrueSheet>(null);
  const router = useRouter();
  usePreventRemove(false, () => {
    console.log("usePreventRemove triggered");
    // router.back();
  });

  return (
    <View>
      <Button onPress={() => sheet.current?.present()} title="show" />
      <Button onPress={() => router.push("/nested")} title="nest screen" />
      <TrueSheet
        ref={sheet}
        detents={[0.3, 1]}
        cornerRadius={24}
        header={<View style={{ padding: 30 }} />}
        scrollable
        onBackPress={() => console.log("onBackPress triggered")}
      >
        <Button onPress={() => sheet.current?.dismiss()} title="Dismiss" />
      </TrueSheet>
    </View>
  );
}

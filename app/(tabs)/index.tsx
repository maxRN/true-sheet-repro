import { Button, View, Text } from "react-native";
import { TrueSheet } from "@lodev09/react-native-true-sheet";
import { useRef, useState } from "react";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { ShortScrollView } from "@/components/short-scroll-view";

export default function HomeScreen() {
  const insets = useSafeAreaInsets();
  const sheet = useRef<TrueSheet>(null);
  const [index, setIndex] = useState(-1);

  // Present the sheet ✅
  const present = async () => {
    await sheet.current?.present();
    console.log("horray! sheet has been presented 💩");
  };

  // Dismiss the sheet ✅
  const dismiss = async () => {
    await sheet.current?.dismiss();
    console.log("Bye bye 👋");
  };

  return (
    <View style={{ paddingBottom: insets.bottom, paddingTop: insets.top }}>
      <ShortScrollView refreshMessage="refreshing OUTSIDE of true sheet" />
      <View style={{ paddingTop: 40 }}>
        <Button onPress={present} title="Present" />
      </View>
      <TrueSheet
        ref={sheet}
        detents={[0.3, 1]}
        cornerRadius={24}
        dismissible={false}
        onDidPresent={(event) => setIndex(event.nativeEvent.index)}
        onDetentChange={(event) => setIndex(event.nativeEvent.index)}
        onDidDismiss={() => setIndex(-1)}
        dimmed={false}
        header={<View style={{ padding: 30 }} />}
        scrollable
        onBackPress={() => {
          console.log("onBackPress triggered");
          if (index === 1) {
            sheet.current?.resize(0);
          } else if (index === 0) {
            sheet.current?.dismiss();
          }
        }}
      >
        <Button onPress={dismiss} title="Dismiss" />
        <Text>Some text here</Text>
      </TrueSheet>
    </View>
  );
}

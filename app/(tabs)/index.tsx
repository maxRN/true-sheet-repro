import { Button, View, ScrollView, Text, RefreshControl } from "react-native";
import { TrueSheet } from "@lodev09/react-native-true-sheet";
import { useRef, useState } from "react";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { ShortScrollView } from "@/components/short-scroll-view";

export default function HomeScreen() {
  const insets = useSafeAreaInsets();
  const sheet = useRef<TrueSheet>(null);
  const [showDetails, setShowDetails] = useState(false);

  const text2 = new Array(60).fill("Detail text");

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
        dimmed={false}
        header={<View style={{ padding: 30 }} />}
        scrollable
      >
        <Button onPress={dismiss} title="Dismiss" />
        <Button
          onPress={() => setShowDetails(!showDetails)}
          title={showDetails ? "Go back" : "Go to details view"}
        />
        {!showDetails ? (
          <ShortScrollView refreshMessage="refreshing INSIDE of true sheet" />
        ) : (
          <ScrollView
            nestedScrollEnabled={false}
            refreshControl={
              <RefreshControl
                refreshing={false}
                onRefresh={() => console.log("refreshing 2...")}
              />
            }
          >
            {text2.map((text) => (
              <Text>{text}</Text>
            ))}
          </ScrollView>
        )}
      </TrueSheet>
    </View>
  );
}

import { RefreshControl, ScrollView, Text } from "react-native";

export function ShortScrollView({
  refreshMessage,
}: {
  refreshMessage: string;
}) {
  const text1 = new Array(2).fill("Some short text");
  return (
    <ScrollView
      contentContainerStyle={{ backgroundColor: "red" }}
      nestedScrollEnabled={false}
      refreshControl={
        <RefreshControl
          refreshing={false}
          onRefresh={() => console.log(refreshMessage)}
        />
      }
    >
      {text1.map((text, i) => (
        <Text key={i}>{text}</Text>
      ))}
    </ScrollView>
  );
}

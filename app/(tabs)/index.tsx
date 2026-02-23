import { Button, View, StyleSheet, ScrollView, Text, RefreshControl } from 'react-native';
import { TrueSheet } from "@lodev09/react-native-true-sheet"
import { useRef, useState } from 'react';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

export default function HomeScreen() {
    const insets = useSafeAreaInsets();
    const sheet = useRef<TrueSheet>(null)
    const [showDetails, setShowDetails] = useState(false);

    // Present the sheet ✅
    const present = async () => {
        await sheet.current?.present()
        console.log('horray! sheet has been presented 💩')
    }

    // Dismiss the sheet ✅
    const dismiss = async () => {
        await sheet.current?.dismiss()
        console.log('Bye bye 👋')
    }

    return (
        <View style={{ paddingBottom: insets.bottom, paddingTop: insets.top }}>
            <Button onPress={present} title="Present" />
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
                <Button onPress={() => setShowDetails(!showDetails)} title={showDetails ? "Go back" : "Go to details view"} />
                {!showDetails ?
                    (
                        <ScrollView nestedScrollEnabled={false} refreshControl={<RefreshControl refreshing={false} onRefresh={() => console.log("refreshing...")} />}>
                            <Text>Some long text</Text>
                            <Text>Some long text</Text>
                            <Text>Some long text</Text>
                            <Text>Some long text</Text>
                            <Text>Some long text</Text>
                            <Text>Some long text</Text>
                            <Text>Some long text</Text>
                            <Text>Some long text</Text>
                            <Text>Some long text</Text>
                            <Text>Some long text</Text>
                            <Text>Some long text</Text>
                            <Text>Some long text</Text>
                            <Text>Some long text</Text>
                            <Text>Some long text</Text>
                            <Text>Some long text</Text>
                            <Text>Some long text</Text>
                            <Text>Some long text</Text>
                            <Text>Some long text</Text>
                            <Text>Some long text</Text>
                            <Text>Some long text</Text>
                            <Text>Some long text</Text>
                            <Text>Some long text</Text>
                            <Text>Some long text</Text>
                            <Text>Some long text</Text>
                            <Text>Some long text</Text>
                            <Text>Some long text</Text>
                            <Text>Some long text</Text>
                            <Text>Some long text</Text>
                            <Text>Some long text</Text>
                            <Text>Some long text</Text>
                            <Text>Some long text</Text>
                            <Text>Some long text</Text>
                            <Text>Some long text</Text>
                            <Text>Some long text</Text>
                            <Text>Some long text</Text>
                            <Text>Some long text</Text>
                            <Text>Some long text</Text>
                            <Text>Some long text</Text>
                            <Text>Some long text</Text>
                            <Text>Some long text</Text>
                            <Text>Some long text</Text>
                            <Text>Some long text</Text>
                            <Text>Some long text</Text>
                            <Text>Some long text</Text>
                            <Text>Some long text</Text>
                            <Text>Some long text</Text>
                            <Text>Some long text</Text>
                            <Text>Some long text</Text>
                            <Text>Some long text</Text>
                            <Text>Some long text</Text>
                            <Text>Some long text</Text>
                            <Text>Some long text</Text>
                            <Text>Some long text</Text>
                            <Text>Some long text</Text>
                            <Text>Some long text</Text>
                            <Text>Some long text</Text>
                            <Text>Some long text</Text>
                            <Text>Some long text</Text>
                            <Text>Some long text</Text>
                            <Text>Some long text</Text>
                            <Text>Some long text</Text>
                        </ScrollView>) : <Text>test</Text>}
            </TrueSheet>
        </View>
    )
}

const styles = StyleSheet.create({
    titleContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        gap: 8,
    },
    stepContainer: {
        gap: 8,
        marginBottom: 8,
    },
    reactLogo: {
        height: 178,
        width: 290,
        bottom: 0,
        left: 0,
        position: 'absolute',
    },
});

import { COLORS } from "@/utils/colors";
import { Stack } from "expo-router";
import { useWindowDimensions } from "react-native";
const Layout = () => {
  const { height } = useWindowDimensions();

  return (
    <Stack
      screenOptions={{
        headerStyle: {
          backgroundColor: COLORS.background,
        },
        headerTintColor: "#fff",
      }}
    >
      <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
      <Stack.Screen
        name="new-msg"
        options={{
          presentation: "formSheet",
          title: "Add Message",
          headerShown: true,
          sheetAllowedDetents: height > 700 ? [0.3, 0.8] : "fitToContents",
          sheetGrabberVisible: true,
          sheetExpandsWhenScrolledToEdge: false,
          sheetCornerRadius: 14,
        }}
      />
    </Stack>
  );
};
export default Layout;

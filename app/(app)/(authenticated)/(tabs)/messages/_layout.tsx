import { Stack } from "expo-router";
import { COLORS } from "@/utils/colors";
import { useColorScheme } from "react-native";
const Layout = () => {
  const colorScheme = useColorScheme();

  return (
    <Stack
      screenOptions={{
        headerStyle: {
          backgroundColor: COLORS.background,
        },
        headerTintColor: "#fff",
        contentStyle: {
          backgroundColor:
            colorScheme === "dark" ? COLORS.backgroundDark : COLORS.background,
        },
      }}
    >
      <Stack.Screen name="index" options={{ title: "Messages" }} />
      <Stack.Screen name="[id]" options={{ title: "" }} />
    </Stack>
  );
};

export default Layout;

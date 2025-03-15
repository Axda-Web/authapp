import { Stack } from "expo-router";
import { StatusBar } from "expo-status-bar";
import { COLORS } from "@/utils/colors";

const Layout = () => {
  return (
    <>
      <StatusBar style="light" />
      <Stack
        screenOptions={{
          headerStyle: {
            backgroundColor: COLORS.background,
          },
          headerTintColor: "#fff",
        }}
      >
        <Stack.Screen name="index" options={{ headerShown: false }} />
        <Stack.Screen
          name="register"
          options={{
            title: "Create Account",
            headerBackTitle: "Login",
          }}
        />
        <Stack.Screen
          name="privacy"
          options={{ title: "Privacy Policy", presentation: "modal" }}
        />
      </Stack>
    </>
  );
};

export default Layout;

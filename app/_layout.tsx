import { Stack } from "expo-router";
import { COLORS } from "@/utils/colors";
import { AuthProvider } from "@/context/AuthContext";

const Layout = () => {
  return (
    <AuthProvider>
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
    </AuthProvider>
  );
};

export default Layout;

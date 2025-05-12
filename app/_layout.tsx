import { Stack } from "expo-router";

export default function RootLayout() {
  console.log("STARTING PROJECT");

  return (
    <Stack>
      <Stack.Screen name="index" options={{ headerShown: false }} />
      <Stack.Screen name="home" options={{ headerShown: true, title: "Home" }} />
    </Stack>
  );
}

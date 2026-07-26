import MaterialIcons from "@expo/vector-icons/MaterialIcons";

import { Tabs } from "expo-router";

const TabsLayout = () => {
  return (
    <Tabs
      screenOptions={{
        headerShown: false,
      }}
    >
      <Tabs.Screen
        name="inicio"
        options={{
          title: "Inicio",
          tabBarIcon: () => (
            <MaterialIcons name="home-filled" size={24} color="black" />
          ),
        }}
      />

      <Tabs.Screen
        name="ambiente"
        options={{
          title: "Ambiente",
          tabBarIcon: () => (
            <MaterialIcons name="room-preferences" size={24} color="black" />
          ),
        }}
      />

      <Tabs.Screen
        name="novedades"
        options={{
          title: "Novedades",
          tabBarIcon: () => (
            <MaterialIcons name="important-devices" size={24} color="black" />
          ),
        }}
      />

      <Tabs.Screen
        name="profile"
        options={{
          title: "Profile",
          tabBarIcon: () => (
            <MaterialIcons name="person" size={24} color="black" />
          ),
        }}
      />
    </Tabs>
  );
};

export default TabsLayout;

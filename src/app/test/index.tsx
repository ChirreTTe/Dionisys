import { View, Pressable, Text } from "react-native";

export default function Test() {
  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        padding: 20,
      }}
    >
      <Pressable
        style={{
          backgroundColor: "red",
          padding: 20,
          borderRadius: 12,
        }}
      >
        <Text style={{ color: "white" }}>
          Botón Rojo
        </Text>
      </Pressable>
    </View>
  );
}
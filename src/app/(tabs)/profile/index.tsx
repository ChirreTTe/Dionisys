import { FontAwesome5, Ionicons, MaterialIcons } from "@expo/vector-icons";
import { LinearGradient } from "expo-linear-gradient";

import CustomAvatar from "@/components/Avatar/avatar";
import CustomSeparador from "@/components/Separador/CustomSeparador";
import CustomTarget from "@/components/Target/CustomTarget";
import { Image, Pressable, Text, View } from "react-native";

const ProfileScreen = () => {
  return (
    <View className="flex-1 mt-7 mx-2.5">
      <View className="flex-1 mt-8">
        <View className="mx-2.5">
          <Text className="text-lg font-Lora-Bold.ttf">
            <Text className="font-bold">Perfil</Text> 
            <Text className="text-gray-600">{"\n"}Un placer tenerte aqui </Text>
          </Text>
        </View>

        <CustomSeparador/>

        {/* Avatar */}

        <LinearGradient
          colors={["#153E90", "#2F6BFF", "#BFD6FF"]}
          start={{ x: 0, y: 0 }}
          end={{ x: 1, y: 1 }}
          className="relative w-full rounded-2xl"
          style={{
            height: 250,
            marginBottom: 60,
            borderRadius: 16,
            borderWidth: 1,
            borderColor: "rgba(255,255,255,0.9)",
          }}
        >
          {/* Círculo grande */}
          <View
            style={{
              position: "absolute",
              top: -45,
              left: -40,
              width: 140,
              height: 140,
              borderRadius: 70,
              backgroundColor: "rgba(255,255,255,0.08)",
            }}
          />

          {/* Círculo mediano */}
          <View
            style={{
              position: "absolute",
              top: 25,
              right: 85,
              width: 70,
              height: 70,
              borderRadius: 35,
              backgroundColor: "rgba(255,255,255,0.10)",
            }}
          />

          {/* Círculo pequeño */}
          <View
            style={{
              position: "absolute",
              bottom: 35,
              left: 65,
              width: 35,
              height: 35,
              borderRadius: 18,
              backgroundColor: "rgba(255,255,255,0.12)",
            }}
          />

          {/* Punto decorativo */}
          <View
            style={{
              position: "absolute",
              top: 150,
              left: 30,
              width: 10,
              height: 10,
              borderRadius: 5,
              backgroundColor: "rgba(255,255,255,0.30)",
            }}
          />

          {/* Punto decorativo */}
          <View
            style={{
              position: "absolute",
              top: 45,
              left: 180,
              width: 8,
              height: 8,
              borderRadius: 4,
              backgroundColor: "rgba(255,255,255,0.25)",
            }}
          />

          {/* Imagen decorativa */}
          <Image
            source={require("@/assets/images/Avatar/Perita_Portada.png")}
            resizeMode="contain"
            style={{
              position: "absolute",
              right: -33,
              bottom: 20,
              width: 180,
              height: 180,
            }}
          />

          {/* Avatar */}
          <View className="absolute -bottom-12 left-0 right-0 items-center">
            <CustomAvatar
              image={require("@/assets/images/Avatar/Perita_Manitas.png")}
              size={100}
              backgroundColor="#FFFFFF"
            />
          </View>
        </LinearGradient>

        {/* Datos personales */}

        <CustomTarget className="rounded-2xl bg-grey border border-blue-300 ">
          <Pressable onPress={() => {}} className="active:opacity-70">
            <View className="p-6 space-y-3 items-center rounded-2xl bg-white">
              {/** Tarjeta informacion personal */}
              {/**Titulo */}
              <View>
                <CustomSeparador />
                <Text className="mb-3 text-2xl font-Lora-Bold.ttf">
                  Información personal
                </Text>
                <CustomSeparador />
              </View>

              {/** Informacion */}
              <View className="mx-2.5">
                <View className="flex-row items-center">
                  {/** Icono */}
                  <View className="w-10 items-center">
                    <MaterialIcons name="badge" size={22} color="border" />
                  </View>

                  <Text className="ml-5 w-44 font-Lora-Bold.ttf">Rol:</Text>
                  <Text className="font-Lora-Medium.ttf">Instructor</Text>
                </View>

                <View className="flex-row items-center">
                  {/** Icono */}
                  <View className="w-10 items-center">
                    <MaterialIcons
                      name="credit-card"
                      size={22}
                      color="border"
                    />
                  </View>

                  <Text className="ml-5 w-44 font-Lora-Bold.ttf">
                    Número de identificación:
                  </Text>
                  <Text className="font-Lora-Medium.ttf">123456789</Text>
                </View>

                <View className="flex-row items-center">
                  {/** Icono */}
                  <View className="w-10 items-center">
                    <FontAwesome5 name="user" size={22} color="border" />
                  </View>

                  <Text className="ml-5 w-44 font-Lora-Bold.ttf">Nombre:</Text>
                  <Text className="font-Lora-Medium.ttf">Kelly Johanna</Text>
                </View>

                <View className="flex-row items-center">
                  {/** Icono */}
                  <View className="w-10 items-center">
                    <FontAwesome5 name="users" size={17} color="border" />
                  </View>

                  <Text className="ml-5 w-44 font-Lora-Bold.ttf">
                    Apellidos:
                  </Text>
                  <Text className="font-Lora-Medium.ttf">Ruiz Yandi</Text>
                </View>

                <View className="flex-row items-center">
                  {/** Icono */}
                  <View className="w-10 items-center">
                    <MaterialIcons
                      name="meeting-room"
                      size={22}
                      color="border"
                    />
                  </View>

                  <Text className="ml-5 w-44 font-Lora-Bold.ttf">
                    Ambiente asignado:
                  </Text>
                  <Text className="font-Lora-Medium.ttf">Ambiente 3</Text>
                </View>

                <View className="flex-row items-center">
                  {/** Icono */}
                  <View className="w-10 items-center">
                    <Ionicons name="time" size={22} color="border" />
                  </View>

                  <Text className="ml-5 w-44 font-Lora-Bold.ttf">Horario:</Text>
                  <Text className="font-Lora-Medium.ttf">
                    8:00 AM - 12:00 PM
                  </Text>
                </View>
              </View>
            </View>
          </Pressable>
        </CustomTarget>

        <View className="mt-5">
  <CustomSeparador />
</View>
      </View>
    </View>
  );
};

export default ProfileScreen;

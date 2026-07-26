
import { router } from "expo-router";
import CustomLogotipo from "@/components/logotipo/CustomLogotipo";
import CustomButton from '@/components/Button/CustomButton'
import CustomInput from '@/components/Input/CustomInput'
import CustomLogo from '@/components/Logo/CustomLogo'
import { View, Text } from 'react-native'
import React from 'react'

const LoginScreen = () => {
  return (
    <View className=" flex-1 mt-6 px-6">
      <View className="mt-40 items-center">
        <CustomLogo
        className="mt-40"/>
      </View>
      <View className="items-center">
        <CustomLogotipo
        size={180}
        className="mt-1"/>
      </View>

      <View>
        <Text className="mt-10 text-3x1 font-Lora-Medium.ttf font-bold ">Número de identificación</Text>
        <CustomInput
        placeholder="CC"
        className="mt-2 w-full font-Lora-Regular.ttf"
        keyboardType="numeric"
        maxLength={10}
        autoCapitalize="none"
      />
      </View>

      <View>
        <Text className="text-3x1 font-Lora-Medium.ttf font-bold ">Contraseña</Text>
        <CustomInput
        placeholder="*********"
        className="mt-2 w-full font-Lora-Regular.ttf"
        secureTextEntry
        maxLength={10}
        autoCapitalize="none"
        textContentType='password'
      />
      </View>

      <View className="items-center flex-1 w-full font-Lora-Medium.ttf">
      <CustomButton
        variant="contained"
        className=""
        onPress={() => router.replace("/(tabs)/inicio")}
        >
          Iniciar sesion
        </CustomButton>
        </View>

    </View>
  )
}

export default LoginScreen
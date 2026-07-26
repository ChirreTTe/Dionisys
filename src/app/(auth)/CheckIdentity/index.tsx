
import CustomModal from "@/components/Modal/CustomModal";
import { router } from "expo-router";
import CustomButton from "@/components/Button/CustomButton";
import CustomInput from "@/components/Input/CustomInput";
import CustomLogo from "@/components/Logo/CustomLogo";
import React, { useState } from "react";
import { View, Text, Image } from "react-native";
import CustomLogotipo from "@/components/logotipo/CustomLogotipo";





const CheckIdentityScreen = () => {


  const [visible, setVisible] = useState(false);
  const [email, setEmail] = useState("");
  const [emailError, setEmailError] = useState("");
  
  const validarCorreo = () => {

    if (!email.trim()) {
      setEmailError("El correo electrónico es obligatorio.");
      return false;
    }

    setEmailError("");
    return true;
  };



  return (
    <View className="flex-1 mt-6 px-6">
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
      
      <View className="items-center flex-1 w-full font-Lora-Medium.ttf">
      <CustomButton
          variant="contained"
          className=""
          onPress={() => router.push('/login')}
        >
          Continuar
        </CustomButton>
        </View>

        <View className="items-center">
          <CustomButton
          className="my-40"
          variant="text-only"
          onPress={() => setVisible(true)}
          >
            ¿Olvidaste tu contraseña?
          </CustomButton>

        </View>



        <CustomModal
        visible={visible}
        onClose={() => setVisible(false)}
      >

        <View className="font-Lora-Bold.ttf">
        <Text className="text-center text-2xl">
          Recuperar contraseña
        </Text>

        <Text className="mt-2 ">
          Ingresa la dirección de correo electrónico asociada a tu cuenta. Te enviaremos un enlace que te permitirá restablecer tu contraseña o completar el acceso si es la primera vez que ingresas al sistema.
        </Text>
        </View>


        <View>
          <Text className="mt-6">Correo electronico</Text>
          <CustomInput
          placeholder="ejemplo@dominio.com"
          className="mt-1"
          keyboardType="email-address"

          /**Validcacion */
          value={email}
          onChangeText={setEmail}

          error={emailError}
        />
        </View>
        
        <View className="flex-row gap-4 mt-4">
        <CustomButton
        variant="contained"
        className="flex-1"
        onPress={() => {

        if (!validarCorreo()) return;

        console.log(email);

    // Aquí más adelante enviaremos el correo al backend.
  }}
        >
          Enviar
        </CustomButton>

        <CustomButton
        color="cancel"
        variant="contained"
        className="flex-1 border bg-border"
        onPress={() => {
        setVisible(false);
        setEmail("");
        setEmailError("");
  }}
        >
          Cancelar
        </CustomButton>
        </View>

      </CustomModal>
    </View>
    
  );
};

export default CheckIdentityScreen;
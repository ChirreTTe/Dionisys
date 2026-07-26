import React from "react";
import {
  View,
  Text,
  TextInput,
  TextInputProps,
} from "react-native";

interface Props extends TextInputProps {
  children: string;
  label?: string;
  error?: string;

  className?: string;
  labelClassName?: string;
  errorClassName?: string;
}

const CustomInput = ({
  labelClassName,
  errorClassName,

  placeholder,
  label,
  error,
  className,
  style,
  ...props
}: Props) => {
  return (
    <View className="mb-5">

      {label && (
        <Text
          className={`
            ${labelClassName ?? ""}
            self-start
            px-3
            py-1
            font-Lora-Medium.ttf
          `}
          style={[
            {
              borderWidth: 1,
              borderColor: "inputBorderColor",
              borderRadius: 15,
              color: "inputBorderColor",

            },
          ]}
        >
          {label}
        </Text>
      )}

      <TextInput
        placeholder={placeholder}
        className={className}
        style={[
          {
            backgroundColor: 'white',
            borderWidth: 1,
            borderColor: "inputBorderColor",
            borderRadius: 15,
            paddingHorizontal: 16,
            paddingVertical: 14,
          },
          style,
        ]}
        placeholderTextColor="inputBorderColor"
        {...props}
      />

      {error && (
        <Text
          style={[
            {
              color: "red",
              marginTop: 5,
            },
          ]}
        >
          {error}
        </Text>
      )}

    </View>
  );
};

export default CustomInput;
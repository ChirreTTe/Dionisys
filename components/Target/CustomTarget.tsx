import { View, Text, ViewProps } from "react-native";
import React from "react";

interface Props extends ViewProps {
  border?: "inputBorderColor";
  title?: string;
  subtitle?: string;
  children?: React.ReactNode;
  variant?: "elevated" | "outlined" | "flat";
  color?: 
    | "primary"
    | "secondary"
    | "backgroundColorTarget"
    | "targetBorderColor";

  className?: string;
  contentClassName?: string;
  titleClassName?: string;
  subtitleClassName?: string;

  onPress?: () => void;
}

const CustomTarget = ({
  title,
  subtitle,
  children,

  className,
  contentClassName,
  titleClassName,
  subtitleClassName,

  style,
  ...props

}: Props) => {

  return (
    <View
      className={`rounded-2xl bg-white ${className ?? ""}`}
      style={[
        {
          shadowColor: "#000",

          shadowOffset: {
            width: 0,
            height: 5,
          },

          shadowOpacity: 0.3,
          shadowRadius: 10,

          elevation: 10,
        },

        style,
      ]}

      {...props}
    >

      {(title || subtitle) && (
        <View className="mb-2">

          {title && (
            <Text
              className={`
                text-1g
                font-Lora-Bold.ttf
                ${titleClassName ?? ""}
              `}
            >
              {title}
            </Text>
          )}


          {subtitle && (
            <Text
              className={`
                font-Lora-Medium.ttf
                text-gray-500
                mt-0.5
                ${subtitleClassName ?? ""}
              `}
            >
              {subtitle}
            </Text>
          )}

        </View>
      )}



      {children && (
        <View
          className={`${contentClassName ?? ""}`}
        >
          {children}
        </View>
      )}

    </View>
  );
};


export default CustomTarget;
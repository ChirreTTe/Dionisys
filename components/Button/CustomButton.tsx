import React from "react";
import {
  Pressable,
  PressableProps,
  Text,
} from "react-native";

interface Props extends PressableProps {
  children: string;
  color?: "primary" | "secondary" | "danger" | "warning" | "secess" | "success"
  | "cancel";
  variant?: "contained" | "text-only";
  /**Estilos de Presseable */
  className?: string;
  /**Estilos del text */
  labelClassName?: string;


}

const CustomButton = ({
  labelClassName,
  children,
  color = "primary",
  className,
  onPress,
  variant = "contained",
  style,
  ...props
}: Props) => {

  const btnColor = {
    primary: "bg-primary",
    secondary: "bg-secundary",
    danger: "bg-danger",
    warning: "bg-warning",
    success: "bg-success",
    cancel: "bg-cancel"
  }[color];

  const textColor = {
  primary: "text-white",
  secondary: "text-white",
  danger: "text-white",
  warning: "text-white",
  success: "text-white",
  cancel: "text-cancelText"
}[color];




if (variant === "text-only") {
  return (
    <Pressable
      onPress={onPress}
      className={className}
      style={style}
      {...props}
    >
      <Text
        className={`
          text-variantTextColor
          font-Lora-Medium.ttf
          text-base
          ${labelClassName ?? ""}
        `}
      >
        {children}
      </Text>
    </Pressable>
  );
}


  return (
    <Pressable
      className={`p-3 rounded-md ${btnColor} active:opacity-90 ${className ?? ""}`}
      onPress={onPress}
      style={style}
      {...props}
    >
      <Text className={`
        ${textColor}
        ${labelClassName ?? ""}
        text-center
        font-Lora-Medium.ttf
        text-base
    `}>
        {children}
      </Text>
    </Pressable>
  );
};

export default CustomButton;
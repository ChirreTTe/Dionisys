import React from "react";
import { Image, ImageProps } from "react-native";

interface LogotipoProps extends ImageProps {
  size?: number;
}

function CustomLogotipo({
  size = 120,
  className,
  style,
  ...props
}: LogotipoProps) {
  return (
    
    <Image
      source={require("@/assets/images/logotipo/logotipo_dionisys.png")}
      className={className}
      style={[
        {
          width: size,
          height: size,
        },
        style,
      ]}
      resizeMode="contain"
      {...props}
    />
  );
}

export default CustomLogotipo;
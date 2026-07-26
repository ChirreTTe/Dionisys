import React from "react";
import { Image, ImageProps } from "react-native";

interface LogoProps extends ImageProps {
  size?: number;
}

function CustomLogo({
  size = 120,
  className,
  style,
  ...props
}: LogoProps) {
  return (
    
    <Image
      source={require("@/assets/images/logo/logo_dionisys.png")}
      className={className}
      style={[
        {
          width: size,
          height: size,
          backgroundColor: 'white',
          borderRadius: 30,
        },
        style,
      ]}
      resizeMode="contain"
      {...props}
    />
  );
}

export default CustomLogo;
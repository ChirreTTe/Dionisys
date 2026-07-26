import {
  Image,
  ImageSourcePropType,
  ImageStyle,
  Pressable,
  StyleProp,
} from "react-native";

interface CustomAvatarProps {
  image?: ImageSourcePropType;
  size?: number;
  editable?: boolean;
  onPress?: () => void;
  className?: string;
  style?: StyleProp<ImageStyle>;

  /** Color de fondo del avatar */
  backgroundColor?: string;
}

const CustomAvatar = ({
  image,
  size = 100,
  editable = false, // En caso de permitir cambiar la foto de perfil
  onPress,
  className = "",
  style,
  backgroundColor = "transparent",
}: CustomAvatarProps) => {
  return (
    <Pressable disabled={!editable} onPress={onPress} className={className}>
      <Image
        source={image}
        style={[
          {
            width: size,
            height: size,
            borderRadius: size / 2,
            backgroundColor,
          },
          style,
        ]}
        resizeMode="cover"
      />
    </Pressable>
  );
};

export default CustomAvatar;

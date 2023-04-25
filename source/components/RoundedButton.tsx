import { FC, useEffect, useState } from "react";
import {
  ColorValue,
  Text,
  TouchableHighlight,
  TouchableOpacity,
} from "react-native";

interface RoundedButtonProps {
  content: string;
  mainColor: ColorValue;
  secondaryColor: ColorValue;
  navigation?: () => boolean;
}
const RoundedButton: FC<RoundedButtonProps> = ({
  content,
  mainColor,
  secondaryColor,
  navigation,
}) => {
  const [isPressed, setIsPressed] = useState<boolean>(false);
  const [textStyle, setTextStyle] = useState<string>(
    `text-[${secondaryColor.toString()}]`
  );
  useEffect(() => {
    if (isPressed) {
      return setTextStyle(`text-[${mainColor.toString()}]`);
    } else {
      return setTextStyle(`text-[${secondaryColor.toString()}]`);
    }
  }, [isPressed]);

  return (
    <TouchableOpacity
      className={`bg-[${mainColor.toString()}] border border-[${secondaryColor.toString()}] flex flex-row justify-center items-center rounded-full w-4/5 px-auto py-4`}
      // underlayColor={secondaryColor}
      onPressIn={() => setIsPressed(true)}
      onPressOut={() => setIsPressed(false)}
      onPress={navigation}
    >
      <Text className={textStyle}>{content}</Text>
    </TouchableOpacity>
  );
};
export default RoundedButton;

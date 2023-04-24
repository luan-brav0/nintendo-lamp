import { FC, useState } from "react";
import { Text, TouchableHighlight } from "react-native";
import { NavigationScreenProp } from "react-navigation";

type Color = "red" | "white" | "black";
interface RoundedButtonProps {
  content: string;
  mainColor: Color;
  secondaryColor: Color;
  paddingX?: number;
  paddingY?: number;
  navigation?: NavigationScreenProp<any, any>;
  route?: string;
}

const RoundedButton: FC<RoundedButtonProps> = ({
  content,
  mainColor,
  secondaryColor,
  paddingX,
  paddingY,
  route,
  navigation,
}) => {
  const [isButtonPressed, setIsButtonPressed] = useState<boolean>(false);
  let underlay: string | undefined;
  if (secondaryColor === "red") {
    underlay = "#CF010B";
  } else if (secondaryColor === "black") {
    underlay = "#000000";
  } else {
    underlay = "#FFFFFF";
  }

  return (
    <TouchableHighlight
      className={`bg-${mainColor} border border-${secondaryColor} rounded-full px-${paddingX?.toString()} py-${paddingY?.toString()}`}
      underlayColor={underlay}
      onPressIn={() => {
        setIsButtonPressed(true);
      }}
      onPressOut={() => {
        setIsButtonPressed(false);
      }}
      onPress={() => navigation?.navigate("")}
    >
      <Text
        className={`${
          isButtonPressed ? `text-${mainColor}` : `text-${secondaryColor}`
        }`}
      >
        {content}
      </Text>
    </TouchableHighlight>
  );
};

export default RoundedButton;

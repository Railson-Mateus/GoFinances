import { TouchableOpacityProps } from "react-native/types";

export interface IButton extends TouchableOpacityProps {
  text: string;
  type?: string;
}

export interface CardProps {
  type: transactionType;
  title: string;
  amount: string;
  lastTransaction: string;
  nameIcon: iconType;
  last?: boolean;
}

export interface IProps {
  title: string;
}

export enum transactionType {
  entry = "entry",
  out = "out",
  overall = "overall",
}

export enum iconType {
  arrowDown = "arrow-down-circle",
  arrowUp = "arrow-up-circle",
  dollarSign = "dollar-sign",
}

import { TouchableOpacityProps } from "react-native/types";

export interface IButton extends TouchableOpacityProps {
  text: string;
  type?: string;
  icon?: string;
}

export interface CardProps {
  type: transactionType;
  title: string;
  amount: string;
  lastTransaction: string;
  nameIcon: iconType;
  last?: boolean;
}

export interface IPropsHeader {
  title: string;
}

export interface IPropsCategory {
  category: string;
  value: string;
}

export interface IPropsCardExpenses {
  title: string;
  value: string;
  icon: string;
  category: string;
  date: string;
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

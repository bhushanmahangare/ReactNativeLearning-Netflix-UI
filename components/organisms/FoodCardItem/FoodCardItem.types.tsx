import { ViewStyle } from 'react-native';

export interface IFoodCardItemProps {
  image: any;
  name: string;
  rating: string;
  category: string;
  price: string;
  time: string;
  containerStyle?: ViewStyle;
}

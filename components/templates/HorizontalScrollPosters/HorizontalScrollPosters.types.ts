import {ImageStyle} from 'react-native';

export interface IHorizontalScrollPostersProps {
  title: string;
  posters: {
    thumbnail: string;
  }[];
  shuffle?: boolean;
  cardStyle?: ImageStyle;
  width: ImageStyle['width'];
  aspectRatio: ImageStyle['aspectRatio'];
}

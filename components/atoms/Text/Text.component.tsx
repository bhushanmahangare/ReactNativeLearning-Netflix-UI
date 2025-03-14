// import React from 'react';
// import { TextStyle, Text as ReactNativeText } from 'react-native';
// import { ITextProps } from './Text.component.type';
// import { textStyle } from './Text.component.style';

// export default function Text(props: ITextProps) {
//   const { style, children, ...rest } = props;
//   const textStyle = { ...style };

//   return (
//     <ReactNativeText style={textStyle} {...rest}>
//       {children}
//     </ReactNativeText>
//   );
// }
import React from 'react';
import { TextProps, TextStyle, Text as ReactNativeText } from 'react-native';
import { COLORS } from '../colors';

interface ITextProps extends TextProps {
  size?: TextStyle['fontSize'];
  weight?: TextStyle['fontWeight'];
  textTransform?: TextStyle['textTransform'];
  textAlign?: TextStyle['textAlign'];
  color?: TextStyle['color'];
  style?: TextStyle;
}

export default function Text(props: ITextProps) {
  const {
    size = 14,
    weight = 400,
    textAlign = 'left',
    textTransform,
    style = {},
    children,
    color,
    ...rest
  } = props;

  const textStyle: TextStyle = {
    fontSize: size,
    fontWeight: weight,
    textAlign: textAlign,
    textTransform: textTransform || 'none',
    color: color || COLORS.textPrimary,
    ...style,
  };

  return (
    <ReactNativeText style={textStyle} {...rest}>
      {children}
    </ReactNativeText>
  );
}

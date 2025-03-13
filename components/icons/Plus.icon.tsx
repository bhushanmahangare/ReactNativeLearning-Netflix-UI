import * as React from 'react';
import Svg, { Path } from 'react-native-svg';

function PlusIcon(props: any) {
  return (
    <Svg
      width={24}
      height={24}
      viewBox="0 0 24 24"
      xmlns="http://www.w3.org/2000/svg"
      {...props}>
      <Path
        transform="translate(12 12) translate(-12 -12)"
        d="M11 2v9H2v2h9v9h2v-9h9v-2h-9V2z"
        strokeLinecap="butt"
        stroke="none"
        strokeWidth={1}
        strokeDasharray="none"
        strokeDashoffset={0}
        strokeLinejoin="miter"
        strokeMiterlimit={4}
        fill={props.fill || '#000'}
        fillRule="evenodd"
        opacity={1}
      />
    </Svg>
  );
}

export default PlusIcon;

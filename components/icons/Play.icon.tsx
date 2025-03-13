import * as React from 'react';
import Svg, { Path } from 'react-native-svg';

function PlayIcon(props: any) {
  return (
    <Svg
      width={24}
      height={24}
      viewBox="0 0 24 24"
      xmlns="http://www.w3.org/2000/svg"
      {...props}>
      <Path
        transform="matrix(.83 0 0 .83 12 12) translate(-16 -15)"
        d="M6 3a1 1 0 00-1 1.004v21.992a1 1 0 001.58.817l.002.001 19.834-10.906a1 1 0 00-.027-1.83L6.582 3.186H6.58A1 1 0 006 3z"
        strokeLinecap="butt"
        stroke="none"
        strokeWidth={1}
        strokeDasharray="none"
        strokeDashoffset={0}
        strokeLinejoin="miter"
        strokeMiterlimit={4}
        fill={props.fill || '#000'}
        fillRule="nonzero"
        opacity={1}
      />
    </Svg>
  );
}

export default PlayIcon;

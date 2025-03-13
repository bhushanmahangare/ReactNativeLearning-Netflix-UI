import * as React from 'react';
import Svg, { Path } from 'react-native-svg';

// 🎤 Microphone Icon
export const MicIcon = (props: any) => (
  <Svg width="24" height="24" viewBox="0 0 24 24" fill="none" {...props}>
    <Path
      d="M12 14a3 3 0 003-3V5a3 3 0 00-6 0v6a3 3 0 003 3zm5-3a5 5 0 01-10 0h-2a7 7 0 0014 0h-2zm-5 7v4h2v-4h-2z"
      fill="red"
    />
  </Svg>
);

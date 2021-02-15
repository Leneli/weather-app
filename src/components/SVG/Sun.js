import React from 'react';
import Svg, { Path, Defs, Stop, LinearGradient } from 'react-native-svg';

const SunSVG = props => (
  <Svg
      width={200}
      height={200}
      viewBox="0 0 200 200"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <Path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M94 35.104v21.137a5 5 0 1010 0V35.104a5 5 0 00-10 0zM98.5 132c17.949 0 32.5-14.551 32.5-32.5C131 81.55 116.449 67 98.5 67 80.55 67 66 81.55 66 99.5c0 17.949 14.55 32.5 32.5 32.5zm-64.396-29h21.137a5 5 0 000-10H34.104a5 5 0 100 10zM163 103h-21.137a5 5 0 010-10H163a5 5 0 010 10zm-69 61v-21.137a5 5 0 0110 0V164a5 5 0 01-10 0zM49.783 57.147L64.73 72.093a5 5 0 107.071-7.07L56.855 50.075a5 5 0 10-7.072 7.071zm91.143 91.143l-14.946-14.945a5.002 5.002 0 010-7.072 5.002 5.002 0 017.072 0l14.945 14.946a5 5 0 010 7.071 5 5 0 01-7.071 0zm-1.074-97.506l-14.945 14.945a5 5 0 107.071 7.071l14.946-14.945a5.001 5.001 0 00-7.072-7.072zM48.71 141.925l14.945-14.945a5 5 0 117.072 7.071L55.78 148.997a5 5 0 11-7.071-7.071z"
        fill="url(#prefix__paint0_linear)"
      />
      <Defs>
        <LinearGradient
          id="prefix__paint0_linear"
          x1={29.104}
          y1={30.104}
          x2={29.104}
          y2={169}
          gradientUnits="userSpaceOnUse"
        >
          <Stop stopColor="#FFFCC9" />
          <Stop offset={1} stopColor="#FFF799" />
        </LinearGradient>
      </Defs>
    </Svg>
);

export default SunSVG;

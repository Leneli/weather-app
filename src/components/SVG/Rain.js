import React from 'react';
import Svg, { Path, Defs, Stop, LinearGradient } from 'react-native-svg';

const RainSVG = props => (
  <Svg
      width={200}
      height={228}
      viewBox="0 0 200 228"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <Path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M47.29 79.039C49.745 58.18 67.483 42 89 42c14.835 0 27.874 7.691 35.346 19.304A49.35 49.35 0 01135.648 60C162.904 60 185 82.162 185 109.5S162.904 159 135.648 159h-82.58C30.94 159 13 141.007 13 118.812c0-20.227 14.899-36.964 34.29-39.773z"
        fill="url(#prefix__paint0_linear)"
      />
      <Path
        d="M44.362 185.266l-7.623 15.248a5 5 0 108.944 4.472l7.624-15.248a5 5 0 10-8.945-4.472zM94.865 185.266l-7.624 15.248a5 5 0 108.944 4.472l7.624-15.248a5 5 0 10-8.944-4.472zM74.789 174.053l-7.624 15.248a5 5 0 108.944 4.472l7.624-15.248a5 5 0 10-8.944-4.472zM125.291 174.053l-7.624 15.248a5 5 0 108.944 4.472l7.624-15.248a5 5 0 10-8.944-4.472zM89.152 143.764l-7.624 15.248a5 5 0 108.944 4.472l7.624-15.248a5 5 0 10-8.944-4.472zM140.152 143.764l-7.624 15.248a5 5 0 108.944 4.472l7.624-15.248a5 5 0 10-8.944-4.472zM109.152 154.764l-7.624 15.248a5 5 0 108.944 4.472l7.624-15.248a5 5 0 10-8.944-4.472zM59.152 154.764l-7.624 15.248a5 5 0 108.944 4.472l7.624-15.248a5 5 0 10-8.944-4.472z"
        fill="#A8D9FF"
      />
      <Defs>
        <LinearGradient
          id="prefix__paint0_linear"
          x1={13}
          y1={42}
          x2={13}
          y2={159}
          gradientUnits="userSpaceOnUse"
        >
          <Stop stopColor="#A9D9FF" />
          <Stop offset={1} stopColor="#7AC5FF" />
        </LinearGradient>
      </Defs>
    </Svg>
);

export default RainSVG;

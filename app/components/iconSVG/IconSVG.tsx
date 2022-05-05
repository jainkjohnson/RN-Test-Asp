import React from 'react';
import {SvgProps} from 'react-native-svg';

interface IconSVGProps {
  svgComponent: React.FC<SvgProps>;
  color?: string;
}

export const IconSVG: React.FC<IconSVGProps> = props => {
  const {svgComponent: SVGComponent, color} = props;

  return <SVGComponent fill={color} />;
};

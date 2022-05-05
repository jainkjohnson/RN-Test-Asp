import React from 'react';
import {SvgProps} from 'react-native-svg';

interface IconSVGProps {
  svgComponent: React.FC<SvgProps>;
}

export const IconSVG: React.FC<IconSVGProps> = props => {
  const {svgComponent: SVGComponent} = props;

  return <SVGComponent />;
};

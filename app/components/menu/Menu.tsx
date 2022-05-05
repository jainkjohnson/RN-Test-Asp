import React from 'react';
import {Text, TouchableOpacity, View} from 'react-native';
import {SvgProps} from 'react-native-svg';
import ToggleButtonOn from '../../../assets/icons/toggleOn.svg';
import ToggleButtonOff from '../../../assets/icons/toggleOff.svg';

import {IconSVG} from '../iconSVG/IconSVG';
import Styles from './Styles';

interface Props {
  icon: React.FC<SvgProps>;
  title: string;
  description: string;
  toggleButtonValue?: boolean;
  onPress: () => void;
  onPressToggleButton?: () => void;
}

export const Menu: React.FC<Props> = props => {
  const {
    icon,
    title,
    description,
    toggleButtonValue,
    onPress,
    onPressToggleButton,
  } = props;
  return (
    <TouchableOpacity style={Styles.rootContainer} onPress={onPress}>
      <View style={Styles.iconContainer}>
        <IconSVG svgComponent={icon} />
      </View>
      <View style={Styles.titleContainer}>
        <Text style={Styles.title}>{title}</Text>
        <Text style={Styles.description}>{description}</Text>
      </View>
      <TouchableOpacity
        style={Styles.toggleContainer}
        onPress={onPressToggleButton}>
        {toggleButtonValue !== undefined ? (
          toggleButtonValue ? (
            <ToggleButtonOn />
          ) : (
            <ToggleButtonOff />
          )
        ) : null}
      </TouchableOpacity>
    </TouchableOpacity>
  );
};

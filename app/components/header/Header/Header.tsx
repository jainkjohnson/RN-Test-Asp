import React from 'react';
import {Text, TouchableOpacity, View} from 'react-native';
import Styles from './Styles';

import Logo from '../../../../assets/icons/logo.svg';

interface Props {
  title: string;
  onPress: () => void;
}

export const Header: React.FC<Props> = props => {
  const {title, onPress} = props;

  return (
    <View style={Styles.headerContainer}>
      <View style={Styles.iconContainer}>
        <TouchableOpacity onPress={onPress}>
          <Text style={Styles.back}>Back</Text>
        </TouchableOpacity>
        <Logo />
      </View>

      <Text style={Styles.headerTitle}>{title}</Text>
    </View>
  );
};

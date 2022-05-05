import React from 'react';
import {Text, TouchableOpacity, View} from 'react-native';
import styles from './Styles';

interface Props {
  text: string;
  onPress: () => void;
  disabled?: boolean;
}

export const Button: React.FC<Props> = props => {
  const {onPress, text, disabled} = props;

  return (
    <TouchableOpacity
      style={[styles.rootContainer, disabled && styles.disabled]}
      onPress={onPress}
      disabled={disabled}>
      <Text style={styles.text}>{text}</Text>
    </TouchableOpacity>
  );
};

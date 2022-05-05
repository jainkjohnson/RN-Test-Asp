import React from 'react';
import {Text, TouchableOpacity} from 'react-native';
import styles from './styles';

interface Props {
  amount: number;
  onPress: (amount: number) => void;
}

export const AmountPicker: React.FC<Props> = props => {
  const {amount, onPress} = props;

  function handlePress() {
    onPress(amount);
  }

  return (
    <TouchableOpacity onPress={handlePress} style={styles.container}>
      <Text style={styles.amount}>{`S$ ${amount}`}</Text>
    </TouchableOpacity>
  );
};

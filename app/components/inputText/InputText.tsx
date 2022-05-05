import React from 'react';
import {TextInput, TextInputProps, View} from 'react-native';
import {CurrencyUnit} from '../currencyUnitIcon/CurrencyUnitIcon';
import styles from './styles';

export const InputText: React.FC<TextInputProps> = props => {
  return (
    <View style={styles.container}>
      <CurrencyUnit />
      <TextInput {...props} style={styles.input} />
    </View>
  );
};

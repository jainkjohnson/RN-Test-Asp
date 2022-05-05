import React from 'react';
import {View, Text} from 'react-native';

import Styles from './Styles';

export const CurrencyUnit: React.FC = () => {
  return (
    <View style={Styles.rootContainer}>
      <Text style={Styles.currency}>S$</Text>
    </View>
  );
};

import React, {useState} from 'react';
import {View, Text} from 'react-native';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';

import {Header} from '../../../components/header/Header/Header';
import {NavigatorParamList} from '../../../navigators/Routes';
import SmallLimitIcon from '../../../../assets/icons/SmallLimit.svg';
import styles from './Styles';
import {InputText} from '../../../components/inputText/InputText';
import {AmountPicker} from '../../../components/amountPicker/AmountPicker';
import {Button} from '../../../components/button/Button';

interface Props {
  navigation: NativeStackNavigationProp<NavigatorParamList>;
}

export const SpendingLimit: React.FC<Props> = props => {
  const {navigation} = props;
  const [amount, setAmount] = useState<string>();

  function handleBack() {
    navigation.goBack();
  }

  function handleAmount(amount: number): void {
    setAmount(amount.toString());
  }

  function handleTextChange(amount: string) {
    setAmount(amount);
  }

  return (
    <View style={styles.rootContainer}>
      <Header title="Spending limit" onPress={handleBack} />
      <View style={styles.contentContainer}>
        <View>
          <View style={styles.limitContainer}>
            <SmallLimitIcon />
            <Text style={styles.limitText}>
              Set a weekly debit card spending limit
            </Text>
          </View>

          <InputText
            keyboardType="numeric"
            value={amount}
            onChangeText={handleTextChange}
          />

          <Text style={styles.description}>
            Here weekly means the last 7 days - not the calendar week
          </Text>

          <View style={styles.amountPickerContainer}>
            <AmountPicker amount={5000} onPress={handleAmount} />
            <AmountPicker amount={10000} onPress={handleAmount} />
            <AmountPicker amount={20000} onPress={handleAmount} />
          </View>
        </View>

        <Button text="Save" onPress={() => null} disabled={!amount} />
      </View>
    </View>
  );
};

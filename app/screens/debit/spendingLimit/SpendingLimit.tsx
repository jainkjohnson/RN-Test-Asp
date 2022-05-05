import React, {useEffect, useState} from 'react';
import {View, Text} from 'react-native';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';

import {Header} from '../../../components/header/Header/Header';
import {NavigatorParamList, RouteNames} from '../../../navigators/Routes';
import SmallLimitIcon from '../../../../assets/icons/SmallLimit.svg';
import styles from './Styles';
import {InputText} from '../../../components/inputText/InputText';
import {AmountPicker} from '../../../components/amountPicker/AmountPicker';
import {Button} from '../../../components/button/Button';
import {AppDispatch} from '../../../../App';
import {useDispatch} from 'react-redux';
import {updateWeeklyLimit} from '../../../redux/actions/debitDetails';
import {RouteProp} from '@react-navigation/native';

interface Props {
  navigation: NativeStackNavigationProp<NavigatorParamList>;
  route: RouteProp<NavigatorParamList, RouteNames.SPENDING_LIMIT>;
}

export const SpendingLimit: React.FC<Props> = props => {
  const {navigation, route} = props;
  const [amount, setAmount] = useState<string>();
  const dispatch: AppDispatch = useDispatch();

  function handleBack() {
    navigation.goBack();
  }

  useEffect(() => {
    setAmount(route.params.amount.toString());
  }, [route.params.amount]);

  function handleAmount(amount: number): void {
    setAmount(amount.toString());
  }

  function handleTextChange(amount: string) {
    setAmount(amount);
  }

  function handleSave() {
    if (amount !== undefined) {
      dispatch(updateWeeklyLimit(parseInt(amount, 10)));
      navigation.goBack();
    }
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

        <Button text="Save" onPress={handleSave} disabled={!amount} />
      </View>
    </View>
  );
};

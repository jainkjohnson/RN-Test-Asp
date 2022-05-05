import React from 'react';
import {Text, View} from 'react-native';
import {CurrencyUnit} from '../../currencyUnitIcon/CurrencyUnitIcon';
import Styles from './Styles';

const Logo = require('../../../../assets/icons/logo.svg').default;

interface Props {
  title: string;
  balance: number;
}

export const Header: React.FC<Props> = props => {
  const {title, balance} = props;

  return (
    <View style={Styles.headerContainer}>
      <View>
        <Text style={Styles.headerTitle}>{title}</Text>
        <Text style={Styles.availableBalance}>Available Balance</Text>
        <View style={Styles.balanceContainer}>
          <CurrencyUnit />
          <Text style={Styles.balance}>{balance}</Text>
        </View>
      </View>
      <View style={Styles.logoContainer}>
        <Logo />
      </View>
    </View>
  );
};

import React from 'react';
import {View, Text, ScrollView} from 'react-native';
import {NativeStackNavigationProp} from '@react-navigation/native-stack/lib/typescript/src/types';

import {DebitCard} from '../../components/debitCard/DebitCard';
import {Header} from '../../components/header/DebitHeader/Header';
import {Menu} from '../../components/menu/Menu';
import Styles from './Styles';
import InsightIcon from '../../../assets/icons/Insight.svg';
import LimitIcon from '../../../assets/icons/Limit.svg';
import TransferIcon from '../../../assets/icons/Transfer.svg';
import FreezeIcon from '../../../assets/icons/Freeze.svg';
import DeactivateIcon from '../../../assets/icons/Deactivate.svg';
import {NavigatorParamList, RouteNames} from '../../navigators/Routes';
import {cardFormat} from '../../utils/utilFunctions';

interface Props {
  navigation: NativeStackNavigationProp<NavigatorParamList>;
}

export const Debit: React.FC<Props> = props => {
  const {navigation} = props;

  function handleSpendingLimit() {
    navigation.push(RouteNames.SPENDING_LIMIT);
  }

  return (
    <View style={Styles.rootContainer}>
      <Header title="Debit Card" balance={3000} />
      <ScrollView bounces={false} contentContainerStyle={{bottom: -90}}>
        <View style={Styles.transparentSection}></View>

        <View style={Styles.contentSection}>
          <View style={{top: -90}}>
            <DebitCard
              showCardDetails={true}
              cardHolderName="Jain"
              cardNumber={cardFormat('1234567812345678')}
              expireMonth={12}
              expireYear={20}
              cvv={277}
              style={Styles.debitCardContainer}
            />
            <Menu
              title="Top-up account"
              description="Deposit money to your account to use with card"
              icon={InsightIcon}
              onPress={() => null}
            />
            <Menu
              title="Weekly spending limit"
              description="You haven't set any spending limit on card"
              icon={LimitIcon}
              toggleButtonValue={false}
              onPress={handleSpendingLimit}
            />
            <Menu
              title="Freeze card"
              description="Your debit card is currently active"
              icon={TransferIcon}
              toggleButtonValue={false}
              onPress={() => null}
            />
            <Menu
              title="Get a new card"
              description="This deactivate your current debit card"
              icon={FreezeIcon}
              onPress={() => null}
            />
            <Menu
              title="Deactivated cards"
              description="Your previously deactivated cards"
              icon={DeactivateIcon}
              onPress={() => null}
            />
          </View>
        </View>
      </ScrollView>
    </View>
  );
};

import React, {useEffect, useState} from 'react';
import {View, Text, ScrollView} from 'react-native';
import {NativeStackNavigationProp} from '@react-navigation/native-stack/lib/typescript/src/types';
import {useDispatch, useSelector} from 'react-redux';

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
import {RootState} from '../../redux/reducers';
import {
  getDebitDetails,
  updateWeeklyLimit,
} from '../../redux/actions/debitDetails';
import {AppDispatch, useAppDispatch} from '../../../App';
import {DebitDetails} from '../../redux/reducers/debitDetails';
import {ProgressBar} from '../../components/progressBar/ProgressBar';

interface Props {
  navigation: NativeStackNavigationProp<NavigatorParamList>;
}

export const Debit: React.FC<Props> = props => {
  const {navigation} = props;
  const dispatch: AppDispatch = useDispatch();
  const details = useSelector((state: RootState) => state.debitDetailsStore);
  const [debitDetails, setDebitDetails] = useState<DebitDetails>(
    details.debitDetails,
  );

  useEffect(() => {
    dispatch(getDebitDetails());
  }, []);

  useEffect(() => {
    setDebitDetails(details.debitDetails);
  }, [details]);

  function handleSpendingLimit() {
    navigation.push(RouteNames.SPENDING_LIMIT, {
      amount: details.debitDetails.weeklyLimit,
    });
  }

  function handlePercentage(): number {
    return (
      (details.debitDetails.amountSpendAmount /
        details.debitDetails.weeklyLimit) *
      100
    );
  }

  function handleLimitToggleButton() {
    dispatch(updateWeeklyLimit(parseInt('0', 10)));
  }

  return (
    <View style={Styles.rootContainer}>
      <Header title="Debit Card" balance={debitDetails.availableBalance} />
      <ScrollView bounces={false} contentContainerStyle={{bottom: -90}}>
        <View style={Styles.transparentSection}></View>

        <View style={Styles.contentSection}>
          <View style={{top: -90}}>
            <DebitCard
              showCardDetails={true}
              cardHolderName={debitDetails.name}
              cardNumber={cardFormat(debitDetails.cardNumber)}
              expireMonth={debitDetails.expireMonth}
              expireYear={debitDetails.expireYear}
              cvv={debitDetails.cvv}
              style={Styles.debitCardContainer}
            />
            {!!debitDetails.weeklyLimit ? (
              <View style={Styles.progressBarContainer}>
                <View style={Styles.amountContainer}>
                  <Text style={Styles.debitLimitText}>
                    Debit card spending limit
                  </Text>
                  <Text
                    style={[
                      Styles.debitLimitText,
                      Styles.debitLimitSpendAmount,
                    ]}>
                    {`$${debitDetails.amountSpendAmount}`}
                    <Text
                      style={
                        Styles.debitLimitAmount
                      }>{` | $${debitDetails.weeklyLimit}`}</Text>
                  </Text>
                </View>
                <ProgressBar
                  percentage={handlePercentage()}
                  style={Styles.progressBar}
                />
              </View>
            ) : null}
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
              toggleButtonValue={!!debitDetails.weeklyLimit}
              onPress={handleSpendingLimit}
              onPressToggleButton={handleLimitToggleButton}
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

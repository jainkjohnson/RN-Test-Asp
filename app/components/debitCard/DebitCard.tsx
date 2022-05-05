import React, {useState} from 'react';
import {StyleProp, Text, TouchableOpacity, View, ViewStyle} from 'react-native';
import Styles from './Styles';
import AspireLogo from '../../../assets/icons/AspireLogo.svg';
import VisaLogo from '../../../assets/icons/VisaLogo.svg';
import RemoveLogo from '../../../assets/icons/RemoveEye.svg';

interface Props {
  cardNumber: string[];
  cardHolderName: string;
  expireMonth: number;
  expireYear: number;
  cvv: number;
  showCardDetails: boolean;
  style?: StyleProp<ViewStyle>;
}

export const DebitCard: React.FC<Props> = props => {
  const {cardHolderName, cardNumber, expireMonth, expireYear, cvv, style} =
    props;
  const [showDetails, setShowDetails] = useState<boolean>(false);

  function handleCardDetails() {
    setShowDetails(!showDetails);
  }

  return (
    <View style={[Styles.rootContainer, style]}>
      <View style={Styles.showCardDetails}>
        <View style={Styles.showCardDetailsOne}></View>
        <TouchableOpacity
          style={Styles.showCardDetailsTwo}
          onPress={handleCardDetails}>
          <RemoveLogo />
          <Text style={Styles.showCardNumber}>
            {showDetails ? 'Hide card number' : 'Show card number'}
          </Text>
        </TouchableOpacity>
      </View>

      <View style={Styles.cardDetails}>
        <View style={Styles.aspireLogo}>
          <AspireLogo />
        </View>
        <View style={Styles.nameContainer}>
          <Text style={Styles.name}>{cardHolderName}</Text>
        </View>
        <View style={Styles.cardNumberContainer}>
          {cardNumber.map((number, index) => (
            <Text key={index} style={Styles.cardNumber}>
              {showDetails ? number : index === 3 ? number : '••••'}
            </Text>
          ))}
        </View>
        <View style={Styles.validityContainer}>
          <Text
            style={Styles.expire}>{`Thru: ${expireMonth}/${expireYear}`}</Text>
          <Text style={Styles.cvv}>{`CVV: ${showDetails ? cvv : '***'}`}</Text>
        </View>
        <View style={Styles.visaLogo}>
          <VisaLogo />
        </View>
      </View>
    </View>
  );
};

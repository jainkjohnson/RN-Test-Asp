import {StyleSheet, Dimensions} from 'react-native';
import {Palette} from '../../theme/Palatte';
import {Spacings} from '../../theme/Spacings';

const styles = StyleSheet.create({
  rootContainer: {
    marginHorizontal: Spacings.large,
  },
  showCardDetails: {
    flexDirection: 'row',
    height: Spacings.xLarge + Spacings.tiny,
    top: 10,
  },
  showCardDetailsOne: {
    flex: 0.5,
  },
  showCardDetailsTwo: {
    flex: 0.5,
    backgroundColor: Palette.white,
    borderTopLeftRadius: 6,
    borderTopRightRadius: 6,
    flexDirection: 'row',
    paddingLeft: Spacings.medium,
    paddingTop: Spacings.small,
  },
  cardDetails: {
    backgroundColor: Palette.green,
    borderRadius: 6,
    padding: Spacings.large,
  },
  aspireLogo: {
    alignItems: 'flex-end',
  },
  name: {
    fontFamily: 'AvenirNextLTPro-Bold',
    fontSize: 22,
    color: Palette.white,
  },
  nameContainer: {
    paddingVertical: Spacings.large,
  },
  cardNumberContainer: {
    paddingBottom: Spacings.medium,
    flexDirection: 'row',
  },
  cardNumber: {
    fontFamily: 'AvenirNextLTPro-Regular',
    fontSize: 14,
    color: Palette.white,
    paddingRight: Spacings.large,
  },
  validityContainer: {
    flexDirection: 'row',
  },
  expire: {
    color: Palette.white,
    fontFamily: 'AvenirNextLTPro-Regular',
    paddingRight: Spacings.large + Spacings.small,
  },
  cvv: {
    color: Palette.white,
    fontFamily: 'AvenirNextLTPro-Regular',
  },
  visaLogo: {
    alignItems: 'flex-end',
  },
  showCardNumber: {
    paddingLeft: 6,
    fontSize: Spacings.medium,
    color: Palette.green,
    fontFamily: 'AvenirNextLTPro-Bold',
    paddingTop: 2,
  },
});

export default styles;

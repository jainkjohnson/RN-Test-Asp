import {Dimensions, StyleSheet} from 'react-native';
import {Palette} from '../../theme/Palatte';
import {Spacings} from '../../theme/Spacings';

const {height} = Dimensions.get('window');

const styles = StyleSheet.create({
  rootContainer: {
    flex: 1,
  },
  transparentSection: {
    height: height * 0.2,
    backgroundColor: 'rgba(52, 52, 52, 0.1)',
  },
  contentSection: {
    backgroundColor: Palette.white,
    borderTopLeftRadius: Spacings.large,
    borderTopRightRadius: Spacings.large,
  },
  debitCardContainer: {
    marginBottom: Spacings.large,
  },
  progressBar: {},
  progressBarContainer: {
    marginHorizontal: Spacings.large,
    marginBottom: 32,
  },
  amountContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 6,
  },
  debitLimitText: {
    fontSize: 13,
    fontFamily: 'AvenirNextLTPro-Regular',
  },
  debitLimitSpendAmount: {
    color: Palette.green,
  },
  debitLimitAmount: {
    color: Palette.grey,
  },
});

export default styles;

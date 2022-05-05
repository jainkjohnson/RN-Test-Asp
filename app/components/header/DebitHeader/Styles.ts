import {StyleSheet, Dimensions} from 'react-native';
import {Palette} from '../../../theme/Palatte';
import {Spacings} from '../../../theme/Spacings';

const {height, width} = Dimensions.get('window');

const styles = StyleSheet.create({
  headerContainer: {
    flex: 1,
    backgroundColor: Palette.blue,
    position: 'absolute',
    zIndex: -1,
    height: height,
    width: width,
    paddingLeft: Spacings.large,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  headerTitle: {
    fontFamily: 'AvenirNextLTPro-Bold',
    fontSize: Spacings.large,
    color: Palette.white,
    paddingTop: 32,
  },
  balance: {
    fontFamily: 'AvenirNextLTPro-Bold',
    fontSize: Spacings.large,
    color: Palette.white,
    paddingLeft: 10,
  },
  balanceContainer: {
    flexDirection: 'row',
  },
  availableBalance: {
    fontFamily: 'AvenirNextLTPro-Regular',
    fontSize: Spacings.medium,
    paddingTop: Spacings.large,
    paddingBottom: 15,
    color: 'white',
  },
  logoContainer: {
    paddingTop: Spacings.xMedium,
    paddingRight: Spacings.large,
  },
});

export default styles;

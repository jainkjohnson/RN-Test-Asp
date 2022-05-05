import {StyleSheet, Dimensions} from 'react-native';
import {Palette} from '../../../theme/Palatte';
import {Spacings} from '../../../theme/Spacings';

const {height, width} = Dimensions.get('window');

const styles = StyleSheet.create({
  headerContainer: {
    backgroundColor: Palette.blue,
    paddingLeft: Spacings.large,
    paddingBottom: Spacings.xLarge,
  },
  headerTitle: {
    fontFamily: 'AvenirNextLTPro-Bold',
    fontSize: Spacings.large,
    color: Palette.white,
  },
  logoContainer: {},
  iconContainer: {
    paddingTop: Spacings.xMedium,
    paddingRight: Spacings.large,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    height: 56,
  },
  back: {
    fontFamily: 'AvenirNextLTPro-Regular',
    color: Palette.white,
  },
});

export default styles;

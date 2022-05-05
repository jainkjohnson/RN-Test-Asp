import {StyleSheet, Dimensions} from 'react-native';
import {Palette} from '../../theme/Palatte';
import {Spacings} from '../../theme/Spacings';

const styles = StyleSheet.create({
  currency: {
    color: Palette.white,
    fontFamily: 'AvenirNextLTPro-Bold',
    fontSize: Spacings.medium,
  },
  rootContainer: {
    width: Spacings.xLarge,
    height: 22,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: Palette.green,
    borderRadius: Spacings.tiny,
  },
});

export default styles;

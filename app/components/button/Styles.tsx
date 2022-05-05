import {StyleSheet} from 'react-native';
import {Palette} from '../../theme/Palatte';
import {Spacings} from '../../theme/Spacings';

const styles = StyleSheet.create({
  rootContainer: {
    backgroundColor: Palette.green,
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: Spacings.xMedium,
    borderRadius: 30,
  },
  text: {
    color: Palette.white,
    fontFamily: 'AvenirNextLTPro-Bold',
    fontSize: Spacings.xMedium,
  },
  disabled: {
    backgroundColor: Palette.grey,
  },
});

export default styles;

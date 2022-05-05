import {StyleSheet} from 'react-native';
import {Palette} from '../../theme/Palatte';
import {Spacings} from '../../theme/Spacings';

const styles = StyleSheet.create({
  container: {
    height: Spacings.xLarge,
    backgroundColor: Palette.lightGreen,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: Spacings.tiny,
    paddingHorizontal: Spacings.large,
  },
  amount: {
    fontSize: Spacings.medium,
    color: Palette.green,
  },
});

export default styles;

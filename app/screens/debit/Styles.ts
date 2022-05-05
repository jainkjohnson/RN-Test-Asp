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
    marginBottom: 34,
  },
});

export default styles;

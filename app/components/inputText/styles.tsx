import {StyleSheet, Dimensions} from 'react-native';
import {Palette} from '../../theme/Palatte';
import {Spacings} from '../../theme/Spacings';

const {height, width} = Dimensions.get('window');

const styles = StyleSheet.create({
  input: {
    flex: 1,
    fontFamily: 'AvenirNextLTPro-Bold',
    fontSize: Spacings.large,
    paddingLeft: 10,
  },
  container: {
    flexDirection: 'row',
    borderBottomWidth: 1,
    borderColor: Palette.grey,
  },
});

export default styles;

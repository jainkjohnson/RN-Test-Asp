import {StyleSheet, Dimensions} from 'react-native';
import {Palette} from '../../theme/Palatte';
import {Spacings} from '../../theme/Spacings';

const {height, width} = Dimensions.get('window');

const styles = StyleSheet.create({
  rootContainer: {
    paddingHorizontal: Spacings.large,
    marginBottom: 34,
    flexDirection: 'row',
    flex: 1,
  },
  iconContainer: {
    paddingRight: Spacings.medium,
    flex: 0.1,
  },
  title: {
    fontSize: 13,
    fontFamily: 'AvenirNextLTPro-Regular',
    color: Palette.darkBlue,
  },
  description: {
    fontSize: 13,
    fontFamily: 'AvenirNextLTPro-Regular',
    opacity: 0.4,
  },
  titleContainer: {
    flex: 0.7,
    justifyContent: 'center',
  },
  toggleContainer: {
    flex: 0.2,
    alignItems: 'flex-end',
  },
});

export default styles;

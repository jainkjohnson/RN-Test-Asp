import {Dimensions, StyleSheet} from 'react-native';
import {Palette} from '../../../theme/Palatte';
import {Spacings} from '../../../theme/Spacings';

const styles = StyleSheet.create({
  rootContainer: {
    flex: 1,
    backgroundColor: Palette.blue,
  },
  contentContainer: {
    flex: 1,
    backgroundColor: Palette.white,
    borderTopLeftRadius: Spacings.large,
    borderTopRightRadius: Spacings.large,
    padding: Spacings.large,
    justifyContent: 'space-between',
  },
  limitContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: Spacings.xMedium,
  },
  limitText: {
    paddingLeft: Spacings.medium,
    fontFamily: 'AvenirNextLTPro-Regular',
  },
  description: {
    fontSize: 13,
    color: Palette.darkGrey,
    fontFamily: 'AvenirNextLTPro-Regular',
    paddingTop: Spacings.medium,
  },
  amountPickerContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 32,
  },
});

export default styles;

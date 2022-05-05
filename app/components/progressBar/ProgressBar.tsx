import React from 'react';
import {View, StyleSheet, ViewStyle, StyleProp} from 'react-native';
import {Palette} from '../../theme/Palatte';

interface ProgressBarProps {
  percentage: number;
  style?: StyleProp<ViewStyle>;
}

const styles = StyleSheet.create({
  backgroundBar: {
    flexDirection: 'row',
    height: 15,
    backgroundColor: Palette.lightGreen,
    borderRadius: 30,
  },
  progressBar: {
    alignSelf: 'flex-start',
    backgroundColor: Palette.green,
    height: '100%',
    borderRadius: 30,
  },
});

export const ProgressBar: React.FC<ProgressBarProps> = props => {
  const {percentage, style} = props;

  const widthStyle = {
    width: percentage > 100 ? `${100}%` : `${percentage}%`,
  };

  return (
    <View style={[styles.backgroundBar, style]}>
      <View style={[styles.progressBar, widthStyle]} />
    </View>
  );
};

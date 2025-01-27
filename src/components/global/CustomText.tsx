import {Colors} from '@unistyles/Constants';
import React from 'react';
import {Platform, StyleSheet, Text, TextStyle} from 'react-native';
import {RFValue} from 'react-native-responsive-fontsize';

type Variant = 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6' | 'h7';
type PlatformType = 'android' | 'ios';

interface CustonTextProps {
  variant?: Variant;
  fontFamily?:
    | 'Okra-Bold'
    | 'Okra-Regular'
    | 'Okra-Black'
    | 'Okra-Light'
    | 'Okra-Medium';

  fontSize?: number;
  color?: string;
  style?: TextStyle | TextStyle[];
  children: React.ReactNode;
  numberOfLine?: number;
  onLayout?: (event: any) => void;
}

const fontSizeMap: Record<Variant, Record<PlatformType, number>> = {
  h1: {android: 24, ios: 22},
  h2: {android: 22, ios: 20},
  h3: {android: 20, ios: 18},
  h4: {android: 18, ios: 16},
  h5: {android: 16, ios: 14},
  h6: {android: 14, ios: 12},
  h7: {android: 12, ios: 10},
};

const CustomText: React.FC<CustonTextProps> = ({
  variant,
  fontFamily = 'Okra-Regular',
  fontSize,
  color,
  style,
  children,
  numberOfLine,
  onLayout,
  ...props
}) => {
  let ComputeFontSize: number =
    Platform.OS === 'android'
      ? RFValue(fontSize || 12)
      : RFValue(fontSize || 10);

  if (variant && fontSizeMap[variant]) {
    const defaultSize = fontSizeMap[variant][Platform.OS as PlatformType];
    ComputeFontSize = RFValue(fontSize || defaultSize);
  }

  const fontFamilyStyles = {
    fontFamily,
  };

  return (
    <Text
      onLayout={onLayout}
      style={[
        styles.text,
        {color: color || Colors.text, fontSize: ComputeFontSize},
        fontFamilyStyles,
        style,
      ]}
      numberOfLines={numberOfLine !== undefined ? numberOfLine : undefined}
      {...props}>
      {children}
    </Text>
  );
};

export default CustomText;

const styles = StyleSheet.create({
  text: {
    textAlign: 'left',
  },
});

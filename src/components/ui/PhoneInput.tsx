import {View, Text, Pressable, TextInput, TouchableOpacity} from 'react-native';
import React, {FC} from 'react';
import {useStyles} from 'react-native-unistyles';
import {phoneStyles} from '@unistyles/phoneStyles';
import CustomText from '@components/global/CustomText';
import {Colors} from '@unistyles/Constants';
import Icons from '@components/global/Icon';

interface PhoneInputProps {
  value: string;
  onChangeText: (text: string) => void;
  onFocus: () => void;
  onBlur: () => void;
}

const PhoneInput: FC<PhoneInputProps> = ({
  value,
  onChangeText,
  onFocus,
  onBlur,
}) => {
  const {styles} = useStyles(phoneStyles);
  return (
    <View style={styles.container}>
      <Pressable style={styles.countryPickerContainer}>
        <CustomText>🇮🇳</CustomText>
        <Icons
          iconFamily="Ionicons"
          name="caret-down-sharp"
          color={Colors.lightText}
          size={18}
        />
      </Pressable>

      <View style={styles.phoneInputContainer}>
        <CustomText fontFamily="Okra-Bold">+91</CustomText>

        <TextInput
          value={value}
          placeholder="Enter Mobile Number"
          keyboardType="phone-pad"
          placeholderTextColor={Colors.lightText}
          onChangeText={onChangeText}
          onFocus={onFocus}
          onBlur={onBlur}
          style={styles.input}
        />
      </View>
    </View>
  );
};

export default PhoneInput;

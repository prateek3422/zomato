import {
  View,
  Text,
  StatusBar,
  Platform,
  Image,
  TouchableOpacity,
  Animated,
  ActivityIndicator,
} from 'react-native';
import React, {useEffect, useRef, useState} from 'react';
import {useStyles} from 'react-native-unistyles';
import {loginStyles} from '@unistyles/authStyles';
// import Animated from 'react-native-reanimated';
import CustomText from '@components/global/CustomText';
import BrakerText from '@components/ui/BrakerText';
import PhoneInput from '@components/ui/PhoneInput';
import {SocialLogin} from '@components/ui/SocialLogin';
import {resetAndNavigate} from '@utils/NavigationUtils';
import useKeyboardOffsetHeight from '@utils/useKeyboardOffsetHeight';

const LoginScreen = () => {
  const animatedValue = useRef(new Animated.Value(0)).current;
  const KeyboardOffsetHeight = useKeyboardOffsetHeight();
  const {styles} = useStyles(loginStyles);
  const [phone, setPhone] = useState('');
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (KeyboardOffsetHeight == 0) {
      Animated.timing(animatedValue, {
        toValue: 0,
        duration: 500,
        useNativeDriver: true,
      }).start();
    } else {
      Animated.timing(animatedValue, {
        toValue: -KeyboardOffsetHeight * 0.25,
        duration: 500,
        useNativeDriver: true,
      }).start();
    }
  }, [KeyboardOffsetHeight]);

  const handleLogin = async () => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      resetAndNavigate('UserBottonTab');
    });
  };
  return (
    <View style={styles.container}>
      <StatusBar hidden={Platform.OS !== 'android'} />
      <Image
        source={require('@assets/images/login.png')}
        style={styles.cover}
      />

      <Animated.ScrollView
        bounces={false}
        style={{transform: [{translateY: animatedValue}]}}
        keyboardShouldPersistTaps="handled"
        keyboardDismissMode="on-drag"
        contentContainerStyle={styles.bottomContainer}>
        <CustomText fontFamily="Okra-Bold" variant="h4" style={styles.title}>
          India's #1 Food Delivery and Dining App
        </CustomText>

        <BrakerText text="Log in or Sign up" />

        <PhoneInput
          onBlur={() => {}}
          onFocus={() => {}}
          value={phone}
          onChangeText={setPhone}
        />

        <TouchableOpacity
          style={styles.buttonContainer}
          onPress={handleLogin}
          disabled={loading}
          activeOpacity={0.8}>
          {loading ? (
            <ActivityIndicator size="small" color="#fff" />
          ) : (
            <CustomText color="#fff" fontFamily="Okra-Medium" variant="h5">
              continue
            </CustomText>
          )}
        </TouchableOpacity>

        <BrakerText text="or" />
        <SocialLogin />
      </Animated.ScrollView>

      {/* <View style={styles.footer}>
        <CustomText>By contuning, you agree to our</CustomText>
        <View style={styles.footerTextContainer}>
          <CustomText style={styles.footerText}>terms of Service</CustomText>
          <CustomText style={styles.footerText}>Privicy Policy</CustomText>
          <CustomText style={styles.footerText}>Content Policy</CustomText>
        </View>
      </View> */}
    </View>
  );
};

export default LoginScreen;

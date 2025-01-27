import {Image, Platform, StatusBar, View} from 'react-native';
import React, {useEffect} from 'react';
import {useStyles} from 'react-native-unistyles';
import {splashStyles} from '@unistyles/authStyles';
import Animated, {FadeInDown} from 'react-native-reanimated';
import CustomText from '@components/global/CustomText';
import {resetAndNavigate} from '@utils/NavigationUtils';

const SplashScreen = () => {
  const {styles} = useStyles(splashStyles);

  useEffect(() => {
    const TimeOutId = setTimeout(() => {
      resetAndNavigate('LoginScreen');
    }, 3000);

    return () => clearTimeout(TimeOutId);
  }, []);
  return (
    <View style={styles.container}>
      <StatusBar hidden={Platform.OS !== 'android'} />
      <Image
        source={require('@assets/images/logo_t.png')}
        style={styles.logoImage}
      />

      <Animated.View
        style={styles.animatedContainer}
        entering={FadeInDown.delay(400).duration(800)}>
        <Image
          source={require('@assets/images/tree.png')}
          style={styles.treeImage}
        />

        <CustomText
          variant="h5"
          fontFamily="Okra-Medium"
          style={styles.msgText}
          color="#ffffff">
          Carbon and Plastic Natural Deliveries in India
        </CustomText>
      </Animated.View>
    </View>
  );
};

export default SplashScreen;

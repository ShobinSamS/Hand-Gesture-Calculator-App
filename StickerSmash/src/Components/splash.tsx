import React, { useRef, useEffect } from 'react';
import { View, Text, StyleSheet, Dimensions } from 'react-native';
import LottieView from 'lottie-react-native';

const { width, height } = Dimensions.get('window');

export default function SplashComponent() {
  const animation = useRef<LottieView>(null);

  useEffect(() => {
    animation.current?.play();
  }, []);

  return (
    <View style={styles.container}>
      <LottieView
        autoPlay
        loop
        ref={animation}
        style={styles.lottie}
        source={require('../../assets/images/Splash_calc.json')}  // Adjust to your file path
      />
      
      {/* Overlay Text */}
      <View style={styles.textContainer}>
        <Text style={styles.splashText}>Welcome to Hand Calculator</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  lottie: {
    width: width,     // Full screen width
    height: height,   // Full screen height
    position: 'absolute',  // Ensures the animation fills the background
  },
  textContainer: {
    position: 'absolute', // Absolute positioning to overlay text
    top: '80%',           // Center the text vertically
    width: '100%',        // Make the text container take the full width
    justifyContent: 'center',
    alignItems: 'center',
  },
  splashText: {
    fontSize: 24,
    color: '#00000',     // Adjust color based on background
    textAlign: 'center',
    fontWeight: 'bold',
  },
});

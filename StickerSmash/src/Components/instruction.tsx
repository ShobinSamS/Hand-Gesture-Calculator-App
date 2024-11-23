import React, { useState, useEffect } from 'react';
import { View, Button, Image, StyleSheet,  TouchableOpacity, Text, BackHandler } from 'react-native';

export default function ButtonImageScreen() {
    const [selectedButton, setSelectedButton] = useState<number | null>(null); // Correctly type the state as 'number | null'

  const images = {
     // Make sure you have images in the respective path
    1: require('../../assets/number/1.jpg'),
    2: require('../../assets/number/2.jpg'),
    3: require('../../assets/number/3.jpg'),
    4: require('../../assets/number/4.jpg'),
    5: require('../../assets/number/5.jpg'),
    6: require('../../assets/number/6.jpg'),
    7: require('../../assets/number/7.jpg'),
    8: require('../..//assets/number/8.jpg'),
    9: require('../../assets/number/9.jpg'),
    0: require('../../assets/number/0.jpg'),
  };

  const handleButtonPress = (buttonIndex: number) => {
    setSelectedButton(buttonIndex);
  };

  const handleBackPress = () => {
    setSelectedButton(null); // Go back to button screen when back is pressed
    return true; // Prevent default back button behavior
  };

  useEffect(() => {
    const backHandler = BackHandler.addEventListener('hardwareBackPress', () => {
      if (selectedButton !== null) {
        handleBackPress(); // If an image is shown, go back to buttons
        return true; // Prevent navigation back to the splash screen
      }
      return false; // Allow default back navigation if no image is shown
    });

    return () => backHandler.remove(); // Clean up the event listener on component unmount
  }, [selectedButton]);

  return (
    <View style={styles.container}>
      {selectedButton !== null ? (
        <View style={styles.imageContainer}>
          <Image source={images[selectedButton]} style={styles.image} />
          <TouchableOpacity style={styles.backButton} onPress={handleBackPress}>
            <Text style={styles.backButtonText}>Back</Text>
          </TouchableOpacity>
        </View>
      ) : (
        <View style={styles.buttonsContainer}>
          {[1, 2, 3, 4, 5, 6, 7, 8, 9, 0].map((num) => (
            <TouchableOpacity
              key={num}
              style={styles.card}
              onPress={() => handleButtonPress(num)}
            >
              <Text style={styles.cardText}>{num}</Text>
            </TouchableOpacity>
          ))}
        </View>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  buttonsContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'center',
    paddingHorizontal: 10,
  },
  card: {
    backgroundColor: '#ff6f61',
    width: 100,
    height: 100,
    margin: 10,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 10,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.8,
    shadowRadius: 5,
    elevation: 5,
  },
  cardText: {
    color: 'white',
    fontSize: 28,
    fontWeight: 'bold',
  },
  imageContainer: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  image: {
    width: 200,
    height: 200,
    marginBottom: 20,
  },
  backButton: {
    backgroundColor: '#4caf50',
    padding: 15,
    borderRadius: 10,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.8,
    shadowRadius: 5,
    elevation: 5,
  },
  backButtonText: {
    color: 'white',
    fontSize: 18,
    fontWeight: 'bold',
  },
});

import React, { FC, useState } from 'react';
import { Text, StyleSheet, ActivityIndicator, TouchableHighlightProps, TouchableHighlight, View, PanResponder } from 'react-native';
import { useAppContext } from '../contexts/AppContext';
import { ColorPalette } from '../assets/constansts';

interface ButtonProps extends TouchableHighlightProps {
  title: string;
  color: string;
  index: number;
  loading: boolean;
  toggleVisible: () => void;
}

const SoundButton: FC<ButtonProps> = ({ title, onPress, toggleVisible, index, color, loading }) => {

  const { setSelectedItem } = useAppContext();

  const longPressed = () => {
    setSelectedItem(index)
    toggleVisible()
  }

  const panResponder = PanResponder.create({
    onStartShouldSetPanResponder: () => true,
    onPanResponderGrant: (e) => {
      // A new touch event is detected
      if (onPress)
        onPress(e)
    },
  });


  return (
    <View {...panResponder.panHandlers}>
      {loading ?
        <ActivityIndicator /> :
        <TouchableHighlight
          style={styles(color).button}
          onPress={onPress}
          underlayColor={color}
          onLongPress={longPressed}
          delayLongPress={1000}>
          <Text style={styles(color).buttonText}>{title}</Text>
        </TouchableHighlight>
      }
    </View>
  );
};

const styles = (color: string) => StyleSheet.create({
  button: {
    backgroundColor: ColorPalette.defaultColor,
    padding: 10,
    borderRadius: 5,
    width: '90%',
    alignItems: 'center',
    alignSelf: 'center'
  },
  buttonText: {
    color: 'white',
    fontSize: 16,
    fontWeight: 'bold',
  },
  btnNormal: {
    borderColor: 'blue',
    borderWidth: 1,
    borderRadius: 10,
    height: 30,
    width: 100,
  },
  btnPress: {
    backgroundColor: color,
    padding: 10,
    borderRadius: 5,
    width: '90%',
    alignItems: 'center',
    alignSelf: 'center'
  }
});

export default SoundButton;

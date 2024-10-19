import { View, Text, Pressable } from 'react-native'
import React from 'react'
import { colors, styles } from '../../config/theme/app-theme'

interface CalculatorButtonProps {
  text: string,
  color?: string,
  double?: boolean,
  black?: boolean,
  onPress?: (textNumber: string) => void
}

const CalculatorButton = (props: CalculatorButtonProps) => {
  const {
    text,
    color = colors.darkGray,
    double = false,
    black = false,
    onPress,
  } = props
  
  return (
    <Pressable
      style={ ({pressed}) => ({
        ...styles.button,
        backgroundColor: color,
        opacity: pressed ? 0.8 : 1,
        width: double ? 180 : 80,
      })}
      onPress={() => onPress()}>
      <Text style={
        {
          ...styles.buttonText,
          color: black ? 'black' : colors.textPrimary
        }
      }>{text}</Text>
    </Pressable>
  )
}

export default CalculatorButton
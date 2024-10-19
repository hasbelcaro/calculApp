import React from 'react'
import { Button, Pressable, StyleSheet, Text, View } from 'react-native'

import { colors, styles } from '../../config/theme/app-theme'
import CalculatorButton from '../components/CalculatorButton'
import { useCalculator } from '../hooks/useCalculator'

const CalculatorScreen = () => {

  const {
    formula, number, prevNumber, buildNumber, Operators,
    clear, deleteNumber, negative,
    changeNumberForPrevious, setOperator, calculate,
  } = useCalculator();

  return (
    <View style={styles.calculatorContainer}>

      <View style={{ paddingHorizontal: 30, paddingBottom: 20 }}>
        <Text
          adjustsFontSizeToFit
          numberOfLines={1}
          style={styles.mainResult}>{formula}</Text>

        {
          (formula == prevNumber)
          ? <Text style={styles.sunResult}> </Text>
          : (
            <Text style={styles.sunResult}>{prevNumber === '0' ? ' ' : prevNumber}</Text>
          )
        }
      </View>

      <View style={styles.row}>
        <CalculatorButton onPress={clear} text="C" color={colors.ligthGray} black />
        <CalculatorButton onPress={negative} text="+/-" color={colors.ligthGray} black />
        <CalculatorButton onPress={deleteNumber} text="del" color={colors.ligthGray} black />
        <CalculatorButton onPress={() => setOperator(Operators.divide)} text="/" color={colors.orange} />
      </View>

      <View style={styles.row}>
        <CalculatorButton onPress={() => buildNumber('7')} text="7" />
        <CalculatorButton onPress={() => buildNumber('8')} text="8" />
        <CalculatorButton onPress={() => buildNumber('9')} text="9" />
        <CalculatorButton onPress={() => setOperator(Operators.multiply)} text="x" color={colors.orange} />
      </View>

      <View style={styles.row}>
        <CalculatorButton onPress={() => buildNumber('4')} text="4" />
        <CalculatorButton onPress={() => buildNumber('5')} text="5" />
        <CalculatorButton onPress={() => buildNumber('6')} text="6" />
        <CalculatorButton onPress={() => setOperator(Operators.substract)} text="-" color={colors.orange} />
      </View>

      <View style={styles.row}>
        <CalculatorButton onPress={() => buildNumber('1')} text="1" />
        <CalculatorButton onPress={() => buildNumber('2')} text="2" />
        <CalculatorButton onPress={() => buildNumber('4')} text="3" />
        <CalculatorButton onPress={() => setOperator(Operators.sum)} text="+" color={colors.orange} />
      </View>

      <View style={styles.row}>
        <CalculatorButton onPress={() => buildNumber('0')} text="0" double />
        <CalculatorButton onPress={() => buildNumber('.')} text="." />
        <CalculatorButton onPress={calculate} text="=" color={colors.orange} />
      </View>

    </View>
  )
}

export default CalculatorScreen
import React from 'react'
import { View, Text } from 'react-native'
import CalculatorScreen from './src/presentation/screens/CalculatorScreen'

import { styles } from './src/config/theme/app-theme'

const App = () => {
  return (
    <View style={styles.background}>
      <CalculatorScreen />
    </View>
  )
}

export default App
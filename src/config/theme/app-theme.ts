import { StyleSheet } from "react-native";

export const colors = {
  darkGray: '#2D2D2D',
  ligthGray: '#9B9B9B',
  orange: '#FF9427',

  textPrimary: '#FFFFFF',
  textSecondary: '#666666',
  background: '#000000',
}


export const styles = StyleSheet.create({
  background: {
    backgroundColor: colors.background,
    flex: 1,
  },

  calculatorContainer: {
    flex: 1,
    paddingHorizontal: 20,
    justifyContent: 'flex-end',
  },

  row: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginBottom: 18,
    paddingHorizontal: 10,
  },

  mainResult: {
    color: colors.textPrimary,
    fontSize: 60,
    textAlign: 'right',
    marginBottom: 10,
    fontWeight: '400',
  },
  sunResult: {
    color: colors.textSecondary,
    fontSize: 30,
    textAlign: 'right',
    marginBottom: 10,
    fontWeight: '300',
  },

  button: {
    height: 80,
    width: 80,
    backgroundColor: colors.darkGray,
    borderRadius: 100,
    justifyContent: 'center',
    marginHorizontal: 10,
  },

  buttonText: {
    textAlign: 'center',
    padding: 10,
    fontSize: 30,
    color: colors.textPrimary,
    fontWeight: '300',
  }
})
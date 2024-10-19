import { useEffect, useRef, useState } from "react";

enum Operators {
  sum = '+',
  substract = '-',
  multiply = 'x',
  divide = '/'
}

export const useCalculator = () => {
  
  const [formula, setFormula] = useState('');

  const [number, setNumber] = useState('0');
  const [prevNumber, setPrevNumber] = useState('0');

  const lastOperator = useRef<Operators>();

  useEffect(() => {
    if (lastOperator.current) {
      const firstFormula = formula.split(' ')[0];
      setFormula(`${firstFormula} ${lastOperator.current} ${number}`);
    } else {
      setFormula(`${number}`);
    }
    
  }, [number])
  

  useEffect(() => {
    const subResult = subCalculate();
    setPrevNumber(`${subResult}`);
  }, [formula])

  const clear = () => {
    setNumber('0');
    setPrevNumber('0');
    lastOperator.current = undefined;
    setFormula('');
  }

  const deleteNumber = () => {
    if (number.length === 1 || (number.length === 2 && number.startsWith('-'))) {
      setNumber('0');
    } else {
      setNumber(number.slice(0, -1));
    }
  }

  const negative = () => {
    if (number.includes('-')) {
      setNumber(number.replace('-', ''));
    } else {
      setNumber(`-${number}`);
    }
  }

  const buildNumber = (textNumber: string) => {

    if (number.includes('.') && textNumber === '.') return;

    if (number.startsWith('0') || number.startsWith('-0')) {
      if (textNumber === '.') {
        return setNumber(number + textNumber);

      } else if (textNumber === '0' && number.includes('.')) {
        return setNumber(number + textNumber);

      } else if (textNumber !== '0' && !number.includes('.')) {
        return setNumber(textNumber);

      } else if (textNumber === '0' && !number.includes('.')) {
        return setNumber(number);

      } else {
        return setNumber(number + textNumber);
      }

    } else {
      setNumber(number + textNumber);
    }

    setNumber(number + textNumber);
  }

  const changeNumberForPrevious = () => {
    calculate();
    
    if (number.endsWith('.')) {
      setPrevNumber(number.slice(0, -1));
    } else {
      setPrevNumber(number);
    }

    setNumber('0');
  }

  const setOperator = (operator: Operators) => {
    lastOperator.current = operator;
    
    if (prevNumber === '0') {
      setPrevNumber(number);
      setNumber('0');
    } else {
      calculate();
    }
  };

  const calculate = () => {
    const result = subCalculate();
    setFormula(`${result}`);

    lastOperator.current = undefined;
    setPrevNumber('0');
  }

  const subCalculate = (): number => {
    const [firstNumber, operation, secondNumber] = formula.split(' ');
    
    const num1 = Number(firstNumber);
    const num2 = Number(secondNumber);

    if (isNaN(num2)) return num1;

    switch (operation) {
      case Operators.sum:
        return num1 + num2;
        
      case Operators.substract:
        return num1 - num2;
        
      case Operators.multiply:
        return num1 * num2;
        
      case Operators.divide:
        return num1 / num2;
        
    }

    throw new Error('Invalid operation');
  }

  return {
    // Properties
    number,
    prevNumber,
    Operators,
    formula,
  
    // Methods
    buildNumber,
    clear,
    deleteNumber,
    negative,
    changeNumberForPrevious,
    setOperator,
    calculate
  }
}
import { useState } from 'react';

//Dark and light Theme
const CalculatorApp = () => {
  const [currentNumber, setCurrentNumber] = useState('0');
  const [previousNumber, setPreviousNumber] = useState('');
  const [operator, setOperator] = useState('');
  const [darkMode, setDarkMode] = useState(false);

  const handleNumberClick = (number) => {
    if (currentNumber === '0') {
      setCurrentNumber(number);
    } else {
      setCurrentNumber(currentNumber + number);
    }
  };

  const handleOperatorClick = (operator) => {
    setPreviousNumber(currentNumber);
    setOperator(operator);
    setCurrentNumber('0');
  };

  const handleEqualsClick = () => {
    if (previousNumber && operator) {
      let result;
      switch (operator) {
        case '+':
          result = parseFloat(previousNumber) + parseFloat(currentNumber);
          break;
        case '-':
          result = parseFloat(previousNumber) - parseFloat(currentNumber);
          break;
        case '*':
          result = parseFloat(previousNumber) * parseFloat(currentNumber);
          break;
        case '/':
          result = parseFloat(previousNumber) / parseFloat(currentNumber);
          break;
        default:
          result = 0;
      }
      setCurrentNumber(result.toString());
      setPreviousNumber('');
      setOperator('');
    }
  };

  const handleClearClick = () => {
    setCurrentNumber('0');
    setPreviousNumber('');
    setOperator('');
  };

  const handleDarkModeToggle = () => {
    setDarkMode(!darkMode);
  };

  return (
    <div className={`max-w-md mx-auto p-4 ${darkMode ? 'bg-gray-800' : 'bg-white'} rounded-lg shadow-md`}>
      <div className="flex justify-between p-4 border-b border-gray-200">
        <button
          className={`p-2 ${darkMode ? 'bg-gray-700' : 'bg-gray-200'} hover:bg-gray-300 rounded-lg`}
          onClick={handleDarkModeToggle}
        >
          {darkMode ? 'Light Mode' : 'Dark Mode'}
        </button>
        <p className={`text-3xl font-bold ${darkMode ? 'text-white' : 'text-black'}`}>{currentNumber}</p>
      </div>
      <div className="grid grid-cols-4 gap-4 p-4">
        <button
          className={`p-4 ${darkMode ? 'bg-gray-700' : 'bg-gray-200'} hover:bg-gray-300 rounded-lg`}
          onClick={() => handleNumberClick('7')}
        >
          7
        </button>
        <button
          className={`p-4 ${darkMode ? 'bg-gray-700' : 'bg-gray-200'} hover:bg-gray-300 rounded-lg`}
          onClick={() => handleNumberClick('8')}
        >
          8
        </button>
        <button
          className={`p-4 ${darkMode ? 'bg-gray-700' : 'bg-gray-200'} hover:bg-gray-300 rounded-lg`}
          onClick={() => handleNumberClick('9')}
        >
          9
        </button>
        <button
          className={`p-4 ${darkMode ? 'bg-orange-800' : 'bg-orange-500'} hover:bg-orange-600 text-white rounded-lg`}
          onClick={() => handleOperatorClick('/')}
        >
          /
        </button>
        <button
          className={`p-4 ${darkMode ? 'bg-gray-700' : 'bg-gray-200'} hover:bg-gray-300 rounded-lg`}
          onClick={() => handleNumberClick('4')}
        >
          4
        </button>
        <button
          className={`p-4 ${darkMode ? 'bg-gray-700' : 'bg-gray-200'} hover:bg-gray-300 rounded-lg`}
          onClick={() => handleNumberClick('5')}
        >
          5
        </button>
        <button
          className={`p-4 ${darkMode ? 'bg-gray-700' : 'bg-gray-200'} hover:bg-gray-300 rounded-lg`}
          onClick={() => handleNumberClick('6')}
        >
          6
        </button>
        <button
          className={`p-4 ${darkMode ? 'bg-orange-800' : 'bg-orange-500'} hover:bg-orange-600 text-white rounded-lg`}
          onClick={() => handleOperatorClick('*')}
        >
          *
        </button>
        <button
          className={`p-4 ${darkMode ? 'bg-gray-700' : 'bg-gray-200'} hover:bg-gray-300 rounded-lg`}
          onClick={() => handleNumberClick('1')}
        >
          1
        </button>
        <button
          className={`p-4 ${darkMode ? 'bg-gray-700' : 'bg-gray-200'} hover:bg-gray-300 rounded-lg`}
          onClick={() => handleNumberClick('2')}
        >
          2
        </button>
        <button
          className={`p-4 ${darkMode ? 'bg-gray-700' : 'bg-gray-200'} hover:bg-gray-300 rounded-lg`}
          onClick={() => handleNumberClick('3')}
        >
          3
        </button>
        <button
          className={`p-4 ${darkMode ? 'bg-orange-800' : 'bg-orange-500'} hover:bg-orange-600 text-white rounded-lg`}
          onClick={() => handleOperatorClick('-')}
        >
          -
        </button>
        <button
          className={`p-4 ${darkMode ? 'bg-gray-700' : 'bg-gray-200'} hover:bg-gray-300 rounded-lg`}
          onClick={() => handleNumberClick('0')}
        >
          0
        </button>
        <button
          className={`p-4 ${darkMode ? 'bg-gray-700' : 'bg-gray-200'} hover:bg-gray-300 rounded-lg`}
          onClick={handleClearClick}
        >
          C
        </button>
        <button
          className={`p-4 ${darkMode ? 'bg-orange-800' : 'bg-orange-500'} hover:bg-orange-600 text-white rounded-lg`}
          onClick={handleEqualsClick}
        >
          =
        </button>
        <button
          className={`p-4 ${darkMode ? 'bg-orange-800' : 'bg-orange-500'} hover:bg-orange-600 text-white rounded-lg`}
          onClick={() => handleOperatorClick('+')}
        >
          +
        </button>
      </div>
    </div>
  );
};

export default CalculatorApp;
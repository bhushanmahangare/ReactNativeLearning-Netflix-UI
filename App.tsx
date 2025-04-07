import React from 'react';
import LoginScreen from './screens/LoginScreen';
import HomeScreen from './screens/HomeScreen';
import ZomatoHome from './screens/ZomatoHome';
import MyntraHome from './screens/MyntraHome';
import CalculatorApp from './screens/CalculatorApp';
import CalculatorApp2 from './screens/CalculatorApp2';
import CalculatorApp3 from './screens/CalculatorApp3';
import ToDoListPopup from './screens/ToDoListPopup';
import LocationComponent from './src/getLocaltion';
import ContactList from './screens/ContactList';

function App(): React.JSX.Element {
  //return <HomeScreen />;
  // return <LoginScreen />;
  //return <ZomatoHome />;
  //return <MyntraHome />;
  //return <CalculatorApp />;
  // return <CalculatorApp2 />;
  //return <CalculatorApp3 />;
  //return <ToDoListPopup />;ContactList
  //return <LocationComponent />;
  return <ContactList />;
}

export default App;

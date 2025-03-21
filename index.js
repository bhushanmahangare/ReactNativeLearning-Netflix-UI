/**
 * @format
 */

import {AppRegistry} from 'react-native';
import App from './App';
import {name as appName} from './app.json';
// import Counter from './src/reactUserState.tsx';
// import SignIn from './src/SignIn.tsx';
// import ToDoApp from './src/ToDo.tsx';

//import TodoAppList from './src/TodoAppList';

AppRegistry.registerComponent(appName, () => App);
// AppRegistry.runApplication(appName, () => Counter);
//AppRegistry.registerComponent(appName, () => SignIn);
//AppRegistry.registerComponent(appName, () => ToDoApp);
//AppRegistry.registerComponent(appName, () => TodoAppList);
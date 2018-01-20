import { AppRegistry, Platform } from 'react-native';
import App from './App/App';

AppRegistry.registerComponent('ReactNativeMobileAndWebBoilerplate', () => App);

if (Platform.OS === "web") {
  AppRegistry.runApplication('ReactNativeMobileAndWebBoilerplate', {
    rootTag: document.getElementById('root')
  });
}

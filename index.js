import { AppRegistry, YellowBox } from 'react-native';
import Index from './src';
import { name as appName } from './app.json';

YellowBox.ignoreWarnings(['Warning: componentWillMount']);

AppRegistry.registerComponent(appName, () => Index);

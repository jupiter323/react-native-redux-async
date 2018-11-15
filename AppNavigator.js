import { StackNavigator } from 'react-navigation';
import SessionCheck from './src/screens/SessionCheck';
import LoginScreen from './src/screens/LoginScreen';
import DashboardScreen from './src/screens/DashboardScreen';
const AppNavigator = StackNavigator({
  Session: { screen: SessionCheck },
  Login: { screen: LoginScreen },
  Dashboard: { screen:DashboardScreen },
});

export default AppNavigator;

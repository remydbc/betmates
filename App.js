import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import HomeScreen from './screens/HomeScreen.js';
import GroupScreen from './screens/GroupScreen.js';
import BetScreen from './screens/BetScreen.js';
import LeaderboardScreen from './screens/LeaderBoardScreen.js';

const Tab = createBottomTabNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator>
        <Tab.Screen name="Accueil" component={HomeScreen} />
        <Tab.Screen name="Groupe" component={GroupScreen} />
        <Tab.Screen name="Paris" component={BetScreen} />
        <Tab.Screen name="Classement" component={LeaderboardScreen} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}

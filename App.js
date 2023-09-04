import { SafeAreaView } from 'react-native';

import Ionicons from '@expo/vector-icons/Ionicons';

import Home from './screens/Home';
import Profile from './screens/Profile';
import Search from './screens/Search';
import Login from './screens/Login';

import { NavigationContainer } from '@react-navigation/native';

import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createStackNavigator } from '@react-navigation/stack';

const Tab = createBottomTabNavigator();
const Stack = createStackNavigator();

export default function App() {

  const user = true;

  function Tabs() {
    return (

      <Tab.Navigator initialRouteName="Home">

      <Tab.Screen name="Search" component={Search} options={{
          title: "Search",
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="search-outline" color={color} size={size} />
          ),
        }} />
        <Tab.Screen name="Home" component={Home} options={{
          title: "Home",
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="home" color={color} size={size} />
          )
        }} />
        <Tab.Screen name="Profile" component={Profile} options={{
          title: "Profile",
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="person-outline" color={color} size={size} />
          )
        }} />
      </Tab.Navigator>
    )
  }

  function Stacks() {
    return (
    <Stack.Navigator>
      <Stack.Screen name="Login" component={Login} title="Login" />
    </Stack.Navigator>
    );
  }
  return (
    <NavigationContainer>
        <SafeAreaView style={{flex: 1 }}>
          {
            user ?
          <Tabs />
          :
          <Stacks />
          }
        </SafeAreaView>
    </NavigationContainer>
  );
}

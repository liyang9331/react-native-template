// In App.js in a new project

import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
// import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';

// You can import Ionicons from @expo/vector-icons/Ionicons if you use Expo or
// react-native-vector-icons/Ionicons otherwise.
import Ionicons from 'react-native-vector-icons/Ionicons';
// import { Ionicons } from '@expo/vector-icons';
// import Ionicons from 'react-native-vector-icons/FontAwesome';

// 页面
import HomeScreen from './src/page/HomeScreen/HomeScreen';
import DetailsScreen from './src/page/DetailsScreen/DetailsScreen';
import ShoppingCart from './src/page/ShoppingCart/ShoppingCart';
// const Stack = createNativeStackNavigator();

// 选项卡导航
const Tab = createBottomTabNavigator();

function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={({route}) => ({
          tabBarIcon: ({focused, color, size}) => {
            let iconName;
            if (route.name === 'Home') {
              iconName = focused ? 'home-outline' : 'home-sharp';
            } else if (route.name === 'Details') {
              iconName = focused ? 'user-o' : 'user';
            } else {
              iconName = focused ? 'user-o' : 'user';
            }

            // You can return any component that you like here!
            return <Ionicons name={iconName} size={size} color={color} />;
          },
          tabBarActiveTintColor: 'tomato',
          tabBarInactiveTintColor: 'gray',
        })}>
        <Tab.Screen
          name="Home"
          component={HomeScreen}
          options={{tabBarBadge: 3}}
        />
        <Tab.Screen name="Details" component={DetailsScreen} />
        <Tab.Screen name="ShoppingCart" component={ShoppingCart} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}

export default App;

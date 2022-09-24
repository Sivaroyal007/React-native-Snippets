// In App.js in a new project

import * as React from 'react';
import Screen1 from '../screens/screen1';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import Tab2 from '../tabs/tab2';
import Tab3 from '../tabs/tab3';
import Tab4 from '../tabs/tab4';



export default  function BottomTab() {

    const Tab = createMaterialBottomTabNavigator();

  return (
  
    <Tab.Navigator
    initialRouteName="Home"
    activeColor="#000B7A"
    barStyle={{ backgroundColor: "#DAB603" ,padding:5,bottom:20,borderRadius:15}}
    >
      <Tab.Screen name="Home" component={Screen1}  options={{
          tabBarLabel: 'Home',
          tabBarIcon: ({ color }) => (
            <MaterialCommunityIcons name="home" color={color} size={26} />
          ),
        }}/>
      <Tab.Screen name="Profile" component={Tab2}  options={{
          tabBarLabel: 'Updates',
          tabBarIcon: ({ color }) => (
            <MaterialCommunityIcons name="bell" color={color} size={26} />
          ),
        }} />
      <Tab.Screen name="Settings" component={Tab3}  options={{
          tabBarLabel: 'Profile',
          tabBarIcon: ({ color }) => (
            <MaterialCommunityIcons name="account" color={color} size={26} />
          ),
        }}/>
      <Tab.Screen name="Blogs" component={Tab4}  options={{
          tabBarLabel: 'folder',
          tabBarIcon: ({ color }) => (
            <MaterialCommunityIcons name="folder" color={color} size={26} />
          ),
        }} />
    </Tab.Navigator>
  );
}

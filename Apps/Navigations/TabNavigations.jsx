import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import HomeScreen from '../Screens/HomeScreen';
import EXploreScreen from '../Screens/EXploreScreen';
import AddPostScreen from '../Screens/AddPostScreen';
import ProfileScreen from '../Screens/ProfileScreen';
import { Text } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { FontAwesome } from '@expo/vector-icons';




const Tab = createBottomTabNavigator();
const TabNavigations = () => {
  return (
    <Tab.Navigator screenOptions={{ headerShown: false }}>
      <Tab.Screen name="Home" component={HomeScreen}
        options={{
          tabBarLabel: ({ color }) => (
            <Text className='font-bold text-slate-500 text-md'>Home</Text>
          ),
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="home-sharp" size={size} color={color} />
          )

        }}
      />
      <Tab.Screen name="explore" component={EXploreScreen}
        options={{
          tabBarLabel: ({ color }) => (
            <Text className='font-bold text-slate-500 text-md'>Explore</Text>
          ),
          tabBarIcon: ({ color, size }) => (
            <FontAwesome name="search" size={size} color={color} />
          )

        }}

      />
      <Tab.Screen name="Profile" component={ProfileScreen}
        options={{
          tabBarLabel: ({ color }) => (
            <Text className='font-bold text-slate-500 text-md'>Profile</Text>
          ),
          tabBarIcon: ({ color, size }) => (
            <FontAwesome name="user" size={size} color={color} />)

        }}
      />
      <Tab.Screen name="addpost" component={AddPostScreen}
        options={{
          tabBarLabel: ({ color }) => (
            <Text className='font-bold text-slate-500 text-md'>App Post</Text>
          ),
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="camera" size={size} color={color} />
          )

        }}

      />

    </Tab.Navigator>
  )
}

export default TabNavigations
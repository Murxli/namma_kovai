import { Tabs } from 'expo-router';
import { Ionicons } from '@expo/vector-icons';
import { FontAwesome5 } from '@expo/vector-icons';
import { Octicons } from '@expo/vector-icons';
import { FontAwesome } from '@expo/vector-icons';
import {COLORS} from '@/constants/theme';

const Layout = () => {
  return (
    <Tabs
      screenOptions={{
        tabBarActiveTintColor: COLORS.secondary,
        tabBarLabelStyle: {
          fontFamily: 'DM',
        },
        tabBarStyle:{
          padding:10
        },
        headerShown:false
      }}>
      <Tabs.Screen
        name="report"
        options={{
          tabBarLabel: 'Report',
          tabBarIcon: ({ size, color }) => <Octicons name="report" size={size} color={color} />,
        }}
      />
      <Tabs.Screen
        name="explore"
        options={{
          tabBarLabel: 'Explore',
          tabBarIcon: ({ size, color }) => (
            <FontAwesome name="map-signs" size={size} color={color} />
          ),
        }}
      />
      <Tabs.Screen
        name="index"
        options={{
          tabBarLabel: 'Home',
          tabBarIcon: ({ size, color }) => <FontAwesome5 name="home" size={size} color={color} />,
        }}
      />
      <Tabs.Screen
        name="infohub"
        options={{
          tabBarLabel: 'InfoHub',
          tabBarIcon: ({ size, color }) => <FontAwesome5 name="info" size={size} color={color} />,
        }}
      />
      <Tabs.Screen
        name="people"
        options={{
          tabBarLabel: 'People',
          tabBarIcon: ({ size, color }) => (
            <Ionicons name="people" size={size} color={color} />
          ),
        }}
      />
      {/* <Tabs.Screen
        name="profile"
        options={{
          tabBarLabel: 'Profile',

          // headerShown: false,
          tabBarIcon: ({ size, color }) => (
            <Ionicons name="person-circle-outline" size={size} color={color} />
          ),
        }}
      /> */}
    </Tabs>
  );
};

export default Layout;
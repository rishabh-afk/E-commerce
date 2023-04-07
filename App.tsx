import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import FontIcon from 'react-native-vector-icons/FontAwesome5';
import Home from './src/pages/Home';
import DetailScreen from './src/pages/DetailScreen';
// import {createDrawerNavigator} from '@react-navigation/drawer';
import TabHome from './src/pages/TabHome';
import TabDetail from './src/pages/TabDetail';
import {StatusBar} from 'react-native';
import {StyleProvider} from 'react-native-zephyr';
// import TabHome from './src/pages/TabHome';
// import TabDetail from './src/pages/TabDetail';

// const Drawer = createDrawerNavigator();
const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

function App() {
  return (
    <StyleProvider colorScheme="auto">
      <NavigationContainer>
        <StatusBar backgroundColor={'#f4511e'}></StatusBar>
        {/* <Stack.Navigator>
        <Stack.Screen
          name="Home"
          component={Home}
          options={({navigation, route}) => ({
            title: 'Overview',
            // headerRight: () => <Button title="Update count" />,
            headerStyle: {
              backgroundColor: '#f4511e',
            },
            headerTintColor: '#fff',
            headerTitleAlign: 'center',
          })}
          initialParams={{username: 'Rishabh'}}
        />
        <Stack.Screen
          name="Details"
          component={DetailScreen}
          options={{
            title: 'My Details',
            headerStyle: {
              backgroundColor: '#f4511e',
            },
            headerTintColor: '#fff',
            headerTitleAlign: 'center',
          }}
        />
      </Stack.Navigator> */}
        <Tab.Navigator>
          <Tab.Screen
            name="TabHome"
            component={TabHome}
            options={({navigation, route}) => ({
              tabBarIcon: () => <FontIcon name="home" size={30} color="red" />,
              title: 'Overview',
              headerStyle: {
                backgroundColor: '#f4511e',
              },
              headerTintColor: '#fff',
              headerTitleAlign: 'center',
              tabBarActiveTintColor: '#f4511e',
            })}
          />
          <Tab.Screen
            name="TabDetail"
            component={TabDetail}
            options={{
              tabBarIcon: () => (
                <Icon name="account-details" size={35} color="red" />
              ),
              title: 'My Details',
              headerStyle: {
                backgroundColor: '#f4511e',
              },
              headerTintColor: '#fff',
              headerTitleAlign: 'center',
              // tabBarBadge: 3,
              tabBarActiveTintColor: '#f4511e',
            }}
          />
        </Tab.Navigator>
      </NavigationContainer>
    </StyleProvider>
  );
}

export default App;

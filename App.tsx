import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Home from './src/pages/Home';
import DetailScreen from './src/pages/DetailScreen';
import TabHome from './src/pages/TabHome';
import TabDetail from './src/pages/TabDetail';

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
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
      </Stack.Navigator>
      {/* <Tab.Navigator>
        <Tab.Screen
          name="TabHome"
          component={TabHome}
          options={({navigation, route}) => ({
            title: 'Overview',
            // headerRight: () => <Button title="Update count" />,
            headerStyle: {
              backgroundColor: '#f4511e',
            },
            headerTintColor: '#fff',
            headerTitleAlign: 'center',
          })}
        />
        <Tab.Screen
          name="TabDetail"
          component={TabDetail}
          options={{
            title: 'My Details',
            headerStyle: {
              backgroundColor: '#f4511e',
            },
            headerTintColor: '#fff',
            headerTitleAlign: 'center',
            tabBarBadge: 3,
          }}
        />
      </Tab.Navigator> */}
    </NavigationContainer>
  );
}

export default App;

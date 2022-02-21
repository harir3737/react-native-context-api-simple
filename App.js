import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'
import Login from './src/Login'
import Dashboard from './src/Dashboard'
import { Loginprovider } from './context/login/loginContext'

const Stack=createStackNavigator();

const App=()=>{
  return(
    <NavigationContainer>
    <Stack.Navigator>
      <Stack.Screen name='login' component={Login} options={{title:"Context API Example",headerTitleAlign:"center"}}/>
      <Stack.Screen name='dash' component={Dashboard} options={{headerShown:false}}/>
    </Stack.Navigator>
    </NavigationContainer>
  )
}

export default() => {
  return (
    <Loginprovider>
      <App/>
    </Loginprovider>
  )
}

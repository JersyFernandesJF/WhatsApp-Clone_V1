import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, View, LogBox } from 'react-native';
import { useAssets } from 'expo-asset';
import { onAuthStateChanged } from 'firebase/auth'
import { NavigationContainer } from "@react-navigation/native"
import { createStackNavigator } from '@react-navigation/stack';
import { auth } from './firebase'
import SignIn from './screens/SignIn'

LogBox.ignoreLogs([
  "Setting a timer",

])

const Stack = createStackNavigator()

function App() {

  const [ currUser, setCurrUser ] = useState(null)
  const [ loading, setLoading ] = useState(true)

  useEffect(() => {
      const unsubscribe = onAuthStateChanged(auth, (user)=>{
        setLoading(false)
        if (user){
          setCurrUser(user)
        }
      })
      return () => unsubscribe()
  },[])
   if (loading){
    return <Text>Loading...</Text>
   }

  return (
   <NavigationContainer>
    {!currUser? (
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        <Stack.Screen name="signIn" component={SignIn}/>
      </Stack.Navigator>
    ): (
      <Text>Hi user!</Text>
    )}
      <Text>{JSON.stringify(currUser)}</Text>
   
   </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

function Main () {
  const [assets] = useAssets(
    require("./assets/icon-square.png"),
    require("./assets/chatbg.png"),
    require("./assets/user-icon.png"),
    require("./assets/welcome-img.png"),
  )
  if(!assets){
    return <Text>Loading...</Text>
  }
  return <App/>
}

export default Main
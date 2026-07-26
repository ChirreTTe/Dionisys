
import { Stack } from 'expo-router'

import { View, Text } from 'react-native'
import React from 'react'
import { HeaderShownContext } from 'expo-router/build/react-navigation'

const AuthLayout = () => {
  return <Stack
    screenOptions={{
      headerShown: false,
        contentStyle: {
            
            backgroundColor: 'background' 
        },
    }}
    >

      <Stack.Screen
          name='login/index'
          options={{
              title: 'Login'
          }}/>
          
    </Stack>
}

export default AuthLayout
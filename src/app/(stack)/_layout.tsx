import { Color } from 'expo-router'
import { View, Text } from 'react-native'
import React from 'react'
import { Stack } from 'expo-router'

const StackLayout = () => {
return <Stack
    screenOptions={{
        contentStyle: {
            
            backgroundColor: 'background' 
        },
    }}
    >
    
    {/* <Stack.Screen
    name='inicio/index'
    options={{
        title: 'Inicio'
    }}/> */}



    {/* <Stack.Screen
    name='ambiente/index'
    options={{
        title: 'Ambiente'
    }}/>

    <Stack.Screen
    name='novedades/index'
    options={{
        title: 'Novedades'
    }}/>

    <Stack.Screen
    name='profile/index'
    options={{
        title: 'Profile'
    }}/> */}


    {/* <Stack.Screen
    name='home/index.tsx'
    options={{
        title: 'home'
    }}/> */}


    
</Stack>
}

export default StackLayout
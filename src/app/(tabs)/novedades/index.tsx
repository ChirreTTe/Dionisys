import { View, Text } from 'react-native'
import React from 'react'
import CustomTarget from '@/components/Target/CustomTarget'

const NovedadesScreen = () => {
  return (
    <View className='flex-1 mt-7 mx-2.5'>
      <View className='flex-1 mt-8'>

        <View className='rounded-2xl p-3'>

        <CustomTarget
        className='p-3 '
        title='Ambiente'
        subtitle=''>
          <Text>Ho</Text>


        </CustomTarget>
        
        </View>

        



      </View>
    </View>
  )
}

export default NovedadesScreen
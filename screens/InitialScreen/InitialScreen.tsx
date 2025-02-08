import Button from '@/components/ui/Button'
import React from 'react'
import { SafeAreaView, Text } from 'react-native'

const InitialScreen: React.FC = () => {
  return (
    <SafeAreaView>
        <Text>Initial View</Text>
        <Button title="Click" color='primary' size='medium' />
    </SafeAreaView>
  )
}

export default InitialScreen
import { View, Text, SafeAreaView, StyleSheet } from 'react-native'
import React from 'react'
import { Image } from 'react-native';
import commstyles from '../../styles/common';


const Page = () => {
  return (
    <SafeAreaView>
      <View style={commstyles.homeArea}>
        <Text>Page</Text>
      </View>
      <View style={commstyles.homeArea}>
        <Text>Page</Text>
      </View>
      <View style={commstyles.homeArea}>
        <Text>Page</Text>
      </View>
    </SafeAreaView>
  )
}

export default Page;


import { View, Text } from 'react-native'
import React from 'react'

export default function SecondPage(props) {
  return (
    <View>
      <Text style={{ fontSize: 30 }}>SecondPage</Text>
      <Text>useName = {props.route.params != undefined ? props.route.params.userName : '...'}</Text>
    </View>
  )
}
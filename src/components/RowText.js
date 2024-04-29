import React from 'react'
import {Feather} from '@expo/vector-icons'
import { StyleSheet, Text, View } from 'react-native'

function RowText(props) {
    const { messageOne, messageTwo, messageOneStyle, messageTwoStyle, container} = props
  return (
    <View style={container}>
        <Text style={messageOneStyle}>{messageOne}</Text>
        <Text style={messageTwoStyle}>{messageTwo}</Text>
    </View>
  )
}

// const styles = StyleSheet.create({
//     container: {
//         alignItems: 'center'
//     },
//     textTheme: {
//         fontWeight: 'bold'
//     }
// })

export default RowText
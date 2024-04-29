import React from 'react'
import {Feather} from '@expo/vector-icons'
import { StyleSheet, Text, View } from 'react-native'

function ErrorItem() {
  return (
    <View style={styles.container}>
        <Text style={styles.error}>Sorry. Something went wrong</Text>
        <Feather name={'frown'} size={100} color={'white'} />
    </View>
  )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'red',
        justifyContent: 'center',
        alignItems: 'center'
    },
    error: {
        fontSize: 30,
        color: 'white',
        marginHorizontal: 10,
        textAlign: 'center'
    }
})

export default ErrorItem
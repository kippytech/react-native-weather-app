import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, SafeAreaView } from 'react-native';
import {Feather} from '@expo/vector-icons'
import RowText from '../components/RowText';
import { weatherType } from '../utilities/weatherType';

export default function CurrentWeather({weatherData}) {

  const { main: {temp, feels_like, temp_max, temp_min}, weather } = weatherData

  const weatherCondition =  weather[0]?.main
  return (
    <SafeAreaView style={[styles.wrapper, {backgroundColor: weatherType[weatherCondition].backgroundColor}]}>
      <View style={styles.container}>
        <Feather name={weatherType[weatherCondition].icon} size={80} color='white' />
        <Text style={styles.tempStyles}>{`${temp}°`}</Text>
        <Text style={styles.feels}>{`Feels like ${feels_like}`}</Text>
        <RowText messageOne={`High: ${temp_max}° `} messageTwo={`Low: ${temp_min}°`} container={styles.hlWrapper} messageOneStyle={styles.highLow} messageTwoStyle={styles.highLow} />
      </View>
      <RowText messageOne={weather[0].description} messageTwo={weatherType[weatherCondition].message} container={styles.bodyWrapper} messageOneStyle={styles.description} messageTwoStyle={styles.message} />
        {/*<StatusBar style="auto" />*/}
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  wrapper: {
    flex: 1,
    //backgroundColor: 'green',
  },
  container: {
    flex: 1,
    //backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  tempStyles: {
    color: 'black',
    fontSize: 48
  },
  feels: {
    color: 'black',
    fontSize: 30
  },
  highLow: {
    color: 'black',
    fontSize: 20
  },
  hlWrapper: {
    flexDirection: 'row'
  },
  bodyWrapper: {
    justifyContent: 'flex-end',
    alignItems: 'flex-start',
    paddingLeft: 25,
    marginBottom: 40
  },
  description: {
    fontSize: 43
  },
  message: {
    fontSize: 25
  }
});

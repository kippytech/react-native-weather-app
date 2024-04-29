import React from 'react'
import {StyleSheet, SafeAreaView, Text, FlatList, View, StatusBar, Image, ImageBackground} from 'react-native'
import ListItem from '../components/ListItem'

// const DATA =[
//     {
//         dt_txt: '2024-04-28 12:00',
//         main: {
//             temp_max: 8.55,
//             temp_min: 7.55,
//         },
//         weather: [
//             {
//                 main: 'Clear'
//             }
//         ]
//     },
//     {
//         dt_txt: '2024-04-28 15:00',
//         main: {
//             temp_max: 8.55,
//             temp_min: 7.55,
//         },
//         weather: [
//             {
//                 main: 'Clear'
//             }
//         ]
//     },
//     {
//         dt_txt: '2024-04-28 18:00',
//         main: {
//             temp_max: 8.55,
//             temp_min: 7.55,
//         },
//         weather: [
//             {
//                 main: 'Clear'
//             }
//         ]
//     },
// ]

function UpcomingWeather({ weatherData}) {
    const renderItem = ({item}) => {
        return (
            <ListItem condition={item.weather[0].main} dt_txt={item.dt_txt} min={item.main.temp_min} max={item.main.temp_max}  />
        )
    }

    const {container, image} = styles
  return (
    <SafeAreaView style={container}>
        <ImageBackground source={require('../../assets/upcoming-bg.jpg')} style={image}>
            <FlatList 
                data={weatherData} 
                renderItem={renderItem}
                keyExtractor={(item) => item.dt_txt} 
            />
        </ImageBackground>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        marginTop: StatusBar.currentHeight || 0,
        backgroundColor: 'blue'
    },
    image: {
        flex: 1
    }
})

export default UpcomingWeather
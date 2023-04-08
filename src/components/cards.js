import { ImageBackground, StyleSheet, Text, View } from 'react-native'
import React from 'react'

const Cards = () => {
  return (
    <View style={styles.container}>
        <ImageBackground
            source={require('../../assets/movies/movie_1.png')}
            resizeMode="center"
            borderRadius={10}
            style={{
                flex: 1
            }}
        />
    </View>
  )
}

export default Cards

const styles = StyleSheet.create({
    container:{
        width: 150,
        height: 200,
        backgroundColor: 'rgba(255, 255, 255, 0.2)',
        borderRadius: 10,
        marginHorizontal: 5
    }
})
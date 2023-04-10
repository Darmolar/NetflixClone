import { ImageBackground, StyleSheet, Text, View, TouchableOpacity } from 'react-native'
import React from 'react'
import { Ionicons, Itext } from '../utils'

const Cards = ({ propStyle, navigation }) => {
    return (
        <TouchableOpacity onPress={() => navigation.navigate('Details')} style={[styles.container, propStyle]}>
            <ImageBackground
                source={require('../../assets/movies/movie_1.png')}
                resizeMode="center"
                borderRadius={10}
                style={{
                    flex: 1
                }}
            />
        </TouchableOpacity>
    )
}

const HotizontalCard = () => {
    return (
        <TouchableOpacity onPress={() => navigation.navigate('Details')} style={styles.containerHorizontal}>
            <View style={{
                width: 150,
                height: 100,
            }}>
                <ImageBackground
                    source={require('../../assets/movies/movie_1.png')}
                    resizeMode="cover"
                    borderRadius={5}
                    style={{
                        flex: 1,
                        backgroundColor: 'rgba(255, 255, 255, 0.2)',
                        borderRadius: 5,
                    }}
                />
            </View>
            <View style={{ width: '50%' }}>
                <Itext type="H3">A Simple Lie</Itext>
            </View>
            <View style={styles.playButton}>
                <Ionicons name="play" color="#fff" size={18} style={{ left: 2 }} />
            </View>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    container: {
        width: 150,
        height: 200,
        backgroundColor: 'rgba(255, 255, 255, 0.2)',
        borderRadius: 10,
        marginHorizontal: 5,
    },
    containerHorizontal: {
        width: '95%',
        height: 100,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginVertical: 5,
    },
    playButton: {
        width: 33,
        height: 33,
        borderRadius: 33,
        justifyContent: 'center',
        alignItems: 'center',
        borderWidth: 1,
        borderColor: '#fff',

    }
})

export { Cards, HotizontalCard }
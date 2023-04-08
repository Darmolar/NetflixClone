import { Dimensions, ImageBackground, StyleSheet, Text, View, TouchableOpacity } from 'react-native'
import React from 'react'
import { StatusBar } from 'expo-status-bar'
import { Ionicons, Itext, Logo } from '../../utils';
import { ScrollView } from 'react-native-gesture-handler';
import { Cards } from '../../components';

const { width, height } = Dimensions.get('window');
const Home = () => {
    return (
        <View style={styles.container}>
            <StatusBar style='light' />
            <View style={styles.bgHeader}>
                <View style={styles.headFlex}>
                    <Logo />
                    <Ionicons name="ios-search" color="#fff" size={23} />
                </View>
                <View style={[styles.headFlex, { width: '80%', padding: 5, alignSelf: 'center' }]}>
                    <TouchableOpacity>
                        <Itext type="H3">TV Shows</Itext>
                    </TouchableOpacity>
                    <TouchableOpacity>
                        <Itext type="H3">Movies</Itext>
                    </TouchableOpacity>
                    <TouchableOpacity>
                        <Itext type="H3">Categories</Itext>
                    </TouchableOpacity>
                </View>
            </View>
            <ScrollView>
                <ImageBackground
                    source={require('../../../assets/movies/movie_1.png')}
                    style={{
                        width,
                        height: height - 300
                    }}
                >
                    <View style={{ flex: 1, backgroundColor: 'rgba(0,0,0,0.3)', justifyContent: 'flex-end' }}>
                        <View style={{ alignItems: 'center', width, backgroundColor: 'rgba(0,0,0,0.4)', borderTopWidth: 0, }}>
                            <Itext type="H1" stylesProp={{ fontSize: 40, }} >BEEF</Itext>
                            <View>
                                <Itext type="H3" stylesProp={{}} >#3 in TV Shows Today</Itext>
                            </View>
                            <View style={{ width: '70%', flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', }}>
                                <View style={{ alignItems: 'center' }}>
                                    <Ionicons name="add-sharp" color="#fff" size={25} />
                                    <Itext type="H5">My List</Itext>
                                </View>
                                <View style={{ alignItems: 'center' }}>
                                    <TouchableOpacity>

                                    </TouchableOpacity>
                                </View>
                                <View style={{ alignItems: 'center' }}>
                                    <Ionicons name="information-circle-outline" color="#fff" size={25} />
                                    <Itext type="H5">Info</Itext>
                                </View>
                            </View>
                        </View>
                    </View>
                </ImageBackground>
                <View style={styles.bodyList}>
                    <Itext type="H3" stylesProp={{ fontFamily: 'NunitoSans-ExtraBold', padding: 5 }}>Top 10 TV Shows in Nigeria Today</Itext>
                    <ScrollView style={{ marginTop: 10 }} horizontal showsHorizontalScrollIndicator={false}>
                        <Cards />
                        <Cards />
                        <Cards />
                        <Cards />
                        <Cards />
                    </ScrollView>
                </View>
            </ScrollView>
        </View>
    )
}

export default Home

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        backgroundColor: '#000'
    },
    bgHeader: {
        width,
        paddingTop: 40,
        padding: 20,
        position: 'absolute',
        top: 0,
        zIndex: 100
    },
    headFlex: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center'
    },
    bodyList: {
        width,
        alignItems: 'flex-start',
        marginVertical: 10
    }
})
import { Dimensions, ImageBackground, StyleSheet, Text, View, TouchableOpacity, ScrollView, TextInput, SafeAreaView, FlatList } from 'react-native';
import React from 'react';
import { StatusBar } from 'expo-status-bar'
import { Ionicons, Itext, Logo } from '../../utils';
import { Cards, HotizontalCard } from '../../components'; 
const DATA = [
    {
        id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba',
        title: 'First Item',
    }, 
    {
        id: '3ac68afeeec-c605-48d3-a4f8-fbd91aa97f63',
        title: 'Second Item',
    },
    {
        id: '58694a0f-3da1-471f-bd96-145571e29d72',
        title: 'Third Item',
    },
    {
        id: '3ac68afc-eec605-48d3-a4f8-fbd91aa97f63',
        title: 'Second Item',
    },
    {
        id: '58694a0f-3daee1-471f-bd96-145571e29d72',
        title: 'Third Item',
    },
];

const { width, height } = Dimensions.get('window');
const Details = ({ navigation }) => {
    return (
        <SafeAreaView style={styles.container}>
            <StatusBar style='light' />
            <View style={styles.bgHeader}>
                <View style={styles.headFlex}>
                    <Ionicons name="ios-arrow-back" color="#fff" size={23} onPress={() => navigation.goBack()} />
                    <View style={{ width: '20%', flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' }}>
                        <Ionicons name="ios-search-outline" color="#fff" size={23} onPress={() => navigation.goBack()} />
                        <Logo />
                    </View>
                </View>
            </View>
            <ScrollView style={styles.body}>
                <View style={styles.previewCon}>

                </View>
                <View style={{ padding: 5 }}>
                    <Itext type="H1">Beef</Itext>
                    <View style={{ flexDirection: 'row', alignItems: 'center', marginTop: 10 }}>
                        <Itext type="H4" stylesProp={{ color: "rgba(255,255,255,0.7)" }}>2023</Itext>
                        <View style={{ marginLeft: 10, padding: 2, backgroundColor: 'rgba(255,255,255,0.2)', borderRadius: 5, alignItems: 'center', justifyContent: 'center' }}>
                            <Itext type="H4" stylesProp={{ color: "rgba(255,255,255,0.7)", }}>16+</Itext>
                        </View>
                        <Itext type="H4" stylesProp={{ marginLeft: 10, color: "rgba(255,255,255,0.7)", }}>2h 17m </Itext>
                        <Itext type="H4" stylesProp={{ marginLeft: 10, color: "rgba(255,255,255,0.7)", }}>HD</Itext>
                    </View>
                </View>
                <TouchableOpacity style={[styles.button, { backgroundColor: '#fff' }]}>
                    <Ionicons name="ios-play" color="#000" size={23} />
                    <Itext type="H3" stylesProp={{ color: '#000', marginLeft: 10 }} >Play</Itext>
                </TouchableOpacity>
                <TouchableOpacity style={[styles.button]}>
                    <Ionicons name="ios-download-outline" color="#fff" size={23} />
                    <Itext type="H3" stylesProp={{ marginLeft: 10 }} >Download</Itext>
                </TouchableOpacity>
                <View style={{ marginVertical: 10 }}>
                    <Itext type="H4">At the top of the synopsis, write your script's title and state that it’s a synopsis. Under the title, let the reader know what genre your synopsis is.</Itext>
                </View>
                <View style={{ marginVertical: 5 }}>
                    <Itext type="H5" stylesProp={{ color: "rgba(255,255,255,0.7)", }} >Starring: Rowan Akintosin, Dominic West, Anderson ...more</Itext>
                    <Itext type="H5" stylesProp={{ color: "rgba(255,255,255,0.7)", }} >Director: Oliver Parker</Itext>
                </View> 
                <View>
                    <Itext type="H3" stylesProp={{ fontFamily: 'NunitoSans-ExtraBold', padding: 5, }}>MORE LIKE THIS</Itext>
                    <FlatList
                        data={DATA}
                        renderItem={({ item }) => <Cards navigation={navigation} propStyle={{ width: (width / 3) - 10, marginVertical: 5, marginHorizontal: 5 }} />}
                        keyExtractor={item => item.id}
                        numColumns={3}
                        horizontal={false}
                        style={{ width, marginBottom: 80 }}
                    />
                </View>
            </ScrollView>
        </SafeAreaView>
    )
}

export default Details

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        backgroundColor: '#000'
    },
    bgHeader: {
        width,
        paddingLeft: 20,
        paddingRight: 20,
        // backgroundColor: 'red'
    },
    headFlex: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center'
    },
    body: { 
        marginTop: 10, 
    },
    previewCon: {
        width,
        height: 250,
        backgroundColor: 'rgba(255,255,255,0.2)',
    },
    button: {
        width,
        height: 50,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 5,
        backgroundColor: 'rgba(255,255,255,0.2)',
        marginVertical: 5
    }
})
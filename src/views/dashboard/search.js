import { Dimensions, ImageBackground, StyleSheet, Text, View, TouchableOpacity, ScrollView, TextInput, SafeAreaView, FlatList } from 'react-native';
import React, { useState } from 'react'
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
    {
        id: '3aceee68afc-c605-48d3-a4f8-fbd91aa97f63',
        title: 'Second Item',
    },
    {
        id: '58694a0f-3da1-471f-eeebd96-145571e29d72',
        title: 'Third Item',
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
export default function Search({ navigation }) {
    const [serachValue, setSearchValue] = useState("");
    return (
        <SafeAreaView style={styles.container}>
            <StatusBar style='light' />
            <View style={styles.bgHeader}>
                <View style={styles.headFlex}>
                    <Ionicons name="ios-arrow-back" color="#fff" size={23} onPress={() => navigation.goBack()} />
                    <Logo />
                </View>
            </View>
            <View style={styles.searchContainer}>
                <Ionicons name="ios-search-outline" color="#fff" size={30} />
                <TextInput
                    placeholder="Search for a show, movie, genre, etc."
                    placeholderTextColor="#ccc"
                    value={serachValue}
                    onChangeText={val => setSearchValue(val)}
                    style={{
                        width: '80%',
                        fontFamily: 'NunitoSans-SemiBold',
                        color: '#fff',
                        fontSize: 14,
                    }}
                />
                <Ionicons name="ios-mic-outline" color="#fff" size={25} />
            </View>
            <View style={styles.bodyList}>
                {
                    !serachValue ?
                        <ScrollView style={{ width, marginBottom: 150 }} showsVerticalScrollIndicator={false}>
                            <Itext type="H3" stylesProp={{ fontFamily: 'NunitoSans-ExtraBold', padding: 5 }}>Top Searches</Itext>
                            <HotizontalCard navigation={navigation} />
                            <HotizontalCard navigation={navigation} />
                        </ScrollView>
                        :
                        <>
                            <Itext type="H3" stylesProp={{ fontFamily: 'NunitoSans-ExtraBold', padding: 5, }}>Movies & TV</Itext>
                            <FlatList
                                data={DATA}
                                renderItem={({ item }) => <Cards navigation={navigation} propStyle={{ width: (width / 3) - 10, marginVertical: 5, marginHorizontal: 5 }} />}
                                keyExtractor={item => item.id}
                                numColumns={3}
                                horizontal={false}
                                style={{ width, marginBottom: 80 }}
                            />
                        </>
                }
            </View>
        </SafeAreaView>
    )
}

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
    searchContainer: {
        width,
        height: 50,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        backgroundColor: 'rgba(255,255,255,0.3)',
        paddingLeft: 20,
        paddingRight: 20,
    },
    bodyList: {
        width,
        alignItems: 'flex-start',
        marginTop: 10,
    }
})
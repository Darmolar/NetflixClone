import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

export default function Itext(props) {
    const { type, stylesProp, children } = props;

    if (type === 'H1') {
        return (
            <View>
                <Text style={[styles.h1, stylesProp]}>{children}</Text>
            </View>
        )
    }
    if (type === 'H2') {
        return (
            <View>
                <Text style={[styles.h2, stylesProp]}>{children}</Text>
            </View>
        )
    }
    if (type === 'H3') {
        return (
            <View>
                <Text style={[styles.h3, stylesProp]}>{children}</Text>
            </View>
        )
    }
    if (type === 'H4') {
        return (
            <View>
                <Text style={[styles.h4, stylesProp]}>{children}</Text>
            </View>
        )
    }
    if (type === 'H5') {
        return (
            <View>
                <Text style={[styles.h5, stylesProp]}>{children}</Text>
            </View>
        )
    }
    if (type === 'H6') {
        return (
            <View>
                <Text style={[styles.h6, stylesProp]}>{children}</Text>
            </View>
        )
    }
    return (
        <View>
            <Text style={[styles.h4, stylesProp]}>{children}</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    h1: {
        fontSize: 24,
        fontFamily: 'NunitoSans-ExtraBold',
        color: '#fff',
    },
    h2: {
        fontSize: 20,
        fontFamily: 'NunitoSans-Bold',
        color: '#fff',
    },
    h3: {
        fontSize: 16,
        fontFamily: 'NunitoSans-SemiBold',
        color: '#fff',
    },
    h4: {
        fontSize: 14,
        fontFamily: 'NunitoSans-Regular',
        color: '#fff',
    },
    h5: {
        fontSize: 12,
        fontFamily: 'NunitoSans-Light',
        color: '#fff',
    },
    h6: {
        fontSize: 10,
        fontFamily: 'NunitoSans-ExtraLight',
        color: '#fff',
    }, 
})
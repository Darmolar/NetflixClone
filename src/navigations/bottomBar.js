import React, { useEffect, useState, useRef } from 'react';
import { View, Text, TouchableOpacity, Dimensions } from 'react-native';
import Home from '../views/dashboard/home';
import Profile from '../views/dashboard/profile';
import Search from '../views/dashboard/search';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Ionicons, Itext } from '../utils'; 

const { width, height } = Dimensions.get('window');
function MyTabBar({ state, descriptors, navigation }) {
    return (
        <View style={{ backgroundColor: '#000', width, height: 80, flexDirection: 'row', justifyContent: 'space-evenly', alignItems: 'center' }}>
            {state.routes.map((route, index) => {
                const { options } = descriptors[route.key];
                const label =
                    options.tabBarLabel !== undefined
                        ? options.tabBarLabel
                        : options.title !== undefined
                            ? options.title
                            : route.name;

                const isFocused = state.index === index;

                const onPress = () => {
                    const event = navigation.emit({
                        type: 'tabPress',
                        target: route.key,
                        canPreventDefault: true,
                    });

                    if (!isFocused && !event.defaultPrevented) {
                        // The `merge: true` option makes sure that the params inside the tab screen are preserved
                        navigation.navigate({ name: route.name, merge: true });
                    }
                };

                const onLongPress = () => {
                    navigation.emit({
                        type: 'tabLongPress',
                        target: route.key,
                    });
                };

                return (
                    <TouchableOpacity
                        key={index}
                        accessibilityRole="button"
                        accessibilityState={isFocused ? { selected: true } : {}}
                        accessibilityLabel={options.tabBarAccessibilityLabel}
                        testID={options.tabBarTestID}
                        onPress={onPress}
                        onLongPress={onLongPress}
                        // style={{ flex: 1 }}
                    > 
                        <Itext propStyle={{ color: isFocused ? '#673ab7' : '#222' }}>{label}</Itext>
                    </TouchableOpacity>
                );
            })}
        </View>
    );
}

const Tab = createBottomTabNavigator();
export default function MyTabs() {
    return (
        <Tab.Navigator barStyle={{ backgroundColor: '#000' }} tabBar={props => <MyTabBar {...props} />}>
            <Tab.Screen
                name="Home"
                component={Home} 
                options={{ headerShown: false }} 
            />
            <Tab.Screen name="Profile" component={Profile} options={{ headerShown: false }}  />
            <Tab.Screen name="Search" component={Search} options={{ headerShown: false }}  />
        </Tab.Navigator>
    )
}
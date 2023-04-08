import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { useFonts } from 'expo-font';
import { NavigationContainer } from '@react-navigation/native';
import MyStacks from './src/navigations/stacks';

export default function App() {
  const [fontsLoaded] = useFonts({
    'NunitoSans-Black': require('./assets/fonts/NunitoSans-Black.ttf'),
    'NunitoSans-BlackItalic': require('./assets/fonts/NunitoSans-BlackItalic.ttf'),
    'NunitoSans-Bold': require('./assets/fonts/NunitoSans-Bold.ttf'),
    'NunitoSans-BoldItalic': require('./assets/fonts/NunitoSans-BoldItalic.ttf'),
    'NunitoSans-ExtraBold': require('./assets/fonts/NunitoSans-ExtraBold.ttf'),
    'NunitoSans-ExtraBoldItalic': require('./assets/fonts/NunitoSans-ExtraBoldItalic.ttf'),
    'NunitoSans-ExtraLight': require('./assets/fonts/NunitoSans-ExtraLight.ttf'),
    'NunitoSans-Italic': require('./assets/fonts/NunitoSans-Italic.ttf'),
    'NunitoSans-Light': require('./assets/fonts/NunitoSans-Light.ttf'),
    'NunitoSans-LightItalic': require('./assets/fonts/NunitoSans-LightItalic.ttf'), 
    'NunitoSans-Regular': require('./assets/fonts/NunitoSans-Regular.ttf'),
    'NunitoSans-SemiBold': require('./assets/fonts/NunitoSans-SemiBold.ttf'),
    'NunitoSans-SemiBoldItalic': require('./assets/fonts/NunitoSans-SemiBoldItalic.ttf'), 
 
  });

  if (!fontsLoaded) {
    return null;
  }
  return (
    <NavigationContainer>
      <MyStacks />
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({ 
});

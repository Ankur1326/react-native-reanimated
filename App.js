import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View } from 'react-native';
import CartInfo from './Components/CartInfo';
import BottomNav from './Components/BottomNav';
import AnotherNavigation from './Components/AnotherNavigation';
import CircleAnimation from './Components/gastureHandler/CircleAnimation';
import LockScreen from './Components/gastureHandler/LockScreen';
import { GestureHandlerRootView } from "react-native-gesture-handler"
import SwipeButton from './Components/gastureHandler/SwipeButton';
import EmailSwipe from './Components/gastureHandler/EmailSwipe';
import { Appearance } from 'react-native';
import { useState } from 'react';
import AnimatedBtnLoader from './Components/AnimatedBtnLoader';

export default function App() {
  
  const [systemTheme, setSystemTheme] = useState(Appearance.getColorScheme());
  console.log("systemTheme :: ", systemTheme);
  
  
  Appearance.addChangeListener(({ colorScheme }) => {
    setSystemTheme(colorScheme);
    console.log("colorScheme : ", colorScheme);
  });
  
  console.log("systemTheme ::: ", systemTheme);

  return (
      <GestureHandlerRootView style={styles.container}>
        <StatusBar style="auto" />
        {/* <CartInfo /> */}
        {/* <BottomNav /> */}
        {/* <AnotherNavigation /> */}
        {/* <CircleAnimation /> */}
        {/* <LockScreen /> */}
        {/* <SwipeButton /> */}
        {/* <EmailSwipe /> */}
        <AnimatedBtnLoader />
      </GestureHandlerRootView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    // alignItems: "center",
    // justifyContent: "center"
  },
});
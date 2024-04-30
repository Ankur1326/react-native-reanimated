import { View, Text } from 'react-native'
import React from 'react'
import { PanGestureHandler } from 'react-native-gesture-handler'
import Animated, { useAnimatedGestureHandler, useAnimatedStyle, useSharedValue, withTiming } from 'react-native-reanimated'

const LockScreen = () => {
  const y = useSharedValue(0)

  const animatedStyle = useAnimatedStyle(() => {
    return {
      transform: [{ translateY: withTiming(y.value, {duration: 0}) }]
    }
  })

  
  const unlockGestureHandler = useAnimatedGestureHandler({
    onStart: (event) => {
      console.log("Start");
      y.value = event.translationY
    },
    onActive: (event) => {
      // console.log("Active", event);
      y.value = event.translationY
    },
    onEnd: (event) => {
      y.value = 0
      // console.log("end");
    },
  })

  return (
    <View style={{ flex: 1 }} >
      <Text>LockScreen</Text>
      <Text>LockScreen</Text>
      <Text>LockScreen</Text>

      <PanGestureHandler onGestureEvent={unlockGestureHandler}>
        <Animated.View style={[{ backgroundColor: "red", position: "absolute", width: "100%", height: 100, bottom: 0, left: 0 }, animatedStyle]}>


        </Animated.View>
      </PanGestureHandler>
    </View>
  )
}

export default LockScreen
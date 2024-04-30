import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { PanGestureHandler } from "react-native-gesture-handler"
import Animated, { Extrapolate, Extrapolation, interpolate, useAnimatedGestureHandler, useAnimatedStyle, useSharedValue, withSpring, withTiming } from 'react-native-reanimated'
import { MaterialIcons } from '@expo/vector-icons';

const SwipeButton = () => {
    const x = useSharedValue(10)
    const opacity = useSharedValue(1)
    const shouldOrderPlace = useSharedValue(false);

    const animatedStyle = useAnimatedStyle(() => {
        return {
            transform: [{ translateX: x.value }],
        }
    })
    const textStyle = useAnimatedStyle(() => {
        return {
            transform: [{ translateX: x.value }],
            opacity: interpolate(x.value, [0, 230], [1, 0], Extrapolate.CLAMP)
        }
    })

    function orderPlace() {
        console.log("orderPlace called");
    }


    const animatedGestureHandler = useAnimatedGestureHandler({
        onActive: (e) => {
            x.value = e.translationX
        },
        onEnd: (e) => {
            if (e.velocityX > 1000 || e.translationX > 130) {
                shouldOrderPlace.value = true
                x.value = withSpring(214)
            } else {
                x.value = withSpring(0)
            }
        },
    })

    // Call orderPlace function if shouldOrderPlace is true
    React.useEffect(() => {
        if (shouldOrderPlace.value) {
            console.log("hello");
            orderPlace()
            shouldOrderPlace.value = false // // Reset the flag
        }
    }, [shouldOrderPlace.value])


    return (
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
            <View style={{ width: "80%", height: 60, backgroundColor: "#e09e34", borderRadius: 10, justifyContent: 'center', alignItems: 'center', overflow: 'hidden' }} >
                <Animated.Text style={[{ position: 'absolute' }, textStyle]} >{`>> Swipe right to order place>>`}</Animated.Text>
                <PanGestureHandler onGestureEvent={animatedGestureHandler}>
                    <Animated.View style={[{ width: 50, height: 50, backgroundColor: "#ff8080", position: 'absolute', left: 10, borderRadius: 10, justifyContent: 'center', alignItems: 'center' }, animatedStyle]}>
                        <MaterialIcons name="keyboard-double-arrow-right" size={24} color="white" />
                    </Animated.View>

                </PanGestureHandler>
            </View>
        </View>
    )
}

export default SwipeButton

const styles = StyleSheet.create({})
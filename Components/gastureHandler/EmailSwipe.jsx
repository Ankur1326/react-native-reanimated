import { Pressable, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { PanGestureHandler } from "react-native-gesture-handler"
import Animated, { useAnimatedGestureHandler, useAnimatedStyle, useSharedValue, withSpring } from 'react-native-reanimated'
import { MaterialCommunityIcons } from '@expo/vector-icons';

const AnimatedPressable = Animated.createAnimatedComponent(Pressable)
const EmailSwipe = () => {
    const animation = useSharedValue(0)

    const gesturehandler = useAnimatedGestureHandler({
        onStart: (event, context) => {
            context.startX = animation.value
        },
        onActive: (event, context) => {
            animation.value = context.startX + event.translationX;
        },
        onEnd: (event, context) => {
            if (animation.value > 70) {
                animation.value = withSpring(100)
            } 
            else if(animation.value < -70) {
                 animation.value = withSpring(-100)   
            }
            else  {
                animation.value = withSpring(0)
            }
        },
    })

    const animatedStyle = useAnimatedStyle(() => {
        return {
            transform: [{ translateX: animation.value }]
        }
    })

    const animatedLeftIconStyle = useAnimatedStyle(() => {
        return {
            transform: [{ scale: animation.value > 70 ? withSpring(2) : withSpring(1) }]
        }
    })

    const animatedRigntIconStyle = useAnimatedStyle(() => {
        return {
            transform: [{ scale: animation.value > -70 ? withSpring(1) : withSpring(2) }]
        }
    })


    const downloadEnail = () => {
        console.log("called downloadEnail function");
    }

    return (
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center', backgroundColor: "#9999" }} >
            <PanGestureHandler onGestureEvent={gesturehandler}>
                <Animated.View style={{ width: "95%", height: 100, backgroundColor: "green", elevation: 5, flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between',borderRadius: 15 }}>

                    <AnimatedPressable onPress={() => downloadEnail()}  style={[{ height: "100", marginLeft: 35 }, animatedLeftIconStyle]}>
                        <MaterialCommunityIcons name="progress-download" size={24} color="white" />
                    </AnimatedPressable>

                    <AnimatedPressable onPress={() => downloadEnail()}  style={[{ height: "100", marginRight: 35 }, animatedRigntIconStyle]}>
                        <MaterialCommunityIcons name="progress-download" size={24} color="white" />
                    </AnimatedPressable>

                    <Animated.View style={[{ width: "100%", height: "100%", backgroundColor: "white", position: 'absolute', borderRadius: 15, alignItems: 'center', justifyContent:'center' }, animatedStyle]}>

                          <Text>Swipe right or left</Text>  
                    </Animated.View>
                </Animated.View>

            </PanGestureHandler>
        </View>
    )
}

export default EmailSwipe

const styles = StyleSheet.create({})
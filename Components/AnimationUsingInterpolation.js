import { View, Text, TouchableOpacity } from 'react-native'
import React, { useState } from 'react'
import Animated, { interpolate, interpolateColor, useAnimatedStyle, useSharedValue, withSpring } from 'react-native-reanimated'

const AnimationUsingInterpolation = () => {
    const animation = useSharedValue(1)
    const [isClicked, setClicked] = useState(false)

    const animatedStyle = useAnimatedStyle(() => {

        const width = interpolate(animation.value, [1, 0], [100, 200])
        const backgroundColor = interpolateColor(animation.value, [1, 0], ['orange', 'purple'])
        
        return {
            width: width,
            height: width,
            backgroundColor: backgroundColor
        }
    })
    
    return (
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }} >
            <Animated.View style={[{ width: 100, height: 100, backgroundColor: "blue" }, animatedStyle]} >
            </Animated.View>

            <TouchableOpacity onPress={() => {
                if (isClicked) {
                    animation.value = withSpring(0)
                } else {
                    animation.value = withSpring(1)
                }
                setClicked(!isClicked)
            }} style={{ width: 200, height: 50, backgroundColor: "black", alignItems:'center', justifyContent: 'center', marginTop: 30 }}>
                <Text style={{ color: "white"}}>Start Animation</Text>
            </TouchableOpacity>
        </View>
    )
}

export default AnimationUsingInterpolation
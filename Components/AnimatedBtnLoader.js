import { View, Text, ActivityIndicator, TouchableOpacity } from 'react-native'
import React, { useEffect, useState } from 'react'
import Animated, { useAnimatedStyle, useSharedValue, withTiming } from 'react-native-reanimated'

const LoginBtn = Animated.createAnimatedComponent(TouchableOpacity)

const AnimatedBtnLoader = () => {
    const btnWidth = useSharedValue(200)
    const [btnClicked, setBtnClicked] = useState(false)

    const animatedBtnStyle = useAnimatedStyle(() => {
        return {
            width: btnWidth.value
        }
    })

    const btnAnimatedValueHandler = () => {
        btnWidth.value = withTiming(60, { duration: 500 })
        setTimeout(() => {
            setBtnClicked(true)
        }, 500)
        setTimeout(() => {
            btnWidth.value = withTiming(200, { duration: 500 })
            setTimeout(() => {
                setBtnClicked(false)
            }, 300)
        }, 2000);
    }

    return (
        <View style={{ flex: 1, marginTop: 30, alignItems: 'center', justifyContent: 'center' }}>
            <LoginBtn onPress={() => btnAnimatedValueHandler()} style={[{ backgroundColor: "red", width: 200, alignItems: 'center', justifyContent: 'center', paddingVertical: 7, borderRadius: 30 }, animatedBtnStyle]} >
                {
                    btnClicked ? <ActivityIndicator size="large" color="white" /> : <Text style={{ color: "white", fontSize: 20 }} >Login</Text>
                }
            </LoginBtn>
        </View>
    )
}

export default AnimatedBtnLoader
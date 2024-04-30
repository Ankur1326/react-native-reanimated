import { View, TouchableOpacity } from 'react-native'
import React, { useEffect, useState } from 'react'
import { AntDesign } from '@expo/vector-icons';
import { Ionicons } from '@expo/vector-icons';
import Animated, { useAnimatedStyle, useSharedValue, withSpring, withTiming } from "react-native-reanimated"

const BottomNav = () => {
    const [selectedTab, setSelectedTab] = useState(0)
    const animatedX = useSharedValue(0)
    const animatedY = useSharedValue(0)

    const animatedBtn0Y = useSharedValue(0)
    const animatedBtn1Y = useSharedValue(0)
    const animatedBtn2Y = useSharedValue(0)

    const animatedBtn0Style = useAnimatedStyle(() => {
        return {
            transform: [{ translateY: -animatedBtn0Y.value }]
        }
    })
    const animatedBtn1Style = useAnimatedStyle(() => {
        return {
            transform: [{ translateY: -animatedBtn1Y.value }]
        }
    })
    const animatedBtn2Style = useAnimatedStyle(() => {
        return {
            transform: [{ translateY: -animatedBtn2Y.value }]
        }
    })

    useEffect(() => {
        if (selectedTab == 0) {
            animatedY.value = withTiming(50, { duration: 200 })
            setTimeout(() => {
                animatedX.value = withTiming(-17, { duration: 500 })
            }, 200);
            setTimeout(() => {
                animatedY.value = withTiming(-20, { duration: 200 })
                setTimeout(() => {
                    animatedY.value = withTiming(0, { duration: 200 })
                }, 250);
                animatedBtn0Y.value = withTiming(60, { duration: 200 })
                setTimeout(() => {
                    animatedBtn0Y.value = withTiming(0, { duration: 600 })
                }, 300);
            }, 700);

        } else if (selectedTab == 1) {
            animatedY.value = withTiming(50, { duration: 200 })
            setTimeout(() => {
                animatedX.value = withTiming(78, { duration: 500 })
            }, 200);
            setTimeout(() => {
                animatedY.value = withTiming(-20, { duration: 200 })
                setTimeout(() => {
                    animatedY.value = withTiming(0, { duration: 200 })
                }, 250);
                animatedBtn1Y.value = withTiming(60, { duration: 200 })
                setTimeout(() => {
                    animatedBtn1Y.value = withTiming(0, { duration: 600 })
                }, 300);
            }, 700);
        } else {
            animatedY.value = withTiming(50, { duration: 200 })
            setTimeout(() => {
                animatedX.value = withTiming(175, { duration: 500 })
            }, 200);
            setTimeout(() => {
                animatedY.value = withTiming(-20, { duration: 200 })
                setTimeout(() => {
                    animatedY.value = withTiming(0, { duration: 200 })
                }, 250);
                animatedBtn2Y.value = withTiming(60, { duration: 200 })
                setTimeout(() => {
                    animatedBtn2Y.value = withTiming(0, { duration: 600 })
                }, 300);
            }, 700);
        }
    }, [selectedTab])

    const animatedStyle = useAnimatedStyle(() => {
        return {
            transform: [{ translateX: animatedX.value }, { translateY: animatedY.value }]
        }
    })

    return (
        <View style={{ flex: 1, marginTop: 30, backgroundColor: "#F2F2F2" }} >

            <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-evenly', backgroundColor: "white", position: 'absolute', bottom: 0, width: "100%", height: 70 }} >
                <Animated.View style={[{ backgroundColor: "#eb973d", width: 60, height: 60, borderRadius: 30, position: 'absolute' }, animatedStyle]} ></Animated.View>

                <TouchableOpacity onPress={() => setSelectedTab(0)}>
                    <Animated.View style={[{}, animatedBtn0Style]} >
                        <Ionicons name="home-outline" size={24} color="black" />
                    </Animated.View>
                </TouchableOpacity>
                <TouchableOpacity onPress={() => setSelectedTab(1)}>
                    <Animated.View style={[{}, animatedBtn1Style]} >
                        <Ionicons name="bag-outline" size={24} color="black" />
                    </Animated.View>
                </TouchableOpacity>
                <TouchableOpacity onPress={() => setSelectedTab(3)}>
                    <Animated.View style={[{}, animatedBtn2Style]} >
                        <AntDesign name="user" size={24} color="black" />
                    </Animated.View>
                </TouchableOpacity>
            </View>

        </View>
    )
}

export default BottomNav
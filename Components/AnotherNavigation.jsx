import { View, Text, TouchableOpacity, Pressable } from 'react-native'
import React, { useState } from 'react'
import { Ionicons } from '@expo/vector-icons';
import { AntDesign } from '@expo/vector-icons';
import { FontAwesome6 } from '@expo/vector-icons';
import { FontAwesome5 } from '@expo/vector-icons';
import Animated, { useAnimatedStyle, useSharedValue, withSpring, withTiming } from "react-native-reanimated"

const AnotherNavigation = () => {

    const [isClicked, setClicked] = useState(false)

    const uploadIcon = useSharedValue(1)
    const closeIcon = useSharedValue(0)
    const navBar = useSharedValue(0)
    const animatedY = useSharedValue(0)

    const uploadStyle = useAnimatedStyle(() => {
        return {
            transform: [{ scale: uploadIcon.value }]
        }
    })

    const closeStyle = useAnimatedStyle(() => {
        return {
            transform: [{ scale: closeIcon.value }]
        }
    })

    const navBarStyle = useAnimatedStyle(() => {
        return {
            transform: [{ scale: navBar.value }, { translateY: animatedY.value }]
        }
    })

    const uploadHandler = () => {
        setClicked(true)
        if (uploadIcon.value == 1) {
            uploadIcon.value = withTiming(0, { duration: 200 })
            closeIcon.value = withTiming(1, { duration: 200 })
            navBar.value = withTiming(1, { duration: 500 })
            animatedY.value = withTiming(-200, { duration: 2000 })
        }
        else {
            uploadIcon.value = withTiming(1, { duration: 200 })
            closeIcon.value = withTiming(0, { duration: 200 })
            navBar.value = withTiming(0, { duration: 500 })
            animatedY.value = withTiming(-200, { duration: 2000 })
        }
    }

    return (
        <View style={{ flex: 1, marginTop: 30, alignItems: 'center', justifyContent: 'center', }} >

            {/* Tab */}
            <Animated.View style={[{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-around', width: 300, height: 50, backgroundColor: "black", borderRadius: 10, position: 'absolute' }, navBarStyle]}>
                <FontAwesome5 name="camera" size={24} color="white" />
                <AntDesign name="filetext1" size={24} color="white" />
                <Ionicons name="document-outline" size={24} color="white" />
                <FontAwesome6 name="image" size={24} color="white" />
            </Animated.View>

            <Pressable onPress={() => uploadHandler()} style={{ backgroundColor: "black", width: 60, height: 60, alignItems: 'center', justifyContent: 'center', borderRadius: 30 }}>
                <Animated.View style={[{ position: 'absolute' }, uploadStyle]} >
                    <Ionicons name="share-sharp" size={30} color="white" />
                </Animated.View>
                <Animated.View style={[{ position: 'absolute' }, closeStyle]}>
                    <AntDesign name="close" size={30} color="white" />
                </Animated.View>
            </Pressable>
        </View>
    )
}

export default AnotherNavigation
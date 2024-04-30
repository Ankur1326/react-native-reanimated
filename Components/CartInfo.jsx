import { View, Text, Image, TouchableOpacity } from 'react-native'
import React, { useState } from 'react'
import { FontAwesome } from '@expo/vector-icons';

import Animated, { useAnimatedStyle, useSharedValue, withSpring, withTiming } from "react-native-reanimated"

const CartInfo = () => {
    const [count, setCount] = useState(0)
    const animateX = useSharedValue(0)
    const animateY = useSharedValue(0)
    const scale = useSharedValue(1)
    const scale2 = useSharedValue(1)

    const animatedStyle = useAnimatedStyle(() => {
        return {
            transform: [
                { translateX: animateX.value },
                { translateY: animateY.value },
                { scale: scale.value }
            ]
        }
    })
    const animatedStyle2 = useAnimatedStyle(() => {
        return {
            transform: [
                { scale: scale2.value }
            ]
        }
    })

    return (
        <View style={{ flex: 1, marginTop: 30 }}>
            <Image source={require("../assets/watch.jpeg")} style={{ width: 400, height: 300, resizeMode: 'contain' }} />
            <Text style={{ fontSize: 20 }}>Smart watch</Text>
            <Text style={{ fontSize: 14 }}>Can I use AI for product photos?
                AI image generation offers designers inspiration and details. It streamlines the process for the final image. In this article, we'll explain how to create AI generated product images to show all product details, maintain high quality and stay within the product context.
                Can I use AI for product photos?
                AI image generation offers designers inspiration and details. It streamlines the process for the final image. In this article, we'll explain how to create AI generated product images to show all product details, maintain high quality and stay within the product context.
                AI image generation offers designers inspiration and details. It streamlines the process for the final image. In this article, we'll explain how to create AI generated product images to show all product details, maintain high quality and stay within the product context.
                AI image generation offers designers inspiration and details.
            </Text>

            <Animated.View style={[{ width: 30, height: 30, borderRadius: 15, backgroundColor: "red", justifyContent: 'center', alignItems: 'center', alignSelf: 'center', zIndex: 99 }, animatedStyle]}>
                <Text style={{ color: "white", fontSize: 15 }} >{"+1"}</Text>
            </Animated.View>

            <TouchableOpacity onPress={() => {
                if (animateX.value == 0) {
                    scale.value = 1;
                    animateX.value = withTiming(140, { duration: 700 })
                    animateY.value = withTiming(-580, { duration: 700 })
                    setTimeout(() => {
                        setCount(count + 1)
                        scale.value = 0
                        animateX.value = withTiming(0, { duration: 500 })
                        animateY.value = withTiming(0, { duration: 500 })
                        scale2.value = withSpring(1.5)
                        setTimeout(() => {
                            scale2.value = withSpring(1)
                        }, 100);
                    }, 700);
                }
            }} style={{ width: "90%", height: 50, backgroundColor: "#333", alignItems: 'center', justifyContent: 'center', margin: 20, borderRadius: 10 }}>
                <Text style={{ color: "white" }}>Add to Cart</Text>
            </TouchableOpacity>

            <View style={{ width: 60, height: 60, borderRadius: 30, backgroundColor: "white", justifyContent: 'center', alignItems: 'center', position: 'absolute', top: 20, right: 20 }}>
                <FontAwesome name="shopping-bag" size={24} color="black" />
                <Animated.View style={[{ width: 30, height: 30, borderRadius: 15, backgroundColor: "red", justifyContent: 'center', alignItems: 'center', position: 'absolute', top: 0, right: 0 }, animatedStyle2]}>
                    <Text style={{ color: "white", fontSize: 15 }} >{count}</Text>
                </Animated.View>
            </View>
        </View>
    )
}

export default CartInfo
import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

const CircleAnimation = () => {
    return (
        <View>
            <View style={styles.circle} />
        </View>
    )
}

export default CircleAnimation

const styles = StyleSheet.create({
    circle: {
        height: 80,
        backgroundColor: "blue",
        aspectRatio: 1,
        borderRadius: 40
    }
})
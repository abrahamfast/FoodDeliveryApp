import React from "react"
import {
    View, Text, SafeAreaView, StyleSheet, TouchableOpacity, Image, FlatList
} from "react-native"

import { COLORS, images, SIZES, FONTS, icons } from "../constants"

const Home = () => {
    const reanderHeader = () => {
        return (
            <View style={{
                flexDirection: "row",
                height: 50,
                justifyContent: 'center'
            }}>
                <TouchableOpacity 
                style={{
                    width: 50,
                    paddingLeft: SIZES.padding * 2,
                    justifyContent: 'center',
                }}
                >
                    <Image source={icons.nearby} 
                        resizeMode="contain" 
                        style={{
                            width: 30,
                            height: 30,
                    }} />
                </TouchableOpacity>
                
                <View style={{
                    flex: 1,
                    alignItems: 'center',
                    justifyContent: 'center'                    
                }}>
                    <View style={{
                        width: '70%',
                        height: '100%',
                        backgroundColor: COLORS.lightGray3,
                        alignItems: 'center',
                        justifyContent: 'center',
                        borderRadius: SIZES.radius,
                    }}>
                        <Text>Location</Text>
                    </View>
                </View>

                <TouchableOpacity style={{
                    width: 50,
                    paddingRight: SIZES.padding * 2,
                    justifyContent: 'center',
                }}>
                    <Image source={icons.basket} resizeMode="contain" style={{
                       width: 30,
                       height: 30, 
                    }} />
                </TouchableOpacity>
            </View>
        )
    }
    return (
        <SafeAreaView style={styles.container}>
            {reanderHeader()}
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: COLORS.lightGray4,
    },
    shadow: {
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 3,
        },
        shadowOpacity: 0.1,
        shadowRadius: 3,
        elevation: 1
    }
})

export default Home;
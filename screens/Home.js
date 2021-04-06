import React from "react"
import {
    View, Text, SafeAreaView, StyleSheet, TouchableOpacity, Image, FlatList
} from "react-native"

import { COLORS, images, SIZES, FONTS, icons } from "../constants"

import categoryData from '../dummy/category'
import restaurantData from '../dummy/restaurants'
import initialCurrentLocation from '../dummy/location'

// components
import HomeHeader from '../components/HomeHeader'

const Home = () => {
    const [categories, setCategories] = React.useState(categoryData)
    const [selectedCategory, setSelectedCategory] = React.useState(null)
    const [restaurants, setRestaurants] = React.useState(restaurantData)
    const [currentLocation, setCurrentLocation] = React.useState(initialCurrentLocation)


    function onSelectCategory(category) {
        //filter restaurant
        let restaurantList = restaurantData.filter(a => a.categories.includes(category.id))

        setRestaurants(restaurantList)

        setSelectedCategory(category)
    }

    function getCategoryNameById(id) {
        let category = categories.filter(a => a.id == id)

        if (category.length > 0)
            return category[0].name

        return ""
    }

    const renderMainCategories = () => {
        const renderItem = ({item}) => {
            return (
            <TouchableOpacity
                style={{
                    padding: SIZES.padding,
                    paddingBottom: SIZES.padding * 2,
                    backgroundColor: (selectedCategory?.id == item.id) ? COLORS.primary : COLORS.white,
                    borderRadius: SIZES.radius,
                    alignItems: 'center',
                    justifyContent: 'center',
                    marginRight: SIZES.padding,
                    ... styles.shadow
                }}
                onPress={ ()=> onSelectCategory(item) }
            >
                <View
                    style={{
                        width: 50,
                        height: 50,
                        borderRadius: 25,
                        alignItems: 'center',
                        justifyContent: 'center',
                        backgroundColor: COLORS.white
                    }}
                >
                    <Image source={item.icon} style={{
                        width: 30,
                        height: 30
                    }} />
                </View>
                <Text style={{
                    marginTop: SIZES.padding, 
                    color: (selectedCategory?.id == item.id) ? COLORS.white : COLORS.black,
                    ...FONTS.body5
                }}>{item.name}</Text>
            </TouchableOpacity>
            )
        }

        return (
            <View style={{ padding: SIZES.padding * 2,}}>
                <Text style={{... FONTS.h1 }}>Main</Text>
                <Text style={{ ... FONTS.h2 }}>Categories</Text>

                <FlatList
                    data={categories}
                    horizontal
                    showsHorizontalScrollIndicato={false}
                    keyExtractor={item => '${item.id}'}
                    renderItem={renderItem}
                    contentContainerStyle={{
                        paddingVertical: SIZES.padding * 2,
                    }}
                ></FlatList>
            </View>
        )
    }

    const renderRestaurant = () => {

        const renderItem = ({item}) => {
            return (
            <TouchableOpacity 
                style={{
                    marginBottom: SIZES.padding *2,
                }}
                // onPress={() => console.log('here')}
            >
                <View>
                    <Image source={item.photo} resizeMode="cover" style={{
                        width: "100%",
                        height: 200,
                        borderRadius: SIZES.radius
                    }} />
                </View>

            </TouchableOpacity>
            )
        }

        return (
            <FlatList
                data={restaurants}
                keyExtractor={item => '${item.id}'}
                renderItem={renderItem}
                contentContainerStyle={{
                    paddingHorizontal: SIZES.padding * 2,
                    paddingBottom: 30
                }}
            />
        )
    }

    return (
        <SafeAreaView style={styles.container}>
            <HomeHeader />
            {renderMainCategories()}
            {renderRestaurant()}
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
import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import HomeScreen from "./src/HomeScreen";
import MovieListScreen from "./src/MovieListScreen";
import MovieDetailsScreen from "./src/MovieDetailsScreen";

const Stack = createNativeStackNavigator();

export default function App() {
    return (
        <NavigationContainer>
            <Stack.Navigator>

                <Stack.Screen
                    name="Home"
                    component={HomeScreen}
                />

                <Stack.Screen
                    name="MovieList"
                    component={MovieListScreen}
                    options={{ title: "Movies" }}
                />

                <Stack.Screen
                    name="MovieDetails"
                    component={MovieDetailsScreen}
                    options={{ title: "Movie Details" }}
                />

            </Stack.Navigator>
        </NavigationContainer>
    );
}
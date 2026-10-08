import React from "react";
import { View, Text, Button, StyleSheet, FlatList } from "react-native";

const movies = [
    {
        id: "1",
        name: "Avengers: Endgame",
        year: "2019",
        description: "A group of heroes work together to defeat Thanos and save the universe.",
    },
    {
        id: "2",
        name: "Spider-Man: No Way Home",
        year: "2021",
        description: "Spider-Man faces problems after his identity is revealed to the world.",
    },
    {
        id: "3",
        name: "The Batman",
        year: "2022",
        description: "Batman investigates a series of crimes happening in Gotham City.",
    },
];

export default function MovieListScreen({ navigation }) {

    const renderMovie = ({ item }) => (
        <View style={styles.movieBox}>
            <Text style={styles.movieName}>{item.name}</Text>

            <Text style={styles.year}>
                Year: {item.year}
            </Text>

            <Button
                title="View Details"
                onPress={() =>
                    navigation.navigate("MovieDetails", {
                        movie: item
                    })
                }
            />
        </View>
    );

    return (
        <View style={styles.container}>

            <Text style={styles.title}>Movie List</Text>

            <FlatList
                data={movies}
                keyExtractor={(item) => item.id}
                renderItem={renderMovie}
            />

            <Button
                title="Go Back"
                onPress={() => navigation.goBack()}
            />

        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 20,
    },

    title: {
        fontSize: 26,
        fontWeight: "bold",
        textAlign: "center",
        marginBottom: 15,
    },

    movieBox: {
        borderWidth: 1,
        borderRadius: 10,
        padding: 15,
        marginBottom: 15,
    },

    movieName: {
        fontSize: 20,
        fontWeight: "bold",
        marginBottom: 5,
    },

    year: {
        fontSize: 15,
        marginBottom: 10,
    },
});
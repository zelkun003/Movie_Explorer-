import React from "react";
import { View, Text, Button, StyleSheet } from "react-native";

export default function MovieDetailsScreen({ route, navigation }) {

    const { movie } = route.params;

    return (
        <View style={styles.container}>

            <Text style={styles.title}>
                {movie.name}
            </Text>

            <Text style={styles.info}>
                Year: {movie.year}
            </Text>

            <Text style={styles.description}>
                {movie.description}
            </Text>

            <Button
                title="Go Back to Movie List"
                onPress={() => navigation.goBack()}
            />

        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
        padding: 20,
    },

    title: {
        fontSize: 28,
        fontWeight: "bold",
        textAlign: "center",
        marginBottom: 20,
    },

    info: {
        fontSize: 18,
        marginBottom: 15,
        textAlign: "center",
    },

    description: {
        fontSize: 16,
        textAlign: "center",
        marginBottom: 30,
    },
});
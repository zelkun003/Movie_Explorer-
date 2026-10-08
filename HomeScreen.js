import React from "react";
import { View, Text, Button, StyleSheet } from "react-native";

export default function HomeScreen({ navigation }) {
    return (
        <View style={styles.container}>
            <Text style={styles.title}>🎬 Movie Explorer</Text>

            <Text style={styles.description}>
                Welcome to the Movie Explorer App!
            </Text>

            <Button
                title="View Movies"
                onPress={() => navigation.navigate("MovieList")}
            />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        padding: 20,
    },

    title: {
        fontSize: 28,
        fontWeight: "bold",
        marginBottom: 15,
    },

    description: {
        fontSize: 16,
        textAlign: "center",
        marginBottom: 20,
    },
});
import React from "react";
import { View,Text, StyleSheet } from "react-native";
import Topbar from "../../components/topbar";

const Browse = () => {
    return(
        <View style={styles.container} >
            <Topbar heading="Browse" />
        </View>
    )
}
const styles = StyleSheet.create({
    container: {
        padding: 20
    },
})

export default Browse;
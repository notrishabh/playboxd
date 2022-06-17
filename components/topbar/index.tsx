import React from "react";
import { View, StyleSheet, Text } from "react-native";
import { Icon } from "react-native-elements";

const Topbar:React.FC<{heading: string}> = ({heading}) => {
    return(
            <View style={styles.topbar}>
                <View style={styles.leftTop}>
                    <Icon
                        type='font-awesome'
                        name='bars'
                        iconStyle={styles.icon}
                        containerStyle={styles.iconCon}
                    />
                    <Text style={styles.heading}>{heading}</Text>
                </View>
                <View>
                    <Icon
                        type='font-awesome'
                        name='search'
                        iconStyle={styles.icon}
                        containerStyle={styles.iconCon}
                    />
                </View>
            </View>

    )
}
const styles = StyleSheet.create({
    topbar: {
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'flex-end',
        justifyContent: 'space-between'
    },
    leftTop: {
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'flex-end',
        justifyContent: 'space-between'
    },
    normalText: {
        color: "white"
    },
    heading: {
        color: "white",
        fontSize: 16,
        fontWeight: "bold",
        marginLeft: "30px"
    },
    icon: {
        width:"23px",
        height:"23px",
        color:"green",
    },
    iconCon: {
        width: "23px",
    }
})
export default Topbar;
import { View, Text, StyleSheet } from "react-native";

export default function Header(props) {
    return (
        <View style={styles.header}>
            <Text style={styles.title}>{props.title}</Text>

            {props.items.map((item, index) => (
                <Text key={index} style={styles.title}>
                    {item.menu}
                </Text>
            ))}
        </View>
    );
}

const styles = StyleSheet.create({
    header: {
        flexDirection: "row",
        justifyContent: "flex-start",
        width: "100%",
        height: 80,
        paddingTop: 38,
        backgroundColor: "coral",
    },
    title: {
        textAlign: "center",
        color: "#fff",
        fontSize: 20,
        fontWeight: "bold",
        marginLeft: 20,
    },
});

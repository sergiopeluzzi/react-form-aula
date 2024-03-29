import { View, Text, StyleSheet, TextInput } from "react-native";

export default function FormItem(props) {
    return (
        <View style={styles.form}>
            <Text style={styles.title}>{props.name}</Text>
            <TextInput style={styles.input} placeholder={props.placeholder} />
        </View>
    );
}

const styles = StyleSheet.create({
    form: {
        display: "flex",
        flexDirection: "row",
        justifyContent: "flex-start",
        alignItems: "center",
        width: "100%",
    },
    title: {
        flex: 1,
        textAlign: "center",
        color: "#000",
        fontSize: 14,
        fontWeight: "bold",
    },
    input: {
        flex: 3,
        height: 40,
        margin: 12,
        borderWidth: 1,
        borderColor: "#ddd",
        borderRadius: 5,
        padding: 10,
    },
});

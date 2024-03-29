import { StyleSheet, View } from "react-native";
import Header from "./src/components/Header.component";
import Form from "./src/components/Form.component";

export default function App() {
    const menus = [
        { menu: "About" },
        { menu: "Services" },
        { menu: "Contact" },
        { menu: "Map" },
    ];

    return (
        <View style={styles.container}>
            <Header title="Main" items={menus} />
            <Form name="Cadastro" />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#fff",
        alignItems: "center",
        justifyContent: "flex-start",
    },
});

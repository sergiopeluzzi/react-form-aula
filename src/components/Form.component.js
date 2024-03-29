import {
    View,
    Text,
    StyleSheet,
    Button,
    ScrollView,
    Pressable,
} from "react-native";
import FormItem from "./FormItem.component";

export default function Form(props) {
    const enviar = () => {
        console.log("Enviado");
    };
    return (
        <ScrollView contentContainerStyle={styles.form}>
            <Text style={styles.title}>{props.name}</Text>
            <FormItem name="Nome" placeholder="Digite o nome aqui" />
            <FormItem name="Email" placeholder="Digite o email aqui" />
            <FormItem name="Endereço" placeholder="Digite o endereço aqui" />
            <Pressable style={styles.button} onPress={enviar}>
                <Text style={styles.buttonText}>Enviar</Text>
            </Pressable>
        </ScrollView>
    );
}

const styles = StyleSheet.create({
    form: {
        flexDirection: "column",
        alignItems: "center",
        paddingTop: 38,
    },
    title: {
        color: "#000",
        fontSize: 40,
        fontWeight: "bold",
        color: "coral",
    },
    button: {
        justifyContent: "center",
        alignItems: "center",
        width: "100%",
        height: 40,
        margin: 12,
        backgroundColor: "coral",
    },
    buttonText: {
        color: "#fff",
        fontSize: 20,
        fontWeight: "bold",
    },
});

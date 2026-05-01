import { useState } from "react";
import {
    View,
    Text,
    StyleSheet,
    ScrollView
} from "react-native";

export default function AboutScreen({ navigation }: any) {
    return (
        <ScrollView contentContainerStyle={styles.container}>

           
            <View style={styles.header}>
                <Text style={styles.title}>
                    Controle total das suas finanças 
                </Text>

                <Text style={styles.subtitle}>
                    Organize sua vida financeira de forma simples,
                    rápida e inteligente.
                </Text>
            </View>

         <br />
         <br />
            <View style={styles.section}>
                <Text style={styles.sectionTitle}>
                    O que você pode fazer?
                </Text>

                <View style={styles.card}>
                    <Text style={styles.cardText}>
                         Acompanhar as suas contas a receber
                    </Text>
               <br />
                    <Text style={styles.cardText}>
                         Acompanhar as suas contas a pagar
                    </Text>
                 </View>

            </View>

        
            <View style={styles.section}>
                <Text style={styles.sectionTitle}>
                    Nosso objetivo
                </Text>

                <Text style={styles.description}>
                    Ajudar você a ter mais organização financeira,
                    controle dos gastos e planejamento para alcançar
                    seus objetivos.
                </Text>
            </View>


        </ScrollView>
    );
}

const styles = StyleSheet.create({
    container: {
        padding: 40,
    },

    header: {
        marginTop: 40,
        marginBottom: 30,
    },

    title: {
        fontSize: 28,
        fontWeight: "bold",
        marginBottom: 10,
    },

    subtitle: {
        fontSize: 16,
    },

    section: {
        marginBottom: 30,
    },

    sectionTitle: {
        fontSize: 22,
        fontWeight: "600",
        marginBottom: 15,
    },

    card: {
        padding: 15,
        borderRadius: 10,
        marginBottom: 10,
    },

    cardText: {
        fontSize: 16,
    },

    description: {
        fontSize: 16,
        lineHeight: 24,
    },
});
import { StyleSheet, TouchableOpacity, View, Image,
useWindowDimensions, Text } from "react-native";
import React, { useState } from 'react';
import Logo from '../../assets/images/logo.png';
import CustomInput from "../components/CustomInput";
import CustomButton from "../components/CustomButton";

const Login = ({ navigation }) => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const { height } = useWindowDimensions();

    return (
        <View style={styles.view}>
            <Image
                source={Logo}
                style={[styles.logo, { height: height * 0.3 }]}
                resizeMode="contain"
            />

            <CustomInput
                placeholder="Email"
                alue={email}
                setValue={setEmail}
            />

            <CustomInput
                placeholder="Password"
                value={password}
                setValue={setPassword}
                secureTextEntry={true}
            />

            <CustomButton text="Login" onPress={() => loginUser(email, password)} />
    
            <TouchableOpacity
    
                onPress={() => navigation.navigate("RegisterUser")}
            >
                <Text>
                    Não tem uma conta?{" "}
                    <Text style={styles.createAccountText}>
                        Crie uma
                    </Text>
                </Text>
            </TouchableOpacity>
        </View>
    )
};

const styles = StyleSheet.create({
    view: {
        alignItems: 'center',
        padding: 20,
    },
    logo: {
        width: '70%',
        maxWidth: 300,
        maxHeight: 200,
    },
    createAccountText: {
        fontWeight: "bold",
        color: "#6200ee",
    },
});

export default Login;
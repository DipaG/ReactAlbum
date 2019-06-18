import React from 'react';
import {Text, TouchableOpacity, StyleSheet,Linking} from 'react-native';
const Button = (props) => {
    return (
        <TouchableOpacity onPress = {() => {Linking.openURL(props.url)}}>
            <Text>Click Me!!!</Text>
        </TouchableOpacity>
    )
}

export default Button;
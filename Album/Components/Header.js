import React from 'react';
import {View, Text, StyleSheet} from 'react-native';

const Header = () => {
    const {textStyle} = styles;
    return(
        <View>
            <Text style={textStyle}>Hello</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    textStyle:{
        fontSize:30,
    }
})
export default Header;
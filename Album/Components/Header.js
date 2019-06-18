import React from 'react';
import {View, Text, StyleSheet} from 'react-native';

const Header = (props) => {
    const {textStyle, viewStyle} = styles;
    return(
        <View style={ viewStyle }>
            <Text style={ textStyle }>{props.headerText}</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    textStyle:{
        fontSize:20,
    },
    viewStyle:{
        backgroundColor: "#F8F8F8",
        height: 50,
        padding:15,
        
        justifyContent: 'center',
        alignItems: 'center',
        shadowColor:'#000',
        shadowOffset:{width:0, height:2},
        shadowOpacity:0.2,
        elevation:2,
        position:'relative'
    }
})
export default Header;
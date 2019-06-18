import React from 'react';
import {View, Text, Image,StyleSheet} from 'react-native';
import Card from './Card';
import CardSection from './CardSection';
import Button from '../Button';
const AlbumDetail = ({data}) => {
    const {title, artist, thumbnail_image,image,url} = data;
    const {headerContentStyle, thumbnailStyle, headerTextStyle,thumbnailContainerStyle,bodyImageStyle} = styles;
    return (
        <Card>
            <CardSection>
                <View style = {thumbnailContainerStyle}>
                    <Image 
                    style = {thumbnailStyle}
                    source ={{uri: thumbnail_image}} ></Image>
                </View>
                <View style = {headerContentStyle}>
                    <Text style={headerTextStyle}>{artist}</Text>
                    <Text>{title}</Text>
                </View>
            </CardSection>
            <CardSection>
                <Image source = {{uri: image}} style = {bodyImageStyle}></Image>
            </CardSection>
            <CardSection>
                <Button url={url}></Button>
            </CardSection>
        </Card>
    );
}
const styles = StyleSheet.create({
    headerContentStyle: {
        flexDirection:'column',
        justifyContent:'space-around'
    },
    headerTextStyle: {
        fontSize:18
    },
    thumbnailStyle:{
        height: 50,
        width:50
    },
    thumbnailContainerStyle: {
        marginLeft:10,
        marginRight:10
    },
    bodyImageStyle: {
        height: 300,
        width: null,
        flex:1
        
    }
})
export default AlbumDetail;
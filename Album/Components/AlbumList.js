import React, {Component} from 'react';
import {ScrollView, Text, FlatList} from 'react-native';
import axios from 'axios';
import AlbumDetail from './AlbumDetail';

export default class AlbumList extends Component{
    constructor(){
        super();
        this.renderHelper.bind(this);
        this.state = {
            albums:[]
        }
    }
    componentDidMount(){
        axios.get('https://rallycoding.herokuapp.com/api/music_albums')
        .then(response => this.setState({ albums: response.data }))
    }
    renderHelper(){
        return  this.state.albums.map((item) =>
            <AlbumDetail key = {item.title} data = {item}>{item.title}</AlbumDetail>
        )
    }
    render(){
        return (
            <ScrollView>
                {this.renderHelper()}
            </ScrollView>
        );
    }
}
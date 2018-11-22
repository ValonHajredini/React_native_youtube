import React from 'react';
import {Text, View,ScrollView,  Image, TouchableOpacity, FlatList } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import cssStyle from "./Body.style";
import VideoItem from "../VideoItem/VideoItem";
import data from '../../data';
 class Body extends React.Component {
    // myVideo = (<VideoItem />);
    render() {
        return(
            <ScrollView style={cssStyle.body}>
                <FlatList
                    data={data.items}
                    renderItem={(video) => (<VideoItem
                    video={video.item}/>)}
                    keyExtractor={item => item.id}
                    ItemSeparatorComponent={() => <View style={{height: 0.5, backgroundColor: "#eee"}}></View>}
                />
            </ScrollView>
        )
    }
}
export default Body;
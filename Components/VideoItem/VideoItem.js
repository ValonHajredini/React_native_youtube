import React from 'react';
import {Text, View, Image, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import cssStyle from './VideoItem.style';

class VideoItem extends React.Component {
    nFormatter(num, digits) {
        var si = [
            { value: 1, symbol: "" },
            { value: 1E3, symbol: "k" },
            { value: 1E6, symbol: "M" },
            { value: 1E9, symbol: "G" },
            { value: 1E12, symbol: "T" },
            { value: 1E15, symbol: "P" },
            { value: 1E18, symbol: "E" }
        ];
        var rx = /\.0+$|(\.[0-9]*[1-9])0+$/;
        var i;
        for (i = si.length - 1; i > 0; i--) {
            if (num >= si[i].value) {
                break;
            }
        }
        return (num / si[i].value).toFixed(digits).replace(rx, "$1") + si[i].symbol + ' Views';
    }
    render() {
        return(
            <View style={cssStyle.VideoItem}>
                <Image source={{uri:this.props.video.snippet.thumbnails.medium.url}} style={cssStyle.Thumbnail}/>
                <View style={cssStyle.Description}>
                    <Image source={{uri: 'https://randomuser.me/api/portraits/women/59.jpg'}} style={cssStyle.ChanelPhoto}/>
                    <View style={cssStyle.VideoDetails}>
                        <View>
                            <Text style={cssStyle.videoTiter}>{this.props.video.snippet.title} </Text>
                            <Text style={cssStyle.VideoText}>
                                {this.props.video.snippet.channelTitle} - {this.nFormatter(this.props.video.statistics.viewCount, 1)} - {'5 Months ago'}
                            </Text>
                        </View>

                        <TouchableOpacity>
                            <Icon name={'more-vert'} size={20} style={cssStyle.MoreIcon}/>
                        </TouchableOpacity>


                    </View>
                </View>
            </View>
        )
    }
}
export default VideoItem;
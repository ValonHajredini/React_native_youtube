import {StyleSheet} from "react-native";

export default styles = StyleSheet.create({
    VideoItem: {
        padding: 15
    },
    Thumbnail: {
        height: 200
    },
    Description: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingTop: 15
    },
    ChanelPhoto: {
        width: 50,
        height:50,
        borderRadius: 25
    },
    VideoDetails: {
        flexDirection: 'row',
        paddingLeft: 4,
        paddingHorizontal: 15,
        flex: 1
    },
    videoTiter: {
        fontSize: 13,
        color: '#3c3c3c'
    },
    VideoText: {
        color: '#aaa'
    },
    MoreIcon: {
        color: '#999'
    }
});
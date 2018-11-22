import React from 'react';
import {Text, View, Image, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import cssStyle from "./TabsBottom.style";


class TabsBottom extends React.Component {

    render() {
        return(
            <View style={cssStyle.tabBar}>
                <TouchableOpacity style={cssStyle.tabButton}>
                    <Icon  name={'home'} size={25} style={cssStyle.Icons}/>
                    <Text style={cssStyle.tabTitle}>Home</Text>
                </TouchableOpacity>
                <TouchableOpacity style={cssStyle.tabButton}>
                    <Icon  name={'whatshot'} size={25} style={cssStyle.Icons}/>
                    <Text style={cssStyle.tabTitle}>Trending</Text>
                </TouchableOpacity>
                <TouchableOpacity style={cssStyle.tabButton}>
                    <Icon  name={'subscriptions'} size={25} style={cssStyle.Icons}/>
                    <Text style={cssStyle.tabTitle}>Subscriptions</Text>
                </TouchableOpacity>
                {/*<TouchableOpacity style={cssStyle.tabButton}>*/}
                {/*<Icon  name={'email'} size={25} style={cssStyle.Icons}/>*/}
                {/*<Text style={cssStyle.tabTitle} >Inbox</Text>*/}
                {/*</TouchableOpacity>*/}
                <TouchableOpacity style={cssStyle.tabButton}>
                    <Icon  name={'folder'} size={25} style={cssStyle.Icons}/>
                    <Text style={cssStyle.tabTitle}>Library</Text>
                </TouchableOpacity>

            </View>
        )
    }
}
export default TabsBottom;
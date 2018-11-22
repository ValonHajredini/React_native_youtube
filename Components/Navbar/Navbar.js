import React from 'react';
import {Text, View, Image, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import cssStyle from "./NavBar.style";


class NavBar extends React.Component {

    render() {
        return(
            <View style={cssStyle.navBar}>
                <Image  source={require('../../assets/logo.png')} style={{width: 100, height:20}}/>
                <View style={cssStyle.rightNav}>
                    <TouchableOpacity>
                        <Icon style={cssStyle.navItem} name={'search'} size={25}/>
                    </TouchableOpacity>
                    <TouchableOpacity>
                        <Icon style={cssStyle.navItem} name={'account-circle'} size={25}/>
                    </TouchableOpacity>
                </View>
            </View>
        )
    }
}
export default NavBar;
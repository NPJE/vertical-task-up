import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons'
import Page from './Page';

const Random = (props) => {
  return (
    <TouchableOpacity style={Page.Gems01} onPress={props.iconPressed}>
      <Icon style={{marginRight: 5}} name={props.iconName} color={props.iconColor} size={props.size} />
      <Text style={{color: 'white', fontWeight: 'bold'}} >{props.Text}</Text>
    </TouchableOpacity>
  )
}

export default Random
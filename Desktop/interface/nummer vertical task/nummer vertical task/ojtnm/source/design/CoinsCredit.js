import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons'
import Page from './Page';

const CoinsCredit = (props) => {
  return (
    <TouchableOpacity style={Page.Gems} onPress={props.iconPressed}>
      <Icon style={{marginRight: 5}} name={props.iconName} color={props.iconColor} size={props.size} />
      <Text style={{color: 'white', fontWeight: 'bold'}} >{props.Text}</Text>
    </TouchableOpacity>
  )
}

export default CoinsCredit
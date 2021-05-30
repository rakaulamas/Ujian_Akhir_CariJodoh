import React, { Component } from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';

export default class Home extends Component {
  

  render() {
    return (
      <View>
       <Image style={{width:250,height:250,alignSelf:'center'}} source={{uri:'https://www.jing.fm/clipimg/detail/270-2701700_love-couple-silhouette.png'}} />

    <TouchableOpacity style={styles.buttonStyle} onPress={()=>{this.props.navigation.navigate('Login')}}>
        <Text style={styles.textStyle}> Login </Text> 
    </TouchableOpacity>

    <TouchableOpacity style={styles.buttonStyle} onPress={()=>{this.props.navigation.navigate('Register')}}>
        <Text style={styles.textStyle}> Register </Text>
    </TouchableOpacity>
      </View>
    );
  }
}


const styles = StyleSheet.create({
    buttonStyle:{
        borderWidth: 5,
        borderColor:"red",
        padding:10,
        margin: 10
    },
    
    textStyle:{
        textAlign: 'center',
    }
    

})
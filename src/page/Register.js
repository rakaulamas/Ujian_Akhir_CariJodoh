import React, { Component } from 'react';
import { View, Text, StyleSheet, TextInput } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';

class Register extends Component {
  constructor(props) {
    super(props);
    this.state = {
        username:"",
        name:"",
        jenisKelamin:"",
        phone:"",
        umur:"",
        gambar:""
    }
  }


  simpanData(){
    axios.post('http://192.168.1.9:4060/user/register/',this.state)
    .then((response) => {
      alert(response.data)
      this.props.navigation.navigate('Home')
    })
    .catch((error) => {
      console.log("Ada error : " + error)
    })
  }

  render() {
    return (
      <View>
        <Text> Username</Text> 
        <TextInput placeholder="Username : " onChangeText={(value)=>{this.setState({username:value})}}/>
        <Text> Name </Text>
        <TextInput placeholder="Nama : "  onChangeText={(value)=>{this.setState({name:value})}}/>
        <Text> Umur </Text>
        <TextInput placeholder="Umur : " onChangeText={(value)=>{this.setState({umur:value})}}/>
        <Text> No.Hp </Text>
        <TextInput placeholder="No.HP : " onChangeText={(value)=>{this.setState({phone:value})}}/>
        <Text> Jenis Kelamin </Text>
        <TextInput placeholder="Jenis Kelamin : " onChangeText={(value)=>{this.setState({jenisKelamin:value})}}/>
        <TouchableOpacity style={styles.buttonStyle} onPress={()=>{this.simpanData()}} ><Text style={styles.textStyle}>Submit</Text></TouchableOpacity>
      </View>
    );
  }
}

export default Register;


const styles = StyleSheet.create({
    buttonStyle:{
        borderWidth: 10,
        borderColor:"red",
        padding:10,
        margin: 20
    },
    
    textStyle:{
        textAlign: 'center',
    }
    
  
  })
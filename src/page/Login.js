import React, { Component } from 'react'
import { View, Text,StyleSheet, TextInput } from 'react-native'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { TouchableOpacity } from 'react-native-gesture-handler'

export class Login extends Component {
    constructor(props) {
        super(props)
        this.state={
            username:"",
            phone:""
    }
}

// handleLogin(){
//     axios.get('http://192.168.1.9:4060/user/login/',{
//         params: {
//             name:this.state.name,
//             phone: this.state.phone,
//         }
//     })
//     .then((response) =>{
//         let data=response.data;
//         if (data !== ""){
//             this.props.LoginAction(true,"isLogin")
//             this.props.LoginAction(data, "dataUser")
//             alert("Login Berhasil!")
//             this.props.navigation.navigate('MainMenu')
//         }else{
//             alert("Login Gagal")
//             this.props.LoginAction(false,"isLogin")
//         }
//     })
//     .catch((error) =>{
//         console.log(error)
//     })
// }


    render() {
        return (
            <View>
            <Text> Username </Text>
                <TextInput placeholder="Masukan Nama : "  onChangeText={(value)=>{this.setState({name:value})}}/>
            <Text> Phone </Text>
                <TextInput placeholder="Masukan No.HP : " onChangeText={(value)=>{this.setState({phone:value})}}/>
            <TouchableOpacity style={styles.buttonStyle} onPress={()=>{this.handleLogin()}} ><Text style={styles.textStyle}>Login</Text></TouchableOpacity>
            </View>
        )
    }
}

const mapStateToProps = (state) => ({
    
})

const mapDispatchToProps = {
    
}

export default connect(mapStateToProps, mapDispatchToProps)(Login)


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

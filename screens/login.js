import React,{useState}from 'react';
import {View,StyleSheet, ImageBackground, Image, Text ,  TextInput, Dimensions, TouchableOpacity} from 'react-native';
import bgImage from '../assets/background.jpg';
import logo from '../assets/logo.png';
const {width: WIDTH} = Dimensions.get('window');
function Login() {
    const [ loginData , setloginData] = useState({
        userName: '',
        password: ''
    })
    const submit = ()  =>{
        console.log(' click on login', loginData);
    }

    const changeData = (data, e) => {
        console.log(e.nativeEvent.text);
        setloginData((previousdata)=>{
            return { ...previousdata , [data]: e.nativeEvent.text }
        })
    }
    return (
      <ImageBackground source={bgImage} style={styles.backgroundContainer}>
          <View style={styles.logoContainer}>
             <Image source={logo} style={styles.logo}/>
             <Text style={styles.logoText}>REACT NATIVE</Text>
          </View>
          <View  style ={styles.inputContainer }>
              <TextInput placeholder={'Username'} 
              style ={styles.input }
              placeholderTextColor={'rgba(255,255,255,0.7)'}
              underlineColorAndroid = 'transparent'
              value={loginData.userName}
              onChange={(e) => changeData('userName', e)}
              />
              
          </View>
          <View style ={styles.inputContainer }>
              <TextInput placeholder={'password'} 
              style ={styles.input }
              secureTextEntry ={true}
              placeholderTextColor={'rgba(255,255,255,0.7)'}
              underlineColorAndroid = 'transparent'
              onChange={(e) => changeData('password', e)}
              />
          </View>
          <TouchableOpacity style ={styles.btnLogin} onPress={  submit}>
              <Text style={styles.text}>Login</Text>
          </TouchableOpacity>
          <View style>
          <Text style= {styles.text}>OR</Text>
          </View>
          <TouchableOpacity style ={styles.btnLogin} onPress={ submit}>
              <Text style={styles.text}>Register</Text>
          </TouchableOpacity>
      </ImageBackground>
    )
}

export default Login;

const styles = StyleSheet.create({
    backgroundContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems:'center'
    },
    logoContainer: {
        alignItems: 'center'
    },
    logo: {
        width: 120,
        height: 120
    },
    logoText: {
        color: 'black',
        fontSize: 20,
        fontWeight: '500',
        marginTop: 10,
        opacity: 0.5

    },
    inputContainer: {
        marginTop: 10
    },

    input: {
        width: WIDTH - 55,
        height: 45,
        borderRadius: 25,
        fontSize: 16,
        paddingLeft: 45,
        backgroundColor: 'rgba(0,0,0,0.35)',
        marginHorizontal: 25,
        color: 'white'
    },
    btnLogin:{
        width: WIDTH - 55,
        height: 45,
        borderRadius: 25,
        backgroundColor: '#432577',
        justifyContent: 'center',
        marginTop: 20
    },
    text:{
        color: 'rgba(255,255,255,0.7)',
        fontSize: 16,
        textAlign: 'center'
    }

})

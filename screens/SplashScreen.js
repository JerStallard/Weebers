import React from "react";
import {View, Text, Button, StyleSheet, Dimensions, Image, TouchableOpacity} from 'react-native';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import {LinearGradient} from 'expo-linear-gradient';
import * as Animatable from 'react-native-animatable';
import LottieView from 'lottie-react-native';

const SplashScreen  = ({navigation}) =>{
    return(
        <View style={styles.container}>
            <View style={styles.header} >
                <Animatable.Image
                    animation="bounceIn"
                    duration={1500}
                   
                source={require('../assets/splash.jpg')}
                style={styles.logo}
                resizeMode="center"
                />
            </View>
            <Animatable.View 
            style={styles.footer}
            animation="fadeInUp"
            >
                <LottieView source={require('../assets/26427-no-face-baby-spirited-away.json')}
                  autoPlay={true}
                  loop={true}
                  
                  style={{
                    flex: 1,  
                    marginLeft: '0%',
                    marginBottom: '17%',
                    
                  }} />
                {/* <Text style={styles.title}>Welcome to Weebers</Text> */}
               
                <View style={styles.button}>
                <TouchableOpacity onPress={()=>navigation.navigate('SignInScreen')}>
                    <LinearGradient
                        colors={['#e82b13','#b81b07']}
                        style={styles.signIn}
                    >
                        <Text style={styles.textSign}>Start on</Text>
                        <MaterialIcons
                            name="navigate-next"
                            color="#fff"
                            size={20}
                        />
                    </LinearGradient>
                </TouchableOpacity>
                <Text style={styles.text}>Sign in with account</Text>
                </View>
            </Animatable.View>
           
        </View>
    );
};

export default SplashScreen;

const {height} = Dimensions.get("screen");
const height_logo = height * 2;


const styles = StyleSheet.create({
    container: {
        flex:2,
        backgroundColor: '#b31b1b'
    },
header:{
    flex: 6,
    justifyContent: 'center',
    alignItems: 'center',
    
    
},
footer:{
    
    backgroundColor: '#fff',
    borderTopLeftRadius: 40,
    borderTopRightRadius: 40,
    paddingVertical: 70,
    paddingHorizontal: 40,
    
},
logo:{
    width: height_logo,
    height: height_logo,
},
title: {
    color: '#05375a',
    fontSize: 30,
    fontWeight: 'bold',
    
},
text: {
    color: 'grey',
    marginTop:5,
    textAlign: 'center'
},
button: {
    alignItems: 'center',
    marginTop: 30
},
signIn: {
    width: 110,
    height: 40,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 50,
    flexDirection: 'row'
},
textSign: {
    color: 'white',
    fontWeight: 'bold'
}



});
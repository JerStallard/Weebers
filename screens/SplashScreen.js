import React from "react";
import {View, Text, Button, StyleSheet, Dimensions, Image, TouchableOpacity} from 'react-native';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import {LinearGradient} from 'expo-linear-gradient';
import * as Animatable from 'react-native-animatable';

const SplashScreen  = ({navigation}) =>{
    return(
        <View style={styles.container}>
            <View style={styles.header}>
                <Animatable.Image
                    animation="bounceIn"
                    duration={1500}
                   
                source={require('../assets/fairytail.png')}
                style={styles.logo}
                resizeMode="stretch"
                />
            </View>
            <Animatable.View 
            style={styles.footer}
            animation="fadeInUp"
            >
                <Text style={styles.title}>Welcome to Fairy Tail</Text>
                <Text style={styles.text}>Sign in with account</Text>
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
                </View>
            </Animatable.View>
        </View>
    );
};

export default SplashScreen;

const {height} = Dimensions.get("screen");
const height_logo = height * 0.28;


const styles = StyleSheet.create({
    container: {
        flex:1,
        backgroundColor: '#b31b1b'
    },
header:{
    flex: 2,
    justifyContent: 'center',
    alignItems: 'center'
    
},
footer:{
    flex: 1,
    backgroundColor: '#fff',
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
    paddingVertical: 50,
    paddingHorizontal: 30
},
logo:{
    width: height_logo,
    height: height_logo
},
title: {
    color: '#05375a',
    fontSize: 30,
    fontWeight: 'bold'
},
text: {
    color: 'grey',
    marginTop:5
},
button: {
    alignItems: 'flex-end',
    marginTop: 30
},
signIn: {
    width: 150,
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
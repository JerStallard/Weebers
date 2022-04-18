import React from "react";
import {View, Text, Button, StyleSheet, Dimensions, Image, TouchableOpacity, Platform, TextInput, StatusBar, Alert} from 'react-native';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import Feather from 'react-native-vector-icons/Feather';
import {LinearGradient} from 'expo-linear-gradient';
import * as Animatable from 'react-native-animatable';
import { AuthContext } from '../components/context';

const SignInScreen = ({navigation}) =>{

    const [data, setData] = React.useState({
        email: '',
        password: '',
        check_textInputChange: false,
        secureTextEntry: true,
        isValidUser: true,
        isValidPassword: true

    });

    const { signIn } = React.useContext(AuthContext);

    const textInputChange = (val) => {
        if( val.trim().length >= 4 ) {
            setData({
                ...data,
                username: val,
                check_textInputChange: true,
                isValidUser: true
            });
        } else {
            setData({
                ...data,
                username: val,
                check_textInputChange: false,
                isValidUser: false
            });
        }
    }


    const handlePasswordChange = (val) => {
        if( val.trim().length >= 8 ) {
            setData({
                ...data,
                password: val,
                isValidPassword: true
            });
        } else {
            setData({
                ...data,
                password: val,
                isValidPassword: false
            });
        }
    }
    const updateSecureTextEntry = () => {
        setData({
                ...data,
                secureTextEntry: !data.secureTextEntry

        });
    }

    const handleValidUser = (val) => {
        if( val.trim().length >= 4 ) {
            setData({
                ...data,
                isValidUser: true
            });
        } else {
            setData({
                ...data,
                isValidUser: false
            });
        }
    }



    return(
        <View style={styles.container}>
            <StatusBar backgroundColor='#b31b1b' barStyle="dark-content"/>


           <View style={styles.header}>
                <Text style={styles.text_header}> Welcome </Text>
           </View>
           <Animatable.View
            animation="fadeInUp"
             style={styles.footer}
           >
                <Text style={styles.text_footer}>Email</Text>
                <View style={styles.action}>
                    <FontAwesome
                        name="user-o"
                        color="#05375a"
                        size={20}
                    />
                    <TextInput
                        placeholder="Your Email"
                        style = {styles.textInput}
                        autoCapitalize="none"
                        onChangeText={(val)=> textInputChange(val)}
                        onEndEditing={(e)=>handleValidUser(e.nativeEvent.text)}
                    />

                    {data.check_textInputChange ?
                    <Animatable.View
                        animation="bounceIn"
                    >
                         <Feather
                        name="check-circle"
                        color="orange"
                        size={20}
                    />

                    </Animatable.View>
                    : null}
                </View>

                { data.isValidUser ? null : 
            <Animatable.View animation="fadeInLeft" duration={500}>
            <Text style={styles.errorMsg}>Invalid email</Text>
            </Animatable.View>
            }

                <Text style={[styles.text_footer,{marginTop: 35 }]}>Password</Text>

                <View style={styles.action}>
                    <Feather
                        name="lock"
                        color="#05375a"
                        size={20}
                    />
                    <TextInput
                        placeholder="Your Password"
                        secureTextEntry={data.secureTextEntry ? true : false}
                        style = {styles.textInput}
                        autoCapitalize="none"
                        onChangeText={(val)=> handlePasswordChange(val)}
                    />
                    <TouchableOpacity
                        onPress={updateSecureTextEntry}
                    >
                    {data.secureTextEntry  ?
                    <Feather
                        name="eye-off"
                        color="black"
                        size={20}
                    />
                    :
                    <Feather
                    name="eye"
                    color="black"
                    size={20}
                />
                 }
                    </TouchableOpacity>
                </View>
                { data.isValidPassword ? null : 
            <Animatable.View animation="fadeInLeft" duration={500}>
            <Text style={styles.errorMsg}>Password must be 8 characters long.</Text>
            </Animatable.View>
            }

                 <TouchableOpacity>
                     <Text style={{color:'#009387', marginTop:15}}>Forgot Password</Text>
                 </TouchableOpacity>

                 <View style={styles.button}>
                     <TouchableOpacity
                     style={styles.signIn}
                     onPress={()=>{signIn()}}
                     >


                    <LinearGradient
                        colors={['#e82b13','#b81b07']}
                        style={styles.signIn}
                    >
                        <Text style={[styles.textSign,{
                            color: '#fff'
                        }]}>Sign In</Text>
                    </LinearGradient>
                    </TouchableOpacity>
                    <TouchableOpacity
                        onPress={() => navigation.navigate('SignUpScreen')}
                        style={[styles.signIn,{
                            borderColor:'#b31b1b',
                            borderWidth:1,
                            marginTop:15
                        }]}
                    >
                        <Text style={[styles.textSign,{
                            color:'#b31b1b'
                        }]}>Sign Up</Text>
                    </TouchableOpacity>
                 </View>


           </Animatable.View>
        </View>
    );
};

export default SignInScreen;

const styles = StyleSheet.create({
    container: {
      flex: 1, 
      backgroundColor: '#b31b1b'
    },
    header: {
        flex: 1,
        justifyContent: 'flex-end',
        paddingHorizontal: 20,
        paddingBottom: 50
    },
    footer: {
        flex: 3,
        backgroundColor: '#fff',
        borderTopLeftRadius: 30,
        borderTopRightRadius: 30,
        paddingHorizontal: 20,
        paddingVertical: 30
    },
    text_header: {
        color: '#fff',
        fontWeight: 'bold',
        fontSize: 30
    },
    text_footer: {
        color: '#05375a',
        fontSize: 18
    },
    action: {
        flexDirection: 'row',
        marginTop: 10,
        borderBottomWidth: 1,
        borderBottomColor: '#f2f2f2',
        paddingBottom: 5
    },
    actionError: {
        flexDirection: 'row',
        marginTop: 10,
        borderBottomWidth: 1,
        borderBottomColor: '#FF0000',
        paddingBottom: 5
    },
    textInput: {
        flex: 1,
        marginTop: Platform.OS === 'android' ? 0 : -12,
        paddingLeft: 10,
        color: '#05375a',
    },
    errorMsg: {
        color: '#FF0000',
        fontSize: 14,
    },
    button: {
        alignItems: 'center',
        marginTop: 50
    },
    signIn: {
        width: '100%',
        height: 50,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 10
    },
    textSign: {
        fontSize: 18,
        fontWeight: 'bold'
    }
  });
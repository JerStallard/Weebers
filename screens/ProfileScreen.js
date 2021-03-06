import React from 'react';
import {View, SafeAreaView, StyleSheet} from 'react-native';
import {
  Avatar,
  Title,
  Caption,
  Text,
  TouchableRipple,
} from 'react-native-paper';

import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
const ProfileScreen = () => {
   
 return (
  <SafeAreaView style={styles.container}>

    <View style={styles.userInfoSection}>
      <View style={{flexDirection: 'row', marginTop: 15}}>
        <Avatar.Image 
          source={{
            uri: 'https://pbs.twimg.com/profile_images/1513120171023552521/Ojc8JWx__400x400.jpg',
          }}
          size={80}
        />
        <View style={{marginLeft: 20}}>
          <Title style={[styles.title, {
            marginTop:15,
            marginBottom: 5,
          }]}>Laxus Dreyar</Title>
          <Caption style={styles.caption}>@dreyarFlamboyant</Caption>
        </View>
      </View>
    </View>

    <View style={styles.userInfoSection}>
      <View style={styles.row}>
        <Icon name="map-marker-radius" color="#777777" size={20}/>
        <Text style={{color:"#777777", marginLeft: 20}}>Magnolia, Kingdom of Fiore</Text>
      </View>
      <View style={styles.row}>
        <Icon name="phone" color="#777777" size={20}/>
        <Text style={{color:"#777777", marginLeft: 20}}>+639384275262</Text>
      </View>
      <View style={styles.row}>
        <Icon name="email" color="#777777" size={20}/>
        <Text style={{color:"#777777", marginLeft: 20}}>laxusdreyar@gmail.com</Text>
      </View>
    </View>

    <View style={styles.infoBoxWrapper}>
        <View style={[styles.infoBox, {
          borderRightColor: '#dddddd',
          borderRightWidth: 1
        }]}>
          <Title>₱100,350.00</Title>
          <Caption>Wallet</Caption>
        </View>
        <View style={styles.infoBox}>
          <Title>6</Title>
          <Caption>Orders</Caption>
        </View>
    </View>

    <View style={styles.menuWrapper}>
      <TouchableRipple onPress={() => {}}>
        <View style={styles.menuItem}>
          <Icon name="heart-outline" color="#b31b1b" size={25}/>
          <Text style={styles.menuItemText}>Your Favorites</Text>
        </View>
      </TouchableRipple>
      <TouchableRipple onPress={() => {}}>
        <View style={styles.menuItem}>
          <Icon name="credit-card" color="#b31b1b" size={25}/>
          <Text style={styles.menuItemText}>Payment</Text>
        </View>
      </TouchableRipple>
      {/* <TouchableRipple onPress={myCustomShare}>
        <View style={styles.menuItem}>
          <Icon name="share-outline" color="#FF6347" size={25}/>
          <Text style={styles.menuItemText}>Tell Your Friends</Text>
        </View>
      </TouchableRipple> */}
      <TouchableRipple onPress={() => {}}>
        <View style={styles.menuItem}>
          <Icon name="account-check-outline" color="#b31b1b" size={25}/>
          <Text style={styles.menuItemText}>Support</Text>
        </View>
      </TouchableRipple>
      <TouchableRipple onPress={() => {}}>
        <View style={styles.menuItem}>
          <Icon name="toolbox-outline" color="#b31b1b" size={25}/>
          <Text style={styles.menuItemText}>Settings</Text>
        </View>
      </TouchableRipple>
    </View>
  </SafeAreaView>
);
};

export default ProfileScreen;

const styles = StyleSheet.create({
container: {
  flex: 1,
},
userInfoSection: {
  paddingHorizontal: 30,
  marginBottom: 25,
},
title: {
  fontSize: 24,
  fontWeight: 'bold',
},
caption: {
  fontSize: 14,
  lineHeight: 14,
  fontWeight: '500',
},
row: {
  flexDirection: 'row',
  marginBottom: 10,
},
infoBoxWrapper: {
  borderBottomColor: '#dddddd',
  borderBottomWidth: 1,
  borderTopColor: '#dddddd',
  borderTopWidth: 1,
  flexDirection: 'row',
  height: 100,
},
infoBox: {
  width: '50%',
  alignItems: 'center',
  justifyContent: 'center',
},
menuWrapper: {
  marginTop: 10,
},
menuItem: {
  flexDirection: 'row',
  paddingVertical: 15,
  paddingHorizontal: 30,
},
menuItemText: {
  color: '#777777',
  marginLeft: 20,
  fontWeight: '600',
  fontSize: 16,
  lineHeight: 26,
},
});
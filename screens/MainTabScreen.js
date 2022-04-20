import React from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';

const MainTabScreen = () => {
    return (
      <View style={styles.container}>
        <Text>MainTabScreen</Text>
        <Button
          title="Click Here"
          onPress={() => alert('Button Clicked!')}
        />
      </View>
    );
};

export default MainTabScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1, 
    alignItems: 'center', 
    justifyContent: 'center'
  },
});
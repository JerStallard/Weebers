import React,{useEffect}  from 'react';
import { StatusBar } from 'expo-status-bar';
import { NavigationContainer } from '@react-navigation/native';
import { StyleSheet, Text, View, Button, ActivityIndicator } from 'react-native';
import RootStackScreen from './screens/RootStackScreen';
import { AuthContext } from './components/context';
import { createDrawerNavigator } from '@react-navigation/drawer';
import HomeScreen from './screens/HomeScreen';
import DetailsScreen from './screens/DetailsScreen';
import { DrawerContent } from './screens/DrawerContent';
// import {DrawerContent} from './screens/DrawerContent';
// import { createDrawerNavigator } from '@react-navigation/drawer';
const Drawer = createDrawerNavigator();


// const app =() =>{
//   return(
//     <NavigationContainer>
//       <Drawer.Navigator drawerContent={props => <DrawerContent {...props} />}>
//       <Drawer.Screen name="Home" component={HomeScreen} />
//       <Drawer.Screen name="Details" component={DetailsScreen} />
//     </Drawer.Navigator>
//       <RootStackScreen/>
//     </NavigationContainer>
//   );
// }

const App = () => {
  const [isLoading, setIsLoading] = React.useState(true);
  const [userToken, setUserToken] = React.useState(null); 

  const authcontext = React.useMemo(()=>({
    signIn: () =>{
      setUserToken('fgkj');
      setIsLoading(false);
    },
    signOut: () =>{
      setUserToken(null);
      setIsLoading(false);
    },
    signUp: () =>{
      setUserToken('fgkj');
      setIsLoading(false);
    },
  }));

  useEffect(()=>{
    setTimeout(()=>{
      setIsLoading(false);
    },1000);
  },[])

  return(
    <AuthContext.Provider value={authcontext}>
    <NavigationContainer>

    { userToken !== null ?(
      <Drawer.Navigator drawerContent={props => <DrawerContent {...props} />}>
      <Drawer.Screen name="HomeDrawer" component={MainTabScreen} />
      <Drawer.Screen name="SupportScreen" component={SupportScreen} />
      <Drawer.Screen name="SettingsScreen" component={SettingsScreen} />
      <Drawer.Screen name="BookmarkScreen" component={BookmarkScreen} />
    </Drawer.Navigator>
    )
  :
  <RootStackScreen/>
  }

     
    </NavigationContainer>
    </AuthContext.Provider>
  );
}

export default App;
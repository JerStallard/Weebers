
import React from 'react';
import { View, Text, Button, StyleSheet, Image, Dimensions } from 'react-native';

const ExploreScreen = () => {
    return (
      <View style={styles.container}>
       <Image
        style={styles.logo}
        source={require('../assets/Map1.png')}
        resizeMode="center"
      />
      </View>
    );
};

export default ExploreScreen;

const {height} = Dimensions.get("screen");
const height_logo = height * 1;

const styles = StyleSheet.create({
  container: {
    flex: 1, 
    alignItems: 'center', 
    justifyContent: 'center'
  },
  logo:{
    width: height_logo,
    height: height_logo,
},
});




// import React from 'react';
// import MapView,{PROVIDER_GOOGLE,Marker, Callout} from 'react-native-maps';
// import { View, Text, Image, StyleSheet } from 'react-native';
// import { useTheme } from '@react-navigation/native';

// const mapDarkStyle= [
//   {
//     "elementType": "geometry",
//     "stylers": [
//       {
//         "color": "#1d2c4d"
//       }
//     ]
//   },
//   {
//     "elementType": "labels.text.fill",
//     "stylers": [
//       {
//         "color": "#8ec3b9"
//       }
//     ]
//   },
//   {
//     "elementType": "labels.text.stroke",
//     "stylers": [
//       {
//         "color": "#1a3646"
//       }
//     ]
//   },
//   {
//     "featureType": "administrative.country",
//     "elementType": "geometry.stroke",
//     "stylers": [
//       {
//         "color": "#4b6878"
//       }
//     ]
//   },
//   {
//     "featureType": "administrative.land_parcel",
//     "elementType": "labels.text.fill",
//     "stylers": [
//       {
//         "color": "#64779e"
//       }
//     ]
//   },
//   {
//     "featureType": "administrative.province",
//     "elementType": "geometry.stroke",
//     "stylers": [
//       {
//         "color": "#4b6878"
//       }
//     ]
//   },
//   {
//     "featureType": "landscape.man_made",
//     "elementType": "geometry.stroke",
//     "stylers": [
//       {
//         "color": "#334e87"
//       }
//     ]
//   },
//   {
//     "featureType": "landscape.natural",
//     "elementType": "geometry",
//     "stylers": [
//       {
//         "color": "#023e58"
//       }
//     ]
//   },
//   {
//     "featureType": "poi",
//     "elementType": "geometry",
//     "stylers": [
//       {
//         "color": "#283d6a"
//       }
//     ]
//   },
//   {
//     "featureType": "poi",
//     "elementType": "labels.text.fill",
//     "stylers": [
//       {
//         "color": "#6f9ba5"
//       }
//     ]
//   },
//   {
//     "featureType": "poi",
//     "elementType": "labels.text.stroke",
//     "stylers": [
//       {
//         "color": "#1d2c4d"
//       }
//     ]
//   },
//   {
//     "featureType": "poi.park",
//     "elementType": "geometry.fill",
//     "stylers": [
//       {
//         "color": "#023e58"
//       }
//     ]
//   },
//   {
//     "featureType": "poi.park",
//     "elementType": "labels.text.fill",
//     "stylers": [
//       {
//         "color": "#3C7680"
//       }
//     ]
//   },
//   {
//     "featureType": "road",
//     "elementType": "geometry",
//     "stylers": [
//       {
//         "color": "#304a7d"
//       }
//     ]
//   },
//   {
//     "featureType": "road",
//     "elementType": "labels.text.fill",
//     "stylers": [
//       {
//         "color": "#98a5be"
//       }
//     ]
//   },
//   {
//     "featureType": "road",
//     "elementType": "labels.text.stroke",
//     "stylers": [
//       {
//         "color": "#1d2c4d"
//       }
//     ]
//   },
//   {
//     "featureType": "road.highway",
//     "elementType": "geometry",
//     "stylers": [
//       {
//         "color": "#2c6675"
//       }
//     ]
//   },
//   {
//     "featureType": "road.highway",
//     "elementType": "geometry.stroke",
//     "stylers": [
//       {
//         "color": "#255763"
//       }
//     ]
//   },
//   {
//     "featureType": "road.highway",
//     "elementType": "labels.text.fill",
//     "stylers": [
//       {
//         "color": "#b0d5ce"
//       }
//     ]
//   },
//   {
//     "featureType": "road.highway",
//     "elementType": "labels.text.stroke",
//     "stylers": [
//       {
//         "color": "#023e58"
//       }
//     ]
//   },
//   {
//     "featureType": "transit",
//     "elementType": "labels.text.fill",
//     "stylers": [
//       {
//         "color": "#98a5be"
//       }
//     ]
//   },
//   {
//     "featureType": "transit",
//     "elementType": "labels.text.stroke",
//     "stylers": [
//       {
//         "color": "#1d2c4d"
//       }
//     ]
//   },
//   {
//     "featureType": "transit.line",
//     "elementType": "geometry.fill",
//     "stylers": [
//       {
//         "color": "#283d6a"
//       }
//     ]
//   },
//   {
//     "featureType": "transit.station",
//     "elementType": "geometry",
//     "stylers": [
//       {
//         "color": "#3a4762"
//       }
//     ]
//   },
//   {
//     "featureType": "water",
//     "elementType": "geometry",
//     "stylers": [
//       {
//         "color": "#0e1626"
//       }
//     ]
//   },
//   {
//     "featureType": "water",
//     "elementType": "labels.text.fill",
//     "stylers": [
//       {
//         "color": "#4e6d70"
//       }
//     ]
//   }
// ];

// const mapStandardStyle =[
//   {
//     "elementType": "labels.text.fill",
//     "stylers": [
//       {
//         "color": "#8ec3b9" //"visibility": "off"
//       }
//     ]
//   }
// ];

// const ExploreScreen = () => {
//   const theme = useTheme();
//     return (
//      <MapView
//       provider={PROVIDER_GOOGLE}
//       style={styles.map}
//       customMapStyle={theme.dark ? mapDarkStyle: mapStandardStyle}
//       region ={{
//         latitude: 37.78525,
//         longitude: -122.4324,
//         latitudeDelta: 0.0922,
//         longitudeDelta: 0.0421,

//       }}
     
//      >
//        <Marker
//         coordinate={{
//           latitude: 37.78525,
//           longitude: -122.4324,
//         }}
//         image={require('../assets/map_marker.png')}
//         title="Test Title"
//         description="This a test"
//        >
//         <Callout tooltip>
//           <View>
//             <View style={styles.bubble}>
//               <Text style ={styles.name}>Favourite</Text>
//               {/* <Text>A short Description</Text> */}
//               <Image style={styles.image}
//                 source={require('../assets/banners/cover2.jpg')}
//               />
//             </View>
//             <View style={styles.arrowBorder} />
//             <View style={styles.arrow} />
//           </View>
//         </Callout>
//        </Marker>
//      </MapView>
//     );
// };

// export default ExploreScreen;

// const styles = StyleSheet.create({
//   map: {
//     height: '100%'
//   },
//   bubble: {
//     flexDirection: 'row',
//     alignSelf: 'flex-start',
//     backgroundColor: '#fff',
//     borderRadius: 6,
//     borderColor: '#ccc',
//     borderWidth: 0.5,
//     padding: 15,
//     width: 150,
//   },

//   arrow:{
//     backgroundColor: 'transparent',
//     borderColor:'transparent',
//     borderTopColor:'#fff',
//     borderWidth: 16,
//     alignSelf: 'center',
//     margin: -32,
//   },

//   arrowBorder:{
//     backgroundColor: 'transparent',
//     borderColor: 'transparent',
//     borderTopColor:'#007a87',
//     borderWidth: 16,
//     alignSelf: 'center',
//     marginTop: -0.5,
//   },

//   name:{
//     fontSize: 16,
//     marginBottom: 5,

//   },

//   image:{
//     width:120,
//     height:80
//   },

// });
// import { View, Text, StyleSheet, TouchableOpacity } from 'react-native'
// import React from 'react'
// import { FONTS } from '../constants/theme'
// import { useNavigation } from '@react-navigation/native';
// import { MaterialCommunityIcons } from '@expo/vector-icons';
// import { Octicons } from '@expo/vector-icons';
// import { AntDesign } from '@expo/vector-icons';
// import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
// import {DashboardScreen, Settings } from '../screens';

// const Navigation = () => {

//   const Tab = createBottomTabNavigator();
  
   
//   return (
//     <Tab.Navigator
    
//     screenOptions={{
//       tabBarShowLabel:false,
//       tabBarStyle:
//       [
//        {
//         position:'absolute',
//         fontFamily: FONTS.cabin,
//         fontSize:12,
        

//       }
//       ]
      
//     }}>
//     <Tab.Screen name="Home" component={DashboardScreen} options={
//       {
//         tabBarIcon:({focused}) => 
//         (
//           <View style={{alignItems:'center'}}>
//             <MaterialCommunityIcons name="home" size={24} color="black"
            
//             style={{
//               tintColor: focused? '#EB6117' : 'black',

//             }}
//             />
//             <Text>Home</Text>
//           </View>
//         )
//       }
//     } />
//     <Tab.Screen name="Network" component={DashboardScreen} 
//     options={
//       {
//         tabBarIcon:({focused}) => 
//         (
//           <View style={{alignItems:'center'}}>
//             <MaterialCommunityIcons name="contacts" size={24} color="black" 
            
//             style={{
//               tintColor: focused? '#EB6117' : 'black',

//             }}
//             />
//             <Text>Network</Text>
//           </View>
//         )
//       }
//     } />

// <Tab.Screen name="Post" component={DashboardScreen}
//     options={
//       {
//         tabBarIcon:({focused}) => 
//         (
//           <TouchableOpacity style={{alignItems:'center'}}>
//              <AntDesign name="plus" size={24} color="black"  
            
//             style={{
//               tintColor: focused? '#EB6117' : 'black',

//             }}
//             />
//           </TouchableOpacity>
//         )

        
//       }
//     } />

//     <Tab.Screen name="Notifications" component={DashboardScreen}
//     options={
//       {
//         tabBarIcon:({focused}) => 
//         (
//           <View style={{alignItems:'center'}}>
//              <MaterialCommunityIcons name="bell" size={24} color="black" 
            
//             style={{
//               tintColor: focused? '#EB6117' : 'black',

//             }}
//             />
//             <Text>Notifications</Text>
//           </View>
//         )
//       }
//     } />
//     <Tab.Screen name="Settings" component={Settings} 
//     options={
//       {
//         tabBarIcon:({focused}) => 
//         (
//           <View style={{alignItems:'center'}}>
//             <Octicons name="gear" size={24} color="black"
            
//             style={{
//               tintColor: focused? '#EB6117' : 'black',

//             }}
//             />
//             <Text>Settings</Text>
//           </View>
//         )
//       }
//     }/>
//   </Tab.Navigator>
//   )
// }
// const styles = StyleSheet.create({
//     navigationalmenu:
//     {
//         alignItems: 'center',
//         flexDirection: 'row',
//         justifyContent: 'center',
//         width: '100%',
//         height:44,
//         marginTop:8
//     },
//     navigationalmenuText:
//     {
//         fontFamily: FONTS.cabin,
//         fontSize: 12,
//         fontWeight:400,
        
        

//     },

//     navigationalbtn:
//     {
//         marginLeft: 30,
//        alignItems: "center",
//     }
    
//     });
// export default Navigation
import React, { Component } from 'react';
import {
  View,
  Header,
  StyleSheet,
  Text,
  TouchableOpacity,
  PlatForm,
  StatusBar,
  ImageBackground,
  Image,
  SafeAreaView,
} from 'react-native';

import AppHeader from '../components/AppHeader.js';

export default class HomeScreen extends Component {
  render() {
    return (
     <View>
       <AppHeader/>
       <View style={styles.buttonContainer} >
                
       <TouchableOpacity
              style={styles.buttons}
              onPress={() => this.props.navigation.navigate('CreateAlarmScreen')}> 
              <Text style={{ fontSize:20, color:"white", font:'Cavolini', fontWeight:'bold',}}>CreateAlarmScreen</Text>
              </TouchableOpacity>
        </View>  
        </View>  
          
    );
  }}

  const styles = StyleSheet.create({
    buttonContainer:{
      alignSelf:'center',
      marginTop:50,
    },
    buttons:{
      alignItems:'center',
      justifyContent:'center',
      borderWidth:2,
      borderRadius:15,
      backgroundColor:'blue',
      margin:10,
      width:200,
      height:50,
    }
  });
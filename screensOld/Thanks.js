import React, {Component} from 'react';
import {Platform, Text, BackAndroid, View, TextInput, Image, ImageBackground, TouchableOpacity, StatusBar, ScrollView, TouchableNativeFeedback, BackHandler} from 'react-native';
import styles from './styles.js';

export default class Thanks extends Component {

  constructor(props){
    super(props);
    this.state = { 
      email:'',
      password:'',
      mobile:'',
      confirmPassword:'',
      confirmPasswordError:'',
      passwordError:'',
      emailFormatError:'',
      mobileError:'',
      emailFormatError:'',
      loading: false,
      cardheight:300
    }
    
  }
  componentDidMount =() => {
    if(this.props.navigation.state.params)
    {
        console.log(this.props.navigation.state.params, 'sfsfsffs')
        this.setState({id : this.props.navigation.state.params.data.id})
    }
    BackHandler.addEventListener('hardwareBackPress', this.handleBackButton);
  }

  
  componentWillUnmount() {
    BackHandler.removeEventListener('hardwareBackPress', this.handleBackButton);
  }
  
  handleBackButton() {
    return true;
  }
  
   goBack = () =>{
    this.props.navigation.pop()
   }
  render() {
    return (
    
      <View style={{flex:1}}>
         <View style={styles.toolbar}>
         <TouchableOpacity >
                    <Image style={{width:30,marginLeft:5,  height:30}}></Image>
                    </TouchableOpacity>
                    <Text style={styles.toolbarTitle}>Thanks</Text>
                    <TouchableOpacity>
                    <Image style={{width:30,marginRight:10,  height:30}} ></Image>
                    </TouchableOpacity>
                </View>
                <View style={{alignItems:'center', marginTop:20}}>
                <Text style={{fontSize:22, textAlign:'center'}}>Your Application Id No {this.state.id} has been received</Text>
                <Text style={{fontSize:16, textAlign:'center', marginTop:15}}>You will be notified via SMS/EMAIL</Text>
                </View>

      
      
      </View>
      
    );
}


}
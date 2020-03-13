import React, {Component} from 'react';
import {Platform, Picker, Text, View, TextInput,Alert, Image, ImageBackground, TouchableOpacity, StatusBar, ScrollView, TouchableNativeFeedback} from 'react-native';
import styles from './styles.js';
import RadioForm, {RadioButton, RadioButtonInput, RadioButtonLabel} from 'react-native-simple-radio-button'
import firebase from 'react-native-firebase';
const Banner = firebase.admob.Banner;
const AdRequest = firebase.admob.AdRequest;
const request = new AdRequest();
import Service from './Service';
request.addKeyword('foobar');
import Spinner from 'react-native-loading-spinner-overlay';
import { Dropdown } from 'react-native-material-dropdown';
export default class SignuUp extends Component {

  constructor(props){
    super(props);
    this.state = { 
      email:'Your Email (required)',
      password:'',
      mobile:'',
      token:"",
      confirmPassword:'',
         visible: false,
        passwordError:'',
      emailFormatError:'',
      phone:'',
      emailFormatError:'',
       sub : "Subject1",
      loading: false,
       stname : "Student name (required)",
       parentname : "Parent/Guardian Name (required)",
       score : "NEET Score (optional)",
       value : 1,
      
       sub2 : "Subject2",
      sub3 : "Subject3",
      sub4 : "Subject4",
      sub5 : "Subject5",
      phy : "Physics",
      bio : "Biology",
      che : "Chemistry"
    }
    service = new Service();
  }
  componentDidMount =()=> {
     service.getUserData('tokenData').then((res) => {
      console.log('localData', res)
      var data = JSON.parse(res);
      console.log('parsed Data', data)
     this.setState({token:data.token})
    //  Alert.alert("loggin successfully")
          // this.props.navigation.navigate('Profile')
      })
  }

  
   goBack = () =>{
    this.props.navigation.pop()
   }
   openMenu = () => {
    this.props.navigation.openDrawer()
  }
   submit = () => {
     this.setState({visible:true})
//   setTimeout(() => {
  //     this.setState({visible:false})
  // }, 3000)
    service.calculator(this.state.token, this.state.stname, this.state.parentname, this.state.email, this.state.phone, this.state.score, this.state.sub,  this.state.sub2, this.state.sub3, this.state.sub4, this.state.sub5, this.state.bio, this.state.phy, this.state.che, this.state.value, this.state.picker1, this.state.picker2).then((res) => {
   console.log('res', res)
    setTimeout(() => {
      this.setState({visible:false})
      this.props.navigation.navigate('Thanks', {data:res})
  }, 1000)
   
   if(res){
  //   setTimeout(() => {
  //     this.setState({visible:false})
  // }, 3000)
   
   // Alert.alert("Your Application has been Submitted Successfly!You will be notified by email and sms")
      
 
   }
    //  Alert.alert("loggin successfully")
          // this.props.navigation.navigate('Profile')
      })
     console.log('valuttt', this.state.email  , this.state.stname ,  this.state.parentname, this.state.parentname, this.state.value)
    // if (this.state.email  && this.state.stname &&  this.state.phone && this.state.parentname && this.state.value )
    // {
    //     alert("calculating!please wait")
    // }
    // else
    // {
    //     alert("please fill all details")
    // }
}


  render() {

    var radio_props = [
  {label: 'UR', value: 0 },
  {label: 'OBC/SC/ST', value: 1 }
];
let data = [{
  value: '1995',
}, {
  value: '1996',
}, {
  value: '1997',
}, {
  value: '1998',
}, {
  value: '1999',
}, {
  value: '2000',
},  {
  value: '2001',
},  {
  value: '2002',
},  {
  value: '2003',
},  {
  value: '2004',
},  {
  value: '2005',
},  {
  value: '2006',
},  {
  value: '2007',
},  {
  value: '2008',
},  {
  value: '2009',
},  {
  value: '2010',
},  {
  value: '2011',
},  {
  value: '2012',
},  {
  value: '2013',
},  {
  value: '2014',
},  {
  value: '2015',
},  {
  value: '2016',
},  {
  value: '2017',
},  {
  value: '2018',
},  {
  value: '2019',
}];
let data2 = [{
  value: '1995',
}, {
  value: '1996',
}, {
  value: '1997',
}, {
  value: '1998',
}, {
  value: '1999',
}, {
  value: '2000',
},  {
  value: '2001',
},  {
  value: '2002',
},  {
  value: '2003',
},  {
  value: '2004',
},  {
  value: '2005',
},  {
  value: '2006',
},  {
  value: '2007',
},  {
  value: '2008',
},  {
  value: '2009',
},  {
  value: '2010',
},  {
  value: '2011',
},  {
  value: '2012',
},  {
  value: '2013',
},  {
  value: '2014',
},  {
  value: '2015',
},  {
  value: '2016',
},  {
  value: '2017',
},  {
  value: '2018',
},  {
  value: '2019',
}];
    return (
    
      <View style={{flex:1}}>
             <Spinner visible={this.state.visible} color='#00ff00' tintColor='#00ff00' animation={'fade'} cancelable={false} textStyle={{ color: '#FFF' }} />
         <View style={styles.toolbar}>
         <TouchableOpacity >
                    <Image style={{width:30,marginLeft:5,  height:30}}></Image>
                    </TouchableOpacity>
                    <Text style={styles.toolbarTitle}>GPA Calculator</Text>
                    <TouchableOpacity onPress={() => this.openMenu()}>
                    <Image style={{width:30,marginRight:10,  height:30}} source={require('../images/menu.png')}></Image>
                    </TouchableOpacity>
                </View>
                <ScrollView>
                <View style={{alignItems:'center', marginTop:20}}>

                 <TextInput style={styles.inputBox}
               
                underlineColorAndroid='rgba(0,0,0,0)' 
                placeholder="Student Name (required)"
                editable={false} selectTextOnFocus={false}
                placeholderTextColor = "#002f6c"
                selectionColor="#fff"
                keyboardType="email-address"
               />
                 <View style={{flexDirection:'row',  borderWidth : 1, width:'80%', backgroundColor : '#ffffff', borderRadius:100}}>
                <Image style={{width:25,marginLeft:20, marginTop:15,  height:25}}source={require('../images/name.png')}></Image>
                 <TextInput style={styles.inputBox}
                onChangeText={(stname) => this.setState({stname})}
                underlineColorAndroid='rgba(0,0,0,0)' 
                placeholder="Student name (required)"
                placeholderTextColor = "#95A5A6"
                selectionColor="#fff"
                keyboardType="email-address"
                onFocus= {() => this.setState({stname : " "})}
                 value={this.state.stname}
                />
                </View>
                <TextInput style={styles.inputBox}
              
                underlineColorAndroid='rgba(0,0,0,0)' 
                placeholder="Parent/Guardian Name"
                editable={false} selectTextOnFocus={false}
                placeholderTextColor = "#002f6c"
                selectionColor="#fff"
                keyboardType="email-address"
               />
                 <View style={{flexDirection:'row',  borderWidth : 1, width:'80%', backgroundColor : '#ffffff', borderRadius:100}}>
                <Image style={{width:25,marginLeft:20, marginTop:15,  height:25}}source={require('../images/name.png')}></Image>
                 <TextInput style={styles.inputBox}
                onChangeText={(parentname) => this.setState({parentname})}
                underlineColorAndroid='rgba(0,0,0,0)' 
                placeholder="Parent/Guardian Name"
                placeholderTextColor = "#95A5A6"
                selectionColor="#fff"
                keyboardType="email-address"
                onFocus= {() => this.setState({parentname : " "})}
                 value={this.state.parentname}
                />
                </View>

                <TextInput style={styles.inputBox}
              
                underlineColorAndroid='rgba(0,0,0,0)' 
                placeholder="Your Email (required)"
                editable={false} selectTextOnFocus={false}
                placeholderTextColor = "#002f6c"
                selectionColor="#fff"
                keyboardType="email-address"
               />
                 <View style={{flexDirection:'row',  borderWidth : 1, width:'80%', backgroundColor : '#ffffff', borderRadius:100}}>
                <Image style={{width:25,marginLeft:20, marginTop:15,  height:25}}source={require('../images/email1.png')}></Image>
                 <TextInput style={styles.inputBox}
                onChangeText={(email) => this.setState({email})}
                underlineColorAndroid='rgba(0,0,0,0)' 
                placeholder="Your Email (required)"
                placeholderTextColor = "#95A5A6"
                selectionColor="#fff"
                keyboardType="email-address"
                 onFocus= {() => this.setState({email : " "})}
                 value={this.state.email}
                />
                </View>

                <TextInput style={styles.inputBox}
                
                underlineColorAndroid='rgba(0,0,0,0)' 
                placeholder="Your Phone (required)"
                editable={false} selectTextOnFocus={false}
                placeholderTextColor = "#002f6c"
                selectionColor="#fff"
                
               />
                 <View style={{flexDirection:'row',  borderWidth : 1, width:'80%', backgroundColor : '#ffffff', borderRadius:100}}>
                <Image style={{width:25,marginLeft:20, marginTop:15,  height:25}}source={require('../images/mobile.png')}></Image>
                 <TextInput style={styles.inputBox}
                onChangeText={(phone) => this.setState({phone})}
                underlineColorAndroid='rgba(0,0,0,0)' 
                placeholder="Your Phone (required)"
                placeholderTextColor = "#95A5A6"
                selectionColor="#fff"
                maxLength={10}
                keyboardType="number-pad"
                onFocus= {() => this.setState({phone : " "})}
                 value={this.state.phone}
                />
                </View>

                <TextInput style={styles.inputBox}
                onChangeText={(stname) => this.setState({stname})}
                underlineColorAndroid='rgba(0,0,0,0)' 
                placeholder="NEET SCORE (optional)"
                editable={false} selectTextOnFocus={false}
                placeholderTextColor = "#002f6c"
                selectionColor="#fff"
                
               />
                 <View style={{flexDirection:'row',  borderWidth : 1, width:'80%', backgroundColor : '#ffffff', borderRadius:100}}>
                <Image style={{width:25,marginLeft:20, marginTop:15,  height:25}}source={require('../images/class.png')}></Image>
                 <TextInput style={styles.inputBox}
                onChangeText={(score) => this.setState({score})}
                underlineColorAndroid='rgba(0,0,0,0)' 
                placeholder=""
                placeholderTextColor = "#95A5A6"
                selectionColor="#fff"
                keyboardType="number-pad"
                onFocus= {() => this.setState({score: " "})}
                 value={this.state.score}
                />
                </View>

                 <TextInput style={styles.inputBox}
                onChangeText={(ptname) => this.setState({ptname})}
                underlineColorAndroid='rgba(0,0,0,0)' 
                placeholder="Marks Obtained In Class 10/SSC/X/O Level : Put Best Five Marks Obtained"
                placeholderTextColor = "#002f6c"
                selectionColor="#fff"
                editable={false} selectTextOnFocus={false}
                keyboardType="email-address"
                />
                <View style={{flexDirection:'row',  borderWidth : 1, width:'80%', backgroundColor : '#ffffff', borderRadius:100}}>
                
                 <TextInput style={styles.inputBox}
                onChangeText={(sub) => this.setState({sub})}
                underlineColorAndroid='rgba(0,0,0,0)' 
                placeholder="Subject1"
                placeholderTextColor = "#95A5A6"
                selectionColor="#fff"
                keyboardType="number-pad"
             onFocus= {() => this.setState({sub: " "})}
                 value={this.state.sub}
                />
                </View>
                <View style={{flexDirection:'row',  borderWidth : 1, width:'80%', backgroundColor : '#ffffff', borderRadius:100, marginTop:10}}>
                
                 <TextInput style={styles.inputBox}
                onChangeText={(sub2) => this.setState({sub2})}
                underlineColorAndroid='rgba(0,0,0,0)' 
                placeholder="Subject2"
                placeholderTextColor = "#95A5A6"
                selectionColor="#fff"
                keyboardType="number-pad"
                onFocus= {() => this.setState({sub2: " "})}
                 value={this.state.sub2}
                />
                </View>
                <View style={{flexDirection:'row',  borderWidth : 1, width:'80%', backgroundColor : '#ffffff', borderRadius:100, marginTop:10}}>
                
                 <TextInput style={styles.inputBox}
                onChangeText={(sub3) => this.setState({sub3})}
                underlineColorAndroid='rgba(0,0,0,0)' 
                placeholder="Subject3"
                placeholderTextColor = "#95A5A6"
                selectionColor="#fff"
                keyboardType="number-pad"
                  onFocus= {() => this.setState({sub3: " "})}
                 value={this.state.sub3}
                />
                </View>
                <View style={{flexDirection:'row',  borderWidth : 1, width:'80%', backgroundColor : '#ffffff', borderRadius:100, marginTop:10}}>
                
                 <TextInput style={styles.inputBox}
                onChangeText={(sub4) => this.setState({sub4})}
                underlineColorAndroid='rgba(0,0,0,0)' 
                placeholder="Subject4"
                placeholderTextColor = "#95A5A6"
                selectionColor="#fff"
                keyboardType="number-pad"
                onFocus= {() => this.setState({sub4: " "})}
                 value={this.state.sub4}
                />
                </View>
                <View style={{flexDirection:'row',  borderWidth : 1, width:'80%', backgroundColor : '#ffffff', borderRadius:100, marginTop:10}}>
                
                 <TextInput style={styles.inputBox}
                onChangeText={(sub5) => this.setState({sub5})}
                underlineColorAndroid='rgba(0,0,0,0)' 
                placeholder="Subject5"
                placeholderTextColor = "#95A5A6"
                selectionColor="#fff"
                keyboardType="number-pad"
                onFocus= {() => this.setState({sub5: " "})}
                 value={this.state.sub5}
                />
                </View>

                <TextInput style={styles.inputBox}
                onChangeText={(twl12) => this.setState({twl12})}
                underlineColorAndroid='rgba(0,0,0,0)' 
                placeholder="Marks Obtained In Class 12/HSC/X/A Level :"
                placeholderTextColor = "#002f6c"
                selectionColor="#fff"
                editable={false} selectTextOnFocus={false}
                keyboardType="email-address"
                />
                <View style={{flexDirection:'row',  borderWidth : 1, width:'80%', backgroundColor : '#ffffff', borderRadius:100, marginTop:10}}>
                
                <TextInput style={styles.inputBox}
               onChangeText={(bio) => this.setState({bio})}
               underlineColorAndroid='rgba(0,0,0,0)' 
               placeholder="Biology (Botany + Zoology)"
               placeholderTextColor = "#95A5A6"
               selectionColor="#fff"
               keyboardType="number-pad"
               onFocus= {() => this.setState({bio: " "})}
                 value={this.state.bio}
               />
               </View>
               <View style={{flexDirection:'row',  borderWidth : 1, width:'80%', backgroundColor : '#ffffff', borderRadius:100, marginTop:10}}>
                
                 <TextInput style={styles.inputBox}
                onChangeText={(phy) => this.setState({phy})}
                underlineColorAndroid='rgba(0,0,0,0)' 
                placeholder="Physics"
                placeholderTextColor = "#95A5A6"
                selectionColor="#fff"
                keyboardType="number-pad"
                onFocus= {() => this.setState({phy: " "})}
                 value={this.state.phy}
                />
                </View>
                <View style={{flexDirection:'row',  borderWidth : 1, width:'80%', backgroundColor : '#ffffff', borderRadius:100, marginTop:10}}>
                
                 <TextInput style={styles.inputBox}
                onChangeText={(che) => this.setState({che})}
                underlineColorAndroid='rgba(0,0,0,0)' 
                placeholder="Chemistry"
                placeholderTextColor = "#95A5A6"
                selectionColor="#fff"
                keyboardType="number-pad"
                onFocus= {() => this.setState({che: " "})}
                 value={this.state.che}
                />
                </View>
<TextInput style={styles.inputBox}
             
                underlineColorAndroid='rgba(0,0,0,0)' 
                placeholder="Category (required)"
                placeholderTextColor = "#002f6c"
                selectionColor="#fff"
                editable={false} selectTextOnFocus={false}
                keyboardType="email-address"
                onFocus= {() => this.setState({cat: " "})}
                 value={this.state.cat}
                />
                  <RadioForm
                  style={{fontSize:15, marginTop:10, margin:5, justifyContent:'space-around', width:'50%'}}
          radio_props={radio_props}
          labelStyle={{fontSize:12, marginLeft:-5}}
          initial={0}
           formHorizontal={true}
          onPress={(value) => {this.setState({value:value})}}
        />

<TextInput style={styles.inputBox}
              
                underlineColorAndroid='rgba(0,0,0,0)' 
                placeholder="Year Of Passing Class 10/SSC/X/O Level (required)"
                placeholderTextColor = "#002f6c"
                selectionColor="#fff"
                editable={false} selectTextOnFocus={false}
                keyboardType="email-address"
                />
                 <Dropdown
                containerStyle={{width:'70%'}}
        label='Choose Year of Class 10'
        data={data}
        onChangeText={(val) =>  
          this.setState({picker1: val})
         } 
      />
     
 {/* <Picker style={styles.pickerStyle}  
                        selectedValue={this.state.picker1}  
                        onValueChange={(itemValue, itemPosition) =>  
                            this.setState({picker1: itemValue, choosenIndex: itemPosition})}  
                    >  
                    <Picker.Item label="Choose Year" value="year" />  
                    <Picker.Item label="2010" value="2010" />  
                    <Picker.Item label="2011" value="2011" />  
                     <Picker.Item label="2012" value="2012" />  
                    <Picker.Item label="2013" value="2013" />  
                     <Picker.Item label="2014" value="2014" />  
                    <Picker.Item label="2015" value="2015" />  
                     <Picker.Item label="2016" value="2016" />  
                    <Picker.Item label="2017" value="2017" />  
                     <Picker.Item label="2018" value="2018" />  
                    <Picker.Item label="2019" value="2019" />  
                     <Picker.Item label="2020" value="2020" />  
                    <Picker.Item label="2021" value="2021" />  
                     <Picker.Item label="2022" value="2022" />  
                    <Picker.Item label="2023" value="2023" />  
                     <Picker.Item label="2024" value="2024" />  
                    <Picker.Item label="2025" value="2025" />  
                     <Picker.Item label="2026" value="2026" />  
                    <Picker.Item label="2027" value="2027" />  
                     <Picker.Item label="2028" value="2028" />  
                    <Picker.Item label="2029" value="2029" />  
                     <Picker.Item label="2030" value="2030" />  
                   
                </Picker>   */}
                
                <TextInput style={styles.inputBox}
                onChangeText={(ptname) => this.setState({ptname})}
                underlineColorAndroid='rgba(0,0,0,0)' 
                placeholder="Year Of Passing Class 12/HSC/X11/A Level (required)"
                placeholderTextColor = "#002f6c"
                selectionColor="#fff"
                editable={false} selectTextOnFocus={false}
                keyboardType="email-address"
                />
  <Dropdown
                containerStyle={{width:'70%'}}
        label='Choose Year of Class 12'
        data={data2}
        onChangeText={(val) =>  
          this.setState({picker2: val})
         } 
      />
 
                <TouchableOpacity style={styles.button}> 
                    <Text style={styles.buttonText} onPress={() => this.submit()}>Calculate</Text>
                </TouchableOpacity>
                <TextInput style={styles.inputBox}
                onChangeText={(otp) => this.setState({otp})}
                underlineColorAndroid='rgba(0,0,0,0)' 
                placeholder="OTP Please check your phone/Email"
                placeholderTextColor = "#002f6c"
                selectionColor="#fff"
                editable={false} selectTextOnFocus={false}
                keyboardType="email-address"
                />
                </View>
                </ScrollView>
                
      
      
      </View>
      
    );
}


}
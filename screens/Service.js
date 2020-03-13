import React, {Component} from 'react';
import {Platform, StyleSheet, AsyncStorage, NetInfo} from 'react-native';


export default class Service  extends Component {
  
  constructor(props){
    super(props);
    this.state = { 
      user :'',
      client : 0,
      isConnected: true
    }
    
    
  }

  componentDidMount() {
    NetInfo.isConnected.addEventListener('connectionChange', this.handleConnectivityChange);
  }

  componentWillUnmount() {
    NetInfo.isConnected.removeEventListener('connectionChange', this.handleConnectivityChange);
  }

  
sliderData = () => 
{
 return  fetch('https://www.mbbsbangladesh.com/wp-json/wp/v2/posts?categories=420',
    {
      method: "GET"
   }).then((response) => 
   response.json())
   .catch((error) => {
     console.error(error);
   });

   
}
saveUserData = async (key, value) => {
  //console.log(key ,value);
  try {
    await AsyncStorage.setItem(key, JSON.stringify(value));
  } catch (error) {
    // Error retrieving data
    console.log(error.message);
  }
};

getUserData = async (key) => {
  var data = await AsyncStorage.getItem(key) || 'none';
  return data;
}

clearLocalStorage = async () => {
  try {
  await AsyncStorage.clear();
  } catch (error) {
  }
  }

register = (name, email, firstName, lastName, password, role) => 
{

let formdata = new FormData();
  //formdata.append("name", 'test')
formdata.append("username", "PromodSSP")
formdata.append("password", "44J%5bensJUK0spSAw7hN@pZ")
// formdata.append("product[description]", '12dsadadsa')
 
  // console.log(JSON.stringify(data));
   return  fetch('https://www.mbbsbangladesh.com/wp-json/jwt-auth/v1/token',
    {
      method: "POST",
        headers: {
    'Content-Type': 'multipart/form-data',
  },
    body: formdata
   }).then((response) => 
   response.json()
   )
   .catch((error) => {
     console.log(error, 'error');
   });

}


validateEmail = (email) => {
  // console.log(email);
  if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email))
  {
   
    return (true)
  }
    
    return (false)
};


login = (username, password) => 
{
  console.log('username', username, 'password', password)
let formdata = new FormData();
  //formdata.append("name", 'test')
formdata.append("username", username)
formdata.append("password", password)
// formdata.append("product[description]", '12dsadadsa')
 
  // console.log(JSON.stringify(data));
   return  fetch('https://www.mbbsbangladesh.com/wp-json/jwt-auth/v1/token',
    {
      method: "POST",
        headers: {
    'Content-Type': 'multipart/form-data',
  },
    body: formdata
   }).then((response) => 
   response.json()
   )
   .catch((error) => {
     console.log(error, 'error');
   });



}

calculator = (token, stname, parentname, email, phone, score,  sub,sub1,  sub2, sub3, sub4,bio, phy, che, value, picker1, picker2) => 
{
var cat = "GEN"
if (value =1){
  cat ="UR"
}
else {
  cat="OBC/SC/ST"
}


// formdata.append("product[description]", '12dsadadsa')
var data = { "title": stname, "status": "publish" ,"post_type": "candidates", "student_name": stname ,"parents_name": parentname,"student_email": email,"phone_number": phone ,"student_category": cat,"neet_score": score,"year_pass_10": picker1 ,"year_pass_12": picker2,"sub1_marks": sub,"sub2_marks": sub1 ,"sub3_marks": sub2,"sub4_marks": sub3,"sub5_marks": sub4 , 
"phy_marks":phy,"che_marks": che,"bio_marks": bio }
console.log('data', data)
 
  return fetch('https://www.mbbsbangladesh.com/wp-json/wp/v2/candidates', {
  method: 'POST',
  headers: {
    'Accept': 'application/json',
    'Content-Type': 'application/json',
    'authorization': 'Bearer ' + token
  },
  body: JSON.stringify(data)
}).then((response) => 
   response.json())
   .catch((error) => {
     console.error(error);
   });

 

  
  

}

calculator2 = () => {

  }

 
  
  
}
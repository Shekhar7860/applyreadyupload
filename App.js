/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */
import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View
} from 'react-native';
import { createAppContainer, createSwitchNavigator} from 'react-navigation';
import { createStackNavigator} from 'react-navigation-stack';
import { createDrawerNavigator } from 'react-navigation-drawer';
import SplashScreen from 'react-native-splash-screen';
import Users from './screens/Users';
import Add from './screens/Add'
import Service from './screens/Service';
import Register from './screens/Register'
import SignUp from './screens/SignUp'
import Login from './screens/Login'
import Otp from './screens/Otp'
import Confirm from './screens/Confirm'
import Apply from './screens/Apply'
import CollegeFees from './screens/CollegeFees'
import Slider from './screens/Slider'
import Welcome from './screens/Welcome'
import DrawerContent from './screens/DrawerContent'
import Edit from './screens/Edit'
import Splash from './screens/Splash'
import Profile from './screens/Profile'
import Thanks from './screens/Thanks'
const HomeScreenRouter = createDrawerNavigator(
  {
    customerHome: { screen: SignUp,
      },
      Profile: { screen: Profile
      }
  },
  {
    contentComponent: DrawerContent,
  
    drawerPosition : 'right',
     drawerOpenRoute: 'DrawerRightOpen',
      drawerCloseRoute: 'DrawerRightClose',
      drawerToggleRoute: 'DrawerRightToggle',
  }
);
const LoggedInUser = createDrawerNavigator(
  {
    Profile: { screen: Profile
    },
    customerHome: { screen: SignUp,
      },
      Login : { screen: Login },
      Confirm : { screen: HomeScreenRouter
      },
        
        Register: { screen: Register
      },
       Slider : { screen: Slider
      },
        SignUp: { screen: SignUp
      },
       Welcome : { screen : Welcome },
         Login : { screen: Login },
        Otp : { screen: Otp },
        Apply : { screen: Apply },
        CollegeFees : {screen: CollegeFees},
       Thanks : {screen: Thanks}
     
  },
  {
    contentComponent: DrawerContent,
  
    drawerPosition : 'right',
     drawerOpenRoute: 'DrawerRightOpen',
      drawerCloseRoute: 'DrawerRightClose',
      drawerToggleRoute: 'DrawerRightToggle',
  }
);
const AppNavigator = createStackNavigator(
  {
    Splash: { screen: Splash
  },
   Confirm : { screen: HomeScreenRouter
  },
    
    Register: { screen: Register
  },
   Slider : { screen: Slider
  },
    SignUp: { screen: SignUp
  },
   Welcome : { screen : Welcome },
     Login : { screen: Login },
    Otp : { screen: Otp },
    Apply : { screen: Apply },
    CollegeFees : {screen: CollegeFees},
     Thanks : {screen: Thanks}


}, { headerMode: 'none' })



export default class App extends Component {
  constructor(props){
    super(props);
    this.state = { 
      userId :""
    }
    service = new Service();
  }
  componentDidMount() {
    service.getUserData('userData').then((res) => {
      console.log('localData', res)
      var data = JSON.parse(res);
      console.log('parsed Data', data)
     this.setState({userId:data.id})
    //  Alert.alert("loggin successfully")
          // this.props.navigation.navigate('Profile')
      })
  }
  render() {
    const AppRouter = createAppContainer(this.state.userId !== "" ?  LoggedInUser :AppNavigator);
    return (
      <AppRouter />
    );
  }
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});

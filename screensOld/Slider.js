import React from 'react';
//import react in project
import { StyleSheet, View, Text, Image } from 'react-native';
//import all the required component
import AppIntroSlider from 'react-native-app-intro-slider';
//import AppIntroSlider to use it
import Service from './Service';
export default class Slider extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      showRealApp: false,
      data : []
      //To show the main page of the app
    };
    service = new Service();
  }

  getList = () => {
    service.sliderData().then((res) => {
      console.log(res);
      console.log(res);
      const regex = /(<([^>]+)>)/ig;
      for(i=0; i< res.length ; i++) {
        console.log(res[i].title.rendered, 'sjjsj')
        console.log(res[i].content.rendered, 'sjjsj')
       
        this.state.data.push({title : res[i].title.rendered, text : res[i].content.rendered.replace(regex, ''), image: {
          uri: "https://www.mbbsbangladesh.com/wp-content/uploads/2019/06/doctor-2-1-1.jpg"},  backgroundColor: '#22bcb5'})
      }

      console.log(this.state.data, 'arra')
      // if(res.status_code)
      // {
      //     if(res.status == "success")
      //     {
      //       this.refs.defaultToastBottom.ShowToastFunction('Login Successfully');
      //       // service.saveUserData('user', res.user-details);
      //       this.goToHome();
      //     }
      //     else
      //     {
      //       this.refs.defaultToastBottom.ShowToastFunction('Wrong Mobile Or Password');
      //     }
      // }
      // else 
      // {
      //   this.refs.defaultToastBottom.ShowToastFunction('Network Error');
      // }

      })
  }
  componentDidMount = () => {
    this.getList();
  }
  _onDone = () => {
    this.props.navigation.navigate('Welcome')
  };
  _onSkip = () => {
    this.props.navigation.navigate('Welcome')
  };
  _renderItem = ({ item }) => {
    return (
      <View
        style={{
          flex: 1,
          backgroundColor: item.backgroundColor,
          alignItems: 'center',
          justifyContent: 'space-around',
          paddingBottom: 100
        }}>
        <Text style={styles.title}>{item.title}</Text>
        <Image style={styles.image} source={item.image} />
        <Text style={styles.text}>{item.text}</Text>
      </View>
    );
  };
  render() {
    //If false show the Intro Slides
    if (this.state.showRealApp) {
      //Real Application
      return (
        <View
          style={{
            flex: 1,
            justifyContent: 'center',
            alignItems: 'center',
            padding: 50,
          }}>
          <Text>
            This will be your screen when you click Skip from any slide or Done
            button at last
          </Text>
        </View>
      );
    } else {
      //Intro slides
      return (
        <AppIntroSlider
          slides={this.state.data}
          renderItem={this._renderItem}
          onDone={this._onDone}
          showSkipButton={true}
          onSkip={this._onSkip}
        />
      );
    }
  }
}
const styles = StyleSheet.create({
  image: {
    width: 200,
    height: 200,
  },
  text: {
    fontSize: 18,
    color: 'white',
    textAlign: 'center',
    paddingVertical: 30,
  },
  title: {
    fontSize: 25,
    color: 'white',
    textAlign: 'center',
    marginBottom: 16,
  },
});
 
const slides = [
  {
    key: 's1',
    text: 'Bangladesh has become one of the most preferred locations for International students pursuing their MBBS degrees',
    title: 'Advantages studying MBBS in Bangladesh',
    image: {
      uri:
        'https://www.mbbsbangladesh.com/wp-content/uploads/2019/06/doctor-2-1-1.jpg',
    },
    backgroundColor: '#20d2bb',
  },
  {
    key: 's2',
    title: 'MBBS Admission in Bangladesh Government',
    text: 'Medical Colleges under SAARC Quota or Top Private Medical Colleges in Bangladesh. Medical Colleges in Bangladesh are approved by MCI Act 1956. Qualifications Granted by Medical Institutions outside India',
    image: {
      uri:
        'https://www.mbbsbangladesh.com/wp-content/uploads/2019/06/doctor-2-1-1.jpg',
    },
    backgroundColor: '#febe29',
  },
  {
    key: 's3',
    title: 'Eligibility Criteria for Study Medical in Bangladesh',
    text: '1. Candidate must have NEET qualifying marks i.e – at least  50th Percentile, SC/ST/OBC – 40th Percentile 2. Students must pass-out HSC 12 board exam in year 2019/2018.  3. Aspirant must pass-out SSC 10 exam in 2017 or 2016.  ',
    image: {
      uri: 'https://www.mbbsbangladesh.com/wp-content/uploads/2019/06/doctor-2-1-1.jpg',
    },
    backgroundColor: '#22bcb5',
  },
  {
    key: 's4',
    title: 'MBBS Admission Process',
    text: 'Low Cost MBBS admission in Bangladesh No Donation Direct admission, MBBS admission in Bangladesh is best option for Indian Students. Smile Education Consultancy only SAARC authorized admission consultant in India. We provides Medical admission in UG and PG level. Official website contain all the necessary admission related information for MBBS M.D/M.S PG Medical PhD program in Bangladesh.',
    image: {
      uri: 'https://www.mbbsbangladesh.com/wp-content/uploads/2019/06/doctor-2-1-1.jpg',
    },
    backgroundColor: '#3395ff',
  },
  {
    key: 's5',
    title: 'Top 3 Women’s Medical Colleges in Bangladesh',
    text: '1. Medical College for Women and Hospital 2. Kumudini Women’s Medical College 3. Sylhet Women’s Medical College Hospital',
    image: {
      uri:
        'https://www.mbbsbangladesh.com/wp-content/uploads/2019/06/doctor-2-1-1.jpg',
    },
    backgroundColor: '#f6437b',
  },
  {
    key: 's6',
    title: 'Top 5 Medical Colleges in Bangladesh',
    text: '1. Barind Medical College (BMC)2. Khwaja Yunus Ali Medical College3. Monno Medical College 4. Dhaka National Medical College 5. Bangladesh Medical College',
    image: {
      uri:
        'https://www.mbbsbangladesh.com/wp-content/uploads/2019/06/doctor-2-1-1.jpg',
    },
    backgroundColor: '#febe29',
  },
];
// Summon React, React-native coponents
import React, {useRef, useEffect, useState} from 'react';
import {
  ImageBackground, Animated, View, Image, StyleSheet, 
  Text, Button, TouchableOpacity, Dimensions
} from 'react-native';

// Get the phone screen width * 0.75
const winWidth= 0.75 * (Dimensions.get('window').width);
/**
* HomeScreen
* Purpose: This function compose main page
* Parameter(s): working on navigation mode
* Precondition(s): navigation setup must be ready
* Returns : Opening page 
* Side effect: 
* <1>: Animation effect: Text will slowly show up
* <2>: You can go to tutorial page by pressing top button
* <3>: You can go to Main category(Tree) page by pressing bottom button
* <4>: Hitting bottom button will move middle words and delay was applied
*/
function HomeScreen({navigation}){
  //State setup for image representing by cotrolling opacity
  const fadeAnim = useRef(new Animated.Value(0)).current;
  //State setup for image moving to X-axis
  const box1x = useRef(new Animated.Value(0)).current;
  const box2x = useRef(new Animated.Value(0)).current;
  // move object to right for 1.5sec & move object to left for 1.2sec
  const moveOut = () => {
    Animated.timing(box1x, {
      toValue: 1000,
      duration: 1500,
    }).start()
    Animated.timing(box2x, {
      toValue: -2000,
      duration: 1200,
    }).start()
  }
  // increase opacity of image to 1 for 1.5 sec
  const fadeIn = () => {
    Animated.timing(fadeAnim,{
      toValue:1,
      duration: 1500
    }).start();
  };
  // When bottom button clicked, it moves to Main category(tree) page with 0.9sec delay for waiting animation
  const runDelay=()=>{
    setTimeout(()=>{navigation.push('Tree')},900)
  };

  return (
    <View style={[styles.container]}>
    {/* Main body screen */}
      {/* Button for navigating to tutorial page */}
      <Button title="How to Use -:- App Tutorial" color='darkgrey' onPress={()=> navigation.push('Tutorial')} /> 
      {/* View window for 2 line-text at the top */}
      <View style={
        [{flex:0.08},{alignItems: 'center'}, {justifyContent:'flex-end'},
        {marginTop:'15%'}
        ]}>
        {/* Text Size setup depending on window size */}
        <Text style={[
          {fontSize: Dimensions.get('window').width > 350? 30 : 20},
          {color: 'darkgreen', fontFamily:'serif', fontWeight: 'bold'},
        ]}>
          HTP Diagnosis Aid
        </Text>
        <Text style={[
          {fontSize: Dimensions.get('window').width > 350? 26 : 15},
          {color: 'darkred', fontFamily: 'Roboto', fontWeight: 'bold'}
        ]}>                     App ver. Beta</Text>
      </View>
      {/* Loading background image while triggering fadeIn effect for other images */}
      <ImageBackground onLoad={fadeIn} 
        style={[styles.backImage]}
        source={require('../assets/HTP.png')}
      >
        {/* Default animimation for middle House,Tree,Person Box */}
        <Animated.View style = {{
          transform: [{translateX: box1x}],
          width: winWidth,
          height: (4/3)*winWidth
        }}>
          {/* House box image with extra animation */}
          <Animated.Image
            style={[styles.titleLogo, {opacity:fadeAnim}, {transform: [{translateX: box1x}],}]}
            source={require('../assets/House.png')}
          />
          {/* Tree box image with extra animation */}
          <Animated.Image
            style={[styles.titleLogo, {opacity:fadeAnim}, {transform: [{translateX: box2x}]}, {marginLeft: 40}]}
             source={require('../assets/Tree.png')}
          />
          {/* Tree box image with default animation */}
          <Animated.Image
            style={[styles.titleLogo, {opacity:fadeAnim}, {marginLeft: 60}]}
            source={require('../assets/Person.png')}
          />
        </Animated.View>
      </ImageBackground>
      {/* Button at the bottom for navigating to Main Category(Tree) */}
      <View style={[{height: '10%'},{justifyContent:'center'}]}>
        <TouchableOpacity 
          style={[{justifyContent:'center'},{alignItems: 'center', height: '100%', backgroundColor:'white'}]} 
          onPress= {()=> [moveOut(), runDelay()]}>
          {/* Font size regulated by window size */}
          <Text style={[{justifyContent:'center'},{color: 'orange'}, 
                        {fontSize: Dimensions.get('window').width > 350? 25 : 15},
                        {fontWeight: "bold"}]}>Continue to Use HTP App
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

// Stylesheet
const styles = StyleSheet.create({
  // style for main body
  container: {
    marginTop: '20%',
    flex: 1,
    justifyContent: 'center'
  },
  // style for 3 middle images 
  titleLogo: {
    flex: 0.15,
    width: '65%',
    resizeMode: "contain",
    marginLeft: 20,
    opacity: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  // style for backgroudn image
  backImage: {
    flex: 1,
    marginTop: '15%',
    justifyContent: 'center',
    resizeMode: "contain",
    maxWidth: '100%',
    opacity: 1
  },
});
// export HomeScreen as a default
export default HomeScreen;
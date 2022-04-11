// Summon React, React-native coponents
import React, {useRef, useEffect, useState} from 'react';
import {ImageBackground, View, StyleSheet, Text, Button, Image, Animated, Dimensions, TouchableOpacity} from 'react-native';
import Swipeable from 'react-native-gesture-handler/Swipeable';

// Get screen size information
const winWidth= 0.80 * (Dimensions.get('window').width);

/**
* leftSwipeAction
* Purpose: This function is for showing color bar and letter for swiping gesture
* Parameter(s): 
* Precondition(s): N/A
* Returns : sliding window when swiping
* Side effect: 
* <1>: show light green color at the bottom sliding window when slidig left to right
* <2>: show word tree on the left-right swiping
*/
const leftSwipeActions = () => {
  return (
    <View style={{ flex: 1, backgroundColor: 'lightgreen', justifyContent: 'center' }}>
      <Text 
        style={{fontSize: 20, color: '#666666', paddingHorizontal: 10, paddingVertical: 20}}>
        Tree
      </Text>
    </View>
  );
};

/**
* rightSwipeAction
* Purpose: This function is for showing color bar and letter for swiping gesture
* Parameter(s): 
* Precondition(s): N/A
* Returns : sliding window when swiping
* Side effect: 
* <1>: show violet color at the bottom sliding window when slidig right to left
* <2>: show word house on the right-left swiping
*/
const rightSwipeActions = () => {
  return (
    <View style={{ flex:1, backgroundColor: 'violet', justifyContent: 'center' }}>
      <Text
        style={{fontSize: 20, color: '#666666', paddingHorizontal: 10, paddingVertical: 20, textAlign: 'right' }}>
        House
      </Text>
    </View>
  );
};

/**
* Person
* Purpose: This function is for showing color bar and letter for swiping gesture
* Parameter(s): working on navigation mode
* Precondition(s): navigation prepared, leftSwipeActions and RightSwipeAction functions is declared
* Returns : Main category window for Person
* Side effect: It is deivded to 6 parts which are all touchable for going into detail description page
*/
function Person({navigation}){
  return(
    <View style={[styles.container]}>
    {/* Main window */}
      {/* empty window for top margin */}
      <View style={[styles.container], {flex: 1}}>
      </View>
      {/* 1-2nd row window for 2 images, the size of image will be adjusted by the screen size */}
      <View style={[styles.container], {flex: 1}, {alignItems: 'center'}}>
        <TouchableOpacity onPress={()=> navigation.navigate('Person-Head')}> 
        <Image source={require('../assets/PersonPart1.png')} 
          style={[{height:((275/1257)*winWidth)}, {width: winWidth}]} />
        </TouchableOpacity>
        <TouchableOpacity onPress={()=> navigation.navigate('Person-EyeMouthNose')}> 
        <Image source={require('../assets/PersonPart2.png')} 
          style={[{height:((350/1256)*winWidth)}, {width: winWidth}]} />
        </TouchableOpacity>
      </View>
      {/* 3rd row window for 2 column images, the size of image will be adjusted by the screen size */}
      <View style={[styles.container], {flex: 1}, {alignItems: 'center'}}>
        <View style={{flexDirection: 'row'}}>
          <TouchableOpacity onPress={()=> navigation.navigate('Person-Arm')}> 
          <Image source={require('../assets/PersonPart3.png')} 
            style={[{height:((677/1257)*winWidth)}, {width: (499/1257)*winWidth}]} />
          </TouchableOpacity>
          <TouchableOpacity onPress={()=> navigation.navigate('Person-FaceNeck')}> 
          <Image source={require('../assets/PersonPart4.png')} 
            style={[{height:((677/1257)*winWidth)}, {width: (758/1257)*winWidth}]} />
          </TouchableOpacity>
        </View>
      </View>
      {/* 4-5th row window for 2 images, the size of image will be adjusted by the screen size */}
      <View style={[styles.container], {flex: 1}, {alignItems: 'center'}}>
        <TouchableOpacity onPress={()=> navigation.navigate('Person-ETC')}> 
        <Image source={require('../assets/PersonPart5.png')} 
          style={[{height:((396/1257)*winWidth)}, {width: winWidth}]} />
        </TouchableOpacity>
        <TouchableOpacity onPress={()=> navigation.navigate('Person-Leg')}> 
        <Image source={require('../assets/PersonPart6.png')} 
          style={[{height:((361/1257)*winWidth)}, {width: winWidth}]} />
        </TouchableOpacity>
      </View>
      {/* empty window for top margin */}
      <View style={[styles.container], {flex: 1}}>
      </View>
      {/* bottom window for swiping */}
      <View style={[styles.container2]}>
        {/* Availabe to swipe right or left which lead to House or tree page, respectively */}
        <Swipeable
          renderLeftActions={leftSwipeActions}
          renderRightActions={rightSwipeActions}
          onSwipeableRightOpen={()=>navigation.push('House')}
          onSwipeableLeftOpen={()=>navigation.push('Tree')}
        >
          {/* default setup for sliding window for swiping */}
          <View style={{paddingHorizontal: 30, paddingVertical: 20, backgroundColor: 'white'}}>
            <Text style={{ fontSize: 24, textAlign: 'center' }}>
              Switch Main Category
            </Text>
          </View>
        </Swipeable>
      </View>
    </View>
  );
}
// export Person as a default
export default Person;

// stylesheet for main view, and bottom view
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center'
  },
  container2: {
    justifyContent: 'flex-end'
  }
});

// Summon React, React-native coponents
import React, {useRef, useEffect, useState} from 'react';
import {
  ImageBackground, View, StyleSheet, Text, Button, Image, 
  Animated, Dimensions, TouchableOpacity} from 'react-native';
import Swipeable from 'react-native-gesture-handler/Swipeable';

// Get screen size information
const winWidth= 0.90 * (Dimensions.get('window').width);

/**
* leftSwipeAction
* Purpose: This function is for showing color bar and letter for swiping gesture
* Parameter(s): 
* Precondition(s): N/A
* Returns : sliding window when swiping
* Side effect: 
* <1>: show light yellow color at the bottom sliding window when slidig left to right
* <2>: show word Person on the left-right swiping
*/
const leftSwipeActions = () => {
  return (
    <View style={{ flex: 1, backgroundColor: '#ffeebd', justifyContent: 'center' }}>
      <Text 
        style={{fontSize: 20, color: '#666666', paddingHorizontal: 10, paddingVertical: 20}}>
        Person
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
* <1>: show light green color at the bottom sliding window when slidig right to left
* <2>: show word Person on the right-left swiping
*/
const rightSwipeActions = () => {
  return (
    <View style={{ flex:1, backgroundColor: 'lightgreen', justifyContent: 'center' }}>
      <Text 
        style={{fontSize: 20, color: '#666666', paddingHorizontal: 10, paddingVertical: 20, textAlign: 'right'}} >
        Tree
      </Text>
    </View>
  );
};

/**
* House
* Purpose: This function is for showing color bar and letter for swiping gesture
* Parameter(s): working on navigation mode
* Precondition(s): navigation prepared, leftSwipeActions and RightSwipeAction functions is declared
* Returns : Main category window for House
* Side effect: It is deivded to 6 parts which are all touchable for going into detail description page
*/
function House({navigation}){
  return( 
    <View style={[styles.container]}>
    {/* Main window */}
      {/* empty window for top margin */}
      <View style={[styles.container], {flex: 1}}>
      </View>
      {/* 1st row window for 2 column images, the size of image will be adjusted by the screen size */}
      <View style={[styles.container], {flex: 1}, {alignItems: 'center'}}>
        <View style={{flexDirection: 'row'}}>
          <TouchableOpacity onPress={()=> navigation.navigate('House-Chimney')}> 
          <Image source={require('../assets/HousePart1.png')} 
            style={[{height:((752/1296)*winWidth)}, {width: (616/1296)*winWidth}]} />
          </TouchableOpacity>
          <Image source={require('../assets/HousePart2.png')} 
            style={[{height:((752/1296)*winWidth)}, {width: (680/1296)*winWidth}]} />
        </View>
      </View>
      {/* 2nd row window for 4 column images, the size of image will be adjusted by the screen size */}
      <View style={[styles.container], {flex: 1}, {alignItems: 'center'}}>
        <View style={{flexDirection: 'row'}}>
          <TouchableOpacity onPress={()=> navigation.navigate('House-Stair')}> 
          <Image source={require('../assets/HousePart3.png')} 
            style={[{height:((669/1296)*winWidth)}, {width: (325/1296)*winWidth}]} />
          </TouchableOpacity>
          <Image source={require('../assets/HousePart4.png')} 
            style={[{height:((669/1296)*winWidth)}, {width: (304/1296)*winWidth}]} />
          <Image source={require('../assets/HousePart5.png')} 
            style={[{height:((669/1296)*winWidth)}, {width: (353/1296)*winWidth}]} />
          <TouchableOpacity onPress={()=> navigation.navigate('House-Wall')}> 
          <Image source={require('../assets/HousePart6.png')} 
            style={[{height:((669/1296)*winWidth)}, {width: (316/1296)*winWidth}]} />
          </TouchableOpacity>
        </View>
      </View>
      {/* empty window for top margin */}
      <View style={[styles.container], {flex: 1}}>
      </View>
      {/* bottom window for swiping */}
      <View style={[styles.container2]}>
        {/* Availabe to swipe left or right which lead to Person or tree page, respectively */}
        <Swipeable
          renderLeftActions={leftSwipeActions}
          renderRightActions={rightSwipeActions}
          onSwipeableRightOpen={()=>navigation.navigate('Tree')}
          onSwipeableLeftOpen={()=>navigation.navigate('Person')}
        >
          {/* default setup for sliding window for swiping */}
          <View style={{ paddingHorizontal: 30, paddingVertical: 20, backgroundColor: 'white'}}>
            <Text style={{ fontSize: 24, textAlign: 'center' }}>
              Switch Main Category
            </Text>
          </View>
        </Swipeable>
      </View>
    </View>
  );
}
// export House as a default
export default House;

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


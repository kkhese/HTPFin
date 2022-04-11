// Summon React, React-native coponents
import React, {useRef, useEffect, useState} from 'react';
import {
  ImageBackground, View, StyleSheet, Text, Button, 
  Image, Animated, Dimensions, TouchableOpacity} from 'react-native';
import Swipeable from 'react-native-gesture-handler/Swipeable';

// Get screen size information
const winWidth= 0.95 * (Dimensions.get('window').width);

/**
* leftSwipeAction
* Purpose: This function is for showing color bar and letter for swiping gesture
* Parameter(s): 
* Precondition(s): N/A
* Returns : sliding window when swiping
* Side effect: 
* <1>: show light violet color at the bottom sliding window when slidig left to right
* <2>: show word house on the left-right swiping
*/
const leftSwipeActions = () => {
  return (
    <View style={{ flex: 1, backgroundColor: 'violet', justifyContent: 'center'}}>
      <Text
        style={{fontSize: 20, color: '#666666', paddingHorizontal: 10, paddingVertical: 20}}
      >
        House
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
* <1>: show light yellow color at the bottom sliding window when slidig right to left
* <2>: show word person on the right-left swiping
*/
const rightSwipeActions = () => {
  return (
    <View style={{ flex:1, backgroundColor: '#ffeebd', justifyContent: 'center'}}>
      <Text
        style={{fontSize: 20, color: '#666666', paddingHorizontal: 10, paddingVertical: 20, textAlign: 'right'}}>
        Person
      </Text>
    </View>
  );
};

/**
* Tree
* Purpose: This function is for showing color bar and letter for swiping gesture
* Parameter(s): working on navigation mode
* Precondition(s): navigation prepared, leftSwipeActions and RightSwipeAction functions is declared
* Returns : Main category window for Tree
* Side effect: It is deivded to 6 parts which are all touchable for going into detail description page
*/
function Tree({navigation}){            
  return(
    <View style={[styles.container]}>
    {/* Main window */}
      {/* empty window for top margin */}
      <View style={[styles.container], {flex: 1}}>
      </View>
      {/* 1-6 row for 6 images */}
      <View style={[styles.container], {flex: 2}, {alignItems: 'center'}}>
        <TouchableOpacity onPress={()=> navigation.navigate('Tree-Title')}> 
        <Image source={require('../assets/TreePart1.png')} 
          style={[{height:((221/1443)*winWidth)}, {width: winWidth}]} />
        </TouchableOpacity>
        <TouchableOpacity onPress={()=> navigation.navigate('Tree-Crown')}> 
        <Image source={require('../assets/TreePart2.png')} 
          style={[{height:((427/1443)*winWidth)}, {width: winWidth}]} />
        </TouchableOpacity>
        <TouchableOpacity onPress={()=> navigation.navigate('Tree-Leaf')}> 
        <Image source={require('../assets/TreePart3.png')} 
          style={[{height:((236/1443)*winWidth)}, {width: winWidth}]} />
        </TouchableOpacity>
        <TouchableOpacity onPress={()=> navigation.navigate('Tree-Branch')}> 
        <Image source={require('../assets/TreePart4.png')} 
          style={[{height:((238/1443)*winWidth)}, {width: winWidth}]} />
        </TouchableOpacity>
        <TouchableOpacity onPress={()=> navigation.navigate('Tree-Trunk')}> 
        <Image source={require('../assets/TreePart5.png')} 
          style={[{height:((223/1443)*winWidth)}, {width: winWidth}]} />
        </TouchableOpacity>        
        <TouchableOpacity onPress={()=> navigation.navigate('Tree-Root')}> 
        <Image source={require('../assets/TreePart6.png')} 
          style={[{height:((251/1443)*winWidth)}, {width: winWidth}]} />
        </TouchableOpacity>
      </View>
      {/* empty window for top margin */}
      <View style={[styles.container], {flex: 1}}>
      </View>

      <View style={[styles.container2]}>
        {/* Availabe to swipe right or left which lead to Person or House page, respectively */}
        <Swipeable
          renderLeftActions={leftSwipeActions}
          renderRightActions={rightSwipeActions}
          onSwipeableLeftOpen={()=>navigation.push('House')}
          onSwipeableRightOpen={()=>navigation.push('Person')}
        >
          {/* default setup for sliding window for swiping */}
          <View
            style={{paddingHorizontal: 30, paddingVertical: 20, backgroundColor: 'white'}}>
            <Text style={{ fontSize: 24, textAlign: 'center' }}>
              Switch Main Category
            </Text>
          </View>
        </Swipeable>
      </View>
    </View>
  );
}
// export Tree as a default
export default Tree;

// stylesheet for main view, and bottom view
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center'
  },
  container2: {
    justifyContent: 'flex-end'
  },
});

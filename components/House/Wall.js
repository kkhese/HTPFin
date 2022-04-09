import React, {useRef, useEffect, useState} from 'react';
import {ImageBackground, View, StyleSheet, Text, Button, Image, Animated, Dimensions} from 'react-native';
import Swipeable from 'react-native-gesture-handler/Swipeable';

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
    <View
      style={{ flex: 1, backgroundColor: '#ccffbd', justifyContent: 'center' }}
    >
      <Text
        style={{
          fontSize: 20,
          color: '#40394a',
          paddingHorizontal: 10,
          paddingVertical: 20,
        }}
      >
        Person
      </Text>
    </View>
  );
};
const rightSwipeActions = () => {
  return (
    <View
      style={{ flex:1, backgroundColor: '#ff8303', justifyContent: 'center' }}
    >
      <Text
        style={{
          fontSize: 20,
          color: '#1b1a17',
          paddingHorizontal: 10,
          paddingVertical: 20,
          textAlign: 'right'
        }}
      >
        Tree
      </Text>
    </View>
  );
};

function HouseWall({navigation}){

  return(
     <View style={[styles.container]}>
      <View style={[styles.container], {alignItems: 'center'}, {flex: 1}}>
      </View>

 

      <View style={[styles.container], {flex: 1}}>
      </View>
      
      <View style={[styles.container2]}>
        <Swipeable
          renderLeftActions={leftSwipeActions}
          renderRightActions={rightSwipeActions}
          onSwipeableRightOpen={()=>navigation.navigate('Tree')}
          onSwipeableLeftOpen={()=>navigation.navigate('Person')}
        >
          <View
            style={{
              paddingHorizontal: 30,
              paddingVertical: 20,
              backgroundColor: 'white',
            }}
          >
            <Text style={{ fontSize: 24, textAlign: 'center' }}>
              Switch Main Category
            </Text>
          </View>
        </Swipeable>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center'
  },
  container2: {
    justifyContent: 'flex-end'
  }
});

export default HouseWall;

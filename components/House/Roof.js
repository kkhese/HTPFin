// Swipe Action functions were modified from the sourse of 
// https://blog.logrocket.com/react-native-gesture-handler-swipe-long-press-and-more/

// Summon React, React Native components
import React, {useRef, useEffect, useState} from 'react';
import {View, StyleSheet, Text, Button, Image, ScrollView, TouchableOpacity, Dimensions} from 'react-native';
import Swipeable from 'react-native-gesture-handler/Swipeable';

// get phone screen resulution
const winWidth= 0.50 * (Dimensions.get('window').width);

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
* HouseRoof
* Purpose: This function is for showing dignosis of chosen image
* Parameter(s): working on navigation mode
* Precondition(s): navigation prepared, leftSwipeActions and RightSwipeAction functions is declared
* Returns : Detail windows for House Roof
* Side effect: It is deivded to 6 parts which are all touchable for going into detail description page
*/
function HouseRoof({navigation}){
  // Short instruction for detail description page
  const content0 = () => {
    return(
       <View style={[{alignItems: 'center'}, {backgroundColor: '#5938ff30'}]}>
        <Text style={[styles.text2]}> Plese Select from Above Images.</Text>
        <Text style={[styles.text2]}> It might have more than 2 images.</Text>
        <Text style={[styles.text2, {color: 'red'}]}> Horizontal ScrollScreen </Text>
      </View> 
    );
  }
  // Description for 1st image
  const content1 = () => {
    return(
      <View>
        <View>
          <Text style={[styles.text]}> ---  Size  --- </Text>
        </View> 
        <View style={[{marginBottom:7},{marginLeft:15},{marginRight:15}]}>
          <Text style={[styles.text3]}>Excessively large:</Text>
          <Text>  1. Intrinsic cognitive activity is highly emphasized and valued</Text>
          <Text>  2. Frustration in relationships</Text>
          <Text>  3. Excessive preoccupation with withdrawal or daydreaming</Text>
        </View>
        <View style={[{marginBottom:7},{marginLeft:15},{marginRight:15}]}>
          <Text style={[styles.text3]}>Nothing but roof:</Text>
          <Text>  1. Preoccupied with daydreaming in everyday life</Text>
          <Text>  2. Fulfillment of needs through fantasy</Text>
          <Text>  3. In extreme cases, a marked schizoid tendency or a state of mental confusion may be suspected</Text>
        </View>
        <View style={[{marginBottom:7},{marginLeft:15},{marginRight:15}]}>
          <Text style={[styles.text3]}>No roof or flat:</Text>
          <Text>  1. Lack of imagination</Text>
          <Text>  2. Poor judgment</Text>
          <Text style={{textAlign: 'justify'}}>  People with normal intelligence who painted such a roof tend to shrink and pursue only specific things.</Text>
        </View>
      </View> 
    );
  }
  // Description for 2nd image
  const content2 = () => {
    return(
      <View>
        <View>
          <Text style={[styles.text]}> ---  Shape  --- </Text>
        </View> 
        <View style={[{marginBottom:7},{marginLeft:15},{marginRight:15}]}>
          <Text style={[styles.text3]}>No roof or flat:</Text>
          <Text>  1. Lack of imagination</Text>
          <Text>  2. Poor judgment</Text>
          <Text style={{textAlign: 'justify'}}>  People with normal intelligence who painted such a roof tend to shrink and pursue only specific things.</Text>
        </View>
        <View style={[{marginBottom:7},{marginLeft:15},{marginRight:15}]}>
          <Text style={[styles.text3]}>1D:</Text>
          <Text>  Extremely limited and rigid</Text>
        </View>
        <View style={[{marginBottom:7},{marginLeft:15},{marginRight:15}]}>
          <Text style={[styles.text3]}>Open:</Text>
          <Text>  1. Difficulty distinguishing between reality and fantasy</Text>
          <Text>  2. Weakening of ego boundaries</Text>
        </View>
        <View style={[{marginBottom:7},{marginLeft:15},{marginRight:15}]}>
          <Text style={[styles.text3]}>Windswept:</Text>
          <Text>  Feeling overwhelmed by external forces beyond your control</Text>
        </View>
        <View style={[{marginBottom:7},{marginLeft:15},{marginRight:15}]}>
          <Text style={[styles.text3]}>3D roof with 2D wall:</Text>
          <Text style={{textAlign: 'justify'}}>  It is related to choosing daydreaming as a desire to avoid and escape from negative, hopeless, and helpless emotional difficulties in the home.</Text>
        </View>
      </View> 
    );
  }
  // Description for 3rd image
  const content3 = () => {
    return(
      <View>
        <View>
          <Text style={[styles.text]}> ---  Detail  --- </Text>
        </View> 
        <View style={[{marginBottom:7},{marginLeft:15},{marginRight:15}]}>
          <Text style={[styles.text3]}>Detail with patterns:</Text>
          <Text style={{textAlign: 'justify'}}>  Clients with strong consciousness along with guilt are more likely to paint grids, planks, and elaborate roofs.</Text>
        </View>
        <View style={[{marginBottom:7},{marginLeft:15},{marginRight:15}]}>
          <Text style={[styles.text3]}>Strong or multiple lines:</Text>
          <Text>  1. Fear of fanciful tendencies outside of one's control</Text>
          <Text>  2. Self-defense tendency</Text>
        </View>
        <View style={[{marginBottom:7},{marginLeft:15},{marginRight:15}]}>
          <Text style={[styles.text3]}>Highlight the eaves:</Text>
          <Text>  Obsessive-compulsive</Text>
        </View>
        <View style={[{marginBottom:7},{marginLeft:15},{marginRight:15}]}>
          <Text style={[styles.text3]}>Extra work on roof:</Text>
          <Text>  Associated with the preoccupation with fantasies</Text>
        </View>
      </View> 
    );
  }

  // state setup for saving image descriptions
  const [show0, setShow0] = useState(content0)
  const [show1, setShow1] = useState(content1)
  const [show2, setShow2] = useState(content2)
  const [show3, setShow3] = useState(content3)

  // press handler for switching image description window
  const pressHandler1 = () => { setShow0(show1) } 
  const pressHandler2 = () => { setShow0(show2) } 
  const pressHandler3 = () => { setShow0(show3) } 

  return(
     <View style={[styles.container]}>
      {/* top window for selecting details */}
      <View style={{marginTop:'3%'}}>
        <Text style={[{fontSize: 16},{textAlign:'center'},{color: 'purple'}]}>
          ← Select the Details →
        </Text>
      </View>
      {/* horizontal scroll view for seeing image menu */}
      <View style={[styles.container, {flex: 1.2}]}>
        <ScrollView
          style={[styles.scrollwin]} horizontal={true}>
          <TouchableOpacity onPress={()=>{pressHandler1()}}> 
          <Image source={require('../../assets/House/Roof1.png')} 
            style={[{height:((2/3)*winWidth)}, {width: winWidth}]} />
          </TouchableOpacity>      
          <TouchableOpacity onPress={()=>{pressHandler2()}}>
          <Image source={require('../../assets/House/Roof2.png')} 
            style={[{height:((2/3)*winWidth)}, {width: winWidth}]} />
          </TouchableOpacity>
          <TouchableOpacity onPress={()=>{pressHandler3()}}> 
          <Image source={require('../../assets/House/Roof3.png')} 
            style={[{height:((2/3)*winWidth)}, {width: winWidth}]} />
          </TouchableOpacity>
        </ScrollView>
      </View>
      {/* Detailed description window */}
      <View style={[styles.container], {flex: 4}}>
        <ScrollView>
          {show0}     
        </ScrollView>
      </View>
      {/* bottom window for swiping */}      
      <View style={[styles.container2]}>
        {/* Availabe to swipe left or right which lead to Person or tree page, respectively */}
        <Swipeable
          renderLeftActions={leftSwipeActions}
          renderRightActions={rightSwipeActions}
          onSwipeableRightOpen={()=>navigation.push('Tree')}
          onSwipeableLeftOpen={()=>navigation.push('Person')}
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
// export HouseChimney as a default
export default HouseRoof;

// stylesheet for main view, and bottom view
const styles = StyleSheet.create({
  // Main window
  container: {
    flex: 1,
    justifyContent: 'center'
  },
  // Top scroll window
  scrollwin: {
    flexDirection: 'row', 
    justifyContent: 'flex-start', 
    alignItems: 'center', 
//    height:((2.2/3)*winWidth)
  },
  // bottom swiping window
  container2: {
    justifyContent: 'flex-end'
  },
  // Title for description text
  text: {
    fontSize: 18,
    fontFamily: 'sans-serif-medium',
    textAlign: 'center',
    marginBottom: 7,
    marginTop: 7,
    backgroundColor: '#ddccff'
  },
  // Text for instruction
  text2: {
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 5,
    marginTop: 5
  },
  // sub-title for description text
  text3: {
    fontSize: 16,
    textAlign: 'justify',
    fontFamily: 'notoserif',
    fontWeight: 'bold',
    marginBottom: 2,
    marginTop: 2
  }
});
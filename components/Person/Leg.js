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
* PersonLeg
* Purpose: This function is for showing dignosis of chosen image
* Parameter(s): working on navigation mode
* Precondition(s): navigation prepared, leftSwipeActions and RightSwipeAction functions is declared
* Returns : Detail windows for Person Leg
* Side effect: It is deivded to 6 parts which are all touchable for going into detail description page
*/
function PersonLeg({navigation}){
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
          <Text style={[styles.text3]}>Absence or neglect below the waist:</Text>
          <Text style={{textAlign: 'justify'}}>  It means a lack of confidence, inadequacy, and ambivalence in coping in the world and trying to take root in reality, leading to a depressed state and excessive atrophy.</Text>
        </View>

        <View style={[{marginBottom:7},{marginLeft:15},{marginRight:15}]}>
          <Text style={[styles.text3]}>Very long leg:</Text>
          <Text>  Striving for autonomy</Text>
        </View>
        <View style={[{marginBottom:7},{marginLeft:15},{marginRight:15}]}>
          <Text style={[styles.text3]}>Short leg:</Text>
          <Text>  1. Emotional stasis</Text>
          <Text>  2. Dependency</Text>
        </View>
        <View style={[{marginBottom:7},{marginLeft:15},{marginRight:15}]}>
          <Text style={[styles.text3]}>Large feet:</Text>
          <Text>  1. Excessive demands on protection</Text>
          <Text>  2. Strong need for a support base</Text>
        </View>       
        <View style={[{marginBottom:7},{marginLeft:15},{marginRight:15}]}>
          <Text style={[styles.text3]}>Very small feet:</Text>
          <Text>  1. Repressive and rigid control over sexuality</Text>
          <Text>  2. Dependence on others</Text>
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
          <Text style={[styles.text3]}>1D arm or leg with 2D body:</Text>
          <Text>  1. Lack of emotional bonding between family members</Text>
          <Text>  2. Expression of resistance to a subject in a relationship due to a lack of affectionate exchange</Text>
          <Text>  3. In the case of non-normal children, impaired judgment or brain damage</Text>
        </View>
        <View style={[{marginBottom:7},{marginLeft:15},{marginRight:15}]}>
          <Text style={[styles.text3]}>Weak leg with fat torso:</Text>
          <Text style={{textAlign: 'justify'}}>  In relation to coping and control, it indicates that the person has a very strong sense of inadequacy and has a passive attitude.</Text>
        </View>        
        <View style={[{marginBottom:7},{marginLeft:15},{marginRight:15}]}>
          <Text style={[styles.text3]}>Pointed toe:</Text>
          <Text style={{textAlign: 'justify'}}>  There is a possibility of deterioration of judgment due to severe distortion of the perception of reality.</Text>
        </View>
      </View> 
    );
  }
  // Description for 3rd image
  const content3 = () => {
    return(
      <View>
        <View>
          <Text style={[styles.text]}> ---  Status  --- </Text>
        </View> 
        <View style={[{marginBottom:7},{marginLeft:15},{marginRight:15}]}>
          <Text style={[styles.text3]}>Tight legs:</Text>
          <Text>  1. Excessive mental tension</Text>
          <Text>  2. Trying to protect oneself from access to sex</Text>
          <Text>  3. Gender-related maladjustment</Text>
        </View>
        <View style={[{marginBottom:7},{marginLeft:15},{marginRight:15}]}>
          <Text style={[styles.text3]}>Emphasis on leg:</Text>
          <Text>  1. Strong autonomy and assertive tendencies</Text>
          <Text>  2. Aggressive attitude</Text>
          <Text>  3. Desire for independence</Text>
          <Text>  4. Hyperactivity</Text>
        </View>
        <View style={[{marginBottom:7},{marginLeft:15},{marginRight:15}]}>
          <Text style={[styles.text3]}>Omission of foot:</Text>
          <Text>  Lack of mobility and autonomy</Text>
        </View>  
      </View> 
    );
  }
  // Description for 4th image
  const content4 = () => {
    return(
      <View>
        <View>
          <Text style={[styles.text]}> ---  Detail  --- </Text>
        </View> 
        <View style={[{marginBottom:7},{marginLeft:15},{marginRight:15}]}>
          <Text style={[styles.text3]}>Curved shoe or shoe decorations:</Text>
          <Text>  1. Self-deprecating</Text>
          <Text>  2. Narcissistic</Text>
        </View>
        <View style={[{marginBottom:7},{marginLeft:15},{marginRight:15}]}>
          <Text style={[styles.text3]}>High heel by male:</Text>
          <Text>  Psychological and sexual immaturity</Text>
        </View>
        <View style={[{marginBottom:7},{marginLeft:15},{marginRight:15}]}>
          <Text style={[styles.text3]}>High heel by female:</Text>
          <Text>  Craving for same-sex physical attractiony</Text>
        </View>
        <View style={[{marginBottom:7},{marginLeft:15},{marginRight:15}]}>
          <Text style={[styles.text3]}>Shoe with dark shade:</Text>
          <Text>  Sexually high interest</Text>
        </View>
        <View style={[{marginBottom:7},{marginLeft:15},{marginRight:15}]}>
          <Text style={[styles.text3]}>Highlighted shoe:</Text>
          <Text>  1. Men: interest in women</Text>
          <Text>  2. Women: the desire to look feminine</Text>
        </View>
        <View style={[{marginBottom:7},{marginLeft:15},{marginRight:15}]}>
          <Text style={[styles.text3]}>Detailed painted shoe:</Text>
          <Text>  1. In adolescent female subjects, manifestation of compulsive interest in sexual objects</Text>
          <Text>  2. Interest in sexual life with men</Text>
        </View>
        <View style={[{marginBottom:7},{marginLeft:15},{marginRight:15}]}>
          <Text style={[styles.text3]}>Spicky shoe:</Text>
          <Text>  Aggressive tendencies</Text>
        </View>
        <View style={[{marginBottom:7},{marginLeft:15},{marginRight:15}]}>
          <Text style={[styles.text3]}>Toes with slipper:</Text>
          <Text>  1. Deviance from social normsy</Text>
          <Text>  2. Strong aggression</Text>
        </View>
      </View> 
    );
  }

  // state setup for saving image descriptions
  const [show0, setShow0] = useState(content0)
  const [show1, setShow1] = useState(content1)
  const [show2, setShow2] = useState(content2)
  const [show3, setShow3] = useState(content3)
  const [show4, setShow4] = useState(content4)

  // press handler for switching image description window
  const pressHandler1 = () => { setShow0(show1) } 
  const pressHandler2 = () => { setShow0(show2) } 
  const pressHandler3 = () => { setShow0(show3) } 
  const pressHandler4 = () => { setShow0(show4) }   

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
          <Image source={require('../../assets/Person/Leg1.png')} 
            style={[{height:((2/3)*winWidth)}, {width: winWidth}]} />
          </TouchableOpacity>      
          <TouchableOpacity onPress={()=>{pressHandler2()}}>
          <Image source={require('../../assets/Person/Leg2.png')} 
            style={[{height:((2/3)*winWidth)}, {width: winWidth}]} />
          </TouchableOpacity>
          <TouchableOpacity onPress={()=>{pressHandler3()}}> 
          <Image source={require('../../assets/Person/Leg3.png')} 
            style={[{height:((2/3)*winWidth)}, {width: winWidth}]} />
          </TouchableOpacity>
          <TouchableOpacity onPress={()=>{pressHandler4()}}> 
          <Image source={require('../../assets/Person/Leg4.png')} 
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
          onSwipeableLeftOpen={()=>navigation.push('Tree')}
          onSwipeableRightOpen={()=>navigation.push('House')}
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
export default PersonLeg;

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
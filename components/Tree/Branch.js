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
* TreeBranch
* Purpose: This function is for showing dignosis of chosen image
* Parameter(s): working on navigation mode
* Precondition(s): navigation prepared, leftSwipeActions and RightSwipeAction functions is declared
* Returns : Detail windows for Tree Branch
* Side effect: It is deivded to 6 parts which are all touchable for going into detail description page
*/
function TreeBranch({navigation}){
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
          <Text style={[styles.text]}> ---  Shape  --- </Text>
        </View> 
        <View style={[{marginBottom:7},{marginLeft:15},{marginRight:15}]}>
          <Text style={[styles.text3]}>Short club or harpoon:</Text>
          <Text>  1. Critical</Text>
          <Text>  2. Hostility</Text>
          <Text>  3. Aggressive Tendencies</Text>
          <Text>  4. Inner tension in situations of inability to express anger and trying to contain it</Text>
        </View>
        <View style={[{marginBottom:7},{marginLeft:15},{marginRight:15}]}>
          <Text style={[styles.text3]}>Prong:</Text>
          <Text>  1. Strong critique and sensitivity</Text>
          <Text>  2. Strong hostility and aggressive impulsivity</Text>
          <Text>  3. A lot of anger due to lack of restraint and preoccupation with things</Text>
        </View>
        <View style={[{marginBottom:7},{marginLeft:15},{marginRight:15}]}>
          <Text style={[styles.text3]}>Get thicker outward:</Text>
          <Text>  1. Extrovert</Text>
          <Text>  2. Full expression of impulses and instincts</Text>
          <Text>  3. A person with the ability to act recklessly without thinking</Text>
        </View>
        <View style={[{marginBottom:7},{marginLeft:15},{marginRight:15}]}>
          <Text style={[styles.text3]}>2D with open tip:</Text>
          <Text>  1. Open-mindedness</Text>
          <Text>  2. Interested in many things, but unable to properly control one's impulses</Text>
        </View>
        <View style={[{marginBottom:7},{marginLeft:15},{marginRight:15}]}>
          <Text style={[styles.text3]}>Long rectangular:</Text>
          <Text>  1. Defensive</Text>
          <Text>  2. Resistant</Text>
          <Text>  3. Negative tendency to compromise with those around you</Text>
        </View>
        <View style={[{marginBottom:7},{marginLeft:15},{marginRight:15}]}>
          <Text style={[styles.text3]}>Penis:</Text>
          <Text>  1. Aggressive</Text>
          <Text>  2. Repressed anger</Text>
        </View>
      </View> 
    );
  }
  // Description for 2nd image
  const content2 = () => {
    return(
      <View>
        <View>
          <Text style={[styles.text]}> ---  Direction  --- </Text>
        </View> 
        <View style={[{marginBottom:7},{marginLeft:15},{marginRight:15}]}>
          <Text style={[styles.text3]}>Downward:</Text>
          <Text>  1. Easy to be influenced by others</Text>
          <Text>  2. Inactive</Text>
          <Text>  3. Lack of energy</Text>
          <Text>  4. Weak resistance</Text>
          <Text>  5. Easy to feel tired</Text>
          <Text>  6. Depressive tendencies</Text>
        </View>        
        <View style={[{marginBottom:7},{marginLeft:15},{marginRight:15}]}>
          <Text style={[styles.text3]}>Inward:</Text>
          <Text>  1. Self-centered</Text>
          <Text>  2. Introvert</Text>
          <Text>  3. Autistic</Text>
          <Text>  4. Obsessive-compulsive tendencies</Text>
        </View>
        <View style={[{marginBottom:7},{marginLeft:15},{marginRight:15}]}>
          <Text style={[styles.text3]}>Long, narrow, upward:</Text>
          <Text style={{textAlign: 'justify'}}>  There is a tendency to seek excessive fanciful satisfaction due to the fear felt in seeking satisfaction in the environment.</Text>
        </View>
        <View style={[{marginBottom:7},{marginLeft:15},{marginRight:15}]}>
          <Text style={[styles.text3]}>Emphasis on the right branch:</Text>
          <Text>  Tendency to avoid emotional gratification and obtain intellectual gratification</Text>
        </View>
        <View style={[{marginBottom:7},{marginLeft:15},{marginRight:15}]}>
          <Text style={[styles.text3]}>Emphasis on the left branch:</Text>
          <Text>  Tendency to seek excessive emotional satisfaction</Text>
        </View>
        <View style={[{marginBottom:7},{marginLeft:15},{marginRight:15}]}>
          <Text style={[styles.text3]}>Stretched out:</Text>
          <Text style={{textAlign: 'justify'}}>  Because their love needs are not met, the client seeks warmth and support from authority.</Text>
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
          <Text style={[styles.text3]}>Cut on a thick trunk:</Text>
          <Text>  1. Fails to finish in a structured and organized style</Text>
          <Text>  2. Fanciful person</Text>
        </View>
        <View style={[{marginBottom:7},{marginLeft:15},{marginRight:15}]}>
          <Text style={[styles.text3]}>Thin and short:</Text>
          <Text>  Thinking that one's progress and activities have been inhibited</Text>
        </View>  
        <View style={[{marginBottom:7},{marginLeft:15},{marginRight:15}]}>
          <Text style={[styles.text3]}>Broken or dead:</Text>
          <Text>  A sense of loss or emptiness in a part of life</Text>
        </View>        
        <View style={[{marginBottom:7},{marginLeft:15},{marginRight:15}]}>
          <Text style={[styles.text3]}>Disconnected to trunk:</Text>
          <Text>  1. Inability to complete in a structured and organized fashion</Text>
          <Text>  2. Faciful Person</Text>
        </View>        
        <View style={[{marginBottom:7},{marginLeft:15},{marginRight:15}]}>
          <Text style={[styles.text3]}>On lower part of trunk:</Text>
          <Text style={{textAlign: 'justify'}}>  It is seen in clients with withdrawal tendencies who are depressed and have nothing to expect.</Text>
        </View>
        <View style={[{marginBottom:7},{marginLeft:15},{marginRight:15}]}>
          <Text style={[styles.text3]}>All over the trunk:</Text>
          <Text>  1. Extrovert</Text>
          <Text>  2. Fully expressing your impulses and instincts</Text>
          <Text>  3. A person with the ability to act recklessly without thinking</Text>
          <Text>  4. Rich in sensitivity</Text>
          <Text>  5. Respond well to stimuli from the outside world</Text>
          <Text>  6. Withdrawal tendency in adults</Text>
          <Text>  7. Minor retardation in intelligence and personality in school-age children</Text>
        </View>
        <View style={[{marginBottom:7},{marginLeft:15},{marginRight:15}]}>
          <Text style={[styles.text3]}>Too many with leaves:</Text>
          <Text style={{textAlign: 'justify'}}>  It shows that you are giving energy only to your own growth.</Text>
        </View>
        <View style={[{marginBottom:7},{marginLeft:15},{marginRight:15}]}>
          <Text style={[styles.text3]}>Faint:</Text>
          <Text>  1. Indecisiveness</Text>
          <Text>  2. Disquietude</Text>
        </View>        
      </View> 
    );
  }
  // Description for 4th image
  const content4 = () => {
    return(
      <View>
        <View>
          <Text style={[styles.text]}> ---  Size  --- </Text>
        </View> 
        <View style={[{marginBottom:7},{marginLeft:15},{marginRight:15}]}>
          <Text style={[styles.text3]}>Nothing:</Text>
          <Text>  1. Very restrained from interacting with the world</Text>
          <Text>  2. Severely socially discouraged</Text>
          <Text>  3. Feelings of atrophy and depression toward oneself or one's own object</Text>
        </View>
        <View style={[{marginBottom:7},{marginLeft:15},{marginRight:15}]}>
          <Text style={[styles.text3]}>Too large for trunk:</Text>
          <Text style={{textAlign: 'justify'}}>  It indicates a feeling of inadequacy in which excessive effort is made to obtain satisfaction from the environment.</Text>
        </View>
        <View style={[{marginBottom:7},{marginLeft:15},{marginRight:15}]}>
          <Text style={[styles.text3]}>Too small for trunk:</Text>
          <Text style={{textAlign: 'justify'}}>  It means that you cannot get satisfaction from the environment.</Text>
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
          <Image source={require('../../assets/Tree/Branch1.png')} 
            style={[{height:((2/3)*winWidth)}, {width: winWidth}]} />
          </TouchableOpacity>      
          <TouchableOpacity onPress={()=>{pressHandler2()}}>
          <Image source={require('../../assets/Tree/Branch2.png')} 
            style={[{height:((2/3)*winWidth)}, {width: winWidth}]} />
          </TouchableOpacity>
          <TouchableOpacity onPress={()=>{pressHandler3()}}> 
          <Image source={require('../../assets/Tree/Branch3.png')} 
            style={[{height:((2/3)*winWidth)}, {width: winWidth}]} />
          </TouchableOpacity>
          <TouchableOpacity onPress={()=>{pressHandler4()}}> 
          <Image source={require('../../assets/Tree/Branch4.png')} 
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
          onSwipeableRightOpen={()=>navigation.push('Person')}
          onSwipeableLeftOpen={()=>navigation.push('House')}
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
export default TreeBranch;

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
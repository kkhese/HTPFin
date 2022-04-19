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
* PersonArm
* Purpose: This function is for showing dignosis of chosen image
* Parameter(s): working on navigation mode
* Precondition(s): navigation prepared, leftSwipeActions and RightSwipeAction functions is declared
* Returns : Detail windows for Person Arm
* Side effect: It is deivded to 6 parts which are all touchable for going into detail description page
*/
function PersonArm({navigation}){
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
          <Text style={[styles.text3]}>Omission of arms:</Text>
          <Text>  1. Guilt</Text>
          <Text>  2. Extreme depression</Text>
          <Text>  3. General helplessness</Text>
          <Text>  4. Dissatisfaction with the environment</Text>
          <Text>  5. Strong withdrawal tendency</Text>
        </View>
        <View style={[{marginBottom:7},{marginLeft:15},{marginRight:15}]}>
          <Text style={[styles.text3]}>Short arm:</Text>
          <Text>  1. Lack of ambition</Text>
          <Text>  2. Feeling weak and giving in to life</Text>
          <Text>  3. Passive and dependent</Text>
          <Text>  4. Limit of contact</Text>
          <Text>  5. In the case of children, maladaptation</Text>
        </View>
        <View style={[{marginBottom:7},{marginLeft:15},{marginRight:15}]}>
          <Text style={[styles.text3]}>Long arm:</Text>
          <Text>  1. Hard work and ambition for success</Text>
          <Text>  2. Asking for love and affection</Text>
        </View>
        <View style={[{marginBottom:7},{marginLeft:15},{marginRight:15}]}>
          <Text style={[styles.text3]}>Very long fingers:</Text>
          <Text>  1. A superficial adult who is oppressed, a condition in which it is difficult to adjust to work and to have a smooth social life, like a simple and childish person</Text>
          <Text>  2. Higher anxiety in children</Text>
        </View>        
        <View style={[{marginBottom:7},{marginLeft:15},{marginRight:15}]}>
          <Text style={[styles.text3]}>Little hand:</Text>
          <Text style={{textAlign: 'justify'}}>  It indicates that they feel they have too little control and are behaving in a passive and inhibitory manner.</Text>
        </View>
        <View style={[{marginBottom:7},{marginLeft:15},{marginRight:15}]}>
          <Text style={[styles.text3]}>Extremely Large hand:</Text>
          <Text style={{textAlign: 'justify'}}>  In the case of adolescents and adults, it indicates that they have difficulty in contacting others, and that they have a strong desire to have socially insidious contact and a desire to overcome their sense of helplessness.</Text>
        </View>
        <View style={[{marginBottom:7},{marginLeft:15},{marginRight:15}]}>
          <Text style={[styles.text3]}>Very big fingers:</Text>
          <Text>  Aggressive tendency</Text>
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
          <Text style={[styles.text3]}>Wing:</Text>
          <Text style={{textAlign: 'justify'}}>  If they are not children, they indicate helplessness and there is a possibility of withdrawal and mental confusion.</Text>
        </View>
        <View style={[{marginBottom:7},{marginLeft:15},{marginRight:15}]}>
          <Text style={[styles.text3]}>Arms from torso not shoulders:</Text>
          <Text style={{textAlign: 'justify'}}>  Although it is common in infants and children, if it is drawn in adolescence or later, it suggests withdrawal or a state of poor judgment.</Text>
        </View>        
        <View style={[{marginBottom:7},{marginLeft:15},{marginRight:15}]}>
          <Text style={[styles.text3]}>Spear-like finger:</Text>
          <Text>  1. Considerable hostility</Text>
          <Text>  2. Aggression</Text>
          <Text>  3. Paranoid potential</Text>
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
          <Text style={[styles.text3]}>Inequal lengths:</Text>
          <Text style={{textAlign: 'justify'}}>  It refers to an ambivalence about the ability to interact with the world or coping ability.</Text>
        </View>  
        <View style={[{marginBottom:7},{marginLeft:15},{marginRight:15}]}>
          <Text style={[styles.text3]}>Powerful and long:</Text>
          <Text>  1. Greedy and rewarding ambition</Text>
          <Text>  2. Need for physical strength</Text>
          <Text>  3. The desire for active contact with the environment</Text>
        </View>
        <View style={[{marginBottom:7},{marginLeft:15},{marginRight:15}]}>
          <Text style={[styles.text3]}>Waving one hand to say hello:</Text>
          <Text>  1. Lack of social skills</Text>
          <Text>  2. The ability to cope with various changes is inefficient and mechanical</Text>
          <Text>  3. Lack of ability to form internal representations and emotional relationships with significant others</Text>
          <Text>  4. Inflexibility due to fundamental flaw in object relationship</Text>
        </View>
        <View style={[{marginBottom:7},{marginLeft:15},{marginRight:15}]}>
          <Text style={[styles.text3]}>Crossed:</Text>
          <Text>  1. Suspicion of the world and of others and underlying hostility</Text>
          <Text>  2. The desire to protect oneself in a dangerous world</Text>
          <Text>  3. Defensive attitude</Text>
        </View>
        <View style={[{marginBottom:7},{marginLeft:15},{marginRight:15}]}>
          <Text style={[styles.text3]}>Back arm:</Text>
          <Text style={{textAlign: 'justify'}}>  It refers to a case of holding in anger or anger, or a feeling of antipathy in interpersonal relationships.</Text>
        </View>  
        <View style={[{marginBottom:7},{marginLeft:15},{marginRight:15}]}>
          <Text style={[styles.text3]}>Attached to body:</Text>
          <Text>  1. Passive</Text>
          <Text>  2. Strong defensive attitude</Text>
          <Text>  3. Rigid personality</Text>
        </View>
        <View style={[{marginBottom:7},{marginLeft:15},{marginRight:15}]}>
          <Text style={[styles.text3]}>Attached to body with clenched fists:</Text>
          <Text style={{textAlign: 'justify'}}>  It refers to the state of suppressing hostility and refraining from outwardly showing aggressive behavior.</Text>
        </View>  
        <View style={[{marginBottom:7},{marginLeft:15},{marginRight:15}]}>
          <Text style={[styles.text3]}>Clenched fists outward from body:</Text>
          <Text>  1. Rebellious</Text>
          <Text>  2. Hostile behavior</Text>
        </View>  
        <View style={[{marginBottom:7},{marginLeft:15},{marginRight:15}]}>
          <Text style={[styles.text3]}>Hand in pocket:</Text>
          <Text>  1. Controlling the escape tendencies or being lazy and introverted</Text>
          <Text>  2. Possibility of interest in masturbation</Text>
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
          <Text style={[styles.text3]}>Omission of hands:</Text>
          <Text>  1. Guilt</Text>
          <Text>  2. Strong depression</Text>
          <Text>  3. General helplessness</Text>
          <Text>  4. Dissatisfaction with the environment</Text>
          <Text>  5. Strong withdrawal tendency</Text>
        </View>
        <View style={[{marginBottom:7},{marginLeft:15},{marginRight:15}]}>
          <Text style={[styles.text3]}>Blurred hands:</Text>
          <Text>  Lack of trust in achievement and social contact</Text>
        </View>
        <View style={[{marginBottom:7},{marginLeft:15},{marginRight:15}]}>
          <Text style={[styles.text3]}>Circle-shaped hand without fingers:</Text>
          <Text>  1. Withdrawal tendency</Text>
          <Text>  2. Intention to hide aggression in stressful situations</Text>
          <Text>   -- Not applicable for preschoolers</Text>
        </View>
        <View style={[{marginBottom:7},{marginLeft:15},{marginRight:15}]}>
          <Text style={[styles.text3]}>Fingers without hands:</Text>
          <Text style={{textAlign: 'justify'}}>  When adults draw only their fingers without a hand, they may have a withdrawal tendency and aggression tendency.</Text>
        </View>
        <View style={[{marginBottom:7},{marginLeft:15},{marginRight:15}]}>
          <Text style={[styles.text3]}>Detailed fingers wrapped around lines:</Text>
          <Text>  Aggressive and prone to uncontrolled behavior</Text>
        </View>
        <View style={[{marginBottom:7},{marginLeft:15},{marginRight:15}]}>
          <Text style={[styles.text3]}>Detailed hand:</Text>
          <Text>  1. Attempts to compulsively compensate for control-related anxiety</Text>
          <Text>  2. Aggression</Text>
          <Text>  3. Obsessive</Text>
          <Text>  4. Anger</Text>
          <Text>  5. Mental confusion</Text>
        </View>
        <View style={[{marginBottom:7},{marginLeft:15},{marginRight:15}]}>
          <Text style={[styles.text3]}>Overpainted or highlighted:</Text>
          <Text>  1. Initial mental turmoil</Text>
          <Text>  2. A person who compulsively controls his or her urge to aggression or theft</Text>
          <Text>  3. Anxiety and dissatisfaction with interpersonal relationships</Text>
          <Text>  4. Guilt about kleptomania or masturbation</Text>
        </View>
        <View style={[{marginBottom:7},{marginLeft:15},{marginRight:15}]}>
          <Text style={[styles.text3]}>More than 5 fingers:</Text>
          <Text style={{textAlign: 'justify'}}>  In the case of preschool children, it is difficult to judge, but in the case of adults, it is likely to have poor judgment, and it means that they tend to be hyperactive to gain a sense of control and act impulsively.</Text>
        </View>
        <View style={[{marginBottom:7},{marginLeft:15},{marginRight:15}]}>
          <Text style={[styles.text3]}>Less than 5 fingers:</Text>
          <Text>  1. Helpless</Text>
          <Text>  2. Dependent</Text>
          <Text>  3. Feeling inadequate in gaining control of the world</Text>
          <Text>   -- Difficulty in judging for preschoolers</Text>
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
          <Image source={require('../../assets/Person/Arm1.png')} 
            style={[{height:((2/3)*winWidth)}, {width: winWidth}]} />
          </TouchableOpacity>      
          <TouchableOpacity onPress={()=>{pressHandler2()}}>
          <Image source={require('../../assets/Person/Arm2.png')} 
            style={[{height:((2/3)*winWidth)}, {width: winWidth}]} />
          </TouchableOpacity>
          <TouchableOpacity onPress={()=>{pressHandler3()}}> 
          <Image source={require('../../assets/Person/Arm3.png')} 
            style={[{height:((2/3)*winWidth)}, {width: winWidth}]} />
          </TouchableOpacity>
          <TouchableOpacity onPress={()=>{pressHandler4()}}> 
          <Image source={require('../../assets/Person/Arm4.png')} 
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
export default PersonArm;

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
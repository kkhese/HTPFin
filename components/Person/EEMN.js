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
* PersonEEMN
* Purpose: This function is for showing dignosis of chosen image
* Parameter(s): working on navigation mode
* Precondition(s): navigation prepared, leftSwipeActions and RightSwipeAction functions is declared
* Returns : Detail windows for Person EEMN
* Side effect: It is deivded to 6 parts which are all touchable for going into detail description page
*/
function PersonEEMN({navigation}){
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
          <Text style={[styles.text]}> ---  Eye  --- </Text>
        </View> 
        <View style={[{marginBottom:7},{marginLeft:15},{marginRight:15}]}>
          <Text style={[styles.text3]}>Omission:</Text>
          <Text style={{textAlign: 'justify'}}>  They feel extremely anxious and avoid exchanging emotions with others, and there is also the possibility of poor judgment, voyeurism, and a sense of guilt. In the case of children, it indicates maladaptation.</Text>
        </View>
        <View style={[{marginBottom:7},{marginLeft:15},{marginRight:15}]}>
          <Text style={[styles.text3]}>No pupil:</Text>
          <Text>  1. Inner emptiness</Text>
          <Text>  2. Trying to hide their feelings</Text>
        </View>
        <View style={[{marginBottom:7},{marginLeft:15},{marginRight:15}]}>
          <Text style={[styles.text3]}>Strongly dotted eyes:</Text>
          <Text>  1. Relationship delusion</Text>
          <Text>  2. Paranoia</Text>
          <Text>  3. Narrowing the channels of emotional exchange and communication</Text>
        </View>
        <View style={[{marginBottom:7},{marginLeft:15},{marginRight:15}]}>
          <Text style={[styles.text3]}>Highlihgt:</Text>
          <Text style={{textAlign: 'justify'}}>  It means feeling anxious and tense in emotional interactions, or having a paranoid tendency to be suspicious or defensive in interactions with others.</Text>
        </View>
        <View style={[{marginBottom:7},{marginLeft:15},{marginRight:15}]}>
          <Text style={[styles.text3]}>Large:</Text>
          <Text>  Being overly sensitive when interacting emotionally with others</Text>
        </View>
        <View style={[{marginBottom:7},{marginLeft:15},{marginRight:15}]}>
          <Text style={[styles.text3]}>Cartoon expression:</Text>
          <Text>  1. Self-defense attitude</Text>
          <Text>  2. Wariness</Text>
          <Text>  3. Compensation for anxiety</Text>
        </View>
        <View style={[{marginBottom:7},{marginLeft:15},{marginRight:15}]}>
          <Text style={[styles.text3]}>2 or more pupils at an eye:</Text>
          <Text>  1. Very wary of social situations and other people's opinions or evaluations</Text>
          <Text>  2. Attempts to control inner anger and anxiety are being withdrawn</Text>
          <Text>  3. Wants to hide and expresses feelings of inner isolation and withdrawal</Text>
        </View>
        <View style={[{marginBottom:7},{marginLeft:15},{marginRight:15}]}>
          <Text style={[styles.text3]}>2 eyes from a side view face:</Text>
          <Text>  State of mental confusion</Text>
        </View>
        <View style={[{marginBottom:7},{marginLeft:15},{marginRight:15}]}>
          <Text style={[styles.text3]}>One-lined smiling eyes:</Text>
          <Text style={{textAlign: 'justify'}}>  Clients tend to oppress and avoid rather than express their recognition of psychological difficulties caused by conflict.</Text>
        </View>
        <View style={[{marginBottom:7},{marginLeft:15},{marginRight:15}]}>
          <Text style={[styles.text3]}>Winking:</Text>          
          <Text>  1. Anxiety and avoidance</Text>
          <Text>  2. Difficulty in exchanging emotions</Text>
          <Text>  3. Expression of ambivalence</Text>
        </View>
        <View style={[{marginBottom:7},{marginLeft:15},{marginRight:15}]}>
          <Text style={[styles.text3]}>Small or closed:</Text>          
          <Text>  Introvert in social interaction</Text>        
        </View>
        <View style={[{marginBottom:7},{marginLeft:15},{marginRight:15}]}>
          <Text style={[styles.text3]}>Small or closed:</Text>          
          <Text>  Introvert in social interaction</Text>        
        </View>
      </View> 
    );
  }
  // Description for 2nd image
  const content2 = () => {
    return(
      <View>
        <View>
          <Text style={[styles.text]}> ---  Nose  --- </Text>
        </View> 
        <View style={[{marginBottom:7},{marginLeft:15},{marginRight:15}]}>
          <Text style={[styles.text3]}>Omission:</Text>
          <Text>  1. Some conflict about gender</Text>
          <Text>  2. Reject the masculine</Text>
          <Text>  3. Possibility of homosexual tendencies</Text>
          <Text>  4. In the case of children, lack of social skills and coping ability</Text>
        </View>
        <View style={[{marginBottom:7},{marginLeft:15},{marginRight:15}]}>
          <Text style={[styles.text3]}>Button-like nose:</Text>
          <Text>  1. Infantile sexual tendencies</Text>
          <Text>  2. Childhood-like dependence</Text>
        </View>
        <View style={[{marginBottom:7},{marginLeft:15},{marginRight:15}]}>
          <Text style={[styles.text3]}>Wide, curved or protruding:</Text>
          <Text>  1. Rejection of others</Text>
          <Text>  2. Contempt</Text>
        </View>
        <View style={[{marginBottom:7},{marginLeft:15},{marginRight:15}]}>
          <Text style={[styles.text3]}>Large:</Text>
          <Text>  1. Too sensitive to emotional stimuli in relationships with others</Text>
          <Text>  2. Paying too much attention to appearance</Text>
          <Text>  3. Sexual inferiority</Text>
          <Text>  4. Castration anxiety</Text>
          <Text>  5. Compensation for weakness</Text>          
        </View>
      </View> 
    );
  }
  // Description for 3rd image
  const content3 = () => {
    return(
      <View>
        <View>
          <Text style={[styles.text]}> ---  Mouth  --- </Text>
        </View> 
        <View style={[{marginBottom:7},{marginLeft:15},{marginRight:15}]}>
          <Text style={[styles.text3]}>Omission:</Text>
          <Text>  1. Refusal to communicate with others</Text>
          <Text>  2. Depressive tendencies</Text>
          <Text>  3. Asthma patient</Text>
        </View>
        <View style={[{marginBottom:7},{marginLeft:15},{marginRight:15}]}>
          <Text style={[styles.text3]}>Emphasis:</Text>
          <Text>  1. Interested in food</Text>
          <Text>  2. Alcoholism</Text>
          <Text>  3. Signs of gastrointestinal disease</Text>
          <Text>  4. Obsession with oral sex</Text>
        </View>
        <View style={[{marginBottom:7},{marginLeft:15},{marginRight:15}]}>
          <Text style={[styles.text3]}>Delicate lip or heavy makup:</Text>
          <Text>  Expression of narcissism</Text>
        </View>
        <View style={[{marginBottom:7},{marginLeft:15},{marginRight:15}]}>
          <Text style={[styles.text3]}>Male paints thick lip:</Text>
          <Text>  1. Weakness</Text>
          <Text>  2. Nervousness</Text>
          <Text>  3. Excessive idealization></Text>
        </View>
        <View style={[{marginBottom:7},{marginLeft:15},{marginRight:15}]}>
          <Text style={[styles.text3]}>Round and wide:</Text>
          <Text style={{textAlign: 'justify'}}>  It reflects a sense of helplessness and passive attitude in interpersonal interactions.</Text>
        </View>  
        <View style={[{marginBottom:7},{marginLeft:15},{marginRight:15}]}>
          <Text style={[styles.text3]}>Teeth:</Text>
          <Text style={{textAlign: 'justify'}}>  Drawing teeth by adults is a strong indication of the withdrawal-prone oral aggression and may have hostile, childish, and sexually skewed tendencies.</Text>
        </View>  
        <View style={[{marginBottom:7},{marginLeft:15},{marginRight:15}]}>
          <Text style={[styles.text3]}>Single line:</Text>
          <Text>  1. Self-assertiveness and strong will</Text>
          <Text>  2. Strong urge to attack others with words</Text>
          <Text>  3. Tendency to withdraw from fear of being disturbed</Text>
          <Text>  4. Feelings of being rejected by others</Text>
        </View>  
        <View style={[{marginBottom:7},{marginLeft:15},{marginRight:15}]}>
          <Text style={[styles.text3]}>Protruding:</Text>
          <Text>  Withdrawal tendency</Text>
        </View>  
        <View style={[{marginBottom:7},{marginLeft:15},{marginRight:15}]}>
          <Text style={[styles.text3]}>Triangle:</Text>
          <Text>  1. Cloased</Text>
          <Text>  2. Sexual immaturity</Text>
          <Text>  3. Sensitive response to stress due to mental and physical fatigue</Text>
          <Text>  4. Excessive obsession with money</Text>
          <Text>  5. Aggression caused by inherent anger</Text>
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
          <Image source={require('../../assets/Person/EEMN1.png')} 
            style={[{height:((2/3)*winWidth)}, {width: winWidth}]} />
          </TouchableOpacity>      
          <TouchableOpacity onPress={()=>{pressHandler2()}}>
          <Image source={require('../../assets/Person/EEMN2.png')} 
            style={[{height:((2/3)*winWidth)}, {width: winWidth}]} />
          </TouchableOpacity>
          <TouchableOpacity onPress={()=>{pressHandler3()}}> 
          <Image source={require('../../assets/Person/EEMN3.png')} 
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
export default PersonEEMN;

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
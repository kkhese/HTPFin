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
* PersonHead
* Purpose: This function is for showing dignosis of chosen image
* Parameter(s): working on navigation mode
* Precondition(s): navigation prepared, leftSwipeActions and RightSwipeAction functions is declared
* Returns : Detail windows for Person Head
* Side effect: It is deivded to 6 parts which are all touchable for going into detail description page
*/
function PersonHead({navigation}){
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
          <Text style={[styles.text3]}>Disproportionately large head:</Text>
          <Text>  1. Normal for preschoolers</Text>
          <Text>  2. For school-age children</Text>
          <Text>  2-1. Poor academic achievement</Text>
          <Text>  2-2. Dependency</Text>
          <Text>  3. After youth</Text>
          <Text>  3-1. Aggression</Text>
          <Text>  3-2. Paranoia</Text>
          <Text>  3-3. Interest in intellectual abilities</Text>
          <Text>  3-4. Intellectual ambition</Text>
          <Text>  3-5. Desire for achievement</Text>
          <Text>  3-6. Self-centered attitude</Text>
          <Text>  3-7. Expanded self</Text>
          <Text>  3-8. Preoccupation with daydreaming</Text>
          <Text>  3-9. Advance Signs for Headache</Text>
          <Text>  3-X. Dissatisfaction with one's own body</Text>
        </View>
        <View style={[{marginBottom:7},{marginLeft:15},{marginRight:15}]}>
          <Text style={[styles.text3]}>Little head:</Text>
          <Text>  1. Severe obsessive compulsive disorder</Text>
          <Text>  2. Intellectual lack</Text>
          <Text>  3. Social or sexual inadequacy</Text>
          <Text>  4. Helplessness</Text>
          <Text>  5. Complex</Text>
          <Text>  6. Weakening of self-control</Text>
          <Text>  7. Tendency to suppress or deny thoughts that one wants to avoid, such as feelings of guilt</Text>
          <Text>  8. Symptoms of Neurosis</Text>
          <Text>  9. In the case of children, adaptation problems</Text>
        </View>
        <View style={[{marginBottom:7},{marginLeft:15},{marginRight:15}]}>
          <Text style={[styles.text3]}>Omission:</Text>
          <Text>  Problems with controlling yourself</Text>
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
          <Text style={[styles.text3]}>Deformed:</Text>
          <Text>  1. A condition in which judgment is significantly impaired</Text>
          <Text>  2. Paranoia</Text>
        </View>
        <View style={[{marginBottom:7},{marginLeft:15},{marginRight:15}]}>
          <Text style={[styles.text3]}>Back of the head:</Text>
          <Text>  1. Refusing to face the world</Text>
          <Text>  2. Extreme anxiety about appearance</Text>
          <Text>  3. Very sensitive, restrained and avoidant towards the world</Text>
          <Text>  4. Repressed anger reflects a negative attitude</Text>
          <Text>  5. Paranoid tendencies</Text>
          <Text>  6. Divisive tendencies</Text>
        </View>
        <View style={[{marginBottom:7},{marginLeft:15},{marginRight:15}]}>
          <Text style={[styles.text3]}>Dark:</Text>
          <Text>  1. Interest in sex</Text>
          <Text>  2. Severe anxiety caused by mental control</Text>
          <Text>  3. Anxiety about accidents or daydreaming</Text>
        </View>
        <View style={[{marginBottom:7},{marginLeft:15},{marginRight:15}]}>
          <Text style={[styles.text3]}>Omission of ears:</Text>
          <Text style={{textAlign: 'justify'}}>  They are anxious and insecure about accepting emotional stimuli and expressing their feelings, and they tend to avoid social and emotional exchange situations and wither.</Text>
        </View>  
        <View style={[{marginBottom:7},{marginLeft:15},{marginRight:15}]}>
          <Text style={[styles.text3]}>Emphasis on ears:</Text>
          <Text>  Too sensitive in interpersonal situations</Text>
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
          <Text style={[styles.text3]}>Nothing but head:</Text>
          <Text>  1. Initial conflicts over body domainss</Text>
          <Text>  2. Mental confusion</Text>
        </View>
        <View style={[{marginBottom:7},{marginLeft:15},{marginRight:15}]}>
          <Text style={[styles.text3]}>Blurred hair:</Text>
          <Text>  1. Prudency</Text>
          <Text>  2. Strong self-awareness</Text>
        </View>
        <View style={[{marginBottom:7},{marginLeft:15},{marginRight:15}]}>
          <Text style={[styles.text3]}>Omission of hair:</Text>
          <Text>  1. Low physical vitality</Text>
          <Text>  2. Sexual inadequacy</Text>
        </View>
        <View style={[{marginBottom:7},{marginLeft:15},{marginRight:15}]}>
          <Text style={[styles.text3]}>Messy hair:</Text>
          <Text>  1. Alcoholism</Text>
          <Text>  2. Paranoid woman's delusion</Text>
          <Text>  3. In adolescents, sexual impulsivity</Text>
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
          <Image source={require('../../assets/Person/Head1.png')} 
            style={[{height:((2/3)*winWidth)}, {width: winWidth}]} />
          </TouchableOpacity>      
          <TouchableOpacity onPress={()=>{pressHandler2()}}>
          <Image source={require('../../assets/Person/Head2.png')} 
            style={[{height:((2/3)*winWidth)}, {width: winWidth}]} />
          </TouchableOpacity>
          <TouchableOpacity onPress={()=>{pressHandler3()}}> 
          <Image source={require('../../assets/Person/Head3.png')} 
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
export default PersonHead;

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
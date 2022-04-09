import React, {useRef, useEffect, useState} from 'react';
import {View, StyleSheet, Text, Button, Image, ScrollView, TouchableOpacity, Dimensions} from 'react-native';
import Swipeable from 'react-native-gesture-handler/Swipeable';

const winWidth= 0.50 * (Dimensions.get('window').width);

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

function HouseStair({navigation}){

  const content0 = () => {
    return(
      <View style={[{marginLeft:15},{marginRight:15}]}>
        <Text> Nothing </Text>
      </View> 
    );
  }
  const content1 = () => {
    return(
      <View style={[{marginLeft:15},{marginRight:15}]}>
        <Text> Show me something Plz. </Text>
      </View> 
    );
  }
  
  const [show0, setShow0] = useState(content0)
  const [show1, setShow1] = useState(content1)

  const pressHandler = () => { setShow0(show1) } 

  return(
     <View style={[styles.container]}>
      <Text style={[{fontSize: 18}, {textAlign:'center'},{color: 'purple'}]}>Select the Details</Text>
      <View style={[styles.container]}>
        <ScrollView 
          style={[{flexDirection: 'row'}, {justifyContent: 'flex-start'}, {alignItems: 'center'}, {flex: 1}]}
          horizontal={true}>
          <TouchableOpacity onPress={()=>{pressHandler()}}> 
          <Image source={require('../../assets/House/Stair1.png')} 
            style={[{height:((2/3)*winWidth)}, {width: winWidth}]} />
          </TouchableOpacity>
          
          <TouchableOpacity onPress={()=> navigation.navigate('House-Chimney')}> 
          <Image source={require('../../assets/House/Stair2.png')} 
            style={[{height:((2/3)*winWidth)}, {width: winWidth}]} />
          </TouchableOpacity>
        </ScrollView>
      </View>
 
      <View style={[styles.container], {flex: 4}}>
        <ScrollView style={[styles.text2]}>
          <Text> Test </Text>
          {show0}     
        </ScrollView>
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

export default HouseStair;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center'
  },
  container2: {
    justifyContent: 'flex-end'
  },
  text: {
    fontSize: 20,
    textAlign: 'justify',
    marginBottom: 7,
    marginTop: 7,
    backgroundColor: 'white'
  },
  text2: {
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 5,
    marginTop: 5,
    backgroundColor: '#ffffff70'
  },
});

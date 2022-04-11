// Import Components
import React, {useRef, useEffect, useState} from 'react';
import {ImageBackground, View, StyleSheet, Text, Button, ScrollView, FlatList, Dimensions, Image} from 'react-native';
import TodoItem from './Items'

// Get window size
const winWidth= 0.9 * (Dimensions.get('window').width);

// Tutorial Page
function Tutorial({navigation}){

  // Contents for 1st step of Tutorial
  const userNote = () => {
    return(
      <View style={[{marginLeft:15},{marginRight:15}]}>
        <Text style={[styles.text3, {color: 'black'}]}>  HTP test is part of Art Therapy, where HTP stands for House, Tree, Person. Since the HTP test is difficult to interpret as a non-verbal test, this app was created so that counselors can effectively diagnose the pictures drawn by the clients. </Text>
        <Text style={[styles.text3, {color: 'black'}]}>  If you are using this app for anything other than analyzing a client's drawings, it's better to skip tutorial and start to explorer the contents of this app. If not, I recommend that you take a look at the tutorial.
        </Text>  
        <Text style={[styles.text3, {color: 'black'}]}>  The tutorial is composed as a todo list, so if you have read the tutorial, <Text style={[styles.text3, {color: 'red'}]}>CLICK THE NUMBERED TITLE</Text> at the top scroll view to delete it, and you will move on to the next step.
        </Text>
        <Text style={[styles.text3, {color: 'black'}]}>  You cannot go one step back but you can <Text style={[styles.text3, {color: 'red'}]}>RESET </Text><Text style={[styles.text3, {color: 'black'}]}>the tutorial by </Text><Text style={[styles.text3, {color: 'red'}]}>CLICKING BOTTOM RESET BUTTON</Text>
        </Text>
        <Text style={[styles.text3, {color: 'black'}]}>  This is a quick tutorial. If you need to know the details of this app, please read README file.</Text>
      </View>
    );
  }
  // Contents for 2nd step of Tutorial
  const preCon = () => {
    return(
      <View style={[{marginLeft:15},{marginRight:15}]}>
        <Text style={[styles.text3, {color: 'black'}]}>  Since you will probably use this app while looking at the client's drawings, you will need to obtain the drawings drawn by the client through a prior meeting with the client.</Text>
        <Text style={[styles.text3, {color: 'orange'}]}>  The below items are not included.</Text>
        <Text style={[styles.text3, {fontSize: 14}, {color: 'purple'}]}>   * The HTP test procedure</Text>
        <Text style={[styles.text3, {fontSize: 14}, {color: 'purple'}]}>   * Interpretation according to the order of drawing</Text>
        <Text style={[styles.text3, {fontSize: 14}, {color: 'purple'}]}>   * Analysis by gender in the human figure</Text>
        <Text style={[styles.text3, {color: 'black'}]}>  Listed items will be supported in the updated version.</Text>
      </View>
    );
  }
  // Contents for 3rd step of Tutorial
  const mainCat = () => {
    return(
      <View style={[{marginLeft:15},{marginRight:15}]}>
        <Text style={[styles.text3, {color: 'black'}]}>  There are <Text style={[styles.text3, {color: 'red'}]}>THREE </Text>main cetegory, which is House, Tree, Person.</Text>
        <Text style={[styles.text3, {color: 'black'}]}>  You can switch among main categories by <Text style={[styles.text3, {color: 'red'}]}>SWIPING </Text>the bottom sliding window. Below image represets <Text style={[styles.text3, {color: 'red'}]}>TREE</Text> page which is one of three main categories.</Text>
        <Image source={require('../assets/Tut01.png')} style={[{height:((1521/1899)*winWidth)}, {width: winWidth}]} />
      </View>
    );
  }  
  // Contents for 4th step of Tutorial
  const mainSub = () => {
    return(
      <View style={[{marginLeft:15},{marginRight:15}]}>
        <Text style={[styles.text3, {color: 'black'}]}>  There are <Text style={[styles.text3, {color: 'red'}]}>SIX </Text>subcategories at each main cetegory. You can simply <Text style={[styles.text3, {color: 'red'}]}>CLICK</Text> the indicated part of image to go into designated sub-category page for furthur searching.</Text>
        <Text style={[styles.text3, {color: 'black'}]}>  You can still switch among main categories by <Text style={[styles.text3, {color: 'red'}]}>SWIPING </Text>the bottom sliding window. Below image show the initial sub-category screen when chimney is clicked from House category</Text>
        <Image source={require('../assets/Tut02.png')} style={[{height:((1615/1858)*winWidth)}, {width: winWidth}]} />
      </View>
    );
  }  
  // Contents for 5th step of Tutorial
  const subDetail = () => {
    return(
      <View style={[{marginLeft:15},{marginRight:15}]}>
        <Text style={[styles.text3, {color: 'black'}]}>  Each sub-categories has detail categories again. Detail categories are at the top window of sub-category window. <Text style={[styles.text3, {color: 'red'}]}>2-6 </Text>detail categories exist for each sub-category. Initial screen of sub-category will notify that the top detail category selection window supports <Text style={[styles.text3, {color: 'red'}]}>HORIZONTAL </Text> scroll view.</Text>
        <Text style={[styles.text3, {color: 'black'}]}>  You can still switch among main categories by <Text style={[styles.text3, {color: 'red'}]}>SWIPING </Text>the bottom sliding window. Below image show the initial sub-category screen when chimney is clicked from the House category</Text>
        <Image source={require('../assets/Tut03.png')} style={[{height:((1582/2129)*winWidth)}, {width: winWidth}]} />
      </View>
    );
  }  
  // Contents for 6th step of Tutorial
  const detailWin = () => {
    return(
      <View style={[{marginLeft:15},{marginRight:15}]}>
        <Text style={[styles.text3, {color: 'black'}]}>  There is <Text style={[styles.text3, {color: 'red'}]}>NO</Text> more <Text style={[styles.text3, {color: 'red'}]}>SEPARATE</Text> page. If you select detail categories from the top horizontal view, diagnosis information for chosen image part will be desplayed. If the content is long, you can scroll up and down to see the information you need.</Text>         
        <Text style={[styles.text3, {color: 'black'}]}>  You can still switch among main categories by <Text style={[styles.text3, {color: 'red'}]}>SWIPING </Text>the bottom sliding window.</Text>
      </View>
    );
  }  
  // Contents for 7th step of Tutorial
  const postCon = () => {
    return(
      <View style={[{marginLeft:15},{marginRight:15}]}>
        <Text style={[styles.text3, {color: 'purple'}]}> This app is designed for the convenience of counselors to help them analyze the HTP test results.</Text>
        <Text style={[styles.text3, {color: 'purple'}]}> The diagnosis provided by this app may have to be applied differently depending on the client's situation.</Text>
        <Text style={[styles.text3, {color: 'purple'}, {fontWeight: 'bold'}]}>  You should not absolutely trust the interpretation, and all responsibility lies with the counselor.</Text>
      </View>
    );
  }
  // Contents after finishing tutorial
  const endTut = () => {
    return(
      <View style={[{marginLeft:15},{marginRight:15},{justifyContent:'center'}]}>
        <Text style={[styles.text3, {fontSize:30},{color: 'green'}, {fontWeight: 'bold'}]}>  Congratulations! </Text>
        <Text style={[styles.text3, {color: 'green'}, {fontWeight: 'bold'}]}>  You have completed the tutorial! </Text>
      </View>
    );
  }

  // State setup for the contents of Tutorial
  const [step1, setStep1] = useState(userNote)
  const [step2, setStep2] = useState(preCon)
  const [step3, setStep3] = useState(mainCat)
  const [step4, setStep4] = useState(mainSub)
  const [step5, setStep5] = useState(subDetail)
  const [step6, setStep6] = useState(detailWin)
  const [step7, setStep7] = useState(postCon)
  const [step8, setStep8] = useState(endTut)

  // State for todo
  const [todo, settodo] = useState([
    { text: '1. Notificatino for User <= click to clear', key: '01'},
    { text: '2. Precondition <= click to clear', key: '02'},
    { text: '3. Main Category <= click to clear', key: '03'},
    { text: '4. Main to Sub-category <= click to clear', key: '04'},
    { text: '5. Sub-category to Detail <= click to clear', key: '05'},
    { text: '6. Detail Window <= click to clear', key: '06'},
    { text: '7. Postcondition <= click to clear', key: '07'}
  ]);

  // pressHandler for managing toDoitem which copied from Dr. Trevor'lecture and modified
  const pressHandler = (key) => {
    settodo( prevtodo => {
      return prevtodo.filter(todo => todo.key != key);
    })
    if (key==1)
      setStep1(step2)
    else if (key==2)
      setStep1(step3)
    else if (key==3)
      setStep1(step4)
    else if (key==4)
      setStep1(step5)
    else if (key==5)
      setStep1(step6)
    else if (key==6)
      setStep1(step7)
    else if (key==7)
      setStep1(step8)
  }

  // separator for flatlist which copied from Dr. Trevor's Lecture
  const renderSeparator =() => (
    <View style={{backgroundColor:'purple', height: '2%', width: '100%' }}/>
  );
  
  return(
    <View style={[styles.container]}>
    {/* Main window */}
      {/* 1st sub window with background image */}
      <View style={[styles.container]}>
        <ImageBackground 
            source={require('../assets/Tutorial.jpg')} 
            style={[styles.image, {padding: 10},]}>
            {/* Title */}
            <Text style={[styles.text, {color: 'white'}]}> Turorial for App User </Text>
            <Text style={[styles.text2, {color: 'purple'}]}> H
            <Text style={[styles.text2, {color: 'black'}, {fontSize: 12}]}>(house) 
            <Text style={[styles.text2, {color: 'purple'}]}> T
            <Text style={[styles.text2, {color: 'black'}, {fontSize: 12}]}>(tree) 
            <Text style={[styles.text2, {color: 'purple'}]}> P
            <Text style={[styles.text2, {color: 'black'}, {fontSize: 12}]}>(person)
            </Text></Text></Text></Text></Text></Text>
          {/* toDo list */}
          <ScrollView>
            <View style={[{justifyContent: 'center'}]}>
              <FlatList 
                data={todo}
                renderItem={( {item} )=>(
                  <TodoItem item={item} pressHandler={pressHandler}/>
                )}
                ItemSeparatorComponent={renderSeparator}            
              />
            </View>
          </ScrollView>
        </ImageBackground>
      </View>
      {/* Contests window for tutorial */}
      <View style={[styles.container,{marginTop:50}, {flex:3}]}>
        <ScrollView style={[styles.text2]}>
          {step1}
        </ScrollView>
      </View>
      {/* For reset tutorial from the beginning */}
      <View style={[{justifyContent: 'flex-end'}]}>
        <Button title="Reset Tutorial" color='darkgrey' onPress={()=> navigation.replace('Tutorial')} /> 
      </View>
    </View>
  );
}
// export Tutorial as a default
export default Tutorial;

// Stylesheet
const styles = StyleSheet.create({
  // main window
  container: {
    flex:1
  },
  // style for background image
  image: {
    resizeMode: 'cover',
    justifyContent: 'center',
  },
  // Title text
  text: {
    color: 'white',
    fontSize: 25,
    fontFamily: 'sans-serif-medium',
    fontWeight: 'bold',
    padding: 10,
    textAlign: 'center',
    backgroundColor: '#00000070',
    marginTop: 10
  },
  // 2nd Title text 
  text2: {
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 5,
    marginTop: 5,
    backgroundColor: '#ffffff70'
  },
  // test style for tutorial contents
  text3: {
    fontSize: 20,
    textAlign: 'justify',
    fontFamily: 'sans-serif-light',
    marginBottom: 7,
    marginTop: 7,
    backgroundColor: 'white'
  },
});

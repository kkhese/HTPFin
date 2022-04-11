// Summon React, React-native coponents
import React, {useRef, useEffect, useState} from 'react';
import { Animated, View, Image, StyleSheet, Text, Button, TouchableOpacity, Dimensions } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
// Import all navigation pages
import HomeScreen from './components/HomeScreen';
import Tutorial from './components/Tutorial';
import House from './components/House';
import Tree from './components/Tree';
import Person from './components/Person';
import HouseChimney from './components/House/Chimney'
import HouseDoor from './components/House/Door'
import HouseRoof from './components/House/Roof'
import HouseStair from './components/House/Stair'
import HouseWall from './components/House/Wall'
import HouseWindow from './components/House/Window'
import TreeBranch from './components/Tree/Branch'
import TreeCrown from './components/Tree/Crown'
import TreeLeaf from './components/Tree/Leaf'
import TreeRoot from './components/Tree/Root'
import TreeTitle from './components/Tree/Title'
import TreeTrunk from './components/Tree/Trunk'
import PersonArm from './components/Person/Arm'
import PersonEEMN from './components/Person/EEMN'
import PersonETC from './components/Person/ETC'
import PersonFace from './components/Person/Face'
import PersonHead from './components/Person/Head'
import PersonLeg from './components/Person/Leg'

// Stack for navigation function
const Stack = createNativeStackNavigator();

/**
* App
* Purpose: This function is the module function just for managing navigation
* Parameter(s): working on navigation mode
* Precondition(s):
* <1>: navigation mode must be ready
* <2>: navigation stack must be ready
* Returns : Setup screen will be guide the direction for navigations
* Side effect: It will allows you navigating between differenct pages 
*/
function App() {
  return(
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        {/* Homescreen */}
        <Stack.Screen name="Home" component = {HomeScreen} options={{headerShown: false}}/>
        {/* Tutorial Screen can be accessed from Homescreen*/}
        <Stack.Screen name="Tutorial" component = {Tutorial} />
        {/* Main Category:(House)screen can be accessed from Homesceen or bottom swiping except tutorial page */}
        <Stack.Screen name="House" component = {House} />
        {/* House => Chimney, Door, Roof, Stair, Wall, Window page */}
        <Stack.Screen name="House-Chimney" component = {HouseChimney} />
        <Stack.Screen name="House-Door" component = {HouseDoor} />
        <Stack.Screen name="House-Roof" component = {HouseRoof} />
        <Stack.Screen name="House-Stair" component = {HouseStair} />
        <Stack.Screen name="House-Wall" component = {HouseWall} />
        <Stack.Screen name="House-Window" component = {HouseWindow} />
        {/* Main Category:(Tree) screen can be accessed from Homesceen or bottom swiping except tutorial page */}
        <Stack.Screen name="Tree" component = {Tree} />
        {/* Tree => Branch, Crown, leaf, Root, Title, Trunk page */}
        <Stack.Screen name="Tree-Branch" component = {TreeBranch} />
        <Stack.Screen name="Tree-Crown" component = {TreeCrown} />
        <Stack.Screen name="Tree-Leaf" component = {TreeLeaf} />
        <Stack.Screen name="Tree-Root" component = {TreeRoot} />
        <Stack.Screen name="Tree-Title" component = {TreeTitle} />
        <Stack.Screen name="Tree-Trunk" component = {TreeTrunk} />
        {/* Main Category:(Person) screen can be accessed from Homesceen or bottom swiping except tutorial page */}
        <Stack.Screen name="Person" component = {Person} />
        {/* Tree => Branch, Crown, leaf, Root, Title, Trunk page */}
        <Stack.Screen name="Person-Arm" component = {PersonArm} />
        <Stack.Screen name="Person-EyeMouthNose" component = {PersonEEMN} />
        <Stack.Screen name="Person-ETC" component = {PersonETC} />
        <Stack.Screen name="Person-FaceNeck" component = {PersonFace} />
        <Stack.Screen name="Person-Head" component = {PersonHead} />
        <Stack.Screen name="Person-Leg" component = {PersonLeg} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
// export App as a default
export default App;
// Summon React, React-native coponents
import React from 'react';
import {StyleSheet, TouchableOpacity, Text, Pressable} from 'react-native';

// component for todoItem copied from Dr. Trevor's lecture
export default function TodoItem({pressHandler, item}){
  return(
    <Pressable onPress={()=>pressHandler(item.key)}>
      <Text style = {styles.item}>{item.text}</Text>
    </Pressable>
  );
}

// stylesheet for todoitem list
const styles = StyleSheet.create({
  item: {
    borderColor: '#fa0',
    borderRadius: 2,
    padding: 8,
    marginBottom: 4,
    fontWeight: 'bold',
    fontSize: 15,
    backgroundColor: '#ffffffb0'
  }
});
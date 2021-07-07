import React, { useState } from 'react';
import { Image, Platform, StyleSheet, TextInput, TouchableOpacity, View } from 'react-native';

import checkIcon from '../assets/icons/Check.png';

interface TodoInputProps {
  addTask: (task: string) => void;
  nightModeState: boolean;
}

export function TodoInput({ addTask, nightModeState }: TodoInputProps) {
  const [task, setTask] = useState('');

  function handleAddNewTask() {
    addTask(task);
    setTask('');
  }  

  return (
    <View style={[styles.inputContainer, { backgroundColor: nightModeState ? '#212136': '#F5F4F8'},
      Platform.OS === 'ios' ? styles.inputIOSShadow : styles.inputAndroidShadow]}>
      <TextInput 
        style={[styles.input, { backgroundColor: nightModeState ? '#212136': '#F5F4F8',
        color: nightModeState ? '#fff' : '#000'}]} 
        placeholder="Adicionar novo todo..."
        returnKeyType="send"
        value={task}
        onChangeText={(data: string) => setTask(data)}
        onSubmitEditing={handleAddNewTask}
        placeholderTextColor={nightModeState ? '#E1E1E6':'#00000089'}
  />
      <TouchableOpacity
        testID="add-new-task-button"
        activeOpacity={0.7}
        style={[styles.addButton, { backgroundColor: nightModeState ? '#565BFF': '#3FAD27'}]}
        onPress={handleAddNewTask}
      >
        <Image source={checkIcon} />
      </TouchableOpacity>
    </View>
  )
}

const styles = StyleSheet.create({
  inputContainer: {
    // backgroundColor: '#F5F4F8',
    borderRadius: 5,
    marginTop: -25,
    marginHorizontal: 40,
    height: 50,
    flexDirection: 'row',
    alignItems: 'center',
  },
  input: {
    flex: 1,
    // backgroundColor: '#F5F4F8',
    paddingLeft: 12,
    borderTopLeftRadius: 5,
    borderBottomLeftRadius: 5,
  },
  inputIOSShadow: {
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84
  },
  inputAndroidShadow: {
    elevation: 5
  },
  addButton: {
    // backgroundColor: '#3FAD27',
    height: 50,
    paddingHorizontal: 16,
    justifyContent: 'center',
    alignItems: 'center',
    borderTopRightRadius: 5,
    borderBottomRightRadius: 5,
  },
});
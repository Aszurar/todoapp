import React, { useState } from 'react';

import { Header } from '../components/Header';
import { MyTasksList } from '../components/MyTasksList';
import { TodoInput } from '../components/TodoInput';

interface Task {
  id: number;
  title: string;
  done: boolean;
}

interface HomeProps {
  setNightModeFunction: () => void,
  nightModeState: boolean;
}

export function Home({setNightModeFunction, nightModeState}: HomeProps) {
  const [tasks, setTasks] = useState<Task[]>([]);
  
  function handleAddTask(newTaskTitle: string) {
    console.log(newTaskTitle);  

    if (newTaskTitle === '') {
      return;
    }
    console.log(newTaskTitle);  

    const newTask: Task = {
      id: new Date().getTime(),
      title: newTaskTitle,
      done: false
    }
    
    setTasks([...tasks, newTask])
  }
  
  function handleMarkTaskAsDone(id: number) {
    let taskIndex = tasks.findIndex(task => task.id === id) 
    
    if (taskIndex < 0) {
      return
    }

    const taskSelected: Task ={
      ...tasks[taskIndex]
    }
    
    tasks[taskIndex].done ? taskSelected.done = false : taskSelected.done = true;

    const newTasks = tasks.filter(task => task.id !== id);    
        
    setTasks([...newTasks, taskSelected])

    // Outra forma que poderia ter feito:
    // Nessa forma a ordem das tarefas não são alteradas:
    // setTasks(oldState => oldState.map(task => 
    //   task.id === id ? {...task, done: !task.done} : task
    // ))
    // O trencho do if ternário é a mesma coisa que :
    // if(task.id === id) {
    //   return {
    //     ...task,
    //     done: !done
    //   }
    // }
    
    // return task
        
  }

  function handleRemoveTask(id: number) {
    const updatedTasks = tasks.filter(task => task.id !== id)
    setTasks(updatedTasks);
  }



  return (
    <>
      <Header 
        setNightModeFunction = {setNightModeFunction}
        nightModeState = {nightModeState}/>

      <TodoInput addTask={handleAddTask}
      nightModeState = {nightModeState}
       />

      <MyTasksList 
        tasks={tasks} 
        onPress={handleMarkTaskAsDone} 
        onLongPress={handleRemoveTask}
        nightModeState = {nightModeState}
      />
    </>
  )
}
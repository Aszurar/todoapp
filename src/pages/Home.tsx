import React, { useState } from 'react';

import { Header } from '../components/Header';
import { MyTasksList } from '../components/MyTasksList';
import { TodoInput } from '../components/TodoInput';

interface Task {
  id: number;
  title: string;
  done: boolean;
}

export function Home() {
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

    const taskSelected: Task = tasks[taskIndex]

    console.log(tasks);
    tasks[taskIndex].done ? taskSelected.done = false : taskSelected.done = true;

    const newTasks = tasks.filter(task => task.id !== id);    
        
    setTasks([...newTasks, taskSelected])
    console.log(tasks);
        
  }

  function handleRemoveTask(id: number) {
    //TODO - remove task from state
  }

  return (
    <>
      <Header />

      <TodoInput addTask={handleAddTask} />

      <MyTasksList 
        tasks={tasks} 
        onPress={handleMarkTaskAsDone} 
        onLongPress={handleRemoveTask} 
      />
    </>
  )
}
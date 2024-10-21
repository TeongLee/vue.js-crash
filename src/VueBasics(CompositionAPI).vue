<!-- Composition API -->

<script setup>
// ref() is used to create a reactive reference to a value, 
// which means it allows the value to be reactive and automatically update the DOM when it changes. 

import {onMounted, ref} from 'vue';
  const name = ref('John Doe') ;
  const status = ref('active');
  const tasks = ref(['Task One','Task Two','Task Three']);
  const newTask = ref('lala')

  const toggleStatus = () => {
    if (status.value === 'active'){
      status.value = 'pending';
    }else if(status.value === 'pending'){
      status.value = 'inactive';
    }else {
      status.value = 'active';
    }
  };

  const addTask = () => {
    if (newTask.value.trim() !== ''){
      tasks.value.push (newTask.value);
      newTask.value='';
    }
  }

  const deleteTask = (index) => {
    tasks.value.splice(index,1);
  }

  // runs a function when the component is mounted
  onMounted (async () => {
    try {
      const response = await fetch('https://jsonplaceholder.typicode.com/todos');
      // The response object has a method .json() which returns a Promise that resolves to the parsed JSON data.
      // A Promise is an object representing a value that may not be available yet but will be in the future.
      const data = await response.json();
      // When response.json() resolves, it returns the fully parsed JSON data. (like JSON.parse)

      tasks.value = data.map((task)=> task.title);
    }catch (e) {
      console.log('Error fetching tasks');
    }
  })

</script>

<template>
  <h1>{{ name }}</h1>

  <!-- Vue Directive (Optional API)-->
  <!-- <p v-if="status">User is active</p> -->
  <p v-if="status === 'active'">User is active</p>
  <p v-else-if="status === 'pending'">User is pending</p>
  <p v-else>User is inactive</p>

  <!-- directly call action and prevent default -->
  <form @submit.prevent="addTask">
    <label for="newTask">Add Task  </label>
    <input type="text" id="newTask" name="newTask" v-model="newTask">
    <button type="submit">Submit</button>
  </form>

  <h3>Tasks:</h3>
  <ul>
    <li v-for="(task,index) in tasks" :key="task">
      <span>{{ task }}</span>
      <button @click="deleteTask(index)"> x </button>
    </li>
  </ul>
    
  <br>
  <button v-on:click="toggleStatus">Change Status</button> 
  <!-- also can use @click -->


</template>


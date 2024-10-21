<!-- Vue Directive (Optional API)-->

<script>
  export default{
    data(){
      return {
        name: 'John Doe',
        // status: 'true',
        status: 'active',
        tasks: ['Task One','Task Two','Task Three'],
        link: 'https://google.com'
      };
    },
    methods: {
      toggleStatus() {
        if (this.status === 'active'){
          this.status = 'pending';
        }else if(this.status === 'pending'){
          this.status = 'inactive';
        }else {
          this.status = 'active';
        }
      }
    }
  }
</script>

<template>
  <h1>{{ name }}</h1>

  <!-- <p v-if="status">User is active</p> -->
  <p v-if="status === 'active'">User is active</p>
  <p v-else-if="status === 'pending'">User is pending</p>
  <p v-else>User is inactive</p>

  <h3>Tasks:</h3>
  <ul>
    <li v-for="task in tasks" :key="task">{{ task }}</li>
  </ul>

  <!-- To bind data in attribute -->
  <a v-bind:href="link">Click for Google</a> 
  <!-- or -->
  <br>
  <a :href="link">Click for Google</a> 
  
  <br>
  <button v-on:click="toggleStatus">Change Status</button> 
  <!-- also can use @click -->


</template>

<style scoped>


</style>

<template>
  <div class="home">
      <div class="nav">
         <h3><router-link :to="{ name: 'login'}">Login</router-link> | 
            <router-link :to="{ name: 'About'}">About</router-link>
         </h3> 
      </div>
  </div>
</template>

<script>
export default {

}
</script>

<style>

</style>
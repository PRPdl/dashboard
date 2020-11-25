<template>
  <div class="main">
     <p class="box d-flex justify-center align-center">
         Box 1
     </p>
     
  </div>
</template>

<script>
export default {

}
</script>

<style scoped>

div.main {
    width: 100%;
    height: 100%;
    border: 1px dotted blue;
    display: flex;
    flex-direction: column-reverse;
    justify-content: center;
    align-items: center;
}


p.box {
    border: 1px solid red;
    width: 300px;
    height: 70px;
}


</style>
<template>
  <div class="main">
     <div class="box">
         Box 1
     </div>
     <div class="box">
         BOx 2
     </div>
     <div class="box">
         Box 3
     </div>
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


div.box {
    border: 1px solid red;
    width: 300px;
    height: 70px;
    display: flex;
    justify-content: center;
    align-items: center;
}


</style>
<template>
  <div id="app">
    <h1>{{msgProps}}</h1>
    </div>
</template>

<script>
//import Counter from './components/Counter'
export default {
  /*components :{
    Counter
  },*/
  data () {
    return {
      msg: "message from App"
    };
  },
  props :{
   msgProps :{
     type : String,
     default : 'props message'
   }
  }
};
</script>
<template>
  <div>
    <child-component @custom="onCustom" />
    <h1>Parent Component</h1>
    <p v-if="emitted">Emitted!</p>
  </div>
</template>

<script>
import ChildComponent from './ChildComponent.vue'
export default {

name:'ParentComponent',
components : {
ChildComponent
},
data() {
 return {
 emitted: false
 }
 },
 methods: {
 onCustom() {
 this.emitted = true
  }
}

}
</script>

<style>

</style>
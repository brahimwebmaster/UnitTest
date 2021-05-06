<template>
    <div>
      <button @click="count++">Add up</button>
      <p>Total clicks: {{ count }}</p>
    </div>
</template>

<script>
export default {
data (){
    return {
        count:0
    }
}
}
</script>

<style>

</style>
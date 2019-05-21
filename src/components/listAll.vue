<template>
  <div>
    <button @click="setFilterState('all')">All</button>
  </div>
</template>

<script>
export default {
  methods: {
    setFilterState (state) {
      this.$emit('all', state)
    }
  }
}
</script>

<style lang="css" scoped>
  button{
    width: 100px;
  }
</style>

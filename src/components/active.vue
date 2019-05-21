<template>
  <div>
    <button @click="setFilterState('active')">Active</button>
  </div>
</template>

<script>
export default {
  methods: {
    setFilterState (state) {
      this.$emit('active', state)
    }
  }
}
</script>

<style lang="css" scoped>
  button{
    width: 100px;
  }
</style>

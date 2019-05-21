<template>
  <div>
    <button @click="setFilterState('completed')">Completed</button>
  </div>
</template>

<script>
export default {
  // props: {
  //   listC: {
  //     type: Array,
  //     required: true
  //   }
  // },
  methods: {
    setFilterState (state) {
      this.$emit('completed', state)
    }
  }
}
</script>

<style lang="css" scoped>
  button{
    width: 100px;
  }
</style>

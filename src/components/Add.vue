<template>
  <div>
    <input v-model="message"  v-on:keyup.enter="add" placeholder="thêm việc">
      <ol>
      <li style="font-size:15px;"
          v-for="(item,index) of list"
          :key="item.id"
      >
        <input type="checkbox" v-model="item.status">
        {{ item.name }}
         <button @click="remove(index)" style="height:20px;margin-left:20px">xóa</button>
      </li>
    </ol>
  </div>
</template>

<script>
export default {
  props: {
    list: {
      type: Array,
      required: true
    }
  },
  data () {
    return {
      message: ''
    }
  },
  methods: {
    add: function () {
      this.$emit('them', this.message)
      this.message = ''
    },
    remove (a) {
      this.$emit('xoa', a)
    }
  }
}
</script>

<style lang="css" scoped>
  input{
    .message{
      height: 30px;
      width: 300px;
    }
  }
</style>

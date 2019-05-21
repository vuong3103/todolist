<template>
  <div class="home">
    <h1>Todolist</h1>
    <input style="font-size:30px;" v-model="message"
    v-on:keyup.enter="add" placeholder="thêm việc">
    <button style="font-size:30px;" @click="add">thêm</button>
    <br><br>
    <button @click="setFilterState('all')">All</button>
    <button @click="setFilterState('completed')">Việc đã làm </button>
    <button @click="setFilterState('active')">Việc chưa làm</button>
    <!-- <input type="checkbox" v-for="item in listworks">{{item.name}} -->
    <ol>
        <li style="font-size:30px;"
            v-for="(item,index) of filteredWorkList"
            :key="item.id"
        >
          {{ item.name }}
          <input type="checkbox" v-model="item.status">
          <button v-on:click="remove(index)">Xóa việc</button>
        </li>
    </ol>
  </div>
</template>

<script>
export default {
  name: 'home',

  data () {
    return {
      status: [],
      message: '',
      listWorks: [],
      nextId: 1,
      filterState: 'all',
      filtertStates: ['all', 'active', 'completed']
    }
  },

  computed: {
    filteredWorkList () {
      switch (this.filterState) {
        case 'all':
          return this.listWorks
        case 'active':
          return this.listWorks.filter(work => !work.status)
        case 'completed':
          return this.listWorks.filter(work => work.status)
        default:
          return []
      }
    }
  },

  methods: {
    add () {
      this.listWorks.push({ id: this.nextId++, name: this.message })
      this.message = ''
    },

    remove (a) {
      // this.listWorks[a].name=''
      this.listWorks.splice(a, 1)
    },

    setFilterState (state) {
      this.filterState = state
    }
  }
}
</script>

<template>
  <div>
    <h1 style="margin-left:500px; font-size:30px">ToDoList</h1>
    <div style="margin-left:200px">
      <div style="float:left"><listAll @all="allList"/></div>
      <div style="float:left"><completed @completed="completedList" /></div>
      <div ><active @active="activeList"/></div>
      <div style="margin-top:20px"><Add @them="addWork" @xoa="remove" :list="filteredWorkList"/></div>
    </div>
  </div>
</template>

<script>
import Add from '@/components/Add.vue'
import listAll from '@/components/listAll.vue'
import completed from '@/components/completed.vue'
import active from '@/components/active.vue'
export default {
  components: {
    Add,
    listAll,
    active,
    completed
  },
  data () {
    return {
      listWorks: [],
      status: [],
      nextId: 1,
      filterState: 'all',
      filterStates: ['all', 'active', 'completed']
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
    addWork (message) {
      this.listWorks.push({ id: this.nextId++, name: message })
      this.message = ''
    },
    allList (state) {
      this.filterState = state
    },
    completedList (state) {
      this.filterState = state
    },
    activeList (state) {
      this.filterState = state
    },
    remove (index) {
      this.listWorks.splice(index, 1)
    }
  }
}
</script>

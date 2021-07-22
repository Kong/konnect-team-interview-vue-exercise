<template>
  <div>
    <Catalog />
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import Catalog from '../components/Catalog.vue'

export default Vue.extend({
  name: 'Home',
  components: {
    Catalog
  }
})
</script>

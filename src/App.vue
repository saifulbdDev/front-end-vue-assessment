<template>
  <div id="main">
    <button
      v-if="!isSideBar"
      class="launcher-btn"
      :style="launcher"
      @click="$store.commit('records/isSideBar', true)"
    >
      {{ launcher?.ctaText }}
    </button>
    <div v-if="isSideBar" class="slidein" :class="{ 'show-sidebar': isSideBar }">
      <right-sidebar></right-sidebar>
    </div>
  </div>
</template>

<script>
import RightSidebar from '@/components/RightSidebar.vue';
import store from '@/store';

export default {
  store,
  name: 'App',
  components: {
    RightSidebar,
  },

  computed: {
    launcher() {
      return this.$store?.state?.records?.launcher;
    },
    isSideBar() {
      return this.$store?.state?.records?.isSideBar;
    },
  },
};
</script>

<style>
@import 'bootstrap/dist/css/bootstrap.css';
@import url('https://fonts.googleapis.com/css2?family=Bebas+Neue&display=swap');
@import './css/style.css';
</style>

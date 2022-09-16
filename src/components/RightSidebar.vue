<template>
  <div class="side-card">
    <div class="card-head">
      <Carousels :carousel="carousel" />
      <item-cards v-if="currentStep === 1" :page="page_1" />
      <item-lists v-else-if="currentStep === 2" :page="page_2" />
      <footer>
        <template v-if="currentStep === 1">
          <button class="btn-outline" @click="$store.dispatch('records/setSkip')">Skip</button>
          <button class="btn" @click="$store.commit('records/next', 2)">Next</button>
        </template>
        <template v-else-if="currentStep === 2">
          <button class="btn-outline" @click="$store.commit('records/setRestart')">Restart</button>
          <div class="actions">
            <button class="btn-outline" @click="$store.commit('records/next', 1)">Back</button>
            <button class="btn">Submit</button>
          </div>
        </template>
      </footer>
    </div>
    <div class="right-card">
      <button
        class="btn close-btn"
        @click="$store.commit('records/isSideBar', false)"
        :style="launcher"
      >
        {{ launcher.closeText }}
      </button>
    </div>
  </div>
</template>

<script>
import Carousels from '@/components/Carousels.vue';
import ItemCards from '@/components/ItemCards.vue';
import ItemLists from '@/components/ItemLists.vue';

export default {
  name: 'RightSidebar',
  components: {
    Carousels,
    ItemCards,
    ItemLists,
  },

  computed: {
    currentStep() {
      return this.$store?.state?.records?.currentStep;
    },
    page_1() {
      return this.$store?.state?.records?.page_1;
    },
    page_2() {
      return this.$store?.state?.records?.page_2;
    },
    launcher() {
      return this.$store?.state?.records?.launcher;
    },
    carousel() {
      return this.$store?.state?.records?.carousel;
    },
  },

};
</script>

<style scoped>
.side-card {
  height: 100%;
  overflow-x: auto;
}
.side-card footer {
  height: 60px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: fixed;
  bottom: 0;
  right: 0;
  max-width: 33%;
  width: 576px;
  padding-left: 20px;
  padding-right: 20px;
  background: #fff;
  border-top: 1px solid #e0e0e0;
}

.side-card .btn-outline {
  color: #c7a17a;
  cursor: pointer;
  font-size: 14px;
  min-width: 100px;
  height: 30px;
  display: flex;
  justify-content: center;
  align-items: center;
  border: 1px solid #c7a17a;
  border-radius: 6px;
}

.side-card .actions {
  display: flex;
  justify-content: center;
  align-items: center;
}

.side-card .btn-outline {
  margin-right: 7px;
  background: rgba(199, 161, 122, 0.16);
  border: none;
}

.side-card .btn {
  color: #fff;
  background-color: #c7a17a;
  cursor: pointer;
  font-size: 14px;
  min-width: 100px;
  height: 30px;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 6px;
}
</style>

<template>
  <div class="wrapper">
    <div class="header d-flex justify-content-between align-items-center">
      <div>
        <h6 :style="page?.title">
          {{ page?.title.text }}
        </h6>
        <p class="description" :style="page?.description">
          {{ page?.description?.text }}
        </p>
      </div>

        <per-circle stroke="#C7A17A" strokeDasharray="60, 100" text="2/3" />

    </div>

    <div class="elements">
      <label
        :for="`selectedItem${card.id}`"
        class="card-item"
        :class="card.selected ? 'active' : null"
        v-for="(card, i) in page.cards"
        :key="'item_' + i"
      >
        <input
          v-model="selectedItem"
          type="radio"
          :value="card"
          name="selecteditem"
          :id="`selectedItem${card.id}`"
          style="display: none"
          @change="setRecords(card, $event.target.checked)"
        />
        <div class="title">{{ card?.title }}</div>
        <p class="description">{{ card?.description }}</p>
      </label>
    </div>
  </div>
</template>

<script>
import PerCircle from '@/components/PerCircle.vue';

export default {
  components: {
    PerCircle,
  },
  name: 'ListView',
  props: ['page'],
  computed: {
    selectedItem: {
      get() {
        return this.$store.getters['records/selectedPage_2'];
      },
      set(newValue) {
        return this.$store.commit('records/setSelected', { page: 'selectedPage_2', newValue });
      },
    },
  },
  methods: {
    setRecords(card, status) {
      card.selected = status;
      this.$store.dispatch('records/setRecords', { card, page: 'page_2' });
    },
  },
};
</script>

<style scoped>
.elements .title {
  font-family: 'Bebas Neue';
  font-style: normal;
  font-weight: 400;
  font-size: 26px;
  line-height: 120%;
  color: #272727;
}

.elements {
  margin-top: 20px;
  display: block;
  padding-bottom: 70px;
}
.card-item {
  border: 1px solid #e0e0e0;
  border-radius: 12px;
  cursor: pointer;
  position: relative;
  overflow: hidden;
  display: block;
  padding: 20px;
  margin-bottom: 15px;
}
.card-item:last-child {
  margin-bottom: 0px;
}

.card-item.active {
  border: 1px solid #c7a17a;
}

.card-item.active:after {
  position: absolute;
  content: url('../images/active-item.png');
  top: 0;
  right: 0%;
  z-index: 0;
}

.description {
  font-style: normal;
  font-weight: 400;
  font-size: 15px;
  line-height: 130%;
  color: #333;
  margin-bottom: 0px;
  margin-top: 5px;
}

.wrapper {
  padding: 20px;
}
.description {
  margin: 5px 0px 0px;
}
</style>

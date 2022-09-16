<template>
  <div class="flex-wrapper">
    <div class="single-chart">
      <svg viewBox="0 0 36 36" class="circular-chart orange">
        <path
          class="circle-bg"
          d="M18 2.0845
          a 15.9155 15.9155 0 0 1 0 31.831
          a 15.9155 15.9155 0 0 1 0 -31.831"
        />
        <path
          class="circle"
          :stroke="stroke"
          :stroke-dasharray="strokeDasharray"
          d="M18 2.0845
          a 15.9155 15.9155 0 0 1 0 31.831
          a 15.9155 15.9155 0 0 1 0 -31.831"
        />
        <text x="18" y="20.35" class="percentage">{{ text }}</text>
      </svg>
    </div>
  </div>
</template>

<script>
export default {
  name: 'perCircle',
  props: {
    // Text to display in circle
    stroke: {
      type: String,
      default: '#C7A17A',
    },
    strokeDasharray: {
      type: String,
      default: '10, 100',
    },
    text: {
      type: String,
      default: '',
    },
  },
};
</script>

<style scoped>
.flex-wrapper {
  display: flex;
  flex-flow: row nowrap;
  width: 64px;
  height: 64px;
}

.single-chart {
  width: 100%;
  justify-content: space-around;
}

.circular-chart {
  display: block;
  margin: 10px auto;
  max-width: 80%;
  max-height: 250px;
}

.circle-bg {
  fill: none;
  stroke: #eee;
  stroke-width: 3.8;
}

.circle {
  fill: none;
  stroke-width: 2.8;
  stroke-linecap: round;
  animation: progress 1s ease-out forwards;
}

@keyframes progress {
  0% {
    stroke-dasharray: 0 100;
  }
}

.circular-chart .circle {
  stroke: #c7a17a;
}

.percentage {
  fill: #666;
  font-family: sans-serif;
  font-size: 0.5em;
  text-anchor: middle;
}
</style>

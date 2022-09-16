<template>
  <div v-if="carousel?.defaultTitle" class="carousel-wrapper" :style="carouselWrapperStyle">
    <div class="carousel-header">
      <h4 class="title">{{ carousel?.defaultTitle }}</h4>
      <span class="subtitle">Total Item {{ totalItem }}</span>
    </div>
    <VueSlickCarousel v-bind="settings">
      <div v-for="(slider, index) in carousel?.defaultContent" :key="index">
        <a :href="slider.ctaLink" target="_blank">
          <div class="item-inner">
            <div class="thumb">
              <img :src="slider.imageUrl" :alt="slider.title" />
            </div>
            <div class="slider-title">
              <h6>{{ slider.title }}</h6>
            </div>
          </div>
        </a>
      </div>
    </VueSlickCarousel>
  </div>
</template>

<script>
import VueSlickCarousel from 'vue-slick-carousel';

export default {
  name: 'CarouselSection',
  props: ['carousel'],
  components: {
    VueSlickCarousel,
  },
  data() {
    return {
      settings: {
        arrows: true,
        slidesToShow: 3,
      },
    };
  },
  computed: {
    carouselWrapperStyle() {
      return {
        'background-color': this.carousel?.backgroundColor,
        'font-family': this.carousel?.fontFamily,
        color: this.carousel?.color,
      };
    },

    totalItem() {
      return this.carousel?.defaultContent.length;
    },
  },
};
</script>

<style>
@import 'vue-slick-carousel/dist/vue-slick-carousel.css';
@import 'vue-slick-carousel/dist/vue-slick-carousel-theme.css';
.carousel-wrapper {
  padding: 20px;
}
.carousel-wrapper .carousel-header{
  margin-bottom: 16px;
}
.carousel-wrapper .carousel-header .title {
  font-family: 'Bebas Neue';
  font-style: normal;
  font-weight: 400;
  font-size: 22px;
  text-transform: uppercase;
  margin-bottom: 0px;
}
.carousel-wrapper .carousel-header .subtitle {
  font-family: 'Bebas Neue';
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
}
.item-inner {
  position: relative;
  border-radius: 6px;
  margin: 0px 5px;
}
.thumb img {
  width: 100%;
  min-height: 150px;
  border-radius: 6px;
}
.slider-title {
  position: absolute;
  bottom: 10%;
  left: 5%;
  z-index: 999;
}

.slider-title h6 {
  margin: 0;
  color: #fff;
  font-family: 'Jost';
  font-style: normal;
  font-weight: 600;
  font-size: 14px;
  line-height: 120%;
}
.slick-prev {
  left: -2%;
  z-index: 999;
}

.slick-next {
  right: 0%;
  z-index: 999;
}

.slick-prev:before {
  content: url('../images/prev.png');
}

.slick-next:before {
  content: url('../images/next.png');
}

.item-inner::after {
  position: absolute;
  content: '';
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  border-radius: 6px;
  background: linear-gradient(180deg, rgba(39, 39, 39, 0) 7.81%, #272727 100%);
}
</style>

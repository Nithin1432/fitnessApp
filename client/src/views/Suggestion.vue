<template>
  <div class="fullPage">
    <Header />
    <Slider
      style="height:100%"
      animation="fade"
      v-model="sliderValue"
      :duration="5000"
      :speed="1000"
    >
      <SliderItem @click="changeIndex(1);">
        <div class="text-center mt-2">
          <h1>Fitness Inspiration</h1>
          <p class="text-center">
            Get Motivational workout tips from
            <br />UziFit experts.
          </p>
          <div class="col-md-8 offset-2">
            <div class="row">
              <div class="card customCard" style>
                <img src="../assets/images/food-h.jpg" class="card-img-top" alt="..." />
                <div class="card-body">
                  <h5 class="card-title">10 Make-Ahead Breakfasts under 300 calories</h5>
                  <a href="#" class="btn btn-primary">UziFit Blog</a>
                </div>
              </div>

              <div class="card customCard">
                <img src="../assets/images/food-j.jpg" class="card-img-top" alt="..." />
                <div class="card-body">
                  <h5 class="card-title">What 1,200 Calories Looks Like</h5>
                  <a href="#" class="btn btn-primary">UziFit Blog</a>
                </div>
              </div>

              <div class="card customCard">
                <img src="../assets/images/running-2.jpg" class="card-img-top" alt="..." />
                <div class="card-body">
                  <h5 class="card-title">Essential Guide to Getting Moving</h5>
                  <a href="#" class="btn btn-primary">UziFit Blog</a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </SliderItem>

      <SliderItem @click="changeIndex(1);">
        <div class="text-center mt-2">
          <h1>Diet Recipes</h1>
          <p class="text-center">
            Get nutritionist-approved recipes and tips from
            <br />UziFit experts.
          </p>
          <div class="col-md-8 offset-2">
            <div class="row">
              <div class="card customCard" style>
                <img src="../assets/images/food-h.jpg" class="card-img-top" alt="..." />
                <div class="card-body">
                  <h5 class="card-title">10 Make-Ahead Breakfasts under 300 calories</h5>
                  <a href="#" class="btn btn-primary">UziFit Blog</a>
                </div>
              </div>

              <div class="card customCard">
                <img src="../assets/images/food-j.jpg" class="card-img-top" alt="..." />
                <div class="card-body">
                  <h5 class="card-title">What 1,200 Calories Looks Like</h5>
                  <a href="#" class="btn btn-primary">UziFit Blog</a>
                </div>
              </div>

              <div class="card customCard">
                <img src="../assets/images/running-2.jpg" class="card-img-top" alt="..." />
                <div class="card-body">
                  <h5 class="card-title">Essential Guide to Getting Moving</h5>
                  <a href="#" class="btn btn-primary">UziFit Blog</a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </SliderItem>
    </Slider>
  </div>
</template>

<script>
import { Slider, SliderItem } from "vue-easy-slider";
import Header from "./Header.vue";

export default {
  name: "Suggestion",
  components: {
    Slider,
    SliderItem,
    Header
  },

  data() {
    return {
      list: [],
      sliderValue: 2
    };
  },

  methods: {
    changeIndex(index) {
      this.sliderValue = index;
      console.log(index);
    }
  },

  mounted() {
    setTimeout(
      () =>
        (this.list = [
          {
            backgroundColor: "#3f51b5",
            width: "100%",
            height: "100%"
          },
          {
            backgroundColor: "#eee",
            width: "100%",
            height: "100%"
          },
          {
            backgroundColor: "#f44336",
            width: "100%",
            height: "100%"
          },
          {
            backgroundColor: "#eee",
            width: "100%",
            height: "100%"
          }
        ]),
      1000
    );
  }
};
</script>

<style scoped>
.slider-btn-left {
  background-color: "dodgerblu" !important;
}
.slider-btn-right {
  background-color: "dodgerblu" !important;
}

.fullPage {
  height: 100vh;
  overflow: hidden;
}

.customCard {
  width: 18rem;
  margin: 0 auto;
}

.customCard img {
  height: 200px;
  width: auto;
}
</style>
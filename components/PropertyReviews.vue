<template>
  <div class="app-padded-vertical">
    <div class="app-wrapper">
      <div class="app-testimonials">
        <div v-for="(review, index) in reviews" :key="index">
          <div class="app-testimonial-header">
            <div>
              <img :src="review.reviewer.image"/>
            </div>
            <div>
              <p class="app-testimonial-name">
                {{ review.reviewer.name }}
              </p>
            </div>
          </div>
          <div class="app-testimonial-body"></div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    reviews: {
      type: Array,
      required: true,
    }
  }
}
</script>

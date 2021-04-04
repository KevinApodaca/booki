<template>
   <div style="clear: left;">
     <img :src="home.images[0]" style="width:200px; float:left; padding: 10px;"><br/>
     {{ home.title }}<br/>
     {{ home.location.address }}, {{ home.location.city }}, {{ home.location.state }}<br/>
     {{ home.guests }} guests, {{ home.bedrooms }} rooms, {{ home.beds }} beds, {{ home.bathrooms }} baths <br/>
     {{ home.pricePerNight }} / night <br/>
     <img src="/images/star.svg" width="20" height="20"/>{{ home.reviewValue }} ({{ home.reviewCount }})<br/>
   </div>
</template>

<script>
export default {
  props: {
    home: {
      type: Object,
      required: true
    }
  }
}
</script>

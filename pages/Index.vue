<template>
  <div>
  <div v-for="home in homes" :key="home.objectID" style="float:left; margin:10px">
    <img :src="home.images[0]" style="width:200px"><br/>
    {{ home.title }}<br/>
    {{ home.location.address }} {{ home.location.city }} {{ home.location.state }}<br/>
    {{ home.guests }} guests<br/>
    {{ home.pricePerNight }} / night <br/>
  </div>
  </div>
</template>

<script>
import homes from '~/data/homes'

export default {
  data(){
    return {
      homes: homes.slice(0,3)
    }
  }
}
</script>

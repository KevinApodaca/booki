<template>
<div class="app-background-grey">
  <div class="app-wrapper app-padded-vertical">
    <div class="app-host-header">
      <div><img :src="user.image"/></div>
      <div>
        <div class="app-host-name">{{ user.name }}</div>
      </div>
    </div>
    <div class="app-host-description"></div>
  </div>
</div>
</template>

<script>
export default {
  props: {
    user: {
      type: Object,
      required: true,
    }
  }
}
</script>

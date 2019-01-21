<template>
  <ul class="statusList">
    <li v-for="status in statuses">
      {{status.name}} -- {{status.remaining}}
    </li>
  </ul>
</template>

<script>
export default {
  props: {
    statuses: Array,
  }
}
</script>

<style>

</style>

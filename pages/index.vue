<template>
  <section class="container">
    <combatant v-for="(entry, order) in combatants" :combatant="entry" :order="order + 1" :key="entry.id" />
  </section>
</template>

<script>
import Combatant from '~/components/Combatant';

export default {
  components: {
    Combatant,
  },
  computed: {
    combatants() {
      return this.$store.state.combatants;
    }
  }
}
</script>

<style>

</style>

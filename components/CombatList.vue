<template>
  <div class="combat-list">
    <combatant
      v-for="(entry, order) in combatants"
      :turn="turn"
      :combatant="entry"
      :order="order"
      :key="entry.id"
    />
  </div>
</template>

<script>
import { mapState } from 'vuex';
import Combatant from "~/components/Combatant";

export default {
  components: {
    Combatant,
  },
  computed: {
    ...mapState(['combatants', 'turn'])
  },
}
</script>

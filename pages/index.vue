<template>
  <section class="container">
    <combatant
      v-for="(entry, order) in combatants"
      :turn="turn"
      :combatant="entry"
      :order="order"
      :key="entry.id"
    />
    <button @click="$store.commit('nextTurn')">Next</button>
    <div>
      <input type="text" v-model="newCombatant.name" @keydown.enter="addCombatant" />
      <button @click="addCombatant">Add</button>
    </div>
  </section>
</template>

<script>
import { mapState } from 'vuex';
import Combatant from '~/components/Combatant';

export default {
  components: {
    Combatant,
  },
  data: function() {
    return {
      newCombatant: {
        name: '',
        health: 1,
        maxHealth: 1,
        initiative: 1,
      }
    };
  },
  computed: {
    ...mapState(['combatants', 'turn'])
  },
  methods: {
    resetNewCombatant() {
      this.newCombatant = {
        name: '',
        health: 1,
        maxHealth: 1,
        initiative: 1,
      }
    },
    addCombatant() {
      this.$store.commit('addCombatant', this.newCombatant);
      this.resetNewCombatant();
    }
  }
}
</script>

<style>

</style>

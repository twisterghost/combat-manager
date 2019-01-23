<template>
  <section class="container">
    <combat-list />
    <button @click="$store.commit('nextTurn')">Next</button>
    <button @click="$store.commit('sortByInitiative')">Sort By Initiative</button>
    <div>
      <input type="text" v-model="newCombatant.name" @keydown.enter="addCombatant" />
      <button @click="addCombatant">Add</button>
    </div>
  </section>
</template>

<script>
import { mapState } from 'vuex';
import CombatList from "~/components/CombatList";

export default {
  components: {
    CombatList,
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

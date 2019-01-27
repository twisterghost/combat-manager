<template>
  <section class="container">
    <button @click="$store.commit('nextTurn')">Next</button>
    <button @click="$store.commit('sortByInitiative')">Sort By Initiative</button>
    <div>
      <input type="text" v-model="newCombatant.name" @keydown.enter="addCombatant" />
      <button @click="addCombatant">Add</button>
    </div>
    <combat-list />
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

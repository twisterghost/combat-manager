<template>
  <div :class="classes">
    {{order + 1}}. {{combatant.name}} - HP: {{combatant.health}} / {{combatant.maxHealth}}
  </div>
</template>

<script>
export default {
  props: {
    combatant: Object,
    order: Number,
    turn: Number,
  },
  computed: {
    myTurn() {
      return this.turn === this.order;
    },
    classes() {
      return ["combatant", {
        "combatant--myTurn": this.myTurn
      }];
    }
  }
}
</script>

<style>
.combatant--myTurn {
  background-color: red;
}
</style>

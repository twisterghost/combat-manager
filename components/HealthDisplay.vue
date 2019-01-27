<template>
  <div class="healthDisplay">
    <input
      class="healthDisplay__input tr"
      @change="updateHealth"
      @keydown.enter="updateHealth"
      @click="$event.target.select()"
      type="text"
      :value="currentHealth"
     /> /
    <input
      class="healthDisplay__input"
      @change="updateMaxHealth"
      @click="$event.target.select()"
      type="text"
      :value="maxHealth"
    />
  </div>
</template>

<script>

import { getModifiedNumber } from "~/util/numberUtil";

export default {
  props: {
    currentHealth: Number,
    maxHealth: Number,
  },
  methods: {
    updateHealth(event) {
      this.$emit('setHealth', getModifiedNumber(event.target.value, this.currentHealth));
    },
    updateMaxHealth(event) {
      this.$emit('setMaxHealth', getModifiedNumber(event.target.value, this.maxHealth));
    },
  }
}
</script>

<style>

.healthDisplay {
  display: inline-block;
  margin-left: 1rem;
  background-color: #c60013;
  color: white;
  border-radius: 1rem;
}

.healthDisplay__input {
  color: inherit;
  width: 3rem;
  background-color: transparent;
  border: none;
}
</style>

<template>
  <span>
    <input
      @change="updateHealth"
      @keydown.enter="updateHealth"
      @click="$event.target.select()"
      type="text"
      :value="currentHealth"
     /> /
    <input
      @change="updateMaxHealth"
      @keydown.enter="updateMaxHealth"
      @click="$event.target.select()"
      type="text"
      :value="maxHealth"
    />
  </span>
</template>

<script>

function getModifiedNumber(inputString, current) {
  if (inputString[0] === '+' || inputString[0] === '-') {
    return current + parseInt(inputString);
  }

  return parseInt(inputString);
}

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
</style>

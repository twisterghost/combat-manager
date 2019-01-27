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
      @keydown.enter="updateMaxHealth"
      @click="$event.target.select()"
      type="text"
      :value="maxHealth"
    />
  </div>
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

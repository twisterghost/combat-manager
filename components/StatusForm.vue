<template>
  <div>
    <input @keydown.enter="submit" type="text" v-model="name" placeholder="Status name" />
    <select v-model="type">
      <option value="time">In-Game Seconds</option>
      <option value="turns">Turns</option>
    </select>
    <input @keydown.enter="submit" type="number" v-model="remaining" />
    <button @click="submit">Add</button>
  </div>
</template>

<script>
export default {
  data: function() {
    return {
      name: "",
      type: "time",
      remaining: 1,
    };
  },
  methods: {
    submit() {
      if (this.name.trim().length > 0 && this.remaining > 0) {
        this.$emit('submit', {
          name: this.name,
          type: this.type,
          remaining: this.remaining,
        });
      }
    },
  }
}
</script>

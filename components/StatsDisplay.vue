<template>
  <div class="statsDisplay">
    Initiative: <input @change="updateStats" type="number" v-model="internalInitiative" /> -
    AC: <input @change="updateStats" type="number" v-model="internalAc" />
  </div>
</template>

<script>
  // TODO: This component should take arbitrary stat types to support myriad game rules
  export default {
    props: {
      ac: Number,
      initiative: Number,
    },
    data() {
      return {
        internalAc: this.ac,
        internalInitiative: this.initiative,
      };
    },
    methods: {
      updateStats() {
        this.$emit('update', {
          ac: parseInt(this.internalAc),
          initiative: parseInt(this.internalInitiative),
        });
      },
    }
  }
</script>

<template>
  <div class="statsDisplay">
    <div class="statsDisplay__stat" v-for="stat in customStatInfo">
      {{stat.name}}
      <input
        class="statsDisplay__statInput tc"
        @change="updateStats"
        type="text"
        v-model="localCustomStats[stat.slug]"
      />
    </div>
  </div>
</template>

<script>
import { cloneDeep } from "lodash";
export default {
  props: {
    customStats: Object,
  },
  data() {
    return {
      localCustomStats: cloneDeep(this.customStats) || {},
    }
  },
  computed: {
    customStatInfo() {
      return this.$store.state.customStats;
    }
  },
  methods: {
    updateStats() {
      // TODO: Format as the right type (number -> parseInt, for example)
      this.$emit('update', this.localCustomStats);
    },
  }
}
</script>

<style>

.statsDisplay__stat {
  display: inline-block;
}

.statsDisplay__stat:not(:last-child):after {
  content: '\b7\a0';
  margin: .5rem;
}

.statsDisplay__statInput {
  width: 3rem;
  background-color: white;
  border-radius: 1rem;
}
</style>

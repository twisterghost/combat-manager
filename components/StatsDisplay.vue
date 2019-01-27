<template>
  <div class="statsDisplay">
    <div class="statsDisplay__stat" v-for="stat in customStatInfo">
      {{stat.name}}
      <input
        class="statsDisplay__statInput tc"
        @change="updateStat"
        type="text"
        :value="customStats[stat.slug]"
        :data-stat="stat.slug"
      />
    </div>
  </div>
</template>

<script>
import { getModifiedNumber } from "~/util/numberUtil";
export default {
  props: {
    customStats: Object,
  },
  computed: {
    customStatInfo() {
      return this.$store.state.customStats;
    }
  },
  methods: {
    updateStat(event) {
      const valString = event.target.value;
      const stat = event.target.dataset.stat;
      this.$emit('update', {
        stat,
        value: getModifiedNumber(valString, this.customStats[stat]),
      });
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

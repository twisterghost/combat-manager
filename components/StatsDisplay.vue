<template>
  <div class="statsDisplay">
    <div v-for="stat in customStatInfo">
      {{stat.name}}: <input @change="updateStats" type="number" v-model="localCustomStats[stat.slug]" />
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

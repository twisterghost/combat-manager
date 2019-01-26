<template>
  <div :class="classes">
    <h2 class="combatant__name">{{combatant.name}}</h2>
    <health-display
      :currentHealth="combatant.health"
      :maxHealth="combatant.maxHealth"
      @setHealth="setHealth"
      @setMaxHealth="setMaxHealth"
    >
    </health-display>
    <stats-display
      :customStats="combatant.customStats"
      @update="updateStats"
    />
    <status-list :statuses="combatant.statuses"></status-list>
    <button @click="remove">Remove From Combat</button> - <button @click="toggleStatusForm">Add Status</button>
    <status-form v-if="showStatusForm" @submit="submitStatusForm"></status-form>
  </div>
</template>

<script>
import StatusList from "~/components/StatusList";
import HealthDisplay from "~/components/HealthDisplay";
import StatusForm from "~/components/StatusForm";
import StatsDisplay from "~/components/StatsDisplay";

export default {
  components: {
    StatusList,
    HealthDisplay,
    StatusForm,
    StatsDisplay,
  },
  props: {
    combatant: Object,
    order: Number,
    turn: Number,
  },
  data: function() {
    return {
      showStatusForm: false,
    };
  },
  computed: {
    myTurn() {
      return this.turn === this.order;
    },
    classes() {
      return ["combatant", {
        "combatant--myTurn": this.myTurn
      }];
    },
  },
  methods: {
    setHealth(value) {
      this.$store.commit("setHealth", {
        idx: this.order,
        value
      });
    },
    setMaxHealth(value) {
      this.$store.commit("setMaxHealth", {
        idx: this.order,
        value
      });
    },
    remove() {
      this.$store.commit("removeCombatant", this.order);
    },
    toggleStatusForm() {
      this.showStatusForm = !this.showStatusForm;
    },
    submitStatusForm(status) {
      this.showStatusForm = false;
      this.$store.commit("addStatus", {idx: this.order, status});
    },
    updateStats(stats) {
      this.$store.commit("updateStats", {idx: this.order, stats});
    }
  }
}
</script>

<style>
.combatant {
  margin: 2rem;
  padding: 1rem;
  border: 1px solid black;
  border-radius: 5px;
}

.combatant__name {
  display: inline-block;
}

.combatant__statuses {
  display: block;
}

.combatant--myTurn {
  background-color: red;
}
</style>

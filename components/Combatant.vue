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
    <status-list :statuses="combatant.statuses"></status-list>
    <button>Remove From Combat</button> - <button>Add Status</button>
  </div>
</template>

<script>
import StatusList from "~/components/StatusList";
import HealthDisplay from "~/components/HealthDisplay";

export default {
  components: {
    StatusList,
    HealthDisplay,
  },
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
    },
  },
  methods: {
    setHealth(value) {
      this.$store.commit('setHealth', {
        idx: this.order,
        value
      });
    },
    setMaxHealth(value) {
      this.$store.commit('setMaxHealth', {
        idx: this.order,
        value
      });
    },
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

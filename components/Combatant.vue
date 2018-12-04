<template>
  <div class="combatant">
    {{order}}. {{combatant.name}} - HP: {{combatant.health}} / {{combatant.maxHealth}}
  </div>
</template>

<script>
export default {
  props: {
    combatant: Object,
    order: Number,
  }
}
</script>

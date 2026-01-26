<script setup lang="ts">
  import { VCountdown } from '@vau/ui';
  import '@vau/theme-base';
</script>

<template>
  <v-countdown
    v-slot="{ days, hours, minutes, seconds }"
    :start="2 * 24 * 60 * 60 * 1000"
    auto-start
  >
    Time Remaining：{{ days }} days, {{ hours }} hours, {{ minutes }} minutes, {{ seconds }} seconds.
  </v-countdown>
</template>

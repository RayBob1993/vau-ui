<script setup lang="ts">
  import { VInputGroup, VInputGroupAddon, VInput } from '@vau/ui';
  import '@vau/themes/src/index.scss';
</script>

<template>
  <v-input-group>
    <v-input-group-addon>
      www
    </v-input-group-addon>

    <v-input/>

    <v-input-group-addon>
      $
    </v-input-group-addon>
  </v-input-group>
</template>

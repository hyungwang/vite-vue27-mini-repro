<template>
  <router-view />
</template>


<script lang="ts">
import { Component, Vue } from "vue-property-decorator";

@Component({ name: "AppStartingPoint", components: { } })
export default class AppStartingPoint extends Vue {}
</script>
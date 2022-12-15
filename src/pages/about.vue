<template>
  <div>
    <h6>About page</h6>
    <router-link to="/">Goto Home</router-link>
    <div>{{ pageTitle }}</div>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'


@Component({
  name: "AboutPage",
  components: {},
})
export default class AboutPage extends Vue {
  pageTitle = "About page here";
}
</script>

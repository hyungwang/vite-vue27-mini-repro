<template>
  <div>
    <h6>Index page</h6>
    <router-link to="/about">Goto about page</router-link>
    <div>{{ pageTitle }}</div>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'
@Component({
  name: "AboutPage",
  components: {},
})
export default class IndexPage extends Vue {
  pageTitle = "Index page here";
}
</script>

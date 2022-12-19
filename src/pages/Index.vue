<template>
  <div>
    <h6>Index page</h6>
    <router-link to="/about">Goto about page</router-link>
  </div>
</template>

<script lang="ts">
import { generalStore } from '@/store';
import { Component, Vue } from 'vue-property-decorator'
@Component({
  name: "AboutPage",
  components: {},
})
export default class IndexPage extends Vue {
  mounted() {
    console.log('Index mounted')
    generalStore.setPageTitle('Index page')
  }
}
</script>

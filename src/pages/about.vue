<template>
  <div>
    <h6>About page </h6>
    <router-link to="/">Goto Home</router-link>
    <div>{{counter}}</div>
    <div>{{counter}} * 5 = {{counter5}}</div>
    <button @click="increment">Increment Counter</button>
    <div>
      General Counter: {{ generalCounter }}
    </div>
  </div>
</template>

<script lang="ts">
import { generalStore } from '@/store';
import { Component, Vue } from 'vue-property-decorator'
import { multiplyBy5 } from '@/helpers'

@Component({
  name: "AboutPage",
  components: {},
})
export default class AboutPage extends Vue {
  counter = 0;
  mounted() {
    console.log('About mounted')
    generalStore.setPageTitle('About page')
  }
  get generalCounter() { 
    return generalStore.counter
  }
  get counter5() {
    console.log('recomputing')
    return multiplyBy5(this.counter)
  }

  increment() {
    this.counter += 6
  }
}
</script>
<style>
  h6 {
    font-size: 40px;
    color: red;
  }
</style>
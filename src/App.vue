<template>
  <main>
    <section>
      <Header />
      <router-view />
    </section>
    <aside>
      <div class="counter">
        {{holder}}
      </div>
      <button @click="increment">Increment holder</button>

      <div>
      General Counter: {{ generalCounter }}
    </div>
    </aside>
</main>
</template>


<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import Header from '@/components/Header.vue'
import { generalStore } from "./store";
@Component({ name: "AppStartingPoint", components: { Header } })
export default class AppStartingPoint extends Vue {
  holder = 0;

  increment() {
    this.holder += 5
  }

  get generalCounter() { 
    return generalStore.counter
  }
}
</script>
<style scoped>
main {
  display: flex; 
  justify-content: space-between;
  height: 100vh;
  width: 100vw;
}
.counter {
  font-size: 50px;
  margin-bottom: 10px;
}
section {
  flex: 1 1 0%;
}
aside {
  width: 35%;
  border-left: 1px solid grey;
  padding: 10px 30px;
}
</style>
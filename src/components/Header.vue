<template>
  <header class="py-4">
    The header here
    {{pageTitle}}
  </header>
</template>

<script lang="ts">
import { generalStore } from '@/store';
import {Component, Vue} from 'vue-property-decorator'

@Component({
    name: 'Header',
})
export default class Header extends Vue {

    get pageTitle() {
        return generalStore.pageTitle;
    }
}
</script>

<style>
header {
    text-align: center;
    font-size: 24px;
    background-color: black;
    color: white;
}

</style>
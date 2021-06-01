<template>
    <article class='card'>
        <h1>{{ title }}</h1>
        <g-button v-bind="$props" :label="buttonLabel" />
    </article>
</template>

<script>
import GButton from '../Button';
export default {
  name: 'g-card',
  components: { GButton },
  props: {
    title: String,
    buttonLabel: {
        type: String,
        default: 'buttonLabel'
    }
  }
}
</script>

<style scoped>
.card {
    border: 1px solid black;
    padding: 1rem;
}
</style>

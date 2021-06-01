<template>
    <button class='btn' :style="cssVars">
        {{ label }}
    </button>
</template>

<script>
export default {
  name: 'g-button',
  props: {
    label: String,
    size: String,
    color: String,
  },
  computed: {
    cssVars() {
      return {
        '--bg-color': this.color
      }
    }
  }
}
</script>

<style scoped>
.btn {
    border: 1px solid black;
    padding: .5rem 1rem;
    border-radius: 4px;
    background-color: var(--bg-color);
}
</style>

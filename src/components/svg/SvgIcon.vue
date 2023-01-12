<template>
    <svg aria-hidden="true">
        <use class="svg-use" :href="`#icon-${name}`" />
    </svg>
</template>

<script setup lang="ts">
defineProps({
  name: {
    type: String,
    default: ''
  }
})
</script>

<style lang="scss" scoped>
</style>

<template>
  <router-view/>
</template>

<script>
export default {
  name: "AppRoot"
}
</script>

<style>
html, body, #app {
  margin: 0;
  padding: 0;
  height: 100%;
  font-family: system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif;
}

button,
input,
textarea,
select {
  font-family: inherit;
}
</style>

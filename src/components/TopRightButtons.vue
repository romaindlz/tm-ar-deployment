<!-- src/components/TopRightButtons.vue -->
<template>
  <div class="top-right-buttons">
    <button @click="$emit('attributs')">Infos</button>
    <button @click="$emit('feedback')">Feedback</button>
  </div>
</template>

<script>
export default {
  name: 'TopRightButtons'
}
</script>

<style scoped>
.top-right-buttons {
  position: absolute;
  top: 1rem;
  right: 1rem;
  z-index: 10; /* au-dessus de l’AR */
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
}

.top-right-buttons button {
  padding: 0.4rem 0.8rem;
  border-radius: 999px;
  border: none;
  cursor: pointer;
  font-size: 0.9rem;
  color: white;
  background: #4A6E8E;
}
</style>

<template>
  <!-- Overlay sombre cliquable -->
  <div
    v-if="open"
    class="sidepanel-overlay"
    @click.self="$emit('close')"
  >
    <!-- Le panneau lui-même -->
    <div class="sidepanel">
      <div class="sidepanel-header">
        <h2>Menu</h2>
        <button class="close-btn" @click="$emit('close')">×</button>
      </div>

      <div class="sidepanel-content">
        <!-- Tu peux mettre ici ce que tu veux : options, infos, etc. -->
        <p>Contenu du panneau latéral.</p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'SidePanel',
  props: {
    open: {
      type: Boolean,
      default: false
    }
  }
}
</script>

<style scoped>
.sidepanel-overlay {
  position: fixed;
  inset: 0;
  z-index: 50;
  background: rgba(0, 0, 0, 0.35);
  display: flex;
  align-items: stretch;
}

.sidepanel {
  width: 260px;
  max-width: 80vw;
  background: #ffffff;
  height: 100%;
  box-shadow: 2px 0 12px rgba(0, 0, 0, 0.4);
  transform: translateX(0);
  animation: slideIn 0.2s ease-out;
  display: flex;
  flex-direction: column;
}

.sidepanel-header {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0.7rem 1rem;
  border-bottom: 1px solid #eee;
  color: #eee;
  background: #4A6E8E;
}

.sidepanel-header h2 {
  margin: 0;
  font-size: 1rem;
}

.close-btn {
  border: none;
  background: transparent;
  font-size: 1.4rem;
  line-height: 1;
  cursor: pointer;
  color: #eee;
}

.sidepanel-content {
  padding: 1rem;
  overflow-y: auto;
  font-size: 0.9rem;
  color: #000;
}

/* petite animation d’apparition */
@keyframes slideIn {
  from {
    transform: translateX(-100%);
  }
  to {
    transform: translateX(0);
  }
}
</style>

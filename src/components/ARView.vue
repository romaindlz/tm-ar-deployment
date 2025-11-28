<!-- src/components/ARView.vue -->
<template>
  <!-- Conteneur dans lequel ton script AR va dessiner -->
  <div class="ar-container">
    <canvas ref="canvasEl" class="glscene"></canvas>
  </div>

</template>

<script>
import { initAREngine } from '../lib/arEngine.js'

export default {
  name: 'ARView',
  data() {
    return {
      arInstance: null
    }
  },
  mounted() {
    const canvas = this.$refs.canvasEl
    if (!canvas) {
      console.error('Canvas AR introuvable')
      return
    }
    // Initialisation moteur AR
    this.arInstance = initAREngine(canvas)
  },
  beforeUnmount() {
    if (this.arInstance && typeof this.arInstance.stop === 'function') {
      this.arInstance.stop()
    }
  }
}
</script>

<style scoped>
.ar-container {
  position: absolute;
  inset: 0;        /* top:0; right:0; bottom:0; left:0 */
  z-index: 0;      /* derrière les autres éléments */
  background: black;
}

.glscene {
  width: 100%;
  height: 100%;
  display: block;
}
</style>

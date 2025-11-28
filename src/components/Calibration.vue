<template>
  <div class="calibration-root">
    <ARView ref="arView" />

    <header class="calibration-header">
      <h1>Calibration</h1>
    </header>

    <!-- Conteneur bas : console AU-DESSUS du footer -->
    <div class="bottom-overlay">
      <DebugConsole :visible="true" />

      <footer class="calibration-footer">
        <div class="calibration-instructions">
          <p v-if="step === 1">
            <b>Étape 1</b> - Placer vous sur le point au sol situé au niveau de la flèche et cliquer sur "Mesurer". <b>Rester immobile.</b>
          </p>
          <p v-else-if="step === 2">
            <b>Étape 2</b> - Placer vous sur le point au sol situé au niveau de la flèche et cliquer sur "Mesurer". <b>Rester immobile.</b>
          </p>
          <p v-else-if="step === 3">
            <b>Étape 3</b> - Cliquer sur "Appliquer" pour terminer la calibration.
          </p>
        </div>

        <button class="calibration-btn" @click="nextStep">
          {{ buttonLabel }}
        </button>
      </footer>
    </div>
  </div>
</template>


<script>
import ARView from './ARView.vue'
import DebugConsole from './DebugConsole.vue'

export default {
  name: 'Calibration',
  components: { ARView, DebugConsole },

  data() {
    return { step: 1 }
  },

  computed: {
    buttonLabel() {
      return this.step < 3 ? 'Mesurer' : 'Appliquer'
    }
  },

  mounted() {
    const ar = this.$refs.arView?.arInstance

    if (ar) {
      console.log("Affichage automatique de nav_pf1 pour calibration")
      ar.showArrowPf1()   // affiche nav_pf1
    }
  },

  methods: {
    nextStep() {
      if (this.step < 3) {
        this.step++
      } else {
        this.$router.push('/')
      }
    }
  }
}
</script>

<style scoped>
.calibration-root {
  position: relative;
  width: 100%;
  height: 100vh;
  overflow: hidden;

  --footer-height: 90px; /*variable*/
}

.calibration-header {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  padding: 0.8rem;
  text-align: center;
  background: rgba(255, 255, 255, 0.85);
  border-bottom: 1px solid #ddd;
  z-index: 10;
}

.calibration-header h1 {
  margin: 0;
  font-size: 1.2rem;
  color: #4A6E8E
}

/* Footer overlay */
.calibration-footer {
  position: absolute;
  left: 0;
  right: 0;
  bottom: 0;
  height: var(--footer-height);
  padding: 1rem;
  display: flex;
  align-items: center;
  justify-content: space-between; /* texte à gauche / bouton à droite */
  background: rgba(255, 255, 255, 0.85);
  border-top: 1px solid #ddd;
  z-index: 10;
}

/* Texte des étapes */
.calibration-instructions {
  flex: 1;
  text-align: left;        /* 👈 texte aligné à gauche */
  font-size: 0.95rem;
  color: #333;
}

.calibration-instructions p {
  margin: 0;
}

/* Bouton */
.calibration-btn {
  padding: 0.6rem 1.2rem;
  border: none;
  border-radius: 8px;
  background: #4A6E8E;
  color: white;
  font-size: 1rem;
  cursor: pointer;
  white-space: nowrap;
}
</style>

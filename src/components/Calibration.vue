<template>
  <div class="calibration-root">
    <ARView ref="arView" />

    <div v-if="isMeasuring" class="loading-overlay">
      <div class="spinner"></div>
      <p>Mesure en cours… ne bougez pas</p>
    </div>

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
import ARView from './ARView.vue';
import DebugConsole from './DebugConsole.vue';
import { runCalibrationPoint } from '../lib/calib.js';
import { COORDS } from '../constants/CoordsPts.js';
import { getSessionId } from "../lib/sessionId.js";
import { logEvent } from "../lib/CRUD.js";

export default {
  name: 'Calibration',
  components: { ARView, DebugConsole },

  data() {
    return { 
      step: 1,
      isMeasuring: false,
      sessionId: getSessionId()
     }
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
    async nextStep() {
      const ar = this.$refs.arView?.arInstance;

      if (this.step === 1) {
        await runCalibrationPoint('Point 1', COORDS.lonPF1, COORDS.latPF1, {
          onStart: () => { this.isMeasuring = true; },
          onEnd:   () => { this.isMeasuring = false; },

          sessionId: this.sessionId
        });

        logEvent("button_click", { id: "first_point_calib" });

        ar?.showArrowPf2();   // affiche PF2

        this.step = 2;
        return;
      }

      if (this.step === 2) {
        await runCalibrationPoint('Point 2', COORDS.lonPF2, COORDS.latPF2, {
          onStart: () => { this.isMeasuring = true; },
          onEnd:   () => { this.isMeasuring = false; },

          sessionId: this.sessionId
        });

        logEvent("button_click", { id: "second_point_calib" });

        this.step = 3;
        return;
      }

      if (this.step === 3) {
        
        logEvent("button_click", { id: "calib_applied" });

        this.$router.push('/');
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

.loading-overlay {
  position: fixed;
  inset: 0;
  background: rgba(0, 0, 0, 0.4);
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  z-index: 9999;
}

.spinner {
  width: 50px;
  height: 50px;
  border: 6px solid #ccc;
  border-top-color: #4A6E8E;
  border-radius: 50%;
  animation: spin 0.8s linear infinite;
}

@keyframes spin {
  to {
    transform: rotate(360deg);
  }
}
</style>

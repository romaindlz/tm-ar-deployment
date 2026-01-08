<template>
  <div class="home-root">

    <ARView ref="arView" />

    <TopRightButtons
      @attributs="attributs"
      @feedback="feedback"
      @TheEnd="TheEnd"
    />

    <Map></Map>

    <SidePanel :open="isSidePanelOpen" @close="closeSidePanel"></SidePanel>

    <Popup :open="showPopup" @close="closePopup"></Popup>

  </div>
</template>

<script>
import ARView from './ARView.vue'
import TopRightButtons from './TopRightButtons.vue'
import Map from './Map.vue'
import SidePanel from './SidePanel.vue'
import Popup from './Popup.vue'
import { startLiveCorrectedFakeGps, calibrationReady } from '../lib/calib.js';
import { endSession } from '../lib/endSession.js';
import { logEvent } from "../lib/CRUD.js";
import { startGpsTracking } from '../lib/gpsTracking.js';
import { exportAndResetSession } from "../lib/logger.js";
import { getSessionId } from "../lib/sessionId.js";


export default {
  name: 'Home',
  components: {
    ARView,
    TopRightButtons,
    Map,
    SidePanel,
    Popup
  },

  data() {
    return {
      isSidePanelOpen: false,
      showPopup: false,
      sessionId: getSessionId()
    }
  },

  mounted() {
    const ar = this.$refs.arView?.arInstance

    if (ar) {
      console.log("Affichage automatique du modèle sur Home")
      //ar.showModel()   // Affiche le modèle 3D gLB
      ar.showBat();
      ar.showTele();
      ar.showMob();
    }

    const popupFlag = sessionStorage.getItem('welcomeShown')

    if (!popupFlag) {
      this.showPopup = true
    }

    this.$nextTick(async () => {
      if (calibrationReady) {
        try {
          await startLiveCorrectedFakeGps();
        } catch (e) {
          console.error('Erreur lors du démarrage de la fake GPS :', e);
        }
      }
    });
  },
  
  methods: {
    attributs() {
      logEvent("button_click", { id: "side_panel" })
      this.isSidePanelOpen = !this.isSidePanelOpen
    },
    feedback() {
      window.open(
    'https://docs.google.com/forms/d/e/1FAIpQLScTY4oCuQEOsQuCAlPTz_XexjU8eV87tU8lbJPWVpyNH1u_RQ/viewform?usp=sharing&ouid=100533160203618964602',
    '_blank'
    
  )
    },
    async TheEnd(){
      await endSession();
      /*
      try {
          await exportAndResetSession(this.sessionId);
        } catch (e) {
          console.warn("Export calibration failed:", e);
          alert("Export JSON impossible sur ce navigateur.");
        }
          */
    },
    closeSidePanel() {
      this.isSidePanelOpen = false
    },
    closePopup() {
      logEvent("session_start");
      startGpsTracking();
      this.showPopup = false
      sessionStorage.setItem('welcomeShown', '1')
      this.$router.push('/calibration')
    }
  }
}
</script>

<style>
html,
body,
#app {
  margin: 0;
  padding: 0;
  height: 100%;
}

.app-root {
  position: relative;
  min-height: 100vh;
  background: #222;
  color: #fff;
}

.debug-banner {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  padding: 0.5rem 1rem;
  background: #ff5722;
  color: #fff;
  z-index: 1000;
  font-weight: bold;
}
</style>

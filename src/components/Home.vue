<template>
  <div class="home-root">

    <ARView ref="arView" />

    <TopRightButtons
      @attributs="attributs"
      @feedback="feedback"
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
      showPopup: false
    }
  },

  mounted() {
    const ar = this.$refs.arView?.arInstance

    if (ar) {
      console.log("Affichage automatique de la sphère sur Home")
      ar.showSphere()   // Affiche la sphère
    }

    const popupFlag = sessionStorage.getItem('welcomeShown')

    if (!popupFlag) {
      this.showPopup = true
    }
  },
  
  methods: {
    attributs() {
      this.isSidePanelOpen = !this.isSidePanelOpen
    },
    feedback() {
      this.$router.push('/feedback')
    },
    closeSidePanel() {
      this.isSidePanelOpen = false
    },
    closePopup() {
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

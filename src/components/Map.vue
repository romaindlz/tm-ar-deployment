<template>
  <div class="map-container">
    <div ref="mapElement" class="leaflet-map"></div>
  </div>
</template>

<script>
import 'leaflet/dist/leaflet.css'
import L from 'leaflet'

const lat  = 46.22543;
const lon = 7.36980;

export default {
  name: "Map",
  data() {
    return {
      center: [lat, lon],
      zoom: 17,
      map: null
    };
  },
  mounted() {
    try {
      this.map = L.map(this.$refs.mapElement, {
        zoomControl: false,
        dragging: false,
        scrollWheelZoom: false,
        touchZoom:false,
        doubleClickZoom: false,
        boxZoom: false,
        keyboard: false
      }).setView(this.center, this.zoom)

      L.tileLayer("https://wmts.geo.admin.ch/1.0.0/ch.swisstopo.pixelkarte-grau/default/current/3857/{z}/{x}/{y}.jpeg", {
        maxZoom: 20,
        attribution:
          "© swisstopo (pixelkarte-grau)"
      }).addTo(this.map)
    } catch (e) {
      console.error('Erreur lors de l’init Leaflet :', e)
    }
  }
}
</script>

<style scoped>
.map-container {
  position: fixed;
  right: 1rem;
  bottom: 1rem;
  width: 180px;
  height: 180px;
  z-index: 20;
  border-radius: 10px;
  overflow: hidden;
  box-shadow: 0 0 10px rgba(0,0,0,0.4);
  background: #ddd;
}

.leaflet-map {
  width: 100%;
  height: 100%;
}
</style>

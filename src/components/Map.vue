<!-- Map.vue -->
<template>
  <div class="map-container">
    <div ref="mapElement" class="leaflet-map"></div>
  </div>
</template>

<script>
import 'leaflet/dist/leaflet.css'
import L from 'leaflet'
import { getPosition } from '../lib/getPosition.js';

import marker2x from "leaflet/dist/images/marker-icon-2x.png";
import marker from "leaflet/dist/images/marker-icon.png";
import shadow from "leaflet/dist/images/marker-shadow.png";

delete L.Icon.Default.prototype._getIconUrl;
L.Icon.Default.mergeOptions({
  iconRetinaUrl: marker2x,
  iconUrl: marker,
  shadowUrl: shadow,
});

const lat  = 46.22543;
const lon = 7.36980;

export default {
  name: "Map",
  data() {
    return {
      center: [lat, lon],
      zoom: 17,
      map: null,
      userMarker: null,
      watchIntervalId: null
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

      this.userMarker = L.marker(this.center).addTo(this.map);

      this.startUserTracking();

    } catch (e) {
      console.error('Erreur lors de l’init Leaflet :', e)
    }
  },

  beforeUnmount() {
    if (this.watchIntervalId) {
      clearInterval(this.watchIntervalId);
      this.watchIntervalId = null;
    }
  },

  methods: {
    async updateUserPosition() {
      try {
        const res = await getPosition();
        if (!res?.ok || !res.coords) return;

        const { latitude, longitude } = res.coords;
        const newCenter = [latitude, longitude];

        this.center = newCenter;
        console.log(`Nouvelle position utilisateur : ${newCenter}`);

        if (this.userMarker) {
          this.userMarker.setLatLng(newCenter);
        }

        if (this.map) {
          this.map.panTo(newCenter);
        }
      } catch (e) {
        console.error('Erreur lors de la récupération de la position :', e);
      }
    },

    startUserTracking() {
      this.updateUserPosition();

      this.watchIntervalId = setInterval(() => {
        this.updateUserPosition();
      }, 10000);
    },
  },
};
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

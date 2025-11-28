<template>
  <div v-if="open" class="popup-overlay">
    <div class="popup-box">

      <!-- Contenu du message -->
      <div class="popup-content">
        <slot>
          <p>
            Bienvenue sur l’application AR.<br><br>
            Pour une expérience optimale, veuillez calibrer votre appareil en
            suivant les instructions.<br><br>
            Appuyez sur "Calibrer" pour commencer.
        </p>
        </slot>
      </div>

      <!-- Bouton -->
      <button class="popup-button" @click="$emit('close')">
        Calibrer
      </button>

    </div>
  </div>
</template>

<script>
export default {
  name: "Popup",
  props: {
    open: {
      type: Boolean,
      default: false
    }
  }
}
</script>

<style scoped>
.popup-overlay {
  position: fixed;
  inset: 0;
  background: rgba(0, 0, 0, 0.55);
  z-index: 9999;

  display: flex;
  justify-content: center;
  align-items: center;
}

.popup-box {
  width: 80%;
  max-width: 350px;
  background: white;
  padding: 1.5rem;
  border-radius: 12px;
  text-align: center;
  box-shadow: 0 8px 22px rgba(0, 0, 0, 0.25);
  animation: fadein 0.25s ease-out;
}

.popup-content {
  margin-bottom: 1.5rem;
  font-size: 1rem;
}

.popup-button {
  padding: 0.4rem 0.8rem;
  border-radius: 999px;
  border: none;
  cursor: pointer;
  font-size: 0.9rem;
  color: white;
  background: #4A6E8E;
}

@keyframes fadein {
  from {
    transform: scale(0.9);
    opacity: 0;
  }
  to {
    transform: scale(1);
    opacity: 1;
  }
}
</style>

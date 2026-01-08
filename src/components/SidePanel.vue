<template>
  <div
    v-if="open"
    class="sidepanel-overlay"
    @click.self="$emit('close')"
  >
    <div class="sidepanel">
      <div class="sidepanel-header">
        <h2>Informations</h2>
        <button class="close-btn" @click="$emit('close')">x</button>
      </div>

      <div class="sidepanel-content">
        <p><b>Parcelle :</b> 1048</p><br/>
        <p><b>Commune :</b> Sion</p><br/>
        <p><b>Bâtiment :</b> Swiss Innovation Parc</p><br/>
        <p><b>Télécabine :</b> Liaison câblée Sion - Les Mayens de l'Ours</p><br/>
        <p><b>Parc :</b> Mobilier urbain du Parc des câbles</p><br/>
        <p><b>Projet :</b></p>
        <p>Le secteur de <b>Ronquoz 21</b>, situé entre les voies CFF, le Rhône et l'autoroute, est un quartier à vocation essentiellement industrielle. Ce projet repose sur la complémentarité entre la densité urbaine et les grands espaces libres. Il vise à créer un quartier durable qui intègre des objectifs environnementaux, énergétiques, sociaux et économiques, tout en valorisant les ressources, le patrimoine existant et la cohésion sociale. La mobilité sera repensée, avec une priorité donnée aux transports publics et à la mobilité douce, notamment grâce au développement de la liaison câblée plaine-montagne. Enfin, le développement du quartier se fera au fur et à mesure des opportunités qui se présenteront.</p>
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

/* animation d’apparition */
@keyframes slideIn {
  from {
    transform: translateX(-100%);
  }
  to {
    transform: translateX(0);
  }
}
</style>

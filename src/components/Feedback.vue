<template>
  <div class="feedback-root">

    <!-- HEADER -->
    <header class="feedback-header">
      <button class="back-button" @click="goBack">←</button>
      <h1>Feedback</h1>
      <div class="header-placeholder"></div>
    </header>

    <!-- CONTENU -->
    <div class="feedback-content">
      <textarea
        v-model="text"
        class="feedback-textarea"
        placeholder="Votre avis sur l'expérience AR..."
      ></textarea>
    </div>

    <!-- BAS DE PAGE -->
    <footer class="feedback-footer">
      <button class="send-btn" @click="submitFeedback">Submit</button>
    </footer>

  </div>
</template>

<script>
export default {
  name: 'Feedback',
  data() {
    return {
      text: ''
    }
  },
  methods: {
    submitFeedback() {
      console.log('Feedback : ', this.text)
      alert('Merci pour votre feedback !')
      this.text = ''
    },
    goBack() {
      this.$router.push('/')
    }
  }
}
</script>

<style scoped>
/* Conteneur principal */
.feedback-root {
  display: flex;
  flex-direction: column;
  height: 100vh;
  background: #f2f2f2;
}

/* HEADER */
.feedback-header {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0.7rem 1rem;
  border-bottom: 1px solid #4A6E8E;
  background: white;
}

.feedback-header h1 {
  margin: 0;
  font-size: 1.3rem;
  color: white;
  flex: 1;
  text-align: center;
  font-weight: 600;
  color: #4A6E8E;
}

.back-button {
  border: none;
  background: transparent;
  font-size: 1.4rem;
  cursor: pointer;
  color: #4A6E8E;
}

.header-placeholder {
  width: 1.4rem;
}

.feedback-content {
  flex: 1;
  padding: 1rem;
}

.feedback-textarea {
  width: 100%;
  height: 100%;
  padding: 1rem;
  font-size: 1rem;
  border-radius: 8px;
  border: 1px solid #ccc;
  resize: none;
}

/* FOOTER */
.feedback-footer {
  padding: 0.8rem 1rem;
  display: flex;
  justify-content: flex-end;
  background: white;
  border-top: 1px solid #ddd;
}

.send-btn {
  padding: 0.6rem 1rem;
  border: none;
  border-radius: 6px;
  font-size: 1rem;
  cursor: pointer;
  background: #4A6E8E;
  color: white;
}
</style>

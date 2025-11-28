<template>
  <div class="debug-console" v-if="visible">
    <div class="logs">
      <div v-for="(msg, index) in messages" :key="index">
        {{ msg }}
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'DebugConsole',
  props: {
    visible: {
      type: Boolean,
      default: true
    }
  },
  data() {
    return {
      messages: []
    }
  },
  mounted() {
    // intercept console.log
    const originalLog = console.log
    console.log = (...args) => {
      this.messages.push(args.join(' '))
      // also call original console.log
      originalLog.apply(console, args)
      // keep last 20 logs max
      if (this.messages.length > 20) {
        this.messages.shift()
      }
    }
  }
}
</script>

<style scoped>
.debug-console {
  position: absolute;
  right: 0.5rem;
  left: 0.5rem;
  bottom: calc(var(--footer-height, 72px) + 8px); /*variable dans Calibration.vue*/
  height: 150px;
  z-index: 9999;
  border-radius: 10px;
  overflow-y: auto;
  box-shadow: 0 0 10px rgba(0,0,0,0.4);
  background: #dddddd;
  opacity: 0.8;
  color: #4A6E8E;
  font-size: 0.8rem;
  padding: 0.8rem
}


.logs {
  white-space: pre-wrap;
}
</style>

<template>
  <div class="wrape">
    <div class="col" v-for="i in 5" :key="i" :style="setBackgroundColor()">
      <h2>Text {{ i }}</h2>

<!--      <button><v-icon name="bi-lock-fill"/></button>-->
      <button>HUI</button>
    </div>
  </div>
</template>

<script>
export default {
name: "Palette",
  data: () => ({
    cols: []
  }),
  methods: {
    generateRandomColor() {
      const hexCodes = '01234546789ABCDEF';
      let color = '';

      for (let i = 0; i < 6; i++) {
        color += hexCodes[this.getRandomCode(hexCodes)];
      }

      return `#${color}`;
    },
    getRandomCode(codeList) {
      return Math.floor(Math.random() * codeList.length);
    },
    setBackgroundColor() {
      return `background: ${this.generateRandomColor()}`
    }
  }
}
</script>

<style scoped>
* {
  box-sizing: border-box;
}

.wrape {
  height: 100vh;
  display: flex;
}

.col {
  flex: 1;
  display: flex;
  background: darkred;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
}

.col h2 {
  padding: 10px;
  color: #fff;
  border-radius: 10px;
  transition: background 0.3s;
}

.col h2:hover {
  background: rgba(0,0,0,0.1);
  cursor: pointer;
}

.col button {
  border: none;
  background: transparent;
  font-size: 1.2rem;
  color: #fff;
  padding: 10px;
  border-radius: 10px;
  transition: background 0.3s;
}

.col button:hover {
  background: rgba(0,0,0,0.1);
  cursor: pointer;
}
</style>
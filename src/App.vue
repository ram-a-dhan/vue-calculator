<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<style lang="scss">
@font-face {
  font-family: "Lato";
  src: url("./assets/Lato-Regular.ttf");
}

body {
  background-color: #F0F0F0;
}

* {
  margin: 0rem;
  padding: 0rem;
  box-sizing: border-box;
  font-family: Lato, Helvetica, Arial, sans-serif;
}

#app {
  font-family: Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2C3E50;
  width: 100%;
  height: 100vh;
  display: flex;
  flex-flow: row nowrap;
  justify-content: center;
  align-items: center;
}

a {
  color: #42b983;
}
</style>

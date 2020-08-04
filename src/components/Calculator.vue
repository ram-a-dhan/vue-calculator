<template>
  <div class="calculator">
    <div class="display formula">{{ formula }}</div>
    <div class="display result">{{ result }}</div>
    <div class="button">C</div>
    <div class="button">&lt;&timesb;</div>
    <div class="button">&plus;/&minus;</div>
    <div class="button">&divide;</div>
    <div class="button">7</div>
    <div class="button">8</div>
    <div class="button">9</div>
    <div class="button">&times;</div>
    <div class="button">4</div>
    <div class="button">5</div>
    <div class="button">6</div>
    <div class="button">&minus;</div>
    <div class="button">1</div>
    <div class="button">2</div>
    <div class="button">3</div>
    <div class="button">&plus;</div>
    <div class="button">000</div>
    <div class="button">0</div>
    <div class="button">.</div>
    <div class="button equals">&equals;</div>
  </div>
</template>

<script>
export default {
  name: 'Calculator',
  data() {
    return{
      formula: '12+34-56*78/90',
      result: '1234567890',
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
$gridSize: 5rem;
$buttonSize: 1.5rem;

.calculator {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-auto-rows: minmax(auto, auto);
  width: Calc($gridSize * 4);
  margin: auto;
}
.display, .button {
  display: flex;
  flex-flow: row nowrap;
  height: $gridSize;
}

.display {
  grid-column: 1/5;
  justify-content: flex-end;
  align-items: center;
  padding: 0rem 1rem;
}

.result {
  font-size: Calc($buttonSize * 2);
  border-bottom: 2px solid #42b983;
}

.button {
  justify-content: center;
  align-items: center;
}

.equals {
  color: #F0F0F0;
  background-color: #42b983;
}

.button, .formula {
  font-size: $buttonSize;
}

.button:hover {
  color: #F0F0F0;
  background-color: #2C3E5080;
}

.button:active {
  background-color: #2C3E50;
}


</style>

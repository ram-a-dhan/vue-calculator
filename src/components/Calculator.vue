<template>
  <div class="calculator">
    <div class="display formula">{{ formula || 0 }}</div>
    <div class="display result">{{ tempResult || 0 }}</div>
    <button class="button" @click="clear()">AC</button>
    <button class="button" @click="backspace()">&lt;&timesb;</button>
    <button class="button" @click="negative()">&plus;/&minus;</button>
    <button class="button" @click="append('/')">&divide;</button>
    <button class="button" @click="append('7')">7</button>
    <button class="button" @click="append('8')">8</button>
    <button class="button" @click="append('9')">9</button>
    <button class="button" @click="append('*')">&times;</button>
    <button class="button" @click="append('4')">4</button>
    <button class="button" @click="append('5')">5</button>
    <button class="button" @click="append('6')">6</button>
    <button class="button" @click="append('-')">&minus;</button>
    <button class="button" @click="append('1')">1</button>
    <button class="button" @click="append('2')">2</button>
    <button class="button" @click="append('3')">3</button>
    <button class="button" @click="append('+')">&plus;</button>
    <button class="button" @click="percent()">&percnt;</button>
    <button class="button" @click="append('0')">0</button>
    <button class="button" @click="append('.')">.</button>
    <button class="button equals" @click="equals()">&equals;</button>
  </div>
</template>

<script>
export default {
  name: 'Calculator',
  data() {
    return{
      formula: '',
      tempResult: '',
    }
  },
  methods: {
    append(value) {
      let entries = this.formula.split(/[\+\-\*\/]/);
      let lastEntry = entries[entries.length - 1];
      if ((/\./).test(value) && (/\./).test(lastEntry)) return false;
      if(
        !(/[0-9\.]/).test(value) &&
        !(/[0-9\.]/).test(this.formula[this.formula.length - 1])
      ) {
        this.formula = this.formula.slice(0, -1);
      } 
      this.formula += value.toString();
    },
    clear() {
      this.formula = '';
      this.tempResult = '';
    },
    backspace() {
      if (this.formula.length === 1) this.clear();
      this.formula = this.formula.slice(0, -1);
    },
    negative() {
      if (
        this.formula.length === 0 ||
        (/[\+\-\*\/]/).test(this.formula[this.formula.length - 1])
      ) return false;
      let entries = this.formula.split(/[\+\-\*\/]/);
      let lastEntry = entries[entries.length - 1];
      let lastEntryLength = lastEntry.length;
      let restOfEntry = this.formula.slice(0, lastEntryLength * -1);
      if (restOfEntry[restOfEntry.length - 1] === '-') {
        this.formula = restOfEntry.slice(0, -1) + '+' + lastEntry;
      } else if (restOfEntry[restOfEntry.length - 1] === '+') {
        this.formula = restOfEntry.slice(0, -1) + '-' + lastEntry;
      } else {
        this.formula = restOfEntry + '-' + lastEntry;
      }
    },
    percent() {
      if (
        this.formula.length === 0 ||
        (/[\+\-\*\/]/).test(this.formula[this.formula.length - 1])
      ) return false;
      let entries = this.formula.split(/[\+\-\*\/]/);
      let lastEntry = entries[entries.length - 1];
      let lastEntryLength = lastEntry.length;
      let newEntry = Number(lastEntry) / 100;
      this.formula = this.formula.slice(0, lastEntryLength * -1);
      this.formula += newEntry.toString();
    },
    equals() {
      if (this.tempResult !== '') {
        this.formula = this.tempResult;
      }
    },
  },
  watch: {
    formula() {
      if (
        this.formula !== '' &&
        this.formula.slice(0, -1) !== NaN &&
        this.formula !== this.result
        ) {
        this.tempResult = this.result.toString();
      }
    },
  },
  computed: {
    result() {
      if (this.formula.slice(0, -1) !== NaN) {
        return eval(this.formula);
      } else {
        return eval(this.formula.slice(0, -1));
      }
    }
  },
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
.button {
  display: flex;
  flex-flow: row nowrap;
  height: $gridSize;
}

.display {
  grid-column: 1/5;
  justify-content: flex-end;
  align-items: center;
  padding: 0rem 1rem;
  display: flex;
  flex-flow: row nowrap;
  min-height: $gridSize;
  text-align: right;
}

.formula, .result {
  word-break: break-all;
}

.result {
  font-size: Calc($buttonSize * 2);
  border-bottom: 2px solid #42b983;
}

.button {
  justify-content: center;
  align-items: center;
  color: #2C3E50;
  background-color: #F0F0F0;
  border: 0px;
}

.equals {
  color: #F0F0F0;
  background-color: #42b983;
}

.button, .formula {
  font-size: $buttonSize;
}

// .button:hover {
//   color: #F0F0F0;
//   background-color: #2C3E5080;
// }

.button:active {
  color: #F0F0F0;
  background-color: #2C3E50;
}


</style>

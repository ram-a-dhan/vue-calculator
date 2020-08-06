<template>
  <div class="calculator">
    <div class="display formula">{{ formula }}</div>
    <div class="display result">{{ result || 0 }}</div>
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
import {
  mapState,
  mapGetters,
  mapActions,
  mapMutations
} from 'vuex';

export default {
  name: 'Calculator',
  // data() {
  //   return{
  //     formula: '',
  //     result: '',
  //   }
  // },
  methods: {
    // append(value) {
    //   // let entries = this.formula.split(/[\+\-\*\/]/);
    //   // let lastEntry = entries[entries.length - 1];
    //   // if ((/\./).test(value) && (/\./).test(lastEntry)) return false;
    //   // if(
    //   //   !(/[0-9\.]/).test(value) &&
    //   //   !(/[0-9\.]/).test(this.formula[this.formula.length - 1])
    //   // ) {
    //   //   this.formula = this.formula.slice(0, -1);
    //   // } 
    //   // this.formula += value.toString();
    //   this.$store.dispatch('append', value);
    // },
    // clear() {
    //   // this.formula = '';
    //   // this.result = '';
    //   this.$store.commit('CLEAR');
    // },
    // backspace() {
    //   // if (this.formula.length === 1) this.clear();
    //   // this.formula = this.formula.slice(0, -1);
    //   this.$store.commit('BACKSPACE');
    // },
    // negative() {
    //   // if (
    //   //   this.formula.length === 0 ||
    //   //   (/[\+\-\*\/]/).test(this.formula[this.formula.length - 1])
    //   // ) return false;
    //   // let entries = this.formula.split(/[\+\-\*\/]/);
    //   // let lastEntry = entries[entries.length - 1];
    //   // let lastEntryLength = lastEntry.length;
    //   // let restOfEntry = this.formula.slice(0, lastEntryLength * -1);
    //   // if (restOfEntry[restOfEntry.length - 1] === '-') {
    //   //   this.formula = restOfEntry.slice(0, -1) + '+' + lastEntry;
    //   // } else if (restOfEntry[restOfEntry.length - 1] === '+') {
    //   //   this.formula = restOfEntry.slice(0, -1) + '-' + lastEntry;
    //   // } else {
    //   //   this.formula = restOfEntry + '-' + lastEntry;
    //   // }
    //   this.$store.dispatch('negative');
    // },
    // percent() {
    //   // if (
    //   //   this.formula.length === 0 ||
    //   //   (/[\+\-\*\/]/).test(this.formula[this.formula.length - 1])
    //   // ) return false;
    //   // let entries = this.formula.split(/[\+\-\*\/]/);
    //   // let lastEntry = entries[entries.length - 1];
    //   // let lastEntryLength = lastEntry.length;
    //   // let newEntry = Number(lastEntry) / 100;
    //   // this.formula = this.formula.slice(0, lastEntryLength * -1);
    //   // this.formula += newEntry.toString();
    //   this.$store.dispatch('percent');
    // },
    // equals() {
    //   // if (this.result !== '') {
    //   //   this.formula = this.result;
    //   // }
    //   this.$store.commit('EQUALS');
    // },
    ...mapActions([
      'append',
      'negative',
      'percent',
    ]),
    ...mapMutations({
      changeResult: 'CHANGE_RESULT',
      clear: 'CLEAR',
      backspace: 'BACKSPACE',
      equals: 'EQUALS',
    }),
  },
  watch: {
    formula() {
      if (
        this.formula !== '' &&
        this.formula.slice(0, -1) !== NaN &&
        this.formula !== this.tempResult
        ) {
        // // this.result = this.tempResult.toString();
        // this.$store.commit('CHANGE_RESULT', this.tempResult.toString());
        this.changeResult(this.tempResult.toString());
      }
    },
  },
  computed: {
    ...mapState([
      'formula',
      'result',
    ]),
    // tempResult() {
    //   if (this.formula.slice(0, -1) !== NaN) {
    //     return eval(this.formula);
    //   } else {
    //     return eval(this.formula.slice(0, -1));
    //   }
    // },
    ...mapGetters([
      'tempResult'
    ]),
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
  justify-content: center;
  align-items: center;
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
  transition: all 0.5s ease-in-out;
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
  transition: all 0.1s ease-in-out;
}


</style>

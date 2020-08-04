<template>
  <div class="home">
    <div class="title">
      <img alt="Vue logo" src="../assets/logo.png">
      <h1>ue <a>C</a>alculator</h1>
    </div>
    <Calculator />
  </div>
</template>

<script>
// @ is an alias to /src
import Calculator from '@/components/Calculator.vue'

export default {
  name: 'Home',
  components: {
    Calculator
  }
}
</script>

<style scoped lang="scss">
$titleHeight: 2.5rem;

.title {
  display: flex;
  flex-flow: row nowrap;
  justify-content: center;
  align-items: center;
  img {
    height: Calc($titleHeight * 1.5);
  }
  h1 {
    font-size: $titleHeight;
    letter-spacing: 0.1rem;
    font-weight: 300;
    a {
      font-weight: 700;
    }
  }
}
</style>
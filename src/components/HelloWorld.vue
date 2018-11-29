<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <div v-n="3">

    </div>
    <div>
      我借你{{money}},你还我{{a}},还剩{{b}}
    </div>
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  props: {
    msg: String,
  },
  data() {
    return {
      money: 100,
      a: 1
    }
  },
  computed:{
    b: function() {
      return this.money-this.a
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>

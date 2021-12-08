<template>
  <div>
    <h1>这是首页</h1>
    <nuxt-link to="/home">home页面</nuxt-link>

    <div @click="add">点击</div>
  </div>
</template>

<script lang="js">
export default {
  methods: {
    add() {
      console.log(this.$store.state.counter);
      this.$store.commit('increment', {});
    }
  }
}
</script>

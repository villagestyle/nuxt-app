<template>
  <div>
    <h1>这是信息页面</h1>
    <p>传入的id: {{ $route.params.id }}</p>
    <card v-for="(info, index) in infoList" :key="index" :info="info"></card>
  </div>
</template>

<script>
import { getInfo } from '../api/base'
export default {
  asyncData() {
    return getInfo().then((ret) => {
      return { infoList: ret.data }
    })
  },
  mounted() {
    console.log('infoList', this.infoList)
  },
}
</script>

<style lang="scss" scoped></style>

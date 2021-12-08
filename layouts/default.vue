<template>
  <div>
    <p>这是外框架</p>

    
    <nuxt v-if="$route.meta.ssr"></nuxt>
    <template v-else>
      <no-ssr>
        <nuxt></nuxt>
      </no-ssr>
    </template>

    <p>这是外框架</p>
  </div>
</template>

<script>
export default {
  head() {
    return {
      title: this.$route.meta.title,
      meta: [
        {
          hid: 'description',
          name: 'description',
          content: 'My custom description',
        },
      ],
    }
  },
  mounted() {
    console.warn('this.$route', this.$route)
  },
}
</script>

<style scoped></style>

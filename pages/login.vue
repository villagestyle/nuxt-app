<template>
  <div>
    <div>HOME PAGE</div>
    <nuxt-link to="/reg">reg页面</nuxt-link>
    <div class="content">
      <p>远程加载的数据</p>
      <section>
        {{ htmlStr }}
      </section>
    </div>
    <p>
      28.1 福昕云办公品牌名&产品名&广告语征集活动 转
    </p>
    <p>
      为促进云办公向品牌化方向发展，树立的全新面貌，公司规划建立云办公产品的独立品牌。特此在公司内开展征集云办公品牌名称、产品名称、广告语的活动，欢迎广大员工发散思维，集思广益，为云办公品牌建设一展才华，群策群力。
    </p>
  </div>
</template>

<script>
export default {
  asyncData() {
    return {
      htmlStr: `为促进云办公向品牌化方向发展，树立的全新面貌，公司规划建立云办公产品的独立品牌。特此在公司内开展征集云办公品牌名称、产品名称、广告语的活动，欢迎广大员工发散思维，集思广益，为云办公品牌建设一展才华，群策群力。
二、产品介绍 福昕云办公（https://www.foxitcloud.cn）为中小微企业用户提供一站式的、场景化的、智能化的办公解决方案。包含了文档的存储管理、编辑、收集、模板、翻译、打印等产品服务及其客户端套件，助力开启安全、高效、智慧办公新体验。 三、活动规则 1、征集对象 福昕网络全体员工 2、征集内容 品牌名（现用名：福昕）、产品名（现用名：云办公）、广告语（无） 3、征集要求
1）命名 要响亮、大气，且简洁、规范，字数不宜过长； 2）命名、广告语不得含有不健康信息，不得抄袭他人版权，不得侵犯他人合法的知识产权，并符合产品命名和工商命名的相关法规要求，具有唯一性和排他性； 3）命名、广告语要易于传播，与行业形象形成关联性，对于企业形象有正面拉动作用。 4、征集方式
请在下方表格提交：你的创意品牌名、产品名、广告语，并阐述创意说明，不限提交次数，注意： 1）先到先得原则，如果参与者的命名、广告语重复，以先提交的人员为准； 2）请参与者在提交创意内容中务必全面而详尽的阐述方案的内涵和寓意。如提交方案中无具体阐述内容，则不能参与征集评选。 5、征集截止时间 2021年12月17日 6、评选方式 由云办公项目经理牵头，组织项目组成员来稿评审，评出获奖作品。 7、奖励方式 最终被采纳的品牌名、产品名、广告语分别可获得500卡路里； 若最终无被采纳的作品，则奖励轮空； 凡是按照征集方式要求提交的参与者，也会有参与奖。`,
    }
  },
  mounted() {
    console.log('this.$route', this.$route)
    console.log(this.$store.state.counter);
  },
}
</script>

<style lang="scss" scoped></style>

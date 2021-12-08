<template>
    <div class="card">
        这是card
        <p>信息名称: {{ info.name }}</p>
        <p>信息内容: {{ info.content }}</p>
        <p>署名: {{ info.username }}</p>
        <p>创建时间: {{ info.creTime }}</p>
    </div>
</template>

<script>
export default {
    props: {
        info: {
            default() {
                return {}
            },
            type: Object
        }
    }
}
</script>

<style scoped>
@import '../assets/css/infoCard.css';
</style>
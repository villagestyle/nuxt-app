<template>
  <div v-loading="loading">
    <el-form ref="form" :model="form" label-width="80px" :rules="rules">
      <el-form-item label="信息名称" prop="name">
        <el-input v-model="form.name"></el-input>
      </el-form-item>

      <el-form-item label="信息内容" prop="content">
        <el-input v-model="form.content"></el-input>
      </el-form-item>

      <el-form-item label="署名" prop="username">
        <el-input v-model="form.username"></el-input>
      </el-form-item>

      <el-button type="primary" @click="onSubmit">立即创建</el-button>
    </el-form>
  </div>
</template>

<script>
import { setInfo } from '../api/base'
export default {
  data() {
    return {
      loading: false,
      form: {
        key: 'PJnt1gv_KN-aOiYshhPT3awWeRvMqARJ9eCz_VR2a6A',
      },
      rules: {
        name: [
          { required: true, message: '请输入信息名称', trigger: 'blur' },
          {
            min: 1,
            max: 20,
            message: '长度在 1 到 20 个字符',
            trigger: 'blur',
          },
        ],
        content: [
          { required: true, message: '请输入信息内容', trigger: 'blur' },
          {
            min: 1,
            max: 20,
            message: '长度在 1 到 50 个字符',
            trigger: 'blur',
          },
        ],
        username: [
          { required: true, message: '请输入署名', trigger: 'blur' },
          {
            min: 1,
            max: 20,
            message: '长度在 1 到 20 个字符',
            trigger: 'blur',
          },
        ],
      },
    }
  },
  methods: {
    onSubmit() {
      console.log('onSubmit')
      this.$refs.form.validate((valid) => {
        if (valid) {
          console.log('success submit')
          this.loading = true
          setInfo(this.form)
            .then(() => {
              this.$message.success('提交成功')
              this.form = {
                key: 'PJnt1gv_KN-aOiYshhPT3awWeRvMqARJ9eCz_VR2a6A',
              }
            })
            .finally(() => {
              this.loading = false
            })
        } else {
          console.log('error submit!!')
          return false
        }
      })
    },
  },
}
</script>

<style lang="scss" scoped></style>

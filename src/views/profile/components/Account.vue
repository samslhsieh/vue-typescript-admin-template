<template>
  <el-form>
    <el-form-item>
      <MaterialInput
        id="user.name"
        v-model="user.name"
        icon="coordinate"
        maxlength="100"
        name="name"
        required
      >
        Name
      </MaterialInput>
    </el-form-item>

    <el-form-item>
      <MaterialInput
        id="user.email"
        v-model="user.email"
        icon="coordinate"
        maxlength="100"
        name="email"
        required
      >
        E-Mail
      </MaterialInput>
    </el-form-item>

    <el-form-item>
      <MaterialInput
        id="user.introduction"
        v-model="user.introduction"
        icon="coordinate"
        maxlength="100"
        name="email"
        required
      >
        Introduction
      </MaterialInput>
    </el-form-item>

    <el-form-item>
      <el-button
        type="primary"
        :disabled="isLoading"
        @click="submit"
      >
        Update
      </el-button>
    </el-form-item>
  </el-form>
</template>

<script lang="ts">
import MaterialInput from '@/components/MaterialInput/index.vue'
import { Component, Prop, Vue } from 'vue-property-decorator'
import { IProfile } from '../index.vue'
import { patchMe } from '@/api/auth'
import { pick } from 'ramda'

@Component({
  name: 'Account',
  components: { MaterialInput }
})
export default class extends Vue {
  @Prop({ required: true }) private user!: IProfile

  isLoading = false
  private async submit() {
    this.isLoading = true
    try {
      const params = pick(['name', 'email', 'introduction'], this.user)

      await patchMe(params)
      this.$message({
        message: 'User information has been updated successfully',
        type: 'success',
        duration: 5 * 1000
      })
    } catch (e) {
      console.log(e)
    }
    this.isLoading = false
  }
}
</script>

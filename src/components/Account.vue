<template>
  <a-form-model layout="inline" :model="form">
    <a-form-model-item label="姓">
      <a-input v-model="form.lastname" />
    </a-form-model-item>
    <a-form-model-item label="名">
      <a-input v-model="form.firstname" />
    </a-form-model-item>
    <a-form-model-item>
      <a-button type="primary" @click="handleSubmit">変更</a-button>
    </a-form-model-item>
  </a-form-model>
</template>

<script>
export default {
  data() {
    return {
      formLayout: "horizontal",
      form: {
        lastname: this.$store.state.user.lastname,
        firstname: this.$store.state.user.firstname
      }
    };
  },
  methods: {
    handleSubmit() {
      const userVal = {
        username: "yamada@uni.edu",
        lastname: this.form.lastname,
        firstname: this.form.firstname
      };
      this.$store.commit("setUser", userVal);
    }
  }
};
</script>
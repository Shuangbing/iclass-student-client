<template>
  <a-upload-dragger
    name="file"
    :multiple="true"
    action="https://www.mocky.io/v2/5cc8019d300000980a055e76"
    @change="handleChange"
  >
    <p class="ant-upload-drag-icon">
      <a-icon type="inbox" />
    </p>
    <p class="ant-upload-text">ファイルをここにDropしてください</p>
    <p class="ant-upload-hint">
      ご提出いただけるフォーマットはWord/Markdown/PDFのみとなります
    </p>
  </a-upload-dragger>
</template>
<script>
  export default {
    data() {
      return {};
    },
    methods: {
      handleChange(info) {
        const status = info.file.status;
        if (status !== 'uploading') {
          return
        }
        if (status === 'done') {
          this.$message.success(`${info.file.name} file uploaded successfully.`);
        } else if (status === 'error') {
          this.$message.error(`${info.file.name} file upload failed.`);
        }
      },
    },
  };
</script>
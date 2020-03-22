<template>
  <div class="subject-list">
    <a-input-search
      placeholder="input search text"
      style="width: 20rem; margin-bottom: 1rem;"
      @search="onSearch"
    />
    <a-spin :spinning="false" tip="読み取り中">
      <a-list :grid="{ gutter: 16, column: 4 }" :dataSource="data">
        <a-list-item slot="renderItem" slot-scope="item">
          <a-card hoverable :title="item.title">
            <div slot="extra">
              <a-button type="primary" icon="arrow-right" size="large" @click="jionClassRoom">入室</a-button>
            </div>
            <p>Card content</p>
            <p>Card content</p>
            <p>Card content</p>
            <p>Card content</p>
          </a-card>
        </a-list-item>
      </a-list>
    </a-spin>
    <a-pagination style="float: right;" :total="50" showLessItems />
  </div>
</template>
<script>
const data = [
  {
    title: "Title 1"
  },
  {
    title: "Title 2"
  },
  {
    title: "Title 3"
  },
  {
    title: "Title 4"
  },
  {
    title: "Title 1"
  }
];
export default {
  data() {
    return {
      data
    };
  },
  methods: {
    jionClassRoom() {
      this.$router.push("/classroom/1000");
    }
  }
};
</script>
<style>
.subject-list {
  overflow: auto;
}
</style>
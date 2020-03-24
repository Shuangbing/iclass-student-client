<template>
  <div class="subject-list">
    <a-row>
      <div style="height: 70vh; overflow: auto">
        <a-input-search
          placeholder="キーワードで教室を検索してください"
          style="width: 20rem; margin-bottom: 1rem;"
        />
        <a-spin :spinning="false" tip="読み取り中">
          <a-list :grid="{ gutter: 16, column: 4 }" :dataSource="data">
            <a-list-item slot="renderItem" slot-scope="item">
              <a-card hoverable :title="item.title">
                <div slot="extra">
                  <a-button type="primary" icon="arrow-right" @click="jionClassRoom">入室</a-button>
                </div>
                <p>Card content</p>
                <p>Card content</p>
                <p>Card content</p>
                <p>Card content</p>
              </a-card>
            </a-list-item>
          </a-list>
        </a-spin>
      </div>
    </a-row>
    <a-row>
      <a-pagination style="float: right;" :total="50" showLessItems position="top" />
    </a-row>
  </div>
</template>
<script>
const data = [
  {
    title: "経済学入門"
  },
  {
    title: "Title 2"
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
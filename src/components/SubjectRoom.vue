<template>
  <div class="hello">
    <div>
      <a-row class="test1">
        <a-col :span="18">
          <a-card hoverable title="経済学入門 [sub12234]" class="monitor">
            <div slot="extra">
              <a-avatar style="margin-right: 1rem" shape="square" size="large" icon="user" />山田先生
            </div>
            <div @click="currentPage ++">
              <pdf
                style="height: 100px"
                src="http://localhost:3000/static/test.pdf"
                :page="currentPage % pageCount"
                @num-pages="pageCount = $event"
                @page-loaded="currentPage = $event"
              ></pdf>
            </div>
          </a-card>
        </a-col>
        <a-col :span="6">
          <div class="messages" id="messages">
            <a-list itemLayout="horizontal" :dataSource="messages">
              <a-list-item slot="renderItem" slot-scope="item">
                <a-list-item-meta :description="item.msg">
                  <a slot="title">{{item.title}}</a>
                  <a-avatar slot="avatar" style="color: #f56a00; backgroundColor: #fde3cf">Y</a-avatar>
                </a-list-item-meta>
              </a-list-item>
            </a-list>
          </div>
          <div class="message-input">
            <a-input-search placeholder="質問を入力してください" @search="sendMessage" enterButton="送信" />
          </div>
        </a-col>
      </a-row>
      <a-row>
        <a-col :span="6">
          <a-statistic title="オンライン" :value="129">
            <template v-slot:suffix>
              <a-badge dot>
                <a-icon type="user" />
              </a-badge>
            </template>
          </a-statistic>
        </a-col>
      </a-row>
    </div>
  </div>
</template>

<script>
import pdf from "vue-pdf";

const messages = [
  {
    title: "山田A",
    msg: "test1~"
  },
  {
    title: "山田B",
    msg: "test1~"
  },
  {
    title: "山田C",
    msg: "test1~"
  }
];

export default {
  name: "SubjectRoom",
  components: { pdf },
  props: {
    msg: String
  },
  data() {
    return {
      currentPage: 1,
      pageCount: 0,
      messages
    };
  },
  methods: {
    refreshMessageDiv() {
      var div = document.getElementById("messages");
      div.scrollTop = div.scrollHeight - 10;
    },
    sendMessage(value) {
      this.messages.push({
        title: "ABC1",
        msg: value
      });
      this.refreshMessageDiv();
    }
  }
};
</script>

<style>
.monitor {
  overflow: scroll;
  background-color: #333;
  height: 60vh;
}
.messages {
  margin: 0 1rem;
  padding: 8px 24px;
  height: 55vh;
  overflow: scroll;
  border: 1px solid #e8e8e8;
  border-radius: 4px;
}
.message-input {
  height: 20px;
  margin: 20px 1rem;
}
</style>

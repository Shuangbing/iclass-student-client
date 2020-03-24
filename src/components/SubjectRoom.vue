<template>
  <div class="hello">
    <div>
      <a-row>
        <a-col :span="16">
          <a-card hoverable title="経済学入門 [sub12234]" class="monitor">
            <div slot="extra">
              <a-statistic title="オンライン" :value="serverInfo.online">
                <template v-slot:suffix>
                  <a-icon type="user" />
                </template>
              </a-statistic>
            </div>
            <div @click="currentPage ++" style="text-align: center;">
              <pdf
                style="text-align: center; max-width: 50vw"
                src="https://staging-chat-iclass-edu.herokuapp.com/static/test.pdf"
                :page="currentPage % pageCount"
                @num-pages="pageCount = $event"
                @page-loaded="currentPage = $event"
              ></pdf>
            </div>
          </a-card>
        </a-col>
        <a-col :span="8">
          <div class="chatroom">
            <div class="messages">
              <a-list
                id="message-list"
                :dataSource="comments"
                :header="`メッセージ`"
                itemLayout="horizontal"
                :loading="!chatConnect"
              >
                <a-list-item slot="renderItem" slot-scope="item">
                  <a-comment
                    :author="item.author"
                    :content="item.content"
                    :datetime="moment(item.timestamp).format('HH:mm:ss')"
                  >
                    <a-avatar slot="avatar">{{item.author}}</a-avatar>
                  </a-comment>
                </a-list-item>
              </a-list>
            </div>
            <div class="message-input">
              <a-comment>
                <a-avatar slot="avatar">{{user.lastname}}</a-avatar>
                <div slot="content">
                  <a-form-item>
                    <a-textarea
                      :rows="4"
                      @change="handleChange"
                      :value="value"
                      allowClear
                      style="resize: none"
                      maxlength="150"
                    ></a-textarea>
                  </a-form-item>
                  <a-form-item>
                    <a-button
                      :loading="submitting"
                      icon="message"
                      @click="handleSubmit"
                      type="primary"
                      size="small"
                    >送信</a-button>
                    <a-button
                      type="danger"
                      icon="to-top"
                      size="small"
                      :style="{ marginLeft: '8px' }"
                    >挙手</a-button>
                  </a-form-item>
                </div>
              </a-comment>
            </div>
          </div>
        </a-col>
      </a-row>
      <a-row>
        <a-col :span="6"></a-col>
      </a-row>
    </div>
  </div>
</template>

<script>
import pdf from "vue-pdf";
import io from "socket.io-client";
import moment from "moment";

export default {
  name: "SubjectRoom",
  components: { pdf },
  props: {
    msg: String
  },
  data() {
    return {
      serverInfo: {},
      freshTimer: "",
      chatConnect: false,
      user: this.$store.state.user,
      comments: [],
      submitting: false,
      value: "",
      currentPage: 1,
      pageCount: 0,
      socket: io("https://staging-chat-iclass-edu.herokuapp.com/"),
      moment
    };
  },
  methods: {
    async handleSubmit() {
      if (!this.value) return;

      this.submitting = true;
      const messageVal = {
        author: this.user.lastname,
        content: this.value,
        timestamp: Date.now()
      };

      await this.socket.emit("sendMessage", messageVal);
      this.value = "";
      this.comments.unshift(messageVal);
      this.submitting = false;
    },
    handleChange(e) {
      this.value = e.target.value;
    },
    refreshServerInfo() {
      this.socket.emit("getServerInfo");
    }
  },
  mounted() {
    this.freshTimer = setInterval(this.refreshServerInfo, 5000);
    this.socket.on("connect", () => {
      this.chatConnect = true;
    });
    this.socket.on("reciveMessage", data => {
      this.comments.unshift(data);
      this.$sound("notify");
    });
    this.socket.on("reciveServerInfo", data => {
      this.serverInfo = data;
    });
    this.socket.on("disconnect", () => {
      this.chatConnect = false;
    });
  },
  beforeDestroy() {
    this.socket.disconnect();
    clearInterval(this.freshTimer);
  }
};
</script>

<style>
.monitor {
  overflow: scroll;
  max-height: 60vh;
}
.chatroom {
  margin-left: 1rem;
  height: 60vh;
}
.messages {
  margin: 0 1rem;
  height: 40vh;
  overflow: auto;
}
.messages #message-list {
  overflow: hidden;
  word-wrap: break-word;
  word-break: break-all;
}
.message-input {
  height: 20vh;
  margin: 0.5rem 1rem;
}
</style>

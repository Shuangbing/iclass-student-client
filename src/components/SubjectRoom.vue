<template>
  <div class="hello">
    <div>
      <a-row :gutter="[16,24]">
        <a-col :span="16">
          <a-card hoverable title="経済学入門 [sub12234]" class="monitor">
            <div slot="extra">
              <a-statistic title="オンライン" :value="129">
                <template v-slot:suffix>
                  <a-icon type="user" />
                </template>
              </a-statistic>
            </div>
            <div @click="currentPage ++" style="text-align: center;">
              <pdf
                style="text-align: center; max-width: 50vw"
                src="http://localhost:3000/static/test.pdf"
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
                :locale="test"
              >
                <a-list-item slot="renderItem" slot-scope="item">
                  <a-comment
                    :author="item.author"
                    :content="item.content"
                    :datetime="item.datetime"
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
      <a-row :gutter="[16,24]">
        <a-col :span="6">
          <a-statistic-countdown
            title="経過時間"
            :value="Date.now() + 1000 * 60 * 60 * 24 * 2 + 1000 * 30"
            format="HH:mm:ss"
            style="margin-top: 20px; margin-right: 50px"
          />
        </a-col>
      </a-row>
    </div>
  </div>
</template>

<script>
import pdf from "vue-pdf";
import moment from "moment";

export default {
  name: "SubjectRoom",
  components: { pdf },
  props: {
    msg: String
  },
  data() {
    return {
      user: this.$store.state.user,
      comments: [],
      submitting: false,
      value: "",
      moment,
      currentPage: 1,
      pageCount: 0,
      test: {
        emptyText: "暂无数据"
      }
    };
  },
  methods: {
    handleSubmit() {
      if (!this.value) {
        return;
      }

      this.submitting = true;

      setTimeout(() => {
        this.submitting = false;
        this.comments = [
          {
            author: this.user.lastname,
            content: this.value,
            datetime: moment().fromNow()
          },
          ...this.comments
        ];
        this.value = "";
      }, 1000);
    },
    handleChange(e) {
      this.value = e.target.value;
    }
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
  height: 60vh;
  overflow: scroll;
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

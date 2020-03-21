<template>
  <div class="home">
    <SubjectRoom />
  </div>
</template>

<script>
// @ is an alias to /src
import SubjectRoom from "@/components/SubjectRoom.vue";

export default {
  name: "Home",
  components: {
    SubjectRoom
  }
};
</script>

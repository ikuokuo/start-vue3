<template>
  <div>
    <h1>This is a setting page</h1>
    <p>store count is: {{ count }}</p>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "Setting",
  computed: {
    count() {
      return this.$store.state.count;
    },
  },
});
</script>

<template>
  <h1>{{ msg }}</h1>
  <button @click="clickCount">count is: {{ count }}</button>
  <p>
    Edit <code>components/HelloWorld.vue</code> to test hot module replacement.
  </p>
</template>

<script>
export default {
  name: "HelloWorld",
  props: {
    msg: {
      type: String,
      default: "",
    },
  },
  computed: {
    count() {
      return this.$store.state.count;
    },
  },
  methods: {
    clickCount() {
      this.$store.dispatch("increment");
    },
  },
};
</script>

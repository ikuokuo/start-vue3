<template>
  <a-row type="flex">
    <a-col style="flex-grow: 1">
      <a-row class="app-logo" type="flex" align="middle" justify="center">
        <a-col>
          <img class="logo-icon" :src="logo" />
        </a-col>
        <a-col>
          <div v-if="show" class="logo-title ml-2">Start Vue 3</div>
        </a-col>
      </a-row>
    </a-col>
    <a-col>
      <a-divider type="vertical" :style="{ height: '48px', margin: '8px 0' }" />
    </a-col>
  </a-row>
</template>

<script lang="ts">
import { defineComponent, PropType, ref, watch } from "vue";

import logo from "/@/assets/logo.png";

export default defineComponent({
  name: "Logo",
  props: {
    showTitle: {
      type: Boolean as PropType<boolean>,
      default: true,
    },
  },
  setup(props) {
    const showRef = ref<boolean>(!!props.showTitle);
    watch(
      () => props.showTitle,
      (show: boolean) => {
        if (show) {
          window.setTimeout(() => {
            showRef.value = show;
          }, 200);
        } else {
          showRef.value = show;
        }
      }
    );
    return {
      logo,
      show: showRef,
    };
  },
});
</script>

<style lang="scss">
.app-logo {
  cursor: pointer;
  height: 64px;

  .logo-icon {
    height: 32px;
  }

  .logo-title {
    font-size: 16px;
  }
}
</style>

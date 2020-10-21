<template>
  <div class="app-logo ma-2">
    <img class="logo-icon" :src="logo" />
    <div v-if="show" class="logo-title ml-2">Vue 3</div>
  </div>
</template>

<script lang="ts">
import { defineComponent, PropType, ref, watch } from 'vue';

import logo from '/@/assets/logo.png';

export default defineComponent({
  name: 'Logo',
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
    }
  },
});
</script>

<style lang="scss">
.app-logo {
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;

  .logo-icon {
    height: 32px;
  }

  .logo-title {
    font-size: 16px;
    color: white;
  }
}
</style>

import { Store } from "vuex";

declare module "@vue/runtime-core" {
  export interface ComponentCustomProperties {
    $store: Store<any>;
  }
}

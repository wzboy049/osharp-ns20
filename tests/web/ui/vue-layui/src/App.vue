<template>
  <div id="app">
    <lay-admin>
      <app-header></app-header>
      <app-nav></app-nav>
      <lay-body>
        <div class="layui-main site-demo-body">
          <router-view/>
        </div>
      </lay-body>
      <app-footer></app-footer>
    </lay-admin>
  </div>
</template>
<script lang="ts">
import Vue from "vue";
import AppHeader from "./layout/header.vue";
import AppNav from "./layout/nav.vue";
import AppFooter from "./layout/footer.vue";

export default Vue.extend({
  components: {
    "app-header": AppHeader,
    "app-nav": AppNav,
    "app-footer": AppFooter
  }
});
</script>

<style lang="scss">
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
#nav {
  padding: 30px;
  a {
    font-weight: bold;
    color: #2c3e50;
    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
</style>

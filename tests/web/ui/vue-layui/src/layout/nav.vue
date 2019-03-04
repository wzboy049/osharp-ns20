<template>
  <lay-side>
    <lay-menu :default-openeds="[0, 1, 2]">
      <lay-menu-item v-for="(item, index) in menus" :key="index" :index="index">
        <template slot="title">
          <span>{{item.text}}</span>
        </template>
        <lay-menu-child-item
          v-if="item.submenus!=null"
          v-for="(subItem, index2) in item.submenus"
          :key="index2"
          :title="subItem.text"
          :to="{name: subItem.name}"
        ></lay-menu-child-item>
      </lay-menu-item>
    </lay-menu>
  </lay-side>
</template>

<script lang="ts">
import { IMenuItem, menuItems } from "./nav.menus";

export default {
  data() {
    return {
      menus: []
    };
  },

  mounted() {
    this.menus = menuItems;
  }
};
</script>

<style scoped>
</style>
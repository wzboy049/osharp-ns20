<template>
  <lay-side>
    <lay-menu :default-openeds="[0, 1, 2]">
      <lay-menu-item :index="0">
        <template slot="title">
          <span>快速开始</span>
        </template>
        <lay-menu-child-item title="首页" :to="{name: 'home'}"></lay-menu-child-item>
        <lay-menu-child-item title="关于vue-layui" :to="{name: 'about'}"></lay-menu-child-item>
      </lay-menu-item>
      <lay-menu-item :index="1">
        <template slot="title">
          <span>布局</span>
        </template>
        <lay-menu-child-item title="栅格" :to="{name: 'grid'}"></lay-menu-child-item>
        <lay-menu-child-item title="后台布局" :to="{name: 'admin'}"></lay-menu-child-item>
      </lay-menu-item>
      <lay-menu-item :index="2">
        <template slot="title">
          <span>基本元素</span>
        </template>
        <lay-menu-child-item title="按钮" :to="{name: 'button'}"></lay-menu-child-item>
        <lay-menu-child-item title="表单" :to="{name: 'form'}"></lay-menu-child-item>
        <lay-menu-child-item title="导航/面包屑" :to="{name: 'nav'}"></lay-menu-child-item>
        <lay-menu-child-item title="选项卡" :to="{name: 'tabs'}"></lay-menu-child-item>
        <lay-menu-child-item title="进度条" :to="{name: 'progress'}"></lay-menu-child-item>
        <lay-menu-child-item title="面板" :to="{name: 'panel'}"></lay-menu-child-item>
        <lay-menu-child-item title="徽章" :to="{name: 'badge'}"></lay-menu-child-item>
        <lay-menu-child-item title="时间线" :to="{name: 'timeline'}"></lay-menu-child-item>
        <lay-menu-child-item title="静态表格" :to="{name: 'table'}"></lay-menu-child-item>
        <lay-menu-child-item title="动画" :to="{name: 'animation'}"></lay-menu-child-item>
        <lay-menu-child-item title="辅助元素" :to="{name: 'auxiliar'}"></lay-menu-child-item>
      </lay-menu-item>
      <lay-menu-item :index="3">
        <template slot="title">
          <span>组件示例</span>
        </template>
        <lay-menu-child-item title="弹出层" :to="{name: 'layer'}"></lay-menu-child-item>
        <lay-menu-child-item title="分页" :to="{name: 'laypage'}"></lay-menu-child-item>
        <lay-menu-child-item title="颜色选择器" :to="{name: 'colorPicker'}"></lay-menu-child-item>
        <lay-menu-child-item title="滑块" :to="{name: 'slider'}"></lay-menu-child-item>
        <lay-menu-child-item title="评分" :to="{name: 'rate'}"></lay-menu-child-item>
        <lay-menu-child-item title="轮播" :to="{name: 'carousel'}"></lay-menu-child-item>
      </lay-menu-item>
    </lay-menu>
  </lay-side>
</template>

<script>
export default {};
</script>

<style scoped>
</style>
<template>
  <div class="Menu">
    <el-row class="tac">
      <el-col :span="24">
        <el-menu
          default-active="2"
          class="el-menu-vertical-demo"
          @open="handleOpen"
          @close="handleClose"
          router
        >
          <el-submenu index="1">
            <template slot="title">
              <i class="el-icon-s-platform"></i>
              <span>设备管理</span>
            </template>
            <el-menu-item-group>
              <el-menu-item index="/InsertList">显示屏-01</el-menu-item>
            </el-menu-item-group>
          </el-submenu>
          <el-submenu index="2">
            <template slot="title">
              <i class="el-icon-menu"></i>
              <span>设备查询</span>
            </template>
            <el-menu-item-group>
              <el-menu-item index="/SeekInfo">选项1</el-menu-item>
            </el-menu-item-group>
          </el-submenu>
          <el-menu-item index="3">
            <i class="el-icon-document-copy"></i>
            <span slot="title">管理信息</span>
          </el-menu-item>
        </el-menu>
      </el-col>
    </el-row>
  </div>
</template>

<script>
export default {
  name: "Menu",
  data() {
    return {};
  },
  methods: {
    handleOpen(key, keyPath) {
      console.log(key, keyPath);
    },
    handleClose(key, keyPath) {
      console.log(key, keyPath);
    },
  },
};
</script>

<style scoped>
Menu {
  width: 100%;
  height: 100%;
}
</style>
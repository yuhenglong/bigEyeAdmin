<template>
  <div class="dashboard">
    <el-container>
      <el-header>
        <img alt="logo" src="../assets/logo.png" class="logo" />
        <span>大眼猫科技设备后台</span>
      </el-header>
      <el-container>
        <el-aside width="200px"><Menu /></el-aside>
        <el-container>
          <el-main>
            <router-view></router-view>
          </el-main>
          <el-footer>Footer</el-footer>
        </el-container>
      </el-container>
    </el-container>
  </div>
</template>

<script>
import Menu from "@/components/Menu.vue";
export default {
  name: "dashboard",
  components: { Menu },
  data() {
    return {};
  },
  methods: {},
};
</script>

<style scoped>
.dashboard {
  width: 100%;
  height: 100%;
}

.el-header,
.el-footer {
  background-color: #b3c0d1;
  color: #333;
  text-align: center;
  line-height: 60px;
}
.el-header {
  line-height: 55px;
  overflow: hidden;
}
.el-header * {
  text-align: center;
}
.el-header span {
  color: #fff;
  line-height: 50px;
  font-size: 22px;
}
.el-aside {
  background-color: #d3dce6;
  color: #333;
  text-align: center;
  line-height: 200px;
}

.dashboard .el-main {
  background-color: #e9eef3;
  color: #333;
  text-align: center;
  line-height: 160px;
}

body > .el-container {
  margin-bottom: 40px;
}
.el-container {
  height: 100%;
}
.el-container:nth-child(5) .el-aside,
.el-container:nth-child(6) .el-aside {
  line-height: 100%;
}

.el-container:nth-child(7) .el-aside {
  line-height: 320px;
}
.logo {
  margin-top: 1px;
  height: 58px;
  width: auto;
  float: left;
}
</style>

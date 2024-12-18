<script setup>
import Aside from '../components/AsideView.vue'
import Header from '../components/HeaderView.vue'
import Main from '../components/MainView.vue'

</script>


<template>
  <el-container class="layout-container-demo" style="height: auto;width: auto">
    <el-aside width="200px">
      <Aside/>
    </el-aside>

    <el-container>
      <el-header style="text-align: right; font-size: 12px">
        <Header/>
      </el-header>

      <el-main>
        <Main/>
      </el-main>
    </el-container>
  </el-container>
</template>

<style scoped>
.layout-container-demo .el-header {
  position: relative;
  background-color: var(--el-color-primary-light-7);
  color: var(--el-text-color-primary);
}

.layout-container-demo .el-aside {
  color: var(--el-text-color-primary);
  background: var(--el-color-primary-light-8);
}

.layout-container-demo .el-menu {
  border-right: none;
}

.layout-container-demo .el-main {
  padding: 0;
}

.layout-container-demo .toolbar {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  height: 100%;
  right: 20px;
}
</style>




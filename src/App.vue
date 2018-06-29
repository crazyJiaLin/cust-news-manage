<template>
  <div id="app">
    <el-container>
      <el-header>CUST-NEWS</el-header>
      <el-container>
        <el-aside width="200px">
          <Nav></Nav>
        </el-aside>
        <el-main>
          <transition name="el-fade-in">
            <router-view></router-view>
          </transition>
        </el-main>
      </el-container>
    </el-container>
  </div>
</template>

<script>
import Nav from './components/nav/nav.vue'
export default {
  components : {
    Nav
  },
  name: 'App',
  mounted(){
    
  }
}
</script>

<style>
*{
  margin: 0;
  padding: 0;
  list-style: none;
  text-decoration: none;
}
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  width: 100vw;
  height: 100vh;
  overflow: hidden;
}
.el-container{
  width: 100%;
  height: 100%;
  display: flex;
}
.el-header {
    background-color: #B3C0D1;
    color: #333;
    text-align: center;
    height: 50px !important;
    line-height: 50px;
    font-size: 20px;
  }
  
  .el-aside {
    width: 180px !important;
    background-color: #545c64;
    color: #333;
    text-align: center;
  }
  
  .el-main {
    background-color: #E9EEF3;
    color: #333;
    text-align: center;
    padding: 10px;
  }
  .router-view-wrapper{
      height: 100%;
      overflow: auto;
      text-align: left;
  }
  ::-webkit-scrollbar {
      width: 5px;
      height: 5px;
  }
  
  ::-webkit-scrollbar-track-piece {
      background-color: rgba(0, 0, 0, 0.2);
      -webkit-border-radius: 6px;
  }
  
  ::-webkit-scrollbar-thumb:vertical {
      height: 5px;
      background-color: rgba(125, 125, 125, 0.7);
      -webkit-border-radius: 6px;
  }
  
  ::-webkit-scrollbar-thumb:horizontal {
      width: 5px;
      background-color: rgba(125, 125, 125, 0.7);
      -webkit-border-radius: 6px;
  }
</style>

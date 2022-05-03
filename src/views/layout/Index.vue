<template>
  <el-container class="layout-container">
    <el-header>
      <div>
        <div>
          <img src="../../assets/img/layout/logo.webp" alt="" />
        </div>
        <span>看书后台管理系统</span>
      </div>
      <el-button type="info" @click="logout">退出</el-button>
    </el-header>
    <el-container>
      <el-aside :width="isCollapse ? '64px' : '200px'">
        <div class="toggle-button" @click="toggleCollapse">|||</div>
        <el-menu
          background-color="#333744"
          text-color="#fff"
          active-text-color="#409EFF"
          :unique-opened="true"
          :collapse="isCollapse"
          :collapse-transition="false"
          :router="true"
          :default-active="activePath"
        >
          <!-- 一级菜单 -->
          <el-submenu
            :index="item.id.toString()"
            v-for="item in menuList"
            :key="item.id"
          >
            <!-- 一级菜单模板 -->
            <template slot="title">
              <i :class="iconsObj[item.id]"></i>
              <span>{{ item.authName }}</span>
            </template>
            <!-- 二级菜单 -->
            <el-menu-item
              :index="'/' + subItem.path"
              v-for="subItem in item.children"
              :key="subItem.id"
            >
              <template slot="title">
                <i class="el-icon-menu"></i>
                <span>{{ subItem.authName }}</span>
              </template>
            </el-menu-item>
          </el-submenu>
        </el-menu>
      </el-aside>
      <el-main>
        <router-view></router-view>
      </el-main>
    </el-container>
  </el-container>
</template>

<script>
export default {
  name: "Index",
  data(){
    return {
      menuList: [],
      iconsObj: {},
      isCollapse: false,
      activePath: ''
    }
  },
  created(){
    // 获取列表数据
    this.getData()
  },
  methods:{
    async getData(){
      const { data: res } = await this.$axios.get("http://localhost:3000/menuList")
      if(res.status !== 200) return ;
      this.menuList = res.list
      this.iconsObj = res.iconsObj
    },
    logout(){
      this.$router.replace('/')
    },
    toggleCollapse(){
      this.isCollapse = !this.isCollapse;
    }
  }
};
</script>

<style lang="less" scoped>
.layout-container {
  height: 100%;
}
.el-header {
  background-color: rgb(47, 102, 34);
  display: flex;
  align-content: center;
  justify-content: space-between;
  padding-left: 0;
  color: #fff;
  font-size: 20px;
  div {
    display: flex;
    align-items: center;
    div {
      width: 56px;
      height: 56px;
      border-radius: 50%;
      overflow: hidden;
      img {
        width: 100%;
        height: 100%;
      }
    }
    span {
      margin-left: 15px;
    }
  }
}
.el-aside {
  background-color: #333744;
  .el-menu{
      border-right: none;
  }
}
.el-main {
  background-color: #eaedf1;
}
.iconfont{
    margin-right: 10px;
}
.toggle-button{
    background-color: #4A5064;
    font-size: 10px;
    line-height: 24px;
    color: #fff;
    text-align: center;
    letter-spacing: 0.2em;
    cursor: pointer;
}
</style>
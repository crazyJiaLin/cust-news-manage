<template>
    <div>
        <el-menu
        default-active="2"
        class="el-menu-vertical-demo"
        @open="handleOpen"
        @close="handleClose"
        background-color="#545c64"
        active-text-color="#ffd04b">
            <router-link class="aside-router-link" to="/newslist">
                <el-menu-item index="0">
                    <i class="el-icon-tickets"></i>
                    <span slot="title">
                        新闻列表
                    </span>
                </el-menu-item>      
            </router-link>
            <router-link class="aside-router-link" to="/addnews">
                <el-menu-item index="1">
                    <i class="el-icon-plus"></i>
                    <span slot="title">
                        创建新闻
                    </span>
                </el-menu-item>      
            </router-link>
        </el-menu>
    </div>
</template>

<script>
    export default{
        data(){
            return {
                navList : [
                    {key:0,title:'添加新闻',path:'/addnews'}
                ]
            }
        },
        methods:{
            handleOpen(key, keyPath) {
                console.log(key, keyPath);
            },
            handleClose(key, keyPath) {
                console.log(key, keyPath);
            }
        },
        mounted(){
        }
    }
</script>

<style>
    .el-menu{
        width: 100%;
    }
    .el-menu-vertical-demo .el-menu-item{
        /* color: #fff; */
        font-size: 16px;
    }
    .aside-router-link{
        display: block;
        width: 100%;
    }
    .aside-router-link span{
         color: #ddd;
    }
    .aside-router-link.router-link-active span{
         color: #fff;
    }
</style>

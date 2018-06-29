<template>
    <div class="router-view-wrapper">
        <div class="add-news-info-wrapper">
            <el-form ref="form" :model="newsInfo" label-width="90px" label-position="left">
                <el-row>
                    <el-col :span="14">
                        <el-form-item label="新闻标题：">
                            <el-input v-model="newsInfo.title" placeholder="请输入新闻标题"></el-input>
                        </el-form-item>
                    </el-col>
                    <el-col :span="6" :offset="3">
                        <el-form-item label="新闻标题：" label-width="90px">
                            <el-select v-model="newsInfo.sort" placeholder="请选择">
                                <!-- <el-option v-for="(item, key) in newsSortList" :label="item.label" :value="item.value"></el-option> -->
                            </el-select>
                        </el-form-item>
                    </el-col>
                </el-row>
            </el-form>
            <el-row>
                <el-col :span="2">新闻封面</el-col>
                <el-col :span="4" :offset="1">
                    <div @click="chooseImage" class="news-icon-wrapper" v-html="newsIconHtml"></div>
                    <input @change="imageChange($event)" id="image-choose-input" type="file" accept="image/*">
                </el-col>
               
            </el-row>
        </div>
        <div class="add-editor-wrapper">
            <div class="edior-label">新闻内容</div>
            <div id="editor"></div>
        </div>
        <div class="finish-wrapper">
             <el-button @click="clearNewsInfo">清空</el-button>
            <el-button @click="publishNews" type="primary">发布新闻</el-button>
        </div>
    </div>
</template>

<script>
    import './add-news.css'
    import E from 'wangeditor'

    export default{
        data(){
            return {
                editor : null,
                newsIconHtml : '<span>点击上传封面</span>',
                newsSortList : [
                    {label:'推荐',value:'推荐'},
                    {label:'热点',value:'热点'},
                    {label:'本地',value:'本地'},
                    {label:'世界杯',value:'世界杯'},
                    {label:'新时代',value:'新时代'},
                    {label:'娱乐',value:'娱乐'},
                    {label:'综艺',value:'综艺'}
                ],
                newsInfo:{
                    title : '',
                    sort : '',
                    iconPath : '',
                    content : '',
                    base : ''
                }
            }
        },
        methods : {
            publishNews(){
                let that = this;
                let content =  that.editor.txt.html();
                let base = that.editor.txt.text();
            },
            chooseImage($event){
                let fileNode = document.getElementById('image-choose-input');
                let evt = new MouseEvent('click',{
                    bubbles : false,
                    cancelable :  true,
                    view : window
                });
                fileNode.dispatchEvent(evt);
            },
            imageChange($event){
                let that = this;
                 var file = $event.target.files[0];
                 if(!file){
                     return;
                 }
                this.newsIconHtml = '<span><i class="el-icon-loading"></i> 上传中</span>';
                let formData=new FormData();
                formData.append("file",file);
                that.$axios.post(
                    window.fileReqUrl+'/file/upload',
                    formData
                ).then(function(res){
                    let data = res.data;
                    if(data.code == 1){
                        that.$message({
                            type : 'success',
                            message : '上传成功'
                        });
                        that.newsIconHtml = '<img src="'+ data.value +'" alt="">';
                        that.newsInfo.iconPath = data.value;
                    }else{
                        that.$message.error(data.message);
                    }
                }).catch(function(err){
                     that.$message.error('服务器开小差了~稍后重试 ^8^');
                });
            },
            clearNewsInfo(){
                
                this.newsIconHtml = '<span>点击上传封面</span>';
                this.newsInfo.title = '';
                this.newsInfo.sort = '';
                this.editor.txt.clear();
            }
        },
        mounted() {
            this.editor = new E('#editor');
            this.editor.customConfig.uploadImgServer = 'http://www.sharismspace.com/file_server-0.0.1-SNAPSHOT/file/upload/';
            this.editor.create();
        },
        destroyed(){

        }
    }
</script>

<style>
    .w-e-text{
        background: #fff;
    }
</style>



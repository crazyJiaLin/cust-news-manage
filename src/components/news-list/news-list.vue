<template>
    <div class="router-view-wrapper">
        <div class="news-list-wrapper">
            <el-table :data="tableData"  height="100%" border style="width: 100%">
                <el-table-column sortable fixed show-overflow-tooltip prop="title" label="新闻标题" width="220"> </el-table-column>
                <el-table-column sortable fixed show-overflow-tooltip prop="sort" label="新闻分类" width="150"> </el-table-column>
                <el-table-column resizable show-overflow-tooltip prop="base" label="新闻内容" > </el-table-column>
                <el-table-column sortable show-overflow-tooltip prop="createDate" label="创建日期" width="150"> </el-table-column>
                <el-table-column fixed="right" label="操作" width="220">
                    <template slot-scope="scope">
                        <el-button @click="handleClick(scope.row)" size="mini">查看</el-button>
                        <el-button @click="showEditNews=true" size="mini" >编辑</el-button>
                        <el-button @click="deleteNews(scope.row)" type="danger" size="mini">删除</el-button>
                    </template>
                </el-table-column>
            </el-table>
        </div>

        <!-- 编辑新闻对话框 -->
        <el-dialog title="编辑新闻" :visible.sync="showEditNews" width="80%" @open="openEditNewsWrapper">
            <el-form :model="editNewsInfo" size="small" label-position="left">
                <el-row>
                    <el-col :span="10">
                        <el-form-item label="新闻标题" :label-width="'90px'">
                            <el-input v-model="editNewsInfo.title" auto-complete="off"></el-input>
                        </el-form-item>
                    </el-col>
                    <el-col :span="10" :offset="2">
                       <el-form-item label="新闻分类" :label-width="'90px'">
                            <el-select v-model="editNewsInfo.sort" placeholder="请选择活动区域">
                                <el-option label="区域一" value="shanghai"></el-option>
                                <el-option label="区域二" value="beijing"></el-option>
                            </el-select>
                        </el-form-item>
                    </el-col>
                </el-row>
                <el-row>
                    <el-col :span="2">新闻封面</el-col>
                    <el-col :span="4" :offset="1">
                        <div @click="chooseImage" class="news-icon-wrapper" v-html="newsIconHtml"></div>
                        <input @change="imageChange($event)" id="image-choose-input" type="file" accept="image/*">
                    </el-col>
                </el-row>
                
            </el-form>
            <div class="editor-wrapper">
                <div id="editor"></div>
            </div>
            <span slot="footer" class="dialog-footer">
                <el-button @click="dialogVisible = false">取 消</el-button>
                <el-button type="primary" @click="dialogVisible = false">确 定</el-button>
            </span>
        </el-dialog>

         <el-dialog title="新闻详情" :visible.sync="showNews" width="80%" @open="openShowNewsWrapper">
            <h2 class="news-title">{{showNewsTestInfo.title}}</h2>
            <div class="show-news-info-wrapper">
                <div class="show-info-left-wrapper">
                    <el-tag>{{showNewsTestInfo.sort}}</el-tag>
                    <span>作者 ： {{showNewsTestInfo.author}}</span>
                </div>
                <div class="show-info-right-wrapper">
                    <span>发布时间 ： {{showNewsTestInfo.createDate}}</span>
                </div>
            </div>
             <div class="news-content-wrapper" v-html="showNewsTestInfo.content"></div>
        </el-dialog>
    </div>
</template>

<script>
    import './news-list.css'
    import E from 'wangeditor'
    export default{
        data(){
            return {
                editor : null,
                showEditNews : false,
                showNews : false,
                newsIconHtml : '<span>点击上传封面</span>',
                editNewsInfo : {
                    title : '新闻标题',
                    sort : '新闻分类'
                },
                showNewsTestInfo : {
                    title : '测试新闻标题',
                    sort : '推荐',
                    base : '这里是新闻呢base',
                    content : '这里是新闻内容哦嗯',
                    iconPath : '',
                    createDate : '2018-6-28',
                    author : 'cjl'
                },
                tableData: [
                    {
                        title : '新闻标题1新闻标题1新闻标题1新闻标题1',
                        sort : '热点',
                        createDate: '2016-05-03',
                        base: '这是新闻内容内容',
                    },{
                        title : '新闻标题1',
                        sort : '推荐',
                        createDate: '2016-05-03',
                        base: '这是新闻内容内容',
                    },{
                        title : '新闻标题1',
                        sort : '推荐',
                        createDate: '2016-05-03',
                        base: '这是新闻内容内容',
                    },{
                        title : '新闻标题1',
                        sort : '推荐',
                        createDate: '2016-05-03',
                        base: '这是新闻内容内容',
                    },{
                        title : '新闻标题1',
                        sort : '推荐',
                        createDate: '2016-05-03',
                        base: '这是新闻内容内容',
                    },{
                        title : '新闻标题1',
                        sort : '推荐',
                        createDate: '2016-05-03',
                        base: '这是新闻内容内容',
                    },{
                        title : '新闻标题1',
                        sort : '推荐',
                        createDate: '2016-05-03',
                        base: '这是新闻内容内容',
                    },{
                        title : '新闻标题1',
                        sort : '推荐',
                        createDate: '2016-05-03',
                        base: '这是新闻内容内容',
                    },{
                        title : '新闻标题1',
                        sort : '推荐',
                        createDate: '2016-05-03',
                        base: '这是新闻内容内容',
                    },{
                        title : '新闻标题1',
                        sort : '推荐',
                        createDate: '2016-05-03',
                        base: '这是新闻内容内容',
                    },{
                        title : '新闻标题1',
                        sort : '推荐',
                        createDate: '2016-05-03',
                        base: '这是新闻内容内容',
                    },{
                        title : '新闻标题1',
                        sort : '推荐',
                        createDate: '2016-05-03',
                        base: '这是新闻内容内容',
                    },{
                        title : '新闻标题1',
                        sort : '推荐',
                        createDate: '2016-05-03',
                        base: '这是新闻内容内容',
                    }
                ]
            }
            
        },
        methods : {
            deleteNews(row){
                console.log(row);
                this.$confirm('确认删除本条新闻?', '提示', {
                    confirmButtonText: '确定',
                    cancelButtonText: '取消',
                    type: 'warning'
                }).then(() => {
                    this.$message({
                        type: 'success',
                        message: '删除成功!'
                    });
                }).catch(() => {
                    this.$message({
                        type: 'info',
                        message: '已取消删除'
                    });          
                });
            },
            openShowNewsWrapper(){  //打开查看新闻对话框前的回调
                console.log('查看新闻');
            },
            openEditNewsWrapper(){  //打开编辑新闻对话框前的函数调用
                let that = this;
                if(!that.editor){
                    let timer = setTimeout(() => {
                        that.editor = new E('#editor');
                        that.editor.customConfig.uploadImgServer = 'http://www.sharismspace.com/file_server-0.0.1-SNAPSHOT/file/upload/';
                        that.editor.create();
                    }, 1000);
                }
               
        
            },
            handleClick(row) {
                console.log(row);
                this.showNews = true;
            },
            closeEditNews(){

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
        },
        mounted(){
           
        }
    }
</script>

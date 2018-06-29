// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'

import {
  Row,  Col,  Button, Tag,
  Notification,  Message, MessageBox,
  Container,  Aside,  Header,  Main,
  Table,  TableColumn, Dialog,
  Form,  FormItem, 
  Input, Select, Option,
  Menu,Submenu,MenuItemGroup,MenuItem,
} from 'element-ui'  //按需引用element-ui组件
//将element组件内容挂载到Vue上
Vue.use(Row);Vue.use(Col);Vue.use(Button);Vue.use(Tag);
Vue.use(Table);Vue.use(TableColumn);Vue.use(Dialog);
Vue.use(Form);Vue.use(FormItem);
Vue.use(Input);Vue.use(Select);Vue.use(Option);
Vue.use(Container);Vue.use(Aside);Vue.use(Header);Vue.use(Main);
Vue.use(Menu);Vue.use(Submenu);Vue.use(MenuItemGroup);Vue.use(MenuItem);


Vue.prototype.$notify = Notification;
Vue.prototype.$msgbox = MessageBox;
Vue.prototype.$alert = MessageBox.alert;
Vue.prototype.$confirm = MessageBox.confirm;
Vue.prototype.$prompt = MessageBox.prompt;
Vue.prototype.$message = Message;

import App from './App'
import router from './router/index.js'
import Axios from 'axios'
Vue.prototype.$axios = Axios;

Vue.config.productionTip = false;

// import './assets/wangeidtor/release/wangEditor.min.js'

window.fileReqUrl = 'http://www.sharismspace.com/file_server-0.0.1-SNAPSHOT';

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
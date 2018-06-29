import Vue from 'vue'
import Router from 'vue-router'

import newsList from '@/components/news-list/news-list.vue'
import addNews from '@/components/add-news/add-news.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/newslist',
      name: 'newsList',
      component: newsList
    },
    {
      path: '/addnews',
      name: 'addNews',
      component: addNews
    },
    // {
    //   path : '*',
    //   redirect : {
    //     name: 'newsList',
    //   }
    // }
  ]
})

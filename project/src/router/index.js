import Vue from 'vue'
import Router from 'vue-router'

import nr from '@/components/nr'
import dlzc from '@/components/dlzc'
import xq from '@/components/xq'
import zc from '@/components/zc'
import gwc from '@/components/gwc'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'nr',
      component: nr
    },
    {
      path: '/dlzc',
      name: 'dlzc',
      component: dlzc
    },
    {
      path: '/xq',
      name: 'xq',
      component: xq
    },
    {
      path: '/zc',
      name: 'zc',
      component: zc
    },
    {
      path: '/gwc',
      name: 'gwc',
      component: gwc
    }
    
    
    
    
   
    
    
  ]
})

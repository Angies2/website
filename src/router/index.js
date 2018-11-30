import Vue from 'vue'
import Router from 'vue-router'
import index from '@/components/index/index'
import HomePage from '@/components/home/home'
import about from '@/components/about-us/about-us'
import news from '@/components/news-center/news-center'
import newsDetail from '@/components/news-center/news-detail'
import recruiting from '@/components/recruiting/recruiting'
import businessAreas from '@/components/business-areas/business-areas'
import contactUs from '@/components/contact-us/contact-us'
import culture from '@/components/culture/culture'
Vue.use(Router);

const routes = [];

let homeRouter = {path: '/', components: {layout: HomePage}, children: []};
const children = homeRouter.children;

routes.push(homeRouter);

children.push({path: '/', name: 'index', components: {home: index}});
children.push({path: '/about', name: 'about-us', components: {home: about}});
children.push({path: '/news', name: 'news-center', components: {home: news}});
children.push({path: '/news-detail', name: 'newsDetail', components: {home: newsDetail}});
children.push({path: '/recruiting', name: 'recruiting', components: {home: recruiting}});
children.push({path: '/business', name: 'businessAreas', components: {home: businessAreas}});
children.push({path: '/contact', name: 'contactUs', components: {home: contactUs}});
children.push({path: '/culture', name: 'culture', components: {home: culture}});

export default new Router({
  //mode: 'history', // 使用H5 history，需要配合router-link标签
  routes: routes
});



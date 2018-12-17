<template>
    <div class="news-center">
      <div class="top-menu">
        <div class="top-menu-location">
          <span>您现在的位置：<router-link to="/">首页</router-link>><router-link to="/news">新闻资讯</router-link>>{{activeName}}</span>
        </div>
      </div>
      <div class="tabs">
        <el-tabs v-model="activeName">
          <el-tab-pane label="企业" name="企业动态">
            <label slot="label">&nbsp;&nbsp;&nbsp;企业动态</label>
            <ul class="list-news company">
              <li class="list-items"  v-for=" item in companyList" @click="toDetail(item.id)">
                <el-row :gutter="60">
                  <el-col :span="6">
                    <img :src="item.thumbnail"/>
                  </el-col>
                  <el-col :span="18">
                    <div>
                      <div class="news-title">{{item.title}}</div>
                      <div class="news-content">{{item.abstract}}</div>
                      <div class="news-bottom">
                        <span class="news-date">{{item.date}}</span>
                        <span class="news-more">了解更多</span>
                      </div>
                    </div>
                  </el-col>
                </el-row>
              </li>
              <el-pagination
                @size-change="handleSizeChange"
                @current-change="handleCurrentChange"
                :current-page="currentPage"
                :page-sizes="[5, 10, 20, 50]"
                :page-size="pagesize"
                layout="total, sizes, prev, pager, next, jumper"
                :total="total">
              </el-pagination>
            </ul>
          </el-tab-pane>
          <el-tab-pane label="行业要闻" name="行业要闻">
            <label slot="label">行业要闻</label>
            <ul  class="list-news industry" >
              <li  class="list-items"  v-for=" item in industList">
                <a target="_blank" :href="item.link">
                <el-row :gutter="60">
                  <el-col :span="6">
                    <img src="./tylin.png"/>
                  </el-col>
                  <el-col :span="18" class="title-link">
                    <div>
                      <div class="news-title">{{item.title}}</div>
                      <div class="news-content">{{item.abstract}}</div>
                      <div class="news-bottom">
                        <span class="news-date">{{item.date}}</span>
                        <span class="news-more">了解更多</span>
                      </div>
                    </div>
                  </el-col>
                </el-row>
                </a>
              </li>
              <el-pagination
                @size-change="handleSizeChangeIndust"
                @current-change="handleCurrentChangeIndust"
                :current-page="currentPageIndust"
                :page-sizes="[5, 10, 20, 50]"
                :page-size="pagesizeIndust"
                layout="total, sizes, prev, pager, next, jumper"
                :total="totalIndust">
              </el-pagination>
            </ul>
          </el-tab-pane>
          <el-tab-pane label="战略合作" name="战略合作">
            <label slot="label">&nbsp;战略合作&nbsp;&nbsp;&nbsp;&nbsp;</label>
          </el-tab-pane>
        </el-tabs>
      </div>
    </div>
</template>

<script>
    export default {
        name: "news-center",
      data() {
        return {
          activeName: '企业动态',
          companyList:[],
          industList:[],
          currentPage:1, //初始页
          pagesize:5,    //    每页的数据
          total:0,
          currentPageIndust:1,
          pagesizeIndust:5,
          totalIndust:0
        };
      },
      mounted() {
        this.handleEnterpriseList();
        this.handleIndustList();
      },
      methods: {
        toDetail: function(num) {
          this.$router.push({path:"/news-detail", query: { newsId: num ,activeName:this.activeName}})
        },
        // 初始企业动态页currentPage、初始每页数据数pagesize和数据data
        handleSizeChange: function (size) {
          this.pagesize = size;
          this.handleEnterpriseList();
        },
        handleCurrentChange: function(currentPage){
          this.currentPage = currentPage;
          this.handleEnterpriseList();
        },
        // 初始页行业要闻currentPage、初始每页数据数pagesize和数据data
        handleSizeChangeIndust: function (pagesizeIndust) {
          this.pagesizeIndust = pagesizeIndust;
          this.handleIndustList();
        },
        handleCurrentChangeIndust: function(currentPageIndust){
          this.currentPageIndust = currentPageIndust;
          this.handleIndustList();
        },
        //企业动态
        handleEnterpriseList() {
          var _this = this;
          this.$http.get("/api/contents?type=enterprise&deleted=false&currentPage="+_this.currentPage+"&pageSize="+_this.pagesize).then(function(res){
            let msg = res.body;
            if(msg.code === 200){
              this.companyList = msg.contents;
              this.total = msg.total;
            }else{
              _this.$message({
                message: msg.message,
                type: 'error',
                duration:2000
              });
            }
          });
        },
        //行业要闻
        handleIndustList(){
          var _this = this;
          this.$http.get("/api/contents?type=industry&deleted=false&currentPage="+_this.currentPageIndust+"&pageSize="+_this.pagesizeIndust).then(function(res){
            let msg = res.body;
            if(msg.code === 200){
              this.industList = msg.contents;
              this.totalIndust = msg.total;
            }else{
              _this.$message({
                message: msg.message,
                type: 'error',
                duration:2000
              });
            }
          });
        }
      }
    }
</script>

<style  lang="less">
  .news-center .top-menu {
    margin-top: 65px;
    background: url("./news.jpg") center;
    height: 330px;
  }
  .news-center .top-menu .top-menu-location {
    color: #fff;
    border-radius: 5px;
    width: 1280px;
    text-align: right;
    margin: 0 auto;
    padding-top: 230px;
  span {
    background-color: #3031339c;
    padding: 5px;
    border-radius: 3px;
  }
    a {
      color: #fff;
    }
  }
  .news-center .el-tabs__nav {
    margin: 16px 0;
    text-align: center;
    width: 1280px;
  }
  .news-center .el-tabs__nav-wrap::after {
    background-color: #fff;
  }
  .news-center .el-tabs__item.is-active {
    color: #fff;
    background-color: #D86614;
    border-radius: 7px;
  }
  .news-center .el-tabs__item:hover {
    cursor: pointer;
    color: #D86614;
  }
  .news-center .el-tabs__active-bar {
    background-color:#fff;
  }
  .news-center .el-tabs__item.is-active:hover {
    color: #fff;
  }
  .news-center .el-tabs__item {
    padding: 0 15px;
    margin: 5px 20px;
    font-size: 16px;
  }
  .news-center .tabs {
    width: 1280px;
    margin: 0 auto;
    .list-news {
      border: 1px #F2F2F2 solid;
      padding: 8px 30px 50px 30px;
      .list-items{
        cursor: pointer;
        border-bottom: 1px #e0dede solid;
        padding: 30px 13px;
        img {
          width: 259px;
        }
        .news-title {
          line-height: 60px;
          font-size: 16px;
          font-weight: bold;
          margin-top: -23px;
        }
        .news-content {
          font-size: 14px;
          line-height: 35px;
        }
        .news-bottom {
          font-size: 14px;
          margin-top: 14px;
          .news-date {

          }
          .news-more {
            float: right;
          }
        }
      }
      /*.el-select-dropdown__item .selected span {*/
        /*color: #FF9955 !important;*/
      /*}*/
      /*.el-pager li.active {*/
        /*color: #FF9955;*/
      /*}*/
      /*.el-select .el-input .el-input__inner {*/
        /*border-color: #FF9955;*/
        /*&:focus,*/
        /*&:hover,*/
        /*&:active {*/
          /*border-color: #FF9955;*/
        /*}*/
      /*}*/
      /*.el-pager li:hover {*/
        /*color: #FF9955;*/
      /*}*/
      .el-pagination {
        float: right;
        margin-top: 10px;
      }
    }
    .industry {
      .title-link {
        /*margin-top: 71px;*/
      }
      img {
        /*width: 159px;*/
      }
    }
  }
</style>

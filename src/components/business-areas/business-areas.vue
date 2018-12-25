<template>
  <div class="business-areas">
    <div class="top-menu">
      <div class="top-menu-location">
        <span>您现在的位置：<router-link to="/">首页</router-link>>经典项目>{{activeName}}</span>
      </div>
    </div>
    <div class="tabs">
      <el-tabs v-model="activeName">
        <el-tab-pane label="国内项目" name="国内项目">
          <label slot="label">&nbsp;&nbsp;&nbsp;国内项目</label>
          <el-row :gutter="40">
            <el-col :span="8"    v-for=" item in chinaList">
              <div class="project"  @click="toDetail(item.id)">
                <div class="content-cation-img">
                  <img :src="item.thumbnail">
                </div>
                <div class="content-cation-js">{{item.title}}<br></div>
              </div>
            </el-col>
          </el-row>
        </el-tab-pane>
        <el-tab-pane label="国外项目" name="国外项目">
          <label slot="label">国外项目&nbsp;&nbsp;&nbsp;</label>
          <el-row :gutter="40">
            <el-col :span="8"    v-for=" item in foreignList">
              <div class="project"  @click="toDetail(item.id)">
                <div class="content-cation-img">
                  <img :src="item.thumbnail">
                </div>
                <div class="content-cation-js">{{item.title}}<br></div>
              </div>
            </el-col>
          </el-row>
        </el-tab-pane>
      </el-tabs>
    </div>
  </div>
</template>

<script>
    export default {
        name: "business-areas",
      data() {
        return {
          activeName: '国内项目',
          chinaList:[],
          foreignList:[],
          flag:0
        };
      },
      mounted() {
        var _this = this;
        _this.flag = this.$route.query.flag;
        if(_this.flag === 1){
          this.activeName = '国外项目';
        }
        this.$http.get("http://back.tylin-bim.cn/api/contents?currentPage=1&type=china&deleted=false&pageSize=100").then(function(res){
          var msg = res.body;
          if(msg.code === 200){
            this.chinaList = msg.contents;
          }else{
            _this.$message({
              message: msg.message,
              type: 'error',
              duration:2000
            });
          }
        });
        var _this = this;
        this.$http.get("http://back.tylin-bim.cn/api/contents?currentPage=1&type=international&deleted=false&pageSize=100").then(function(res){
          var msg = res.body;
          if(msg.code === 200){
            this.foreignList = msg.contents;
          }else{
            _this.$message({
              message: msg.message,
              type: 'error',
              duration:2000
            });
          }
        });
        },
      created() {
      },
      methods:{
        toDetail: function(num) {
          this.$router.push({path:"/area-detail", query: { areaId: num,activeName: this.activeName}})
        }
      }
    }
</script>

<style lang="less">
  .business-areas {
  }
  .business-areas .top-menu {
    margin-top: 65px;
    background: url("./areas.jpg") center;
    height: 330px;
  }
  .business-areas .top-menu .top-menu-location {
    color: #fff;
    border-radius: 5px;
    width: 1280px;
    text-align: right;
    margin: 0 auto;
    padding-top: 230px;
  span {
    background-color: #6a6b6da6;
    padding: 5px;
    border-radius: 3px;
  }
    a {
      color: #fff;
    }
  }
  .business-areas .el-tabs__nav {
    margin: 16px 0;
    text-align: center;
    width: 1280px;
  }
  .business-areas .el-tabs__nav-wrap::after {
    background-color: #fff;
  }
  .business-areas .el-tabs__item.is-active {
    color: #fff;
    background-color: #D86614;
    border-radius: 7px;
  }
  .business-areas .el-tabs__item:hover {
    cursor: pointer;
    color: #D86614;
  }
  .business-areas .el-tabs__active-bar {
    background-color:#fff;
  }
  .business-areas .el-tabs__item.is-active:hover {
    color: #fff;
  }
  .business-areas .el-tabs__item {
    padding: 0 15px;
    margin: 5px 20px;
    font-size: 16px;
  }
  .business-areas .tabs {
    width: 1280px;
    margin: 0px auto;
  }
  .business-areas .tabs .el-row {
    background-color: #F2F2F2;
    padding: 60px 67px;
  }
  .business-areas {
    .project {
      margin: 20px 0;
    }
    img {
      width: 360px;
      height: 211px;
    }
    .content-cation-js {
      line-height: 50px;
      background-color: #fff;
      width: 360px;
      text-align: center;
      margin-top: -4px;
    }
  }
</style>

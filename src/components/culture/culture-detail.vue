<template>
  <div class="culture-detail">
    <div class="top-menu">
      <div class="top-menu-location">
        <span>您现在的位置：<router-link to="/" >首页</router-link>><router-link to="/culture">企业文化</router-link>>文化建设详情</span>
      </div>
    </div>
    <div class="detail-title">
      <div class="link-back" @click="backTo(1)">返&nbsp;回</div>
      文化建设
    </div>
    <div class="content-botton">
      <div class="menu-title">
        <b>{{culture.title}}</b>
        <div class="news-date">{{culture.date}}</div>
      </div>
      <div class="news-content"></div>
    </div>
  </div>
</template>

<script>
    export default {
        name: "culture-detail",
      data() {
        return {
          culture: {id:'',title:'',date:''},
        };
      },
      mounted() {
        var _this = this;
        var cultureId = this.$route.query.cultureId;
        this.$http.get("http://back.tylin-bim.cn/api/contents/"+cultureId+"?type=enterprise").then(function(res){
          var msg = res.body;
          if(msg.code === 200){
            this.culture.id = msg.id;
            this.culture.title = msg.title;
            this.culture.date = msg.date;
            $('.news-content').html(msg.content);
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
        backTo:function(num){
          this.$router.push({path:"/culture", query: { cultureFlag: num}})
        },
      }
    }
</script>

<style lang="less">
.culture-detail {
  .detail-title {
    text-align: center;
    font-weight: bold;
    font-size: 16px;
    line-height: 80px;
    position: relative;
    .link-back {
      position: absolute;
      left: 313px;
      font-weight: 100;
      line-height: 19px;
      top: 23px;
      font-size: 14px;
      border: 1px #ccc solid;
      padding: 3px 10px;
      cursor: pointer;
    }
  }
  .top-menu {
    margin-top: 65px;
    background: url("./culture.jpg") center;
    height: 330px;
  }
  .top-menu .top-menu-location {
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
  .menu-title {
    text-align: center;
    .news-date {
      font-size: 13px;
      line-height: 18px;
      margin-bottom: 34px;
    }
    b {
      font-size: 16px;
      line-height: 62px;
    }
  }
  .content-botton {
    width: 1280px;
    margin: 0 auto;
    border: 1px #ccc solid;
    padding: 60px 0;
  }
  .news-content {
    .content {
      width: 1280px;
      text-align: center;
      .content-center {
        font-weight: bold;
        text-align: center;
        margin: 20px 0;
      }
      p {
        text-align: left;
        padding: 25px 90px;
        line-height: 30px;
        text-indent:2em;
      }
      img {
        width: 716px;
        height: 431px;
      }
    }
  }
}
</style>

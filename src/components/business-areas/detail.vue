<template>
    <div class="areas-detail">
      <div class="top-menu">
        <div class="top-menu-location">
          <span>您现在的位置：首页>业务领域>业务详情</span>
        </div>
      </div>
      <div class="content">
        <div class="content-title">
          <b>{{business.title}}</b>
          <span>{{business.entitle}}</span>
        </div>
        <div class="content-main">
          <div class="date">
            发布时间：{{business.date}}
          </div>
          <div class="detail">
            <img :src="business.pictures"/>
            <div class="introduce">
              <div class="introduce-h"><b> 建设时间：</b>{{business.builddate}}</div>
              <div class="introduce-h"><b> 业主单位：</b>{{business.owner}}</div>
              <div class="introduce-h"><b> 服务内容：</b>{{business.servicecontent}}</div>
            </div>
          </div>
          <div class="content-bottom">
            <div class="bottom-title">项目概况</div>
            <div class="areas-content">{{business.content}}</div>
            <div class="turn-page">
              <span class="previous">上一篇:</span>
              <span class="next">下一篇:</span>
            </div>
          </div>
        </div>
      </div>
    </div>
</template>

<script>
    export default {
        name: "detail",
      data() {
        return {
          business: {id:'5c088165a23da24730871529',title:'重庆市残疾人康复中心',content:'xxx',date:'2018年12月6日'}
        };
      },
      mounted() {
        var _this = this;
        this.business.id = this.$route.query.areaId;
        var areaId = this.business.id;
        this.$http.get("/api/contents/"+areaId).then(function(res){
          var msg = res.body;
          if(msg.code === 200){
            this.business.id = msg.id;
            this.business.title = msg.title;
            this.business.entitle = msg.entitle;
            this.business.date = msg.date;
            this.business.builddate = msg.builddate;
            this.business.owner = msg.owner;
            this.business.servicecontent = msg.servicecontent;
            this.business.pictures = msg.pictures;
            $('.areas-content').html(msg.content);
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
    }
</script>

<style lang="less">
  .areas-detail {
    .top-menu {
      margin-top: 65px;
      background: url("./areas.jpg") center;
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
        background-color: #3031339c;
        padding: 5px;
        border-radius: 3px;
      }
    }
    .content {
      width: 1280px;
      margin: 0 auto;
      .content-title {
        text-align: center;
        margin: 30px 0;
        b {
          display: block;
          font-size: 16px;
        }
        span{
          color: #FF6600;
          font-size: 13px;
        }
      }
      .content-main {
        border: 1px #ccc solid;
        .date {
          line-height: 49px;
          background-color: #F2F2F2;
          font-size: 14px;
          margin-top: 20px;
          margin-bottom: 50px;
          padding-left: 15px;

        }
        .detail {
          text-align: center;
          position: relative;
          font-size: 12px;
          img {
            height: 461px;
            width: 786px;
          }
          .introduce {
            position: absolute;
            bottom: 3px;
            left: 246px;
            line-height: 28px;
            text-align: left;
            background-color: #e46c0a6b;
            width: 773px;
            padding-left: 13px;
            padding-bottom: 10px;
            color: #b9b7b7;
          }
        }
        .content-bottom {
          background-color: #F2F2F2;
          height: 247px;
          margin-top: 50px;
          font-size: 13px;
          padding-bottom: 40px;
          .bottom-title {
            font-size: 16px;
            font-weight: bold;
            line-height: 55px;
            padding-left: 12px;
          }
          p {
            padding-left: 12px;
            line-height: 50px;
          }
          .turn-page {
            margin-top: 80px;
            line-height: 55px;
            border-bottom: 1px dotted #dad8d8;
            border-top: 1px dotted #dad8d8;
            padding: 0 15px;
            .next {
              float: right;
            }
          }
        }
      }
    }
  }
</style>

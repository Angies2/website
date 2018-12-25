<template>
    <div class="areas-detail">
      <div class="top-menu">
        <div class="top-menu-location">
          <span>您现在的位置：<router-link to="/">首页</router-link>><router-link to="/business">经典项目</router-link>>业务详情</span>
        </div>
      </div>
      <div class="content">
        <div class="content-title">
          <div class="link-back" @click="backTo()">返&nbsp;回</div>
          <b>{{business.title}}</b>
          <span>{{business.entitle}}</span>
        </div>
        <div class="content-main">
          <div class="date">
            发布时间：{{business.date}}
          </div>
          <div class="detail">
            <img :src="business.picture"/>
            <div class="introduce">
              <div class="introduce-h"><b> 建设时间：</b>{{business.builddate}}</div>
              <div class="introduce-h"><b> 业主单位：</b>{{business.owner}}</div>
              <div class="introduce-h"><b> 服务内容：</b>{{business.servicecontent}}</div>
            </div>
          </div>
          <div class="content-bottom">
            <div class="bottom-title">项目概况</div>
            <div class="areas-content"><p>{{business.content}}</p></div>
            <div class="turn-page">
              <div class="previous" @click="toFormer(former._id)">上一篇:&nbsp;&nbsp;{{former==='无' ? '无': former.title}}</div>
              <div class="next" @click="toNext(next._id)">下一篇:&nbsp;&nbsp;{{next.title}}</div>
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
          business: {id:'5c088165a23da24730871529',title:'重庆市残疾人康复中心',content:'xxx',date:'2018年12月6日'},
          former:{id:'5c088165a23da24730871529',title:'重庆市残疾人康复中心'},
          next:{id:'5c088165a23da24730871529',title:'重庆市残疾人康复中心'},
          type:'china',
          areaId:'',
        };
      },
      mounted() {
        var _this = this;
        this.business.id = this.$route.query.areaId;
        this.areaId = this.business.id;
        var typeCH = this.$route.query.activeName;
        this.type = 'china';
        if(typeCH === "国内项目"){
          this.type = 'china'
        }else if(typeCH === "国外项目") {
          this.type = 'international'
        }else{
          this.$message({
            message: '系统错误，请稍后重试！',
            type: 'error',
            duration:2000
          });
        }
        this.businessList();
      },
      created() {
      },
      methods: {
        backTo:function(){
          let num = 0;
          if(this.type === 'china'){
            num = 0;
          }else if(this.type === 'international') {
            num = 1;
          }
          this.$router.push({path:"/business", query: { flag: num}})
        },
        //上一页
        toFormer: function (_id) {
          this.areaId=_id;
          this.businessList();
        },
        //下一页
        toNext:function (_id) {
          this.areaId=_id;
          this.businessList();
        },
        businessList:function () {
          this.$http.get("http://back.tylin-bim.cn/api/contents/"+this.areaId+'?sort=yes&type='+this.type).then(function(res){
            var msg = res.body;
            if(msg.code === 200){
              this.business = msg.data.current;
              this.former = msg.data.former;
              this.next = msg.data.next;
            }else{
              _this.$message({
                message: msg.message,
                type: 'error',
                duration:2000
              });
            }
          });
        },
      }
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
        background-color: #6a6b6da6;
        padding: 5px;
        border-radius: 3px;
      }
      a {
        color: #fff;
      }
    }
    .content {
      width: 1280px;
      margin: 0 auto;
      .content-title {
        text-align: center;
        margin: 30px 0;
        position: relative;
        .link-back {
          position: absolute;
          left: 0;
          line-height: 19px;
          top: 15px;
          font-size: 14px;
          /*color: #ccc;*/
          border: 1px #ccc solid;
          padding: 3px 10px;
          cursor: pointer;
        }
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
            color: #fff;
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
            padding: 0 35px;
            line-height: 30px;
          }
          .turn-page {
            margin-top: 80px;
            line-height: 55px;
            border-bottom: 1px dotted #dad8d8;
            border-top: 1px dotted #dad8d8;
            padding: 0 15px;
            .next {
              float: right;
              display: inline-block;
              cursor: pointer;
            }
            .previous {
              display: inline-block;
              cursor: pointer;
            }
          }
        }
      }
    }
    .areas-content {
      height: 60px;
    }
  }
</style>

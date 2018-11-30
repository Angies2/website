<template>
  <div class="contact-us">
    <div class="top-menu">
      <div class="top-menu-location">
        <span>您现在的位置：首页>联系我们</span>
      </div>
    </div>
    <div class="menu-title">
      <b class="ch">林同棪（重庆）国际工程技术有限公司</b>
      <div class="en"><span class="orange">T.Y.LIN </span>(CHONGQING) INTERNATIONAL ENGINEERING TECHNOLOGY CO.,LTD</div>
    </div>
    <div  class="menu">
      <el-row :gutter="60">
        <el-col :span="11" class="left-menu">
          <img src="./left-pic.jpg"/>
        </el-col>
        <el-col :span="13">
          <div class="right-title">CONTACT US</div>
          <div class="address">
            <div>通信地址：重庆市渝北区春兰3路一号地矿大厦</div>
            <div>邮政编码：401121</div>
            <div>联系电话：023-63087850</div>
            <div>联系邮箱：lijiakrystal@tylin.com.cn</div>
          </div>
          <div class="menu-link">
            <span class="weixin">
              <span class="images">官方微信</span>
            </span>
            <span class="map">
              <span class="images">查看地图</span>
            </span>
          </div>
        </el-col>
      </el-row>
    </div>
    </div>
</template>

<script>
    export default {
        name: "contact-us"
    }
</script>

<style lang="less">
  .contact-us {
    .orange {
      color: #FF6600;
    }
    .menu-title {
      text-align: center;
      margin: 30px;
      .en {
        font-size: 13px;
      }
      .ch {
        font-size: 16px;
        line-height: 32px;
      }
    }
    .top-menu {
      margin-top: 65px;
      background: url("./contact-us.jpg") center;
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
    .menu {
      width: 1138px;
      margin: 50px auto;
      border: 1px #F2F2F2 solid;
      padding: 71px;
    }
    .left-menu {
      img{
        width: 500px;
        height: 336px;
      }
    }
    .right-title {
      color: #fff;
      font-size: 28px;
      background-color: #D7D7D7;
      line-height: 100px;
      display: inline-block;
      width: 100%;
      font-weight: bold;
      padding-left: 12px;
    }
    .address {
      line-height: 44px;
      padding-left: 6px;
    }
    .menu-link {
      width: 100%;
      line-height: 62px;
      text-align: center;
      font-size: 20px;
      .weixin {
        background-color: #FF6600;
        display: inline-block;
        width: 48%;
        color: #fff;
        float: left;
        .images {
          width: 200px;
          display: inline-block;
          background: url('./weixin.png') no-repeat 19px 20px;
        }
      }
      .map{
        display: inline-block;
        width: 48%;
        background-color: #F2F2F2;
        float: right;
        .images {
          width: 200px;
          display: inline-block;
          background: url('./map.png') no-repeat 27px 18px;
        }
      }
    }
  }
</style>

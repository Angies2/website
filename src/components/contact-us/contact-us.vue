<template>
  <div class="contact-us">
    <div class="top-menu">
      <div class="top-menu-location">
        <span>您现在的位置：<router-link to="/">首页</router-link>>联系我们</span>
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
          <el-row>
            <el-col :span="19">
              <div class="address">
                <div>通信地址：重庆市渝北区芙蓉路6号</div>
                <div>邮政编码：401121</div>
                <div>联系电话：023-63087850</div>
                <div>联系邮箱：lijiakrystal@tylin.com.cn</div>
              </div>
            </el-col>
            <el-col :span="5" class="QA">
              <img src="./QA-code.jpg"/>
            </el-col>
          </el-row>

        </el-col>
      </el-row>
      <div class="menu-map">
        <div id="l-map"></div>
      </div>
    </div>
    </div>
</template>

<script>
    export default {
        name: "contact-us",
      data() {
        return {
          activeName: '人才理念'
        };
      },
      mounted() {
        // 百度地图API功能
        var map = new BMap.Map("l-map");    // 创建Map实例
        var point = new BMap.Point(106.5243766676, 29.6255963376);
        map.centerAndZoom(point, 14);  // 初始化地图,设置中心点坐标和地图级别
        //添加地图类型控件
        map.addControl(new BMap.MapTypeControl({
          mapTypes: [
            BMAP_NORMAL_MAP,
            BMAP_HYBRID_MAP
          ]
        }));
        map.setCurrentCity("重庆");          // 设置地图显示的城市 此项是必须设置的
        map.enableScrollWheelZoom(true);
        var marker = new BMap.Marker(point);        // 创建标注
        map.addOverlay(marker);
      }
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
        background-color: #6a6b6da6;
        padding: 5px;
        border-radius: 3px;
      }
      a {
        color: #fff;
      }
    }
    .menu {
      width: 1138px;
      margin: 50px auto;
      border: 1px #F2F2F2 solid;
      padding: 71px;
      margin-bottom: 0 !important;
    }
    .left-menu {
      img{
        width: 500px;
        /*height: 336px;*/
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
    #l-map {
      width: 1150px;
      height: 500px;
    }
    .QA {
      img {
        width: 125px;
        margin-top: 29px;
      }
    }
    .menu-map {
      margin-top: 20px;
    }
  }
</style>

<template>
  <div class="culture">
    <div class="top-menu">
      <div class="top-menu-location">
        <span>您现在的位置：<router-link to="/">首页</router-link>>企业文化>{{activeName}}</span>
      </div>
    </div>
    <div class="tabs">
      <el-tabs v-model="activeName">
        <el-tab-pane label="文化理念" name="文化理念">
          <label slot="label">&nbsp;&nbsp;&nbsp;&nbsp;文化理念</label>
          <img src="./eagle.jpg"/>
          <div class="content">
            <b>&nbsp;&nbsp;&nbsp;&nbsp;企业文化理念</b>
            <li>
              <img src="./u4.png"/>
              <span>企业精神：质量是生命、创新是灵魂、服务是根本</span>
            </li>
            <li>
              <img src="./u4.png"/>
              <span>核心组织能力：专业、创新</span>
            </li>
            <li>
              <img src="./u4.png"/>
              <span>发展理念：融中西之长、筑一流企业</span>
            </li>
            <li>
              <img src="./u4.png"/>
              <span>人才理念：搭建平台、实现价值</span>
            </li>
          </div>
        </el-tab-pane>
        <el-tab-pane label="文化建设" name="文化建设">
          <label slot="label">文化建设</label>
          <div class="cultural-construction">
            <ul class="list-news">
              <li class="list-items"  v-for=" item in cultureList" @click="toDetail(item.id)">
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
          </div>
        </el-tab-pane>
        <el-tab-pane label="党群建设" name="党群建设">
          <label slot="label">党群建设&nbsp;&nbsp;&nbsp;</label>
          <div class="party-mass">
            <div class="content">
              <div class="title"><b>认真学习贯彻党的十九大精神 让十九大精神在公司落地生根</b></div>
              <p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;党的十九大是在全面建成小康社会决胜阶段、中国特色社会主义进入新时代的关键时期召开的一次十分重要的大会，是一次不忘初心、牢记使命、高举旗帜、团结奋进的大会，是党和国家发展史上的里程碑。党的十九大报告举旗定向、高屋建瓴、博大精深、求真务实，是一份高瞻远瞩的政治宣言，是一份守正出新的理论巨作，是一份科学务实的行动纲领。深入学习宣传贯彻党的十九大精神，就是把公司上下的思想统一到党的十九大精神上来，把公司力量凝聚到党的十九大确定的各项任务上来，认真学习宣传贯彻党的十九大精神，是公司当前和今后一个时期首要的政治任务。</p>
              <p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;公司在精心组织认真学习宣传贯彻党的十九大精神时，既要整体把握、全面系统，又要突出重点、抓住关键。必须聚焦到习近平新时代中国特色社会主义思想是党必须长期坚持的指导思想上，聚焦到5年来党和国家事业取得历史性成就和发生历史性变革上，聚焦到党的十九大作出一系列重大政治论断的深远影响上，聚焦到贯彻落实党的十九大提出的一系列重大决策部署上，聚焦到以习近平同志为核心的新一届中央领导集体是深受全党全国各族人民拥护和信赖的领导集体上，聚焦到习近平总书记是全党拥护、人民爱戴、当之无愧的党的领袖上，务必保证学习质量，准确领会把握党的十九大精神的思想精髓、核心要义，努力做到了然于胸、运用自如。</p>
              <p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;学习宣传贯彻党的十九大精神，既要立足公司本身实际情况，又要结合具体相关工作，把党的十九大精神落实到公司发展各方面，体现到做好今年各项工作和安排好明年工作之中。积极响应报告中要求的优化资源配置，扩大优质增量供给，实现供需动态平衡。激发和保护企业家精神，建设知识型、技能型、创新型劳动者大军，弘扬劳模精神和工匠精神，营造劳动光荣的社会风尚和精益求精的敬业风气，激发公司员工创造力和发展活力，努力实现更高质量、更有效率、更加公平、更可持续的发展。</p>
              <p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;公司广大党员干部一要抓学习，学原文，悟原理，深入领会习近平新时代中国特色社会主义思想的理论体系、丰富内涵和精神要义，迅速掀起学习贯彻十九大精神热潮。二要抓宣传，公司宣传工作要浓墨重彩地宣传十九大精神，积极推动习近平新时代中国特色社会主义思想进头脑，全力营造学习宣传贯彻十九大精神的浓厚氛围。三是要抓实干，公司各部门要以十九大精神为指引，用习近平新时代中国特色社会主义思想武装头脑，推动工作，要围绕公司各项工作，谋划新思路，采取新举措，取得新实效，扎扎实实把党的十九大精神全面落实在公司里。</p>
              <p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;公司上下要钻进去学、沉下去悟、跳出来做，深刻领会党的十九大精神实质，准确把握十九大提出的一系列重要思想、重要观点、重大判断、重大举措，坚持读原著、学原文、悟原理，在学懂弄通做实上下功夫，切实把思想和行动统一到党的十九大精神上来。落实到具体工作上来就是议要求公司全体员工在实施意识形态工作部署上要善于“扣扣子”、在履行意识形态工作责任上要勇于“担担子”、在落实意识形态工作任务上要勤于“钉钉子”。要深学笃用习近平新时代中国特色社会主义思想，不断巩固公司社会主义意识形态阵地，使全体员工在理想信念、价值理念、道徳观念上紧紧团结在一起。</p>
            </div>
          </div>
        </el-tab-pane>
      </el-tabs>
    </div>
  </div>
</template>

<script>
    export default {
        name: "culture",
      data() {
        return {
          activeName: '文化理念',
          cultureList:[],
          currentPage:1, //初始页
          pagesize:5,    //    每页的数据
          total:0,
        };
      },
      mounted() {
        this.handleCultureList();
      },
      created() {
      },
      methods: {
        toDetail: function(num) {
          this.$router.push({path:"/culture-detail", query: { cultureId: num ,activeName:this.activeName}})
        },
        // 初始页currentPage、初始每页数据数pagesize和数据data
        handleSizeChange: function (size) {
          this.pagesize = size;
          this.handleCultureList();
        },
        handleCurrentChange: function(currentPage){
          this.currentPage = currentPage;
          this.handleCultureList();
        },
        //文化建设列表
        handleCultureList() {
          var _this = this;
          this.$http.get("/api/contents?type=culture&deleted=false&currentPage="+_this.currentPage+"&pageSize="+_this.pagesize).then(function(res){
            let msg = res.body;
            if(msg.code === 200){
              this.cultureList = msg.contents;
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
      }
    }
</script>

<style lang="less">
  .culture {
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
        background-color: #3031339c;
        padding: 5px;
        border-radius: 3px;
      }
      a {
        color: #fff;
      }
    }
    .el-tabs__nav {
      margin: 16px 0;
      text-align: center;
      width: 1280px;
    }
    .el-tabs__nav-wrap::after {
       background-color: #fff;
     }
    .el-tabs__item.is-active {
        color: #fff;
        background-color: #D86614;
        border-radius: 7px;
    }
    .el-tabs__item:hover {
      cursor: pointer;
      color: #D86614;
    }
    .el-tabs__active-bar {
      background-color:#fff;
    }
    .el-tabs__item.is-active:hover {
      color: #fff;
    }
    .el-tabs__item {
       padding: 0 15px;
       margin: 5px 20px;
       font-size: 16px;
    }
    .tabs {
      width: 1280px;
      margin: 0 auto;
    }
    .content {
      background-color: #F2F2F2;
      padding: 60px 67px;
      margin-top: -4px;
      li{
        list-style: none;
        line-height: 46px;
        img {
          display: inline-block;
          vertical-align: middle;
        }
      }
      b {
        font-size: 18px;
        line-height: 52px;
      }
    }
    .cultural-construction {

    }
    .party-mass {
      .title {
        display: block;
        font-size: 18px;
        line-height: 85px;
        text-align: center;
        margin-top: -45px;
      }
      .content {
        p{
          line-height: 36px;
          font-size: 14px;
        }
      }
    }
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
      .el-pagination {
        float: right;
        margin-top: 10px;
      }
    }
  }
</style>

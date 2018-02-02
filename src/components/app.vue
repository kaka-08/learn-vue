<template>
<div class="layout">
        <Layout>
            <Header>
                <Menu mode="horizontal" active-name="1">
                    <div class="layout-logo">
                      <img src="../assets/images/coca.jpg" class="logo-img" alt="LOGO">
                    </div>
                    <div class="layout-nav">
                        <MenuItem name="1">
                            <Icon type="ios-navigate"></Icon>
                            Item 1
                        </MenuItem>
                        <MenuItem name="2">
                            <Icon type="ios-keypad"></Icon>
                            Item 2
                        </MenuItem>
                        <MenuItem name="3">
                            <Icon type="ios-analytics"></Icon>
                            Item 3
                        </MenuItem>
                        <MenuItem name="4">
                            <Icon type="ios-paper"></Icon>
                            Item 4
                        </MenuItem>
                    </div>
                </Menu>
            </Header>
            <Layout :style="{padding: '0 50px'}">
                <Content :style="{padding: '24px 0', minHeight: '280px', background: '#fff'}">
                    <Layout>
                        <Sider hide-trigger :style="{background: '#fff'}">
                            <Menu active-name="1-2" theme="light" width="auto" :open-names="['1']">
                                <Submenu name="1">
                                    <template slot="title">
                                        <Icon type="ios-navigate"></Icon>
                                        Item 1
                                    </template>
                                    <MenuItem name="1-1">Option 1</MenuItem>
                                    <MenuItem name="1-2">Option 2</MenuItem>
                                    <MenuItem name="1-3">Option 3</MenuItem>
                                </Submenu>
                                <Submenu name="2">
                                    <template slot="title">
                                        <Icon type="ios-keypad"></Icon>
                                        Item 2
                                    </template>
                                    <MenuItem name="2-1">Option 1</MenuItem>
                                    <MenuItem name="2-2">Option 2</MenuItem>
                                </Submenu>
                                <Submenu name="3">
                                    <template slot="title">
                                        <Icon type="ios-analytics"></Icon>
                                        Item 3
                                    </template>
                                    <MenuItem name="3-1">Option 1</MenuItem>
                                    <MenuItem name="3-2">Option 2</MenuItem>
                                </Submenu>
                            </Menu>
                        </Sider>
                        <Content :style="{padding: '24px', minHeight: '450px', background: '#fff'}">
                            <Circle
                                :size="250"
                                :trail-width="4"
                                :stroke-width="5"
                                :percent="75"
                                stroke-linecap="square"
                                stroke-color="#43a3fb">
                                <div class="demo-Circle-custom">
                                    <h1>42,001,776</h1>
                                    <p>消费人群规模</p>
                                    <span>
                                        总占人数
                                        <i>75%</i>
                                    </span>
                                </div>
                            </Circle>
                        </Content>
                    </Layout>
                </Content>
            </Layout>
            <Footer class="layout-footer-center">2016-2018 &copy; Kaka</Footer>
        </Layout>
    </div>
</template>

<script>
export default {
  data(){
    return{
    }
  },
  computed:{
  },
  methods:{
  },
  components: {
  }
}
</script>




<style lang="less" scoped>
  .layout{
    border: 1px solid #769fce;
    background: #5a8cbe;
    position: relative;
    border-radius: 4px;
    overflow: hidden;
}
.layout-logo{
    width: 100px;
    height: 64px;
    background: #041433;
    border-radius: 3px;
    float: left;
    position: relative;
    top: 0px;
    left: 0px;
}
.logo-img{
  width: 100%;
  height: 100%;
}
.layout-nav{
    width: 420px;
    margin: 0 auto;
    margin-right: 20px;
}
.layout-footer-center{
    text-align: center;
}
</style>

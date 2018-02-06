<template>
    <div class="login-box">
        <Form class="login-form" ref="formInline" :model="formInline" :rules="ruleValidate" :label-width="80">
            <FormItem prop="username" label="用户名">
                <Input size="large"  type="text" v-model="formInline.username" placeholder="请在此用户名">
                    <Icon size="22" type="ios-person-outline" slot="prepend"></Icon>
                </Input>
            </FormItem>
            <FormItem prop="password" label="密码">
                <Input size="large"  type="password" v-model="formInline.password" placeholder="请在此输入密码">
                    <Icon size="22" type="ios-locked-outline" slot="prepend"></Icon>
                </Input>
            </FormItem>
            <FormItem>
                <Button class="submit-btn" type="primary" @click="handleSubmit('formInline')">登录</Button>
            </FormItem>
        </Form>
    </div>
   
</template>
<script>
import { loginService } from './service'
    export default {
        data () {
            return {
                formInline: {
                    username: '',
                    password: ''
                },
                ruleValidate: {
                    username: [
                        { required: true, message: '请输入用户名', trigger: 'change' }
                    ],
                    password: [
                        { required: true, message: '请输入密码', trigger: 'change' },
                        { type: 'string', min: 6, message: '密码长度不能小于6位', trigger: 'change' }
                    ]
                }
            }
        },
        methods: {
            handleSubmit(name) {
                var _this = this;
                var params = _this.formInline;
                _this.$refs[name].validate((valid) => {
                    if (valid) {
                        //调用login的axios todo
                        loginService(params).then(
                            res=>{
                                _this.$Message.success(res.msg);                                                                        
                                setTimeout(function(){
                                    _this.$router.push({path:'home', replace: true})
                                },500);                                         
                            },
                            res=>{ 
                                _this.$Message.error(res.msg);                                 
                            })
                    } else {
                        _this.$Message.error('输入参数有误，请检查书写是否正确!');
                    }
                })
            }
        }
    }
</script>


<style lang="less" scoped>


.login-box{
    background: #8c0776;
    padding: 12%;
}
.login-form{
    width:45%;
    height: 50%;
    background: #ffffff;
    margin: 0 auto;
    border-radius: 10px;
    padding: 100px 50px 50px 50px;
}
</style>


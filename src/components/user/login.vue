<template>
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
            <Button class="submit-btn" type="primary" @click="handleSubmit('formInline')">Sign in</Button>
        </FormItem>
    </Form>
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
                        { required: true, message: '请输入用户名', trigger: 'blur' }
                    ],
                    password: [
                        { required: true, message: '请输入密码', trigger: 'blur' },
                        { type: 'string', min: 6, message: '密码长度不能小于6位', trigger: 'blur' }
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
                                    _this.$router.push({path:'TestModuleA', replace: true})
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
  .login-form{
      width:500px;
      height: 350px;
      margin:200px auto;
      border: 1px solid #8c0776;
      border-radius: 10px;
      padding: 100px 50px 50px 50px;
      .submit-btn{
         margin: 0 auto;
         display: block
      }
  }
</style>


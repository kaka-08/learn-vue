<template>
    <div class="register-box">
            <Form class="register-form" ref="formCustom" :model="formCustom" :rules="ruleCustom" :label-width="80">
                <FormItem label="用户名" prop="username">
                    <Input v-model="formCustom.username" placeholder="在此输入用户名"></Input>
                </FormItem>
                <FormItem label="密码" prop="password">
                    <Input type="password" v-model="formCustom.password"></Input>
                </FormItem>
                <FormItem label="确认密码" prop="passwordCheck">
                    <Input type="password" v-model="formCustom.passwordCheck"></Input>
                </FormItem>
                <FormItem label="联系方式" prop="phone">
                    <Input v-model="formCustom.phone" placeholder="在此输入联系方式"></Input>
                </FormItem>
                <FormItem label="邮箱" prop="email">
                    <Input type="email" v-model="formCustom.email" placeholder="在此输入邮箱"></Input>
                </FormItem>
                <FormItem label="密保问题" prop="question">
                    <Input v-model="formCustom.question" placeholder="在此输入密保问题"></Input>
                </FormItem>
                <FormItem label="密保答案" prop="answer">
                    <Input type="text" v-model="formCustom.answer" number placeholder="在此输入密保答案"></Input>
                </FormItem>
                <FormItem>
                    <Button type="primary" @click="handleSubmit('formCustom')">注册</Button>
                    <Button type="ghost" @click="handleReset('formCustom')" style="margin-left: 8px">取消</Button>
                </FormItem>
            </Form>
    </div>    
</template>



<script>
import { registerService,checkUsernameService } from './service'
export default {
 data () {  
      const validateUsername = (rule, value, callback) => {
                if (value === '') {
                    callback(new Error('请输入用户名'));
                } else {
                    checkUsernameService(value).then(res=>{
                        callback();
                    },res=>{
                        callback(res.msg);
                    }).catch(e => {
                        console.log(e)
                    });
                }
            };   
        const validatePass = (rule, value, callback) => {
                if (value === '') {
                    callback(new Error('请输入密码'));
                } else {
                    if (this.formCustom.passwordCheck !== '') {
                        // 对第二个密码框单独验证
                        this.$refs.formCustom.validateField('passwordCheck');
                    }
                    callback();
                }
            };
        const validatePassCheck = (rule, value, callback) => {
                if (value === '') {
                    callback(new Error('再次输入密码'));
                } else if (value !== this.formCustom.password) {
                    callback(new Error('两次输入的密码不一致!'));
                } else {
                    callback();
                }
            };      
            return {
                formCustom: {
                    username: '',
                    password: '',
                    passwordCheck: '',
                    phone: '',
                    email:'',
                    question: '',
                    answer: '',
                },
                ruleCustom: {
                    username: [
                        { required: true, message: '用户名不能为空', trigger: 'change' },
                        { validator: validateUsername, trigger: 'change' } 
                    ],
                    password: [
                        { required: true, message: '密码不能为空', trigger: 'change' },
                        { type: 'string',min:6, message: '密码长度不能小于6位', trigger: 'change' },
                        { validator: validatePass, trigger: 'change' }
                    ],
                    passwordCheck: [
                        { required: true, message: '再次输入密码', trigger: 'change' },
                        { validator: validatePassCheck, trigger: 'change' }
                    ],
                    email: [
                        { required: true, message: '请输入邮箱', trigger: 'change' },
                        { type: 'email', message: '邮箱格式不正确', trigger: 'change' }
                    ],
                    phone: [
                        { required: true, message: '请输入联系方式', trigger: 'change' }
                    ]
                }
            }
        },
        methods: {
            handleSubmit (name) {
                var _this = this;
                var params = _this.formCustom;
                _this.$refs[name].validate((valid) => {
                    if (valid) {
                        //调用login的axios todo
                        registerService(params).then(
                            res=>{
                                _this.$Message.success(res.msg);                                                                        
                                setTimeout(function(){
                                    _this.$router.push({path:'login', replace: true})
                                },500);    
                                _this.$refs[name].resetFields();                                                                   
                            },
                            res=>{ 
                                _this.$Message.error(res.msg);                                 
                            })
                    } else {
                        _this.$Message.error('输入参数有误，请检查书写是否正确!');
                    }
                })
            },
            handleReset (name) {
                this.$refs[name].resetFields();
                this.$router.push({path:'login', replace: true})
            }
        }
    }
</script>


<style lang="less" scoped>
.register-box{
    background: #8c0776;
    padding: 5%;
}
.register-form{
    width:45%;
    height: auto;
    margin: 0 auto;
    border: 1px solid #8c0776;
    background: #ffffff;
    border-radius: 15px;
    padding:50px;
}
</style>

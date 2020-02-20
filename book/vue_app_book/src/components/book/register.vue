<template>
    <div class="container" >
    <div>
        <router-link to="/Home"><img src="../../assets/img/ts-logo.png" alt=""/></router-link>
        <img src="../../assets/img/sub-logo.png" alt=""/>
    </div>
        <ul class="breadcrumb py-0">
            <li class="breadcrumb-item w-50 text-center"><a href="" class="text-muted">1.填写注册信息</a></li>
            <li class="breadcrumb-item w-25"><span> ></span></li>
            <li class="breadcrumb-item w-25"><a href="" class="text-muted">2.注册成功</a></li>
        </ul>
    <div class="float-right"><span class="text-muted text_small">已有淘书网账户，请直接</span><router-link to="/Login" class="font-weight-bold">登录</router-link>
    </div>
    <table></table>
    <div class="mt-4 box">

        <div class="ml-3">
            用户名：<input type="text" v-model="uname" @focus="funOn1()" @blur="fun1()"/><span class="ml-2" :class="{'vali_success':isActive1,'vali_fail':isActive2,'vali_info':display1}">用户名在2-8字符内</span>
        </div>
        <div class="mt-3">
            电子邮箱：<input  type="text" v-model="email" @focus="funOn2()" @blur="fun2()"/><span class="ml-2"  :class="{'vali_success':isActive3,'vali_fail':isActive4,'vali_info':display2}">请填入常用邮箱地址</span>
        </div>
        <div class="ml-4 mt-3">
            密码：<input class="ml-2" type="text" v-model="upwd" @focus="funOn3()" @blur="fun3()"/><span class="ml-2" :class="{'vali_success':isActive5,'vali_fail':isActive6,'vali_info':display3}">密码长度6-12个字符之间</span>
        </div>
        <div class="mt-3">
            确认密码：<input  type="text" v-model="reupwd" @focus="funOn4()" @blur="fun4()"/><span class="ml-2" :class="{'vali_success':isActive7,'vali_fail':isActive8,'vali_info':display4}">请再次输入您设置的密码</span>
        </div>
        <div class="mt-3 ml-8">
            <button class="btn" @click="register">提交注册</button>
        </div>
        <div id="protocol-con">
            <h5>一、本站服务条款的确认和接纳</h5>
            <p>本站的各项电子服务的所有权和运作权归本站。本站提供的服务将完全按照其发布的服务条款和操作规则严格执行。用户同意所有服务条款并完成注册程序，才能成为本站的正式用户。用户确认：本协议条款是处理双方权利义务的约定，除非违反国家强制性法律，否则始终有效。在下订单的同时，您也同时承认了您拥有购买这些产品的权利能力和行为能力，并且将您对您在订单中提供的所有信息的真实性负责。</p>
            <h5>二、服务简介</h5>
            <p>本站运用自己的操作系统通过国际互联网络为用户提供网络服务。同时，用户必须：</p>
            <ul>
                <li>(1)自行配备上网的所需设备，包括个人电脑、调制解调器或其它必备上网装置。 </li>
                <li>(2)自行负担个人上网所支付的与此服务有关的电话费用、网络费用。 </li>
            </ul>
            <p>基于本站所提供的网络服务的重要性，用户应同意</p>
            <ul>
                <li>(1)提供详尽、准确的个人资料。 </li>
                <li>(2)不断更新注册资料，符合及时、详尽、准确的要求。 </li>
            </ul>
            <p>本站保证不公开用户的真实姓名、地址、电子邮箱和联系电话等用户信息， 除以下情况外：</p>
            <ul>
                <li>(1)用户授权本站透露这些信息。 </li>
                <li>(2)相应的法律及程序要求本站提供用户的个人资料。 </li>
            </ul>
            <h5>三、价格和数量</h5>
            <p>本站将尽最大努力保证您所购商品与网站上公布的价格一致。</p>
            <p>产品的价格和可获性都在本站上指明，这类信息将随时更改。</p>
            <p>您所订购的商品，如果发生缺货，您有权取消定单。</p>
            <h5>四、送货</h5>
            <p>本站将会把产品送到您所指定的送货地址。所有在本站上列出的送货时间为参考时间，参考时间的计算是根据库存状况、正常的处理过程和送货时间、送货地点的基础上估计得出的。</p>
            <p>请清楚准确地填写您的真实姓名、送货地址及联系方式。因如下情况造成订单延迟或无法配送等，本站将无法承担迟延配送的责任：</p>
            <ul>
                <li>(1)客户提供错误信息和不详细的地址；</li>
                <li>(2)货物送达无人签收，由此造成的重复配送所产生的费用及相关的后果。 </li>
                <li>(3)不可抗力，例如：自然灾害、交通戒严、突发战争等。 </li>
            </ul>
            <h5>五、服务条款的修改</h5>
            <p>本站将可能不定期的修改本用户协议的有关条款，一旦条款及服务内容产生变动，本站将会在重要页面上提示修改内容。</p>
            <h5>六、用户隐私制度</h5>
            <p>尊重用户个人隐私是本站的一项基本政策。所以，作为对以上第二条注册资料分析的补充，本站一定不会在未经合法用户授权时公开、编辑或透露其注册资料及保存在本站中的非公开内容。</p>
            <h5>七、用户的帐号，密码和安全性 </h5>
            <p>用户一旦注册成功，成为本站的合法用户，将得到一个密码和用户名。您可随时根据指示改变您的密码。用户需谨慎合理的保存、使用用户名和密码。用户若发现任何非法使用用户帐号或存在安全漏洞的情况，请立即通知本站和向公安机关报案。</p>
            <h5>八、对用户信息的存储和限制</h5>
            <p>如果用户违背了国家法律法规规定或本协议约定，本站有视具体情形中止或终止对其提供网络服务的权利。</p>
            <h5>九、用户管理 </h5>
            <p>本协议依据国家相关法律法规规章制定，用户同意严格遵守以下条款：</p>
            <ul>
                <li>(1)从中国境内向外传输技术性资料时必须符合中国有关法规。 </li>
                <li>(2) 不利用本站从事非法活动。 </li>
                <li>(3)不干扰或混乱网络服务。</li>
                <li>(4)遵守所有使用网络服务的网络协议、规定、程序和惯例。 </li>
            </ul>
            <p>用户须承诺不传输任何违法犯罪的、骚扰性的、中伤他人的、辱骂性的、恐吓性的、伤害性的、庸俗的，淫秽的、不文明的等信息资料；不传输损害国家社会公共利益和涉及国家安全的信息资料；不传输教唆他人从事本条所述行为的信息资料。</p>
            <p>未经许可而非法进入其它电脑系统是禁止的。</p>
            <p>若用户的行为不符合以上提到的服务条款，本站将作出独立判断立即取消用户服务帐号。用户需对自己在网上的行为承担法律责任。用户若在本站上散布和传播反动、色情或其它违反国家法律的信息，本站的系统记录有可能作为用户违反法律的证据。</p>
            <h5>十、通告</h5>
            <p>所有发给用户的通告都可通过重要页面的公告或电子邮件或常规的信件传送。用户协议条款的修改、服务变更、或其它重要事件的通告都会以此形式进行。</p>
            <h5>十一、网络服务内容的所有权</h5>
            <p>本站定义的网络服务内容包括：文字、软件、声音、图片、录象、图表、广告中的全部内容；电子邮件的全部内容；本站为用户提供的其它信息。所有这些内容受版权、商标、标签和其它财产所有权法律的保护。所以，用户只能在本站和广告商授权下才能使用这些内容，而不能擅自复制、再造这些内容、或创造与内容有关的派生产品。本站所有的文章版权归原文作者和本站共同所有，任何人需要转载本站的文章，必须征得原文作者和本站授权。</p>
            <h5>十二、责任限制</h5>
            <p>如因不可抗力或其它本站无法控制的原因使本站销售系统崩溃或无法正常使用导致网上交易无法完成或丢失有关的信息、记录等本站会尽可能合理地协助处理善后事宜，并尽最大努力使客户免受损失。</p>
            <h5>十三、法律管辖和适用</h5>
            <p>本协议的订立、执行和解释及争议的解决均应适用中国法律。</p>
            <p>如发生本站服务条款与中国法律相抵触时，则这些条款将完全按法律规定重新解释，而其它有效条款继续有效。</p>
            <p>如双方就本协议内容或其执行发生任何争议，双方应尽力友好协商解决；协商不成时，任何一方均可向人民法院提起诉讼。</p>
        </div>
    </div>
    <div class="border-top mt-5">
        <span class="d-block text_small text-muted mt-2" align="center">关于淘书&nbsp;&nbsp;&nbsp;诚征英才&nbsp;&nbsp;&nbsp;图书目录&nbsp;&nbsp;&nbsp;免责条款&nbsp;&nbsp;&nbsp;联系我们</span>
        <span class="d-block text_small text-muted mt-2" align="center">Copyright © Mint&淘书网 Taoshu.com 版权所有</span>
    </div>

</div>
</template>
<script>
import qs from 'qs';
export default {
    data(){
        return{
            uname:"",
            email:"",
            upwd:"",
            reupwd:"",
            isActive1:false,
            isActive2:false,
            isActive3:false,
            isActive4:false,
            isActive5:false,
            isActive6:false,
            isActive7:false,
            isActive8:false,
            display1:true,
            display2:true,
            display3:true,
            display4:true,
            
        }
        },
        methods:{
            funOn1(){
                this.display1=false;
            },
            funOn2(){
                this.display2=false;
            },
            funOn3(){
                this.display3=false;
            },
            funOn4(){
                this.display4=false;
            },
            fun1(){
                // 创建匹配用户名的正则表达式
               var reg_uname=/^([a-z0-9\u4e00-\u9fa5]{2,12})$/i;
                if(reg_uname.test(this.uname)){
                   this.isActive1=true;                                               
                }else{
                   this.isActive2=true;
                }
            },
            fun2(){
                // 创建匹配邮箱的正则表达式
                 var reg_email=/^([a-zA-Z\d])(\w|\-)+@[a-zA-Z\d]+\.[a-zA-Z]{2,4}$/;
                 if(reg_email.test(this.email)){
                    this.isActive3=true;                    
                }else{
                    this.isActive4=true;
                }
            },
            fun3(){
                 // 创建匹配密码的正则表达式
                 var reg_upwd=/^[a-z0-9]{6,12}$/i;
                  if(reg_upwd.test(this.upwd)){
                    this.isActive5=true;                  
                }else{
                    this.isActive6=true;
                }
            },
            fun4(){
                if(this.reupwd===this.upwd){
                  this.isActive7=true;
                }else{
                  this.isActive8=true;
                }
            },

            register(){
                if(this.isActive1&&this.isActive3&&this.isActive5&&this.isActive7){
            //    发送ajax请求完成注册验证
            var url="register";
            var data=qs.stringify({uname:this.uname,email:this.email,upwd:this.upwd,reupwd:this.reupwd});
            console.log(data);
            this.axios.post(url,data,{headers:{'Content-Type':'application/x-www-form-urlencoded;charset=UTF-8'}})
            .then(res=>{
                console.log("结果是："+res);
                console.log(res.data.code);
                if(res.data.code==1){
                    alert("注册成功");
                }else{
                    alert("该用户名已经被注册,请重新注册");
                }
            })
            .catch(err=>{
                alert("404")
                console.log(err);
            })
            }else{
                alert("注册失败")
            }
          }

    }
    
}
</script>
<style scoped>
@import  '../css/comm.css';
 .breadcrumb-item + .breadcrumb-item::before {

            content: "";
        }
        .ml-8{
            margin-left: 8rem;
        }
        #protocol-con{
            width: 600px;
            height: 95px;
            margin-top: 2rem;
            border: 1px solid #ccc;
            padding: 8px;
            overflow-y: scroll;
            color: #666;
        }
        h5{
            display: block;
            font-size: 0.83em;
            -webkit-margin-before: 1.67em;
            -webkit-margin-after: 1.67em;
            -webkit-margin-start: 0px;
            -webkit-margin-end: 0px;
            font-weight: bold;
            margin: 0;
        }
        p{
            display: block;
            font-size: 0.7em;
            -webkit-margin-before: 1em;
            -webkit-margin-after: 1em;
            -webkit-margin-start: 0px;
            -webkit-margin-end: 0px;
            margin: 0;
        }
        li{
            display: block;
            font-size: 0.7em;
            list-style-type: disc;
            -webkit-margin-before: 1em;
            -webkit-margin-after: 1em;
            -webkit-margin-start: 0px;
            -webkit-margin-end: 0px;
            -webkit-padding-start: 40px;
            margin: 0;
            padding: 0;
        }
        ul{
            margin: 0;
        }
        .container{
           margin:0 auto;
        }
         #protocol-con{
            width: 63%;
        }
        #s1,#s2,#s3,#s4{
            font-size: text_small;
            margin-left:8px;
            color:lightcoral;
        }
        .vali_info{
            display:none;
        }
        .vali_success{
            background-image:url("../../assets/img/ok.png");
            padding-left:15px;
            width:0px;height:15px;
            overflow:hidden;
            display: inline-block;
        }
        .vali_fail{
            color:rgb(238, 15, 34);
            display: inline-block;
            margin-left:10px;
        }
       
       
</style>




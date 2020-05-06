const express = require('express')
const app = express()
const db =require('./module/db2')
const tools = require('./module/tools')
const bodyparser = require('body-parser')
app.use(bodyparser.json())
app.post('/sendCode',async (req,res)=>{
    console.log(13);
    
    try{
    const {phoneNum} = req.body
    const codeInfo = await db.findOne('userCodeList',{
        phoneNum
    });
    if(codeInfo){
        const time  = Date.now()-codeInfo.sendTime;
        if(time>1000*60){
            const randomCode = tools.getRandom(100000,999999);
            await db.updateOne('userCodeList',{phoneNum},{
                $set:{
                    code,
                    sendTime:Date.now()
                }
            })
            res.json({
                ok:1,
                code,
                msg:'发送验证码成功'
            })
        }else{
            res.json({
                ok:-1,
                msg:"请不要发送太频繁,请在"+(60-Number.parseInt(time/1000))+"秒以后再次发送"
            })
        }
    }else{
        const code = tools.getRandom(100000,999999);
        await db.insertOne("userCodeList",{
            code,
            phoneCode,
            sendTime:Date.now()
        });
        res.json({
            ok:1,
            code,
            msg:"发送验证码成功"
        })
    }
    }catch(err){
        res.json({
            ok:-1,
            err
        })
    }
    
})
app.post('/login', async (req,res)=>{
    try{
        const {phoneNum,code} =req.body
        const codeInfo = await db.findOne('userCodeList',{
            phoneNum
        });
            if(code=codeInfo.code){
                const userMsg = await db.findOne('userMsg',{
                    phoneNum
                });
                if(!userMsg){
                    await db.insertOne('userMsg',{
                        phoneNum,
                        createTime : Date.now(),
                        lastLoginTime:Date.now()
                    })
                }else{
                    await db.updateOne('userMsg',{phoneNum},{
                        $set:{
                            lastLoginTime:Date.now()
                        }
                    })
                }
                res.json({
                    ok:1,
                    msg:'登录成功'
                })
            }else{
                res.json({
                    ok:-1,
                    msg:'输入的验证码错误'
                })
            }
    }catch(err){
        res.json({
            ok:-1,
            err
        })
    }
   
})
app.listen(80,()=>{
    console.log('success');
})
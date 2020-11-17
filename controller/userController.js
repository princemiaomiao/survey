var ejs=require('ejs');
var ms=require('../util/mysqlUtil');
var sql=require('../util/sqlMapUtil').sql;
var dateUtil=require('../util/dateUtil');
var logoutConfig=require('../config/config').config.logoutConfig;

/*进入登录页*/
exports.toLogin=function(req,res,next){
    res.setHeader("Access-Control-Allow-Origin","*")
    if(logoutConfig.user!=''){
        res.redirect(logoutConfig.user);
    }else{
        res.render('login',{});
    }
}

exports.login=function(req,res,next){
    // setTimeout(function(){
        //所有的逻辑
    var postParam=req.body;
    ms.exc(ejs.render(sql.loginSQL.userLoginInfo,postParam),function(userInfo){
        var result={code:1};
        if(userInfo.length>0){
            /*放入session*/
            req.session.user={
                uid:userInfo[0].uid,
                username:userInfo[0].username
            };
            result['code']=0;
            result['msg']='success';
            return res.send(result);
        }else{
            result['code'] = -1;
            result['msg'] = 'fail';
            return res.send(result);

        }
    });
    // },10000);
}

exports.index=function (req,res,next) {
    var queryParam=req.query;
    var sid=parseInt(queryParam.stype?queryParam.stype:0);
    var user = req.session.user;    
    if(sid==0&&user.uid){
        res.redirect('select');
    }
    else if (!user.uid) {
        res.redirect('login');
    }
    else{
        req.session.stype={
            stype:sid
        };
        res.render('index',{user:req.session.user, stype:req.session.stype});
    }
}

exports.select=function (req,res,next) {
    var queryParam=req.body;
    var user = req.session.user;
    queryParam['uid'] = user.uid;
    var result={};
    ms.exc(ejs.render(sql.loginSQL.surveySelect,queryParam),function(surveySelectList){        
        result['surveyList']=surveySelectList;
        res.render('select',result);
    })    
}

exports.submit=function (req,res,next) {
    var user = req.session.user;
    var stype = req.session.stype;
    var postParam = JSON.parse(req.body.score);
    postParam['uid'] = user.uid;
    postParam['date'] = '\'' + dateUtil.format_datetime(new Date()) + '\'';
    postParam['surveyTypeId'] = stype.stype;
    postParam['question111'] = postParam['question111']==null?'':postParam['question111'];
    postParam['question112'] = postParam['question112']==null?'':postParam['question112'];    
    postParam['question113'] = postParam['question113']==null?'':postParam['question113'];
    postParam['question211'] = postParam['question211']==null?'':postParam['question211'];
    postParam['question212'] = postParam['question212']==null?'':postParam['question212'];
    postParam['question221'] = postParam['question221']==null?'':postParam['question221'];
    postParam['question222'] = postParam['question222']==null?'':postParam['question222'];
    postParam['question223'] = postParam['question223']==null?'':postParam['question223'];
    postParam['question311'] = postParam['question311']==null?'':postParam['question311'];
    postParam['question312'] = postParam['question312']==null?'':postParam['question312'];
    postParam['question321'] = postParam['question321']==null?'':postParam['question321'];
    postParam['question322'] = postParam['question322']==null?'':postParam['question322'];
    postParam['question323'] = postParam['question323']==null?'':postParam['question323'];
    postParam['question411'] = postParam['question411']==null?'':postParam['question411'];
    postParam['question412'] = postParam['question412']==null?'':postParam['question412'];
    postParam['question511'] = postParam['question511']==null?'':postParam['question511'];
    postParam['question512'] = postParam['question512']==null?'':postParam['question512'];
    postParam['question521'] = postParam['question521']==null?'':postParam['question521'];
    postParam['question522'] = postParam['question522']==null?'':postParam['question522'];
    postParam['question611'] = postParam['question611']==null?'':postParam['question611'];
    postParam['question612'] = postParam['question612']==null?'':postParam['question612'];
    postParam['question613'] = postParam['question613']==null?'':postParam['question613'];
    postParam['question711'] = postParam['question711']==null?'':postParam['question711'];
    postParam['question712'] = postParam['question712']==null?'':postParam['question712'];
    postParam['question713'] = postParam['question713']==null?'':postParam['question713'];
    postParam['comment'] = postParam['comment']==null?'':postParam['comment'];
    postParam['shanghai'] = postParam['shanghai']==null&&postParam['shanghai-Comment']==null?'\'\'':'\''+((postParam['shanghai']==null?'':postParam['shanghai']) + (postParam['shanghai-Comment']==null?'':',' +postParam['shanghai-Comment']))+'\'';
    postParam['chengdu'] = postParam['chengdu']==null&&postParam['chengdu-Comment']==null?'\'\'':'\''+((postParam['chengdu']==null?'':postParam['chengdu']) + (postParam['chengdu-Comment']==null?'':',' +postParam['chengdu-Comment']))+'\'';
    postParam['beijing'] = postParam['beijing']==null&&postParam['beijing-Comment']==null?'\'\'':'\''+((postParam['beijing']==null?'':postParam['beijing']) + (postParam['beijing-Comment']==null?'':',' +postParam['beijing-Comment']))+'\'';
    postParam['chongqing'] = postParam['chongqing']==null&&postParam['chongqing-Comment']==null?'\'\'':'\''+((postParam['chongqing']==null?'':postParam['chongqing']) + (postParam['chongqing-Comment']==null?'':',' +postParam['chongqing-Comment']))+'\'';
    postParam['zhengzhou'] = postParam['zhengzhou']==null&&postParam['zhengzhou-Comment']==null?'\'\'':'\''+((postParam['zhengzhou']==null?'':postParam['zhengzhou']) + (postParam['zhengzhou-Comment']==null?'':',' +postParam['zhengzhou-Comment']))+'\'';
    postParam['suzhou'] = postParam['suzhou']==null&&postParam['suzhou-Comment']==null?'\'\'':'\''+((postParam['suzhou']==null?'':postParam['suzhou']) + (postParam['suzhou-Comment']==null?'':',' +postParam['suzhou-Comment']))+'\'';
    console.log(postParam);
    ms.exc(ejs.render(sql.loginSQL.surveyResult,postParam),function(surveyResultInfo){        
        ms.exc(ejs.render(sql.loginSQL.surveyUpdate,postParam),function(updateInfo){
            var result={};  
            result['code']=0;
            result['msg']='success';
            return res.send(result);
        })
    });
}

exports.logout=function (req,res,next) {
    delete(req.session.user);
    delete(req.session.stype);
    res.render('logout',{});
}

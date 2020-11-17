/*过滤用户路径*/
exports.filterCheck=function(req,res,next){
    var isToLogin=req.baseUrl==''?true:false;
    var isLogin=req.baseUrl=='/login'?true:false;
    var isLogout=req.baseUrl=='/logout'?true:false;
    if( isToLogin || isLogin || isLogout){
        next();
    }else{
        if(req.session.user){
            next();
        }else{
            res.redirect('/');
        }
    }
}

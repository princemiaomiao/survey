var user=require('../controller/userController');

exports.route=function(app){
    /*进入登录页*/
    app.get('/',user.toLogin);
    app.post('/login',user.login);
    /*进入首页*/
    app.get("/index",user.index);
    app.get("/select",user.select);
    app.post("/submit",user.submit);
    app.get("/logout",user.logout);
}

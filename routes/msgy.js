var express = require('express');
var cors=require("cors");
var router = express.Router();
var mysql = require('mysql');
var bodyparser = require('body-parser');
var mysql = require('mysql');
var mysqli = require('mysqli'); 
var db=require('../databse');
var app = express();
//var check = require('express-validator')(alidationResult);
var hash = require('pbkdf2-password')()
var hasher = require('pbkdf2-password')()
var path = require('path');
var session = require('express-session');
var ezp=require('../constants');
const { check, validationResult } = require('express-validator');
const json = require('body-parser/lib/types/json');
//const json = require('body-parser/lib/types/json');
var urlencodedparser = bodyparser.urlencoded({  extended: false});
var MySQLStore = require('express-mysql-session')(session);
var urlencodedparser = bodyparser.urlencoded({  extended: false});
var fs = require('fs');
var schemaFilePath = path.join(__dirname, 'schema.sql');
var HTMLParser = require('node-html-parser');
const { toString } = require('body-parser');
const { parseUrl } = require('mysql/lib/ConnectionConfig');
const { html } = require('cheerio/lib/api/manipulation');
var uid = require('uid-safe');
var cons = require("../constants");
var QRCode = require('qrcode');
const { NULL } = require('mysql/lib/protocol/constants/types');
const { url } = require('inspector');
var app = express();
const multer  = require('multer');
const { stringify } = require('querystring');
const { JSONCookies } = require('cookie-parser');
//app.use(bodyParser.urlencoded({ extended: false }));

router.use(express.json());
//router.use(bodyparser.json());


//app.use(session({secret: 'ssshhhhh'}));


 
var sessionStore = new MySQLStore(cons.options);
router.use(session({
  key: cons.ses.key,
  secret: cons.ses.secret,
  store: sessionStore,
  resave: cons.ses.resave,
  saveUninitialized: cons.ses.saveUninitialized
}));
// Configure mysql



//Configure session middleware
//Configuring Middleware


   
router.get('/', function(req, res) {
  var sess;
sess = req.session;
var msid = req.params.id;
//sess.isvalid = false;
  var map=req.body;
  var email = map.email;
  var pass = map.password;
  
  //var sess=req.session;
   

  var inv;
  var cid;
  var bod;
  if (sess.isvalid) {
    
  inv='messages'+sess.logid;
  dinv='trktble'+sess.logid;
 //db.query('SELECT * FROM ?? ',[inv],  function (err, pyr, fields) {
 db.query('SELECT * FROM ??  ORDER BY `message_id` DESC ',[inv],  function (err, msgtx, fields) {
  db.query('SELECT * FROM ?? ',[dinv],  function (err, invm, fields) {
  
  if (err) throw err;
  
  
var root = HTMLParser.parse(
  ('<form action="https://ezpay.com/secure" method="get"><input type="hidden" name="business" value="0">')+
+('<input type="hidden" name="cmd" value="x-click">')+
+('<input type="hidden" name="item_name" value="galaxy S7">')+
+('<input type="hidden" name="amount" value="5500"><input type="hidden" name="currency_code" value="ETB">')+
+('<input type="image" name="submit" border="0" src="http://ezpay.com/images/btn_buynow_LG.webp"alt="Buy Now">')+
+('<img alt="" border="0" width="1" height="1" src="http://ezpay.com/images/btn_buynow_LG.webp" ></form>'));


  
 //var x = JSON.stringify(root);
  //var daf =[];
  
  var url = 'secure';
 //var h = escape.html(root)
 //var x =parseUrl(salt,options)
 
 function decodeBase64 (base64) {
  return Buffer.from(base64, 'base64').toString('utf8')
}

function encodeBase64 (string) {
  return Buffer.from(string, 'utf8').toString('base64')
}
var x=encodeBase64(url)
var z=decodeBase64('aHR0cHM6Ly9lenBheS5jb20vc2VjdXJl')
var home='msgga';
var title ='All messages';
if(sess.pp==='1'){
  var ppt ='pp';
  var ppf ='ppf'
} else if (sess.pp==='0'){
 var ppt='lela'
 var ppf ='nopp'
 if(sess.gen==='male'){
  var gent='m';
} else if(sess.gen==='female'){
  var gent='g';
}
}
        if (sess.bz==true) {
          var bnz='bz';
        } if (sess.usr==true){
          var bnz='usr'
        } if (!sess.pp) {
          var pp='lst';
        } else if(sess.pp.length>0)
        {var pp =pp} var tyEr;
            
            tyEr ={msgtx:msgtx,[ppf]:sess.pmg,p:'7',bbtn:ezp.btns[sess.ln],addp:ezp.addp[sess.ln],withd:ezp.withd[sess.ln],lnk:ezp.lnk[sess.ln],
            invv:ezp.inv[sess.ln],dash:ezp.dashb[sess.ln],sndm:ezp.sndm[sess.ln],ana:ezp.ana[sess.ln],
            shpk:ezp.shpk[sess.ln],infb:ezp.infb[sess.ln],inlrt:ezp.invlrt[sess.ln],or:ezp.orders[sess.ln],
            task:ezp.task[sess.ln],tran:ezp.transactions[sess.ln],[sess.ln]:true,[bnz]:true, 
           [ppt]:true, [gent]:true, 
            title: title,[ezp.bnk]:true,}
        res.render(home, tyEr);

  //res.send(msgtx);
  
      //res.render('cards', { usrid: cid});
     
      //res.send({ title: 'edit-profile', daf: daf});

    //res.json(sess.id);
    
  
      //res.send(cid);
    })
 });
}
else { 
      
  //sessionStore.close();
   
  res.redirect('/');  

}
});
// handler for the /user/:id path, which prints the user ID


/* GET home page. */



module.exports = router;


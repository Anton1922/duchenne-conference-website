'use strict';

/***Smooth scroll to anchors***/
const anchors = document.querySelectorAll('a[href*="#"]');


for (let i = 0; i < anchors.length; i++) {
  const anchor = anchors[i];

  anchor.addEventListener('click', function (e) {
    e.preventDefault();
    
    const sectionID = anchor.getAttribute('href').substr(1);
    console.log('sectionID', sectionID);
    
    document.getElementById(sectionID).scrollIntoView({
      behavior: 'smooth',
      block: 'start',
    })
  })
}

// (function(){
//   var _id="fd8aa2ad92487bedd58fb30875b228a1";
//   while(document.getElementById("timer"+_id))_id=_id+"0";
//   document.write("<div id='timer"+_id+"' style='min-width:551px;height:110px;'></div>");
//   var _t=document.createElement("script");
//   _t.src="//megatimer.ru/timer/timer.min.js?v=1";
//   var _f=function(_k){
//     var l=new MegaTimer(_id, {
//       "view":[1,1,1,1],
//       "type":{
//         "currentType":"1",
//         "params":{
//           "usertime":true,"tz":"3","utc":1631264400000
//         }
//       },
//       "design":{
//         "type":"circle",
//         "params":{
//           "width":"6",
//           "radius":"48",
//           "line":"gradient",
//           "line-color":["#f2666f","#d72731"],
//           "background":"solid",
//           "background-color":"rgba(251,26,27,0.24)",
//           "direction":"direct",
//           "number-font-family":{
//             "family":"Comfortaa",
//             "link":"<link href='//fonts.googleapis.com/css?family=Comfortaa&subset=latin,cyrillic' rel='stylesheet' type='text/css'>"
//           },
//           "number-font-size":"56",
//           "number-font-color":"#ffffff",
//           "separator-margin":"13",
//           "separator-on":true,
//           "separator-text":":",
//           "text-on":true,
//           "text-font-family":{
//             "family":"Comfortaa",
//             "link":"<link href='//fonts.googleapis.com/css?family=Comfortaa&subset=latin,cyrillic' rel='stylesheet' type='text/css'>"
//           },
//           "text-font-size":"13",
//           "text-font-color":"#ffffff"
//         }
//       },
//       "designId":9,
//       "theme":"black",
//       "width":551,
//       "height":110
//     });
//     if(_k!=null)l.run();
//   };
//   _t.onload=_f;
//   _t.onreadystatechange=function(){
//     if(_t.readyState=="loaded")_f(1);
//   };
// var _h=document.head||document.getElementsByTagName("head")[0];
// _h.appendChild(_t);
// }).call(this);
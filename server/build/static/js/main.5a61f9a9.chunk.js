(this["webpackJsonpweather-app"]=this["webpackJsonpweather-app"]||[]).push([[0],{12:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),c=a(4),l=a.n(c),i=a(1),u=function(e){var t=e.setZipCode,a=Object(n.useState)(""),c=Object(i.a)(a,2),l=c[0],u=c[1],s=/^\d{5}$/;return r.a.createElement("div",{className:"splash"},r.a.createElement("div",{className:"splash-content"},r.a.createElement("h1",null,"WEATHERMAN"),r.a.createElement("h2",null,"Enter your zipcode:"),r.a.createElement("form",{onSubmit:function(e){e.preventDefault(),s.test(l)&&t(l)}},r.a.createElement("input",{type:"text",placeholder:"55555",required:!0,value:l,onChange:function(e){return u(e.target.value)}}))))},s=a(14),m=function(e){var t=e.data,a=t.weather[0].icon;return r.a.createElement("div",{className:"forecast-card"},r.a.createElement("div",null,Object(s.a)(new Date(1e3*t.dt),"p")),r.a.createElement("div",null,r.a.createElement("img",{src:"https://openweathermap.org/img/wn/".concat(a,"@2x.png"),alt:t.weather[0].description})),r.a.createElement("div",{className:"forecast-temp"},Math.round(t.main.temp),"\xb0"))},o=a(2),d=a.n(o),p=a(5),h=function(){var e=Object(p.a)(d.a.mark((function e(t){var a,n;return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a="/api/weather/".concat(t),e.next=3,fetch(a);case 3:return n=e.sent,e.next=6,n.json();case 6:return e.abrupt("return",e.sent);case 7:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),E=function(e){var t=e.zipCode,a=e.setZipCode,c=Object(n.useState)(null),l=Object(i.a)(c,2),u=l[0],s=l[1],o=Object(n.useState)(null),d=Object(i.a)(o,2),p=d[0],E=d[1],f=Object(n.useState)(!1),v=Object(i.a)(f,2),b=v[0],w=v[1];return Object(n.useEffect)((function(){h(t).then((function(e){s(e.currentWeather),E(e.forecast)})).catch((function(e){w(!0)}))}),[t]),u&&p?r.a.createElement("div",{className:"weather-display"},r.a.createElement("div",{className:"change",onClick:function(){return a("")}},"Change Location"),r.a.createElement("h1",null,u.name),r.a.createElement("h2",null,u.weather[0].description),r.a.createElement("div",{className:"temp"},Math.round(u.main.temp),"\xb0"),r.a.createElement("div",{className:"sub-info"},r.a.createElement("div",null,"Feels like: ",Math.round(u.main.feels_like),"\xb0"),r.a.createElement("div",null,"Humidity: ",u.main.humidity,"%"),r.a.createElement("div",null,"Wind: ",Math.round(u.wind.speed)," mph")),r.a.createElement("div",{className:"forecast"},p.map((function(e){return r.a.createElement(m,{data:e,key:e.dt})})))):b?r.a.createElement("div",{className:"weather-display"},r.a.createElement("h2",null,"Failed to fetch weather data."),r.a.createElement("h2",null,"Zip code may be invalid."),r.a.createElement("div",{className:"failed-zip",onClick:function(){return a("")}},"Change Zip")):""},f=function(){var e=Object(n.useState)(""),t=Object(i.a)(e,2),a=t[0],c=t[1];return r.a.createElement("div",{className:"container"},a?r.a.createElement(E,{zipCode:a,setZipCode:c}):r.a.createElement(u,{setZipCode:c}))};l.a.render(r.a.createElement(f,null),document.getElementById("root"))},6:function(e,t,a){e.exports=a(12)}},[[6,1,2]]]);
//# sourceMappingURL=main.5a61f9a9.chunk.js.map
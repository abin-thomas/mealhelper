(this.webpackJsonpmealhelper=this.webpackJsonpmealhelper||[]).push([[0],[,,,,,,,,,,function(e,t,n){e.exports=n(24)},,,,,function(e,t,n){},function(e,t,n){},function(e,t,n){},,function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),l=n(2),s=n.n(l),c=(n(15),n(16),n(6)),u=n(7),i=n(9),m=n(8),o=(n(17),n(1)),E=n.n(o),d=n(3),p=n(4),g=function(){var e=Object(a.useState)([]),t=Object(p.a)(e,2),n=t[0],l=t[1];Object(a.useEffect)((function(){s()}),[]);var s=function(){var e=Object(d.a)(E.a.mark((function e(){var t,n;return E.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("https://www.themealdb.com/api/json/v1/1/random.php");case 2:return t=e.sent,e.next=5,t.json();case 5:n=e.sent,l(n.meals);case 7:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return r.a.createElement("div",null,r.a.createElement("h2",null,"Welcome to MyMealDB"),r.a.createElement("p",null,"A Webpage about meals created using ReactJS as a project for my Course. I am using the TheMealDB API in this to get the details about the different meals."),r.a.createElement("p",null,"The following is a random meal fetched from the API."),n.map((function(e){return r.a.createElement("div",{key:e.idMeal},r.a.createElement("img",{src:e.strMealThumb,height:"250px",alt:e.strMeal}),r.a.createElement("div",null,r.a.createElement("h4",null,"Name : ",e.strMeal),r.a.createElement("p",null,"Meal Category : ",e.strCategory),r.a.createElement("p",null,"Area Originated : ",e.strArea),r.a.createElement("p",null,r.a.createElement("h4",null,"Ingredients :")," ",r.a.createElement("br",null),r.a.createElement("div",null,e.strIngredient1?r.a.createElement("span",null,e.strIngredient1," : ",e.strMeasure1,r.a.createElement("br",null)):r.a.createElement("span",null),e.strIngredient2?r.a.createElement("span",null,e.strIngredient2," : ",e.strMeasure2,r.a.createElement("br",null)):r.a.createElement("span",null),e.strIngredient3?r.a.createElement("span",null,e.strIngredient3," : ",e.strMeasure3,r.a.createElement("br",null)):r.a.createElement("span",null),e.strIngredient4?r.a.createElement("span",null,e.strIngredient4," : ",e.strMeasure4,r.a.createElement("br",null)):r.a.createElement("span",null),e.strIngredient5?r.a.createElement("span",null,e.strIngredient5," : ",e.strMeasure5,r.a.createElement("br",null)):r.a.createElement("span",null),e.strIngredient6?r.a.createElement("span",null,e.strIngredient6," : ",e.strMeasure6,r.a.createElement("br",null)):r.a.createElement("span",null),e.strIngredient7?r.a.createElement("span",null,e.strIngredient7," : ",e.strMeasure7,r.a.createElement("br",null)):r.a.createElement("span",null),e.strIngredient8?r.a.createElement("span",null,e.strIngredient8," : ",e.strMeasure8,r.a.createElement("br",null)):r.a.createElement("span",null),e.strIngredient9?r.a.createElement("span",null,e.strIngredient9," : ",e.strMeasure9,r.a.createElement("br",null)):r.a.createElement("span",null),e.strIngredient10?r.a.createElement("span",null,e.strIngredient10," : ",e.strMeasure10,r.a.createElement("br",null)):r.a.createElement("span",null),e.strIngredient11?r.a.createElement("span",null,e.strIngredient11," : ",e.strMeasure11,r.a.createElement("br",null)):r.a.createElement("span",null),e.strIngredient12?r.a.createElement("span",null,e.strIngredient12," : ",e.strMeasure12,r.a.createElement("br",null)):r.a.createElement("span",null),e.strIngredient13?r.a.createElement("span",null,e.strIngredient13," : ",e.strMeasure13,r.a.createElement("br",null)):r.a.createElement("span",null),e.strIngredient14?r.a.createElement("span",null,e.strIngredient14," : ",e.strMeasure14,r.a.createElement("br",null)):r.a.createElement("span",null),e.strIngredient15?r.a.createElement("span",null,e.strIngredient15," : ",e.strMeasure15,r.a.createElement("br",null)):r.a.createElement("span",null),e.strIngredient16?r.a.createElement("span",null,e.strIngredient16," : ",e.strMeasure16,r.a.createElement("br",null)):r.a.createElement("span",null),e.strIngredient17?r.a.createElement("span",null,e.strIngredient17," : ",e.strMeasure17,r.a.createElement("br",null)):r.a.createElement("span",null),e.strIngredient18?r.a.createElement("span",null,e.strIngredient18," : ",e.strMeasure18,r.a.createElement("br",null)):r.a.createElement("span",null),e.strIngredient19?r.a.createElement("span",null,e.strIngredient19," : ",e.strMeasure19,r.a.createElement("br",null)):r.a.createElement("span",null),e.strIngredient20?r.a.createElement("span",null,e.strIngredient20," : ",e.strMeasure20,r.a.createElement("br",null)):r.a.createElement("span",null))),r.a.createElement("p",null,"Preparation Instruction:",r.a.createElement("br",null),e.strInstructions),r.a.createElement("p",null,"YouTube :",r.a.createElement("a",{href:e.strYoutube,target:"_blank",rel:"noopener noreferrer"},e.strYoutube))))})))},b=(n(19),n(20),n(21),function(e){var t=Object(a.useState)([]),n=Object(p.a)(t,2),l=n[0],s=n[1];Object(a.useEffect)((function(){c()}));var c=function(){var t=Object(d.a)(E.a.mark((function t(){var n,a;return E.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,fetch("https://www.themealdb.com/api/json/v1/1/lookup.php?i="+e.mealID);case 2:return n=t.sent,t.next=5,n.json();case 5:a=t.sent,s(a.meals);case 7:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}}();return r.a.createElement("div",null,r.a.createElement("p",null,"Here you will be able to view a the full details about the meal from the API."),l.map((function(e){return r.a.createElement("div",{key:e.idMeal,id:"SingleMealDiv"},r.a.createElement("img",{src:e.strMealThumb,height:"400px",width:"50%",alt:e.strMeal}),r.a.createElement("div",null,r.a.createElement("h4",null,"Name : ",e.strMeal),r.a.createElement("p",null,"Meal Category : ",e.strCategory),r.a.createElement("p",null,"Area Originated : ",e.strArea),r.a.createElement("p",null,"Ingredients : ",r.a.createElement("br",null),r.a.createElement("div",null,e.strIngredient1?r.a.createElement("span",null,e.strIngredient1," : ",e.strMeasure1,r.a.createElement("br",null)):r.a.createElement("span",null),e.strIngredient2?r.a.createElement("span",null,e.strIngredient2," : ",e.strMeasure2,r.a.createElement("br",null)):r.a.createElement("span",null),e.strIngredient3?r.a.createElement("span",null,e.strIngredient3," : ",e.strMeasure3,r.a.createElement("br",null)):r.a.createElement("span",null),e.strIngredient4?r.a.createElement("span",null,e.strIngredient4," : ",e.strMeasure4,r.a.createElement("br",null)):r.a.createElement("span",null),e.strIngredient5?r.a.createElement("span",null,e.strIngredient5," : ",e.strMeasure5,r.a.createElement("br",null)):r.a.createElement("span",null),e.strIngredient6?r.a.createElement("span",null,e.strIngredient6," : ",e.strMeasure6,r.a.createElement("br",null)):r.a.createElement("span",null),e.strIngredient7?r.a.createElement("span",null,e.strIngredient7," : ",e.strMeasure7,r.a.createElement("br",null)):r.a.createElement("span",null),e.strIngredient8?r.a.createElement("span",null,e.strIngredient8," : ",e.strMeasure8,r.a.createElement("br",null)):r.a.createElement("span",null),e.strIngredient9?r.a.createElement("span",null,e.strIngredient9," : ",e.strMeasure9,r.a.createElement("br",null)):r.a.createElement("span",null),e.strIngredient10?r.a.createElement("span",null,e.strIngredient10," : ",e.strMeasure10,r.a.createElement("br",null)):r.a.createElement("span",null),e.strIngredient11?r.a.createElement("span",null,e.strIngredient11," : ",e.strMeasure11,r.a.createElement("br",null)):r.a.createElement("span",null),e.strIngredient12?r.a.createElement("span",null,e.strIngredient12," : ",e.strMeasure12,r.a.createElement("br",null)):r.a.createElement("span",null),e.strIngredient13?r.a.createElement("span",null,e.strIngredient13," : ",e.strMeasure13,r.a.createElement("br",null)):r.a.createElement("span",null),e.strIngredient14?r.a.createElement("span",null,e.strIngredient14," : ",e.strMeasure14,r.a.createElement("br",null)):r.a.createElement("span",null),e.strIngredient15?r.a.createElement("span",null,e.strIngredient15," : ",e.strMeasure15,r.a.createElement("br",null)):r.a.createElement("span",null),e.strIngredient16?r.a.createElement("span",null,e.strIngredient16," : ",e.strMeasure16,r.a.createElement("br",null)):r.a.createElement("span",null),e.strIngredient17?r.a.createElement("span",null,e.strIngredient17," : ",e.strMeasure17,r.a.createElement("br",null)):r.a.createElement("span",null),e.strIngredient18?r.a.createElement("span",null,e.strIngredient18," : ",e.strMeasure18,r.a.createElement("br",null)):r.a.createElement("span",null),e.strIngredient19?r.a.createElement("span",null,e.strIngredient19," : ",e.strMeasure19,r.a.createElement("br",null)):r.a.createElement("span",null),e.strIngredient20?r.a.createElement("span",null,e.strIngredient20," : ",e.strMeasure20,r.a.createElement("br",null)):r.a.createElement("span",null))),r.a.createElement("p",null,"Preparation Instruction:",r.a.createElement("br",null),e.strInstructions),r.a.createElement("p",null,"YouTube :",r.a.createElement("a",{href:e.strYoutube,target:"_blank",rel:"noopener noreferrer"},e.strYoutube))))})))}),h=function(e){s.a.render(r.a.createElement(b,{mealID:e}),document.getElementById("ContentRight"))},f=function(e){var t,n=Object(a.useState)([]),l=Object(p.a)(n,2),s=l[0],c=l[1];Object(a.useEffect)((function(){window.scrollTo(0,0),e.mealCategory&&(t="https://www.themealdb.com/api/json/v1/1/filter.php?c="+e.mealCategory),e.mealByArea&&(t="https://www.themealdb.com/api/json/v1/1/filter.php?a="+e.mealByArea),e.ingredientName&&(t="https://www.themealdb.com/api/json/v1/1/filter.php?i="+e.ingredientName),u()}),[]);var u=function(){var e=Object(d.a)(E.a.mark((function e(){var n,a;return E.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch(t);case 2:return n=e.sent,e.next=5,n.json();case 5:a=e.sent,c(a.meals);case 7:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return r.a.createElement("div",null,s.map((function(e){return r.a.createElement("div",{key:e.idMeal,id:"single_MealDiv",onClick:h.bind(void 0,e.idMeal)},r.a.createElement("h4",null,e.strMeal),r.a.createElement("img",{src:e.strMealThumb,height:"100%",width:"100%",alt:e.strMealThumb}))})))},I=function(e){s.a.render(r.a.createElement(f,{mealCategory:e}),document.getElementById("ContentRight"))},v=function(){var e=Object(a.useState)([]),t=Object(p.a)(e,2),n=t[0],l=t[1];Object(a.useEffect)((function(){s()}),[]);var s=function(){var e=Object(d.a)(E.a.mark((function e(){var t,n;return E.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("https://www.themealdb.com/api/json/v1/1/categories.php");case 2:return t=e.sent,e.next=5,t.json();case 5:n=e.sent,l(n.categories);case 7:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return r.a.createElement("div",null,r.a.createElement("h2",null,"List of different Meal Categories"),r.a.createElement("p",null,"Here you will be able to view a list of different meal categories from the API."),n.map((function(e){return r.a.createElement("div",{key:e.idCategory,id:"meal_catDiv",onClick:I.bind(void 0,e.strCategory)},r.a.createElement("h3",null,e.strCategory),r.a.createElement("img",{src:e.strCategoryThumb,height:"300px",width:"100%",alt:e.strCategory}))})))},M=(n(22),function(e){s.a.render(r.a.createElement(f,{mealByArea:e}),document.getElementById("ContentRight"))}),y=function(){var e=Object(a.useState)([]),t=Object(p.a)(e,2),n=t[0],l=t[1];Object(a.useEffect)((function(){s()}),[]);var s=function(){var e=Object(d.a)(E.a.mark((function e(){var t,n;return E.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("https://www.themealdb.com/api/json/v1/1/list.php?a=list");case 2:return t=e.sent,e.next=5,t.json();case 5:n=e.sent,l(n.meals);case 7:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return r.a.createElement("div",null,r.a.createElement("h2",null,"List of geographical wise meal types"),r.a.createElement("p",null,"Here you will be able to view a list of areas by which the meals are grouped from the API."),n.map((function(e){return r.a.createElement("div",{key:e.strArea,id:"meal_ByAreaDiv",onClick:M.bind(void 0,e.strArea)},r.a.createElement("h3",null,e.strArea))})))},w=(n(23),function(e){s.a.render(r.a.createElement(f,{ingredientName:e}),document.getElementById("ContentRight"))}),j=function(){var e=Object(a.useState)([]),t=Object(p.a)(e,2),n=t[0],l=t[1];Object(a.useEffect)((function(){s()}),[]);var s=function(){var e=Object(d.a)(E.a.mark((function e(){var t,n;return E.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("https://www.themealdb.com/api/json/v1/1/list.php?i=list");case 2:return t=e.sent,e.next=5,t.json();case 5:n=e.sent,l(n.meals);case 7:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),c=function(e){var t="https://www.themealdb.com/images/ingredients/";return t+=e,t+=".png"};return r.a.createElement("div",null,r.a.createElement("h2",null,"List of Ingredients"),r.a.createElement("p",null,"Here you will be able to view a list of ingredients used for meals from the API."),n.map((function(e){return r.a.createElement("div",{key:e.strIngredient,id:"ingredientDiv",onClick:w.bind(void 0,e.strIngredient)},r.a.createElement("h3",null,e.strIngredient),r.a.createElement("img",{src:c(e.strIngredient),height:"250px",alt:e.strIngredient}))})))},C=function(e){Object(i.a)(n,e);var t=Object(m.a)(n);function n(){return Object(c.a)(this,n),t.apply(this,arguments)}return Object(u.a)(n,[{key:"selectDisplayPage",value:function(e){switch(e){case"Home":s.a.render(r.a.createElement(g,null),document.getElementById("ContentRight"));break;case"MealCategories":s.a.render(r.a.createElement(v,null),document.getElementById("ContentRight"));break;case"MealByArea":s.a.render(r.a.createElement(y,null),document.getElementById("ContentRight"));break;case"MealIngredients":s.a.render(r.a.createElement(j,null),document.getElementById("ContentRight"))}}},{key:"render",value:function(){return r.a.createElement("div",null,r.a.createElement("div",{className:"navList"},r.a.createElement("button",{type:"button",class:"btn btn-outline-primary btn-lg",onClick:this.selectDisplayPage.bind(this,"Home")},r.a.createElement("box-icon",{name:"home-alt"}),"Home")),r.a.createElement("div",{className:"navList"},r.a.createElement("button",{type:"button",class:"btn btn-outline-primary btn-lg",onClick:this.selectDisplayPage.bind(this,"MealCategories")},r.a.createElement("box-icon",{type:"solid",name:"food-menu"})," Meal Categories")),r.a.createElement("div",{className:"navList"},r.a.createElement("button",{type:"button",class:"btn btn-outline-primary btn-lg",onClick:this.selectDisplayPage.bind(this,"MealByArea")},r.a.createElement("box-icon",{name:"map-alt",type:"solid"})," Meal By Area")),r.a.createElement("div",{className:"navList"},r.a.createElement("button",{type:"button",class:"btn btn-outline-primary btn-lg",onClick:this.selectDisplayPage.bind(this,"MealIngredients")},r.a.createElement("box-icon",{name:"book-content"})," Ingredients")))}}]),n}(a.Component);var k=function(){return r.a.createElement("div",{className:"FullPage"},r.a.createElement("div",{className:"NavBar"}),r.a.createElement("div",{className:"Content"},r.a.createElement("div",{className:"ContentLeft"},r.a.createElement(C,null)),r.a.createElement("div",{id:"ContentRight",className:"ContentRight"},r.a.createElement(g,null))))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));s.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(k,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}],[[10,1,2]]]);
//# sourceMappingURL=main.fb98b765.chunk.js.map
(this["webpackJsonpmy-blog"]=this["webpackJsonpmy-blog"]||[]).push([[0],{20:function(e,t,i){e.exports=i(33)},25:function(e,t,i){},26:function(e,t,i){},33:function(e,t,i){"use strict";i.r(t);var a=i(0),n=i.n(a),u=i(17),s=i.n(u),l=(i(25),i(6)),r=i(7),o=(i(26),function(){return n.a.createElement(n.a.Fragment,null,n.a.createElement("h1",null,"Hello, welcome to my blog!"),n.a.createElement("p",null,"Lorem ipsum dolor sit amet consectetur adipisicing elit. A voluptatibus dolores adipisci nulla laboriosam unde, blanditiis repellat porro nemo necessitatibus itaque debitis, omnis officiis impedit? Impedit soluta libero ab aliquid?"),n.a.createElement("p",null,"Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatur, eos eius error vitae corporis quibusdam voluptatum aliquid deserunt architecto, sequi nisi sapiente labore libero placeat suscipit voluptas molestias officiis eligendi! Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sint, autem maxime ratione doloremque quos saepe magni eum atque dolorum veritatis similique, doloribus, repellendus harum qui? Rerum similique error magnam minima."),n.a.createElement("p",null,"Lorem ipsum dolor sit amet consectetur adipisicing elit. A voluptatibus dolores adipisci nulla laboriosam unde, blanditiis repellat porro nemo necessitatibus itaque debitis, omnis officiis impedit? Impedit soluta libero ab aliquid?"),n.a.createElement("p",null,"Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatur, eos eius error vitae corporis quibusdam voluptatum aliquid deserunt architecto, sequi nisi sapiente labore libero placeat suscipit voluptas molestias officiis eligendi! Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sint, autem maxime ratione doloremque quos saepe magni eum atque dolorum veritatis similique, doloribus, repellendus harum qui? Rerum similique error magnam minima."))}),c=function(){return n.a.createElement(n.a.Fragment,null,n.a.createElement("h1",null,"About Me"),n.a.createElement("p",null,"Lorem ipsum dolor sit amet consectetur adipisicing elit. A voluptatibus dolores adipisci nulla laboriosam unde, blanditiis repellat porro nemo necessitatibus itaque debitis, omnis officiis impedit? Impedit soluta libero ab aliquid?"),n.a.createElement("p",null,"Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatur, eos eius error vitae corporis quibusdam voluptatum aliquid deserunt architecto, sequi nisi sapiente labore libero placeat suscipit voluptas molestias officiis eligendi! Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sint, autem maxime ratione doloremque quos saepe magni eum atque dolorum veritatis similique, doloribus, repellendus harum qui? Rerum similique error magnam minima."),n.a.createElement("p",null,"Lorem ipsum dolor sit amet consectetur adipisicing elit. A voluptatibus dolores adipisci nulla laboriosam unde, blanditiis repellat porro nemo necessitatibus itaque debitis, omnis officiis impedit? Impedit soluta libero ab aliquid?"),n.a.createElement("p",null,"Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatur, eos eius error vitae corporis quibusdam voluptatum aliquid deserunt architecto, sequi nisi sapiente labore libero placeat suscipit voluptas molestias officiis eligendi! Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sint, autem maxime ratione doloremque quos saepe magni eum atque dolorum veritatis similique, doloribus, repellendus harum qui? Rerum similique error magnam minima."))},m=i(5),d=i.n(m),p=i(9),b=i(11),v=function(e){var t=e.articles;return n.a.createElement(n.a.Fragment,null,t.map((function(e,t){return n.a.createElement(l.b,{className:"article-list-item",to:"/article/".concat(e.name),key:t},n.a.createElement("h3",null,e.title),n.a.createElement("p",null,e.content[0].substring(0,150),"..."))})))},g=function(e){var t=e.comments;return n.a.createElement(n.a.Fragment,null,n.a.createElement("h3",null,"Comments:"),t.map((function(e,t){return n.a.createElement("div",{className:"comment",key:t},n.a.createElement("h4",null,e.username),n.a.createElement("p",null,e.text))})))},f=function(e){var t=e.articleName,i=e.setArticleInfo,u=Object(a.useState)(""),s=Object(b.a)(u,2),l=s[0],r=s[1],o=Object(a.useState)(""),c=Object(b.a)(o,2),m=c[0],v=c[1],g=function(){var e=Object(p.a)(d.a.mark((function e(){var a,n;return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("http://localhost:8000/api/articles/".concat(t,"/add-comment/"),{method:"POST",body:JSON.stringify({username:l,text:m}),headers:{"Content-Type":"application/json"}});case 2:return a=e.sent,e.next=5,a.json();case 5:n=e.sent,i(n),r(""),v("");case 9:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return n.a.createElement("div",{id:"add-comment-form"},n.a.createElement("h3",null,"Add A Comment"),n.a.createElement("label",null,"Name:",n.a.createElement("input",{type:"text",value:l,onChange:function(e){return r(e.target.value)}})),n.a.createElement("label",null,"Comment:",n.a.createElement("textarea",{cols:"50",rows:"4",value:m,onChange:function(e){return v(e.target.value)}})),n.a.createElement("button",{onClick:function(){return g()}},"Add Comment"))},h=function(e){var t=e.articleName,i=e.upvotes,a=e.setArticleInfo,u=function(){var e=Object(p.a)(d.a.mark((function e(){var i,n;return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("http://localhost:8000/api/articles/".concat(t,"/upvote"),{method:"POST"});case 2:return i=e.sent,e.next=5,i.json();case 5:n=e.sent,a(n);case 7:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return n.a.createElement("div",{id:"upvotes-section"},n.a.createElement("button",{onClick:function(){return u()}},"Add Upvote"),n.a.createElement("p",null,"This post has been upvoted ",i," times"))},q=function(){return n.a.createElement("h1",null,"404: Page Not Found")},E=[{name:"learn-react",title:"The Fastest Way to Learn React",content:["Welcome! Today we're going to be talking about the fastest way to\n            learn React. We'll be discussing some topics such as proin congue\n            ligula id risus posuere, vel eleifend ex egestas. Sed in turpis leo. \n            Aliquam malesuada in massa tincidunt egestas. Nam consectetur varius turpis, \n            non porta arcu porttitor non. In tincidunt vulputate nulla quis egestas. Ut \n            eleifend ut ipsum non fringilla. Praesent imperdiet nulla nec est luctus, at \n            sodales purus euismod.","Donec vel mauris lectus. Etiam nec lectus urna. Sed sodales ultrices dapibus. \n            Nam blandit tristique risus, eget accumsan nisl interdum eu. Aenean ac accumsan \n            nisi. Nunc vel pulvinar diam. Nam eleifend egestas viverra. Donec finibus lectus \n            sed lorem ultricies, eget ornare leo luctus. Morbi vehicula, nulla eu tempor \n            interdum, nibh elit congue tellus, ac vulputate urna lorem nec nisi. Morbi id \n            consequat quam. Vivamus accumsan dui in facilisis aliquet.","Etiam nec lectus urna. Sed sodales ultrices dapibus. \n            Nam blandit tristique risus, eget accumsan nisl interdum eu. Aenean ac accumsan \n            nisi. Nunc vel pulvinar diam. Nam eleifend egestas viverra. Donec finibus lectus \n            sed lorem ultricies, eget ornare leo luctus. Morbi vehicula, nulla eu tempor \n            interdum, nibh elit congue tellus, ac vulputate urna lorem nec nisi. Morbi id \n            consequat quam. Vivamus accumsan dui in facilisis aliquet."]},{name:"learn-node",title:"How to Build a Node Server in 10 Minutes",content:["In this article, we're going to be talking looking at a very quick way\n            to set up a Node.js server. We'll be discussing some topics such as proin congue\n            ligula id risus posuere, vel eleifend ex egestas. Sed in turpis leo. \n            Aliquam malesuada in massa tincidunt egestas. Nam consectetur varius turpis, \n            non porta arcu porttitor non. In tincidunt vulputate nulla quis egestas. Ut \n            eleifend ut ipsum non fringilla. Praesent imperdiet nulla nec est luctus, at \n            sodales purus euismod.","Donec vel mauris lectus. Etiam nec lectus urna. Sed sodales ultrices dapibus. \n            Nam blandit tristique risus, eget accumsan nisl interdum eu. Aenean ac accumsan \n            nisi. Nunc vel pulvinar diam. Nam eleifend egestas viverra. Donec finibus lectus \n            sed lorem ultricies, eget ornare leo luctus. Morbi vehicula, nulla eu tempor \n            interdum, nibh elit congue tellus, ac vulputate urna lorem nec nisi. Morbi id \n            consequat quam. Vivamus accumsan dui in facilisis aliquet.","Etiam nec lectus urna. Sed sodales ultrices dapibus. \n            Nam blandit tristique risus, eget accumsan nisl interdum eu. Aenean ac accumsan \n            nisi. Nunc vel pulvinar diam. Nam eleifend egestas viverra. Donec finibus lectus \n            sed lorem ultricies, eget ornare leo luctus. Morbi vehicula, nulla eu tempor \n            interdum, nibh elit congue tellus, ac vulputate urna lorem nec nisi. Morbi id \n            consequat quam. Vivamus accumsan dui in facilisis aliquet."]},{name:"my-thoughts-on-resumes",title:"My Thoughts on Resumes",content:["Today is the day I talk about something which scares most people: resumes.\n            In reality, I'm not sure why people have such a hard time with proin congue\n            ligula id risus posuere, vel eleifend ex egestas. Sed in turpis leo. \n            Aliquam malesuada in massa tincidunt egestas. Nam consectetur varius turpis, \n            non porta arcu porttitor non. In tincidunt vulputate nulla quis egestas. Ut \n            eleifend ut ipsum non fringilla. Praesent imperdiet nulla nec est luctus, at \n            sodales purus euismod.","Donec vel mauris lectus. Etiam nec lectus urna. Sed sodales ultrices dapibus. \n            Nam blandit tristique risus, eget accumsan nisl interdum eu. Aenean ac accumsan \n            nisi. Nunc vel pulvinar diam. Nam eleifend egestas viverra. Donec finibus lectus \n            sed lorem ultricies, eget ornare leo luctus. Morbi vehicula, nulla eu tempor \n            interdum, nibh elit congue tellus, ac vulputate urna lorem nec nisi. Morbi id \n            consequat quam. Vivamus accumsan dui in facilisis aliquet.","Etiam nec lectus urna. Sed sodales ultrices dapibus. \n            Nam blandit tristique risus, eget accumsan nisl interdum eu. Aenean ac accumsan \n            nisi. Nunc vel pulvinar diam. Nam eleifend egestas viverra. Donec finibus lectus \n            sed lorem ultricies, eget ornare leo luctus. Morbi vehicula, nulla eu tempor \n            interdum, nibh elit congue tellus, ac vulputate urna lorem nec nisi. Morbi id \n            consequat quam. Vivamus accumsan dui in facilisis aliquet."]}],N=function(e){var t=e.match.params.name,i=E.find((function(e){return e.name===t})),u=Object(a.useState)({upvotes:0,comments:[]}),s=Object(b.a)(u,2),l=s[0],r=s[1];if(Object(a.useEffect)((function(){(function(){var e=Object(p.a)(d.a.mark((function e(){var i,a;return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("http://localhost:8000/api/articles/".concat(t));case 2:return i=e.sent,console.log(i),e.next=6,i.json();case 6:a=e.sent,r(a);case 8:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}})()()}),[t]),!i)return n.a.createElement(q,null);var o=E.filter((function(e){return e.name!==t}));return n.a.createElement(n.a.Fragment,null,n.a.createElement("h1",null,i.title),n.a.createElement(h,{articleName:l.name,upvotes:l.upvotes,setArticleInfo:r}),i.content.map((function(e,t){return n.a.createElement("p",{key:t},e)})),n.a.createElement(g,{comments:l.comments}),n.a.createElement(f,{articleName:t,setArticleInfo:r}),n.a.createElement("h3",null,"Other Articles:"),n.a.createElement(v,{articles:o}))},y=function(){return n.a.createElement(n.a.Fragment,null,n.a.createElement("h1",null,"Articles"),n.a.createElement(v,{articles:E}))},A=function(){return n.a.createElement("nav",null,n.a.createElement("ul",null,n.a.createElement("li",null,n.a.createElement(l.b,{to:"/"},"Home"),n.a.createElement(l.b,{to:"/about"},"About"),n.a.createElement(l.b,{to:"/articles-list"},"Articles"))))};var x=function(){return n.a.createElement(l.a,null,n.a.createElement("div",{className:"App"},n.a.createElement(A,null),n.a.createElement("div",{id:"page-body"},n.a.createElement(r.c,null,n.a.createElement(r.a,{path:"/",exact:!0,component:o}),n.a.createElement(r.a,{path:"/about",exact:!0,component:c}),n.a.createElement(r.a,{path:"/articles-list",exact:!0,component:y}),n.a.createElement(r.a,{path:"/article/:name",exact:!0,component:N}),n.a.createElement(r.a,{component:q})))))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));s.a.render(n.a.createElement(x,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))}},[[20,1,2]]]);
//# sourceMappingURL=main.c7557922.chunk.js.map
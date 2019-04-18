(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{19:function(e,t,n){e.exports=n(33)},28:function(e,t,n){},32:function(e,t,n){},33:function(e,t,n){"use strict";n.r(t);var a=n(0),o=n.n(a),r=n(36),s=n(17),l=n.n(s),c=n(5),i=n(6),h=n(8),u=n(7),f=n(9),d=n(35),b=n(34),m=n(11),p="https://reactnd-books-api.udacity.com",k=localStorage.token;k||(k=localStorage.token=Math.random().toString(36).substr(-8));var v={Accept:"application/json",Authorization:k},g=(n(28),function(e){function t(){return Object(c.a)(this,t),Object(h.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(f.a)(t,e),Object(i.a)(t,[{key:"handleChange",value:function(e){this.props.sendShelfChange(this.props.book,e)}},{key:"render",value:function(){var e,t=this;e=this.props.book.imageLinks?this.props.book.imageLinks.smallThumbnail:"url('http://via.placeholder.com/128x193')";var n={width:128,height:193,backgroundImage:"url(".concat(e,")")};return o.a.createElement("li",null,o.a.createElement("div",{className:"book"},o.a.createElement("div",{className:"book-top"},o.a.createElement("div",{className:"book-cover",style:n}),o.a.createElement("div",{className:"book-shelf-changer"},o.a.createElement("select",{value:this.props.book.shelf||"none",onChange:function(e){return t.handleChange(e.target.value)}},o.a.createElement("option",{value:"move",disabled:!0},"Move to..."),o.a.createElement("option",{value:"currentlyReading"},"Currently Reading"),o.a.createElement("option",{value:"wantToRead"},"Want to Read"),o.a.createElement("option",{value:"read"},"Read"),o.a.createElement("option",{value:"none"},"None")))),o.a.createElement("div",{className:"book-title"},this.props.book.title),o.a.createElement("div",{className:"book-authors"},this.props.book.authors?this.props.book.authors.join(", "):"")))}}]),t}(a.Component)),E=function(e){function t(){var e,n;Object(c.a)(this,t);for(var a=arguments.length,o=new Array(a),r=0;r<a;r++)o[r]=arguments[r];return(n=Object(h.a)(this,(e=Object(u.a)(t)).call.apply(e,[this].concat(o)))).state={books:[]},n}return Object(f.a)(t,e),Object(i.a)(t,[{key:"sendShelfChange",value:function(e,t){this.props.sendShelfChange(e,t)}},{key:"fetchBooks",value:function(e){var t=this;e&&function(e){return fetch("".concat(p,"/search"),{method:"POST",headers:Object(m.a)({},v,{"Content-Type":"application/json"}),body:JSON.stringify({query:e})}).then(function(e){return e.json()}).then(function(e){return e.books})}(e).then(function(e){if(e.error)t.setState({books:[]});else{var n=e.map(function(e){for(var n=0;n<t.props.shelfedBooks.length;n++)t.props.shelfedBooks[n].id===e.id&&(e.shelf=t.props.shelfedBooks[n].shelf);return e});t.setState({books:n})}})}},{key:"render",value:function(){var e=this,t=this.state.books;return o.a.createElement("div",{className:"search-books"},o.a.createElement("div",{className:"search-books-bar"},o.a.createElement(b.a,{className:"close-search",to:"/"},"Close"),o.a.createElement("div",{className:"search-books-input-wrapper"},o.a.createElement("input",{type:"text",placeholder:"Search by title or author",onChange:function(t){return e.fetchBooks(t.target.value)}}))),o.a.createElement("div",{className:"search-books-results"},o.a.createElement("ol",{className:"books-grid"},0!==t.length&&t.map(function(t,n){return o.a.createElement(g,{key:n,book:t,sendShelfChange:function(t,n){e.sendShelfChange(t,n)}})}))))}}]),t}(a.Component),y=function(e){function t(){return Object(c.a)(this,t),Object(h.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(f.a)(t,e),Object(i.a)(t,[{key:"sendShelfChange",value:function(e,t){this.props.sendShelfChange(e,t)}},{key:"render",value:function(){var e=this;return 0===this.props.books.length?null:o.a.createElement("div",{className:"bookshelf"},o.a.createElement("h2",{className:"bookshelf-title"},this.props.title),o.a.createElement("div",{className:"bookshelf-books"},o.a.createElement("ol",{className:"books-grid"},this.props.books.length>0&&this.props.books.map(function(t){return o.a.createElement(g,{key:t.id,book:t,sendShelfChange:function(t,n){e.sendShelfChange(t,n)}})}))))}}]),t}(a.Component),C=function(e){function t(){var e,n;Object(c.a)(this,t);for(var a=arguments.length,o=new Array(a),r=0;r<a;r++)o[r]=arguments[r];return(n=Object(h.a)(this,(e=Object(u.a)(t)).call.apply(e,[this].concat(o)))).state={books:[]},n}return Object(f.a)(t,e),Object(i.a)(t,[{key:"componentDidMount",value:function(){var e=this;fetch("".concat(p,"/books"),{headers:v}).then(function(e){return e.json()}).then(function(e){return e.books}).then(function(t){return e.setState({books:t})})}},{key:"handleShelfChange",value:function(e,t){var n=this;(function(e,t){return fetch("".concat(p,"/books/").concat(e.id),{method:"PUT",headers:Object(m.a)({},v,{"Content-Type":"application/json"}),body:JSON.stringify({shelf:t})}).then(function(e){return e.json()})})(e,t).then(function(){e.shelf=t,n.setState(function(t){return{books:t.books.filter(function(t){return t.id!==e.id}).concat([e])}})})}},{key:"render",value:function(){var e=this;return 0===this.state.books.length?null:o.a.createElement("div",{className:"app"},o.a.createElement(d.a,{exact:!0,path:"/",render:function(t){t.history;return o.a.createElement("div",{className:"list-books"},o.a.createElement("div",{className:"list-books-title"},o.a.createElement("h1",null,"MyReads")),o.a.createElement("div",{className:"list-books-content"},o.a.createElement("div",null,o.a.createElement(y,{title:"Currently Reading",books:e.state.books.filter(function(e){return"currentlyReading"===e.shelf}),sendShelfChange:function(t,n){e.handleShelfChange(t,n)}}),o.a.createElement(y,{title:"Want to Read",books:e.state.books.filter(function(e){return"wantToRead"===e.shelf}),sendShelfChange:function(t,n){e.handleShelfChange(t,n)}}),o.a.createElement(y,{title:"Read",books:e.state.books.filter(function(e){return"read"===e.shelf}),sendShelfChange:function(t,n){e.handleShelfChange(t,n)}}))),o.a.createElement("div",{className:"open-search"},o.a.createElement(b.a,{to:"/search"},"Add a book")))}}),o.a.createElement(d.a,{path:"/search",render:function(t){t.history;return o.a.createElement(E,{sendShelfChange:function(t,n){e.handleShelfChange(t,n)},shelfedBooks:e.state.books})}}))}}]),t}(o.a.Component);n(32);l.a.render(o.a.createElement(r.a,{basename:"/myreads"},o.a.createElement(C,null)),document.getElementById("root"))}},[[19,1,2]]]);
//# sourceMappingURL=main.b92ddf6e.chunk.js.map
(window.webpackJsonp=window.webpackJsonp||[]).push([[19],{yZlL:function(e,t,a){"use strict";a.r(t);var r=a("dI71"),n=a("q1tI"),l=a.n(n),i=a("Wbzz"),o=a("AIwr"),c=a("9eSz"),m=a.n(c),s=a("vrFN"),d=a("l1sJ"),f=function(e){function t(){return e.apply(this,arguments)||this}return Object(r.a)(t,e),t.prototype.render=function(){var e=this.props,t=e.data,a=e.pageContext.topic,r=t.markdownRemark,n=t.allMarkdownRemark.edges.filter((function(e){return e.node.frontmatter.category===a&&e.node.frontmatter.title!==r.frontmatter.title})).filter((function(e,t){return t<2}));return l.a.createElement(o.a,{pageType:"Post"},l.a.createElement(s.a,{title:r.frontmatter.title,description:r.frontmatter.description}),l.a.createElement("div",{id:"article"},l.a.createElement("header",null,l.a.createElement("h1",{className:"article-title"},r.frontmatter.title),l.a.createElement("p",{className:"article-category"},"カテゴリ:",l.a.createElement(i.Link,{to:"/"+r.frontmatter.category},r.frontmatter.category)),l.a.createElement("div",{className:"article-tags"},r.frontmatter.tags.map((function(e){return l.a.createElement(i.Link,{className:"tag",key:e,to:"/"+e.split(" ").join("-").split("/").join("-").toLowerCase()},e)}))),l.a.createElement("p",{className:"article-date"},r.frontmatter.date),l.a.createElement(m.a,{fluid:r.frontmatter.featuredImage.childImageSharp.fluid,className:"article-image"})),l.a.createElement("div",{className:"article-markdown",dangerouslySetInnerHTML:{__html:r.html}}),l.a.createElement("div",null,n.length>0&&l.a.createElement("h3",{id:"similar-posts-header"},"おすすめ記事一覧"),l.a.createElement("section",null,n.map((function(e){var t=e.node;return l.a.createElement(d.a,{key:t.fields.slug,title:t.frontmatter.title,slug:t.fields.slug,date:t.frontmatter.date,description:t.frontmatter.description,excerpt:t.excerpt,frontmatter:t.frontmatter})}))))))},t}(n.Component);t.default=f}}]);
//# sourceMappingURL=component---src-templates-blog-post-js-e4c95e9197587ff8ee59.js.map
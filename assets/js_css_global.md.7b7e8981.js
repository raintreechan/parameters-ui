import{_ as n,o as a,c as l,a as e}from"./app.8badf343.js";const D=JSON.parse('{"title":"预置","description":"","frontmatter":{},"headers":[{"level":2,"title":"样式","slug":"样式","link":"#样式","children":[]}],"relativePath":"js/css/global.md"}'),p={name:"js/css/global.md"};function t(o,s,c,i,r,y){return a(),l("div",null,s[0]||(s[0]=[e(`<h1 id="预置" tabindex="-1">预置 <a class="header-anchor" href="#预置" aria-hidden="true">#</a></h1><h2 id="样式" tabindex="-1">样式 <a class="header-anchor" href="#样式" aria-hidden="true">#</a></h2><p>预置CSS混合宏（Mixin），封装了多个常用样式组合，通过@include指令直接调用即可应用。</p><div class="language-scss"><button title="Copy Code" class="copy"></button><span class="lang">scss</span><pre class="shiki material-palenight"><code><span class="line"><span style="color:#676E95;font-style:italic;">// 组件</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">// 实现元素内部内容的垂直水平居中</span></span>
<span class="line"><span style="color:#89DDFF;font-style:italic;">@include</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">flex-center</span><span style="color:#89DDFF;">();</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">// 实现元素内部内容的左右对齐并垂直居中</span></span>
<span class="line"><span style="color:#89DDFF;font-style:italic;">@include</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">flex-between</span><span style="color:#89DDFF;">();</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">// 实现单行文本溢出显示省略号</span></span>
<span class="line"><span style="color:#89DDFF;font-style:italic;">@include</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">single-ellipsis</span><span style="color:#89DDFF;">();</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">// 解决移动端1px像素显示问题</span></span>
<span class="line"><span style="color:#89DDFF;font-style:italic;">@include</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">onepx</span><span style="color:#89DDFF;">();</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">// 将元素固定在底部并全屏显示</span></span>
<span class="line"><span style="color:#89DDFF;font-style:italic;">@include</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">fixed</span><span style="color:#89DDFF;">();</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">// 底部区域样式</span></span>
<span class="line"><span style="color:#89DDFF;font-style:italic;">@include</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">footer</span><span style="color:#89DDFF;">();</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">// 底部按钮样式</span></span>
<span class="line"><span style="color:#89DDFF;font-style:italic;">@include</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">footer-btn</span><span style="color:#89DDFF;">();</span></span>
<span class="line"></span></code></pre></div>`,4)]))}const d=n(p,[["render",t]]);export{D as __pageData,d as default};

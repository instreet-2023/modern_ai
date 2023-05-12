(window.webpackJsonp=window.webpackJsonp||[]).push([[65],{394:function(t,e,n){"use strict";n.r(e);var s=n(4),o=Object(s.a)({},(function(){var t=this,e=t._self._c;return e("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[e("h1",{attrs:{id:"技巧一-临摹"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#技巧一-临摹"}},[t._v("#")]),t._v(" 技巧一：临摹")]),t._v(" "),e("p",[t._v("我认为学习图片类的 prompt，跟学习画画是类似的，最好的学习方法不是直接用模板。")]),t._v(" "),e("p",[t._v("而是拿真图，或者别人生成的图来临摹。英文不好，也可以先写中文，然后让 ChatGPT 翻译。当你临摹了几张后，你就会慢慢搞懂如何做出类似的图了。")]),t._v(" "),e("p",[t._v("拿上面的那个握手图为例，我们仔细观察上面那张图，图中元素有什么：")]),t._v(" "),e("ol",[e("li",[t._v("第一主体是两个手，然后握在了一起，并且看起来是两个亚裔男人。")]),t._v(" "),e("li",[t._v("第二两人都穿着西装。")]),t._v(" "),e("li",[t._v("第三背景看上去像是在办公楼的大门，两人可能是在握手告别。并且背景刻意进行虚化了，或者是使用照相机拍摄的。")])]),t._v(" "),e("p",[e("img",{attrs:{src:"https://res.craft.do/user/full/d845172f-becd-4255-bf79-d722098b2d83/doc/15EA26B6-9B49-4076-B8D8-DFE53ABD52C8/861C8258-85BF-40A9-8389-5583F653CF3D_2/koWtZdjhYPCuvk8y9wbOckqwLISoCxZzDogBJVFLgAgz/MJ020.jpeg",alt:"MJ020.jpeg"}})]),t._v(" "),e("p",[t._v("再归纳总结下，大概的信息：")]),t._v(" "),e("ul",[e("li",[t._v("主体：两个穿着西装的亚裔男人在握手告别")]),t._v(" "),e("li",[t._v("场景：办公楼大门")]),t._v(" "),e("li",[t._v("图像风格：stock photo，照相机拍摄，")])]),t._v(" "),e("p",[t._v("这时候，我们就能尝试写一下 prompt 了（如果你觉得自己英文水平还不太行，也可以尝试用翻译软件翻译）。")]),t._v(" "),e("div",{staticClass:"language-other line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[t._v("stock photo of two Asian men in suits shaking hands,say goodbye in front of the main entrance of the office building,taken with Canon\n")])]),t._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[t._v("1")]),e("br")])]),e("p",[t._v("Midjourney 生成的结果如下所示。")]),t._v(" "),e("p",[t._v("Emm 🤔 好像跟我们的预期不一样。不要慌，刚开始用 Midjourney 一定会遇到这种问题，重要的是多尝试。")]),t._v(" "),e("p",[t._v("我们再来分析下 Midjourney 为何生成了这样的图片？复盘下：")]),t._v(" "),e("ol",[e("li",[t._v("首先图片的主体，或者说焦点，我们只需要「握手」，而不是两个人。")]),t._v(" "),e("li",[t._v("照相模式好像并不能实现背景虚化？更像是一种图像风格，图四就像是一种老照片的风格。")])]),t._v(" "),e("p",[t._v("那我们调整下 prompt，增加焦点和背景虚化关键词：")]),t._v(" "),e("div",{staticClass:"language-other line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[t._v("stock photo of two Asian men in suits shaking hands,say goodbye in front of the main entrance of the office building, focus on two hands, taken with Canon, background bokeh\n")])]),t._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[t._v("1")]),e("br")])]),e("p",[t._v("再来看看生成的结果，结果好很多，图 1 和 图4 基本满足需求了，图 2 和图 3 裁剪一下，也能满足我们的需求。不过需要注意，Midjourney 在人手的生成上，暂时还有点问题，你细看图 2和图 4，其中有一个人的手有 6 个手指 😂，但我认为未来应该会修复：")]),t._v(" "),e("p",[t._v("那我们来总结一下 prompt ，该 prompt 分成以下几个部分：")]),t._v(" "),e("p",[e("img",{attrs:{src:"https://res.craft.do/user/full/d845172f-becd-4255-bf79-d722098b2d83/doc/15EA26B6-9B49-4076-B8D8-DFE53ABD52C8/07B84FDC-3494-4173-824F-92CABFDD9CA8_2/WZmCoU5tVeOGV6wnngJkFfzyIed10o5tKIWDar54D9gz/MJ022.png",alt:"MJ022.png"}})]),t._v(" "),e("ul",[e("li",[t._v("第一部分（红色线）：描述你想要的内容主体。")]),t._v(" "),e("li",[t._v("第二部分（蓝色线）：描述主体背景/环境。")]),t._v(" "),e("li",[t._v("第三部分（黄色线）：照片的焦点位置。")]),t._v(" "),e("li",[t._v("第四部分（绿色线）：照片的风格或者说是特殊要求。")])]),t._v(" "),e("p",[t._v("总结下之后，你是不是就总结出了一个模板了？😁")])])}),[],!1,null,null,null);e.default=o.exports}}]);
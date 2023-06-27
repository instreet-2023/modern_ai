(window.webpackJsonp=window.webpackJsonp||[]).push([[25],{342:function(e,t,a){"use strict";a.r(t);var s=a(7),r=Object(s.a)({},(function(){var e=this,t=e._self._c;return t("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[t("h1",{attrs:{id:"大语言模型有什么缺点"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#大语言模型有什么缺点"}},[e._v("#")]),e._v(" 大语言模型有什么缺点？")]),e._v(" "),t("p",[e._v("了解完原理后，我觉得有必要跟大家聊聊大语言模型的缺点，这样大家才能知道 AI 的边界在哪里，并在可控的边界内进行创新。")]),e._v(" "),t("h2",{attrs:{id:"缺点一-结果高度依赖训练语料"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#缺点一-结果高度依赖训练语料"}},[e._v("#")]),e._v(" 缺点一：结果高度依赖训练语料")]),e._v(" "),t("p",[e._v("正如我前面提到的，当今的语言模型，即使发展了四个版本，但依然没有脱离「概率计算」，本质上来说它们的核心原理就是「利用已有的信息来预测其他信息」。")]),e._v(" "),t("p",[e._v("那这就意味着，大语言模型其实并没有意识，也不知道对错，其生成的结果，高度依赖训练语料。")]),e._v(" "),t("p",[e._v("那会导致怎样的后果？")]),e._v(" "),t("ol",[t("li",[e._v("如果语料的内容是有偏的（比如带有种族歧视、性别歧视的内容），甚至是错误的，那大语言模型的生成的结果也会是错误的。")]),e._v(" "),t("li",[e._v("如果该领域语料很少，大语言模型生成的结果准确率就很低。甚至有可能会出现幻觉（这个是第二个缺点）。")])]),e._v(" "),t("p",[e._v("当然面对这个缺点，有什么方法规避？")]),e._v(" "),t("p",[e._v("第一种方法就是在语料大、且错误率低的领域使用 LLMs。")]),e._v(" "),t("p",[e._v("比如语言学领域，像翻译、或者文案生成这种场景。即使语法错误了，但语料里存在大量的相同用法，那某种程度上来说，模型给的答案也算是对的，有点类似古代的通假字，或者现代的很多流行语。")]),e._v(" "),t("p",[e._v("第二种就是用人工干预。")]),e._v(" "),t("p",[e._v("简单说来就是人工将语料里的内容剔除，或者对其进行人类反馈强化学习。但人工干预并不意味着就没有问题了，这种方法有可能导致新的问题出现，比如将人的主观好恶加入到模型中，或者有可能伪造一些信息，加入到模型中。")]),e._v(" "),t("h2",{attrs:{id:"缺点二-hallucinations"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#缺点二-hallucinations"}},[e._v("#")]),e._v(" 缺点二：Hallucinations")]),e._v(" "),t("p",[e._v("这个可以直译成「幻觉」，简单说来，就是会说胡话。有些问题因为语聊很少，计算概率后，会吐出一些很奇怪的内容，比如这个例子，我让 AI 介绍一个世界上不存在的品牌 Boie 的智能牙刷：")]),e._v(" "),t("div",{staticClass:"language-other line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[e._v("Tell me about AeroGlide UltraSlim Smart Toothbrush by Boie\n")])]),e._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[e._v("1")]),t("br")])]),t("p",[e._v("AI 的回答是，你可以看到 AI 就是在一本正经地说胡话：")]),e._v(" "),t("div",{staticClass:"language-other line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[e._v("The AeroGlide UltraSlim Smart Toothbrush by Boie is a high-tech toothbrush that uses advanced sonic technology to provide a deep and thorough clean. It features a slim and sleek design that makes it easy to hold and maneuver, and it comes with a range of smart features that help you optimize your brushing routine.\n\nOne of the key features of the AeroGlide UltraSlim Smart Toothbrush is its advanced sonic technology, which uses high-frequency vibrations to break up plaque and bacteria on your teeth and gums. This technology is highly effective at removing even the toughest stains and buildup, leaving your teeth feeling clean and refreshed.\n\nIn addition to its sonic technology, the AeroGlide UltraSlim Smart Toothbrush also comes with a range of smart features that help you optimize your brushing routine. These include a built-in timer that ensures you brush for the recommended two minutes, as well as a pressure sensor that alerts you if you're brushing too hard.\n\nOverall, the AeroGlide UltraSlim Smart Toothbrush by Boie is a highly advanced and effective toothbrush that is perfect for anyone looking to take their oral hygiene to the next level. With its advanced sonic technology and smart features, it provides a deep and thorough clean that leaves your teeth feeling fresh and healthy.\n")])]),e._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[e._v("1")]),t("br"),t("span",{staticClass:"line-number"},[e._v("2")]),t("br"),t("span",{staticClass:"line-number"},[e._v("3")]),t("br"),t("span",{staticClass:"line-number"},[e._v("4")]),t("br"),t("span",{staticClass:"line-number"},[e._v("5")]),t("br"),t("span",{staticClass:"line-number"},[e._v("6")]),t("br"),t("span",{staticClass:"line-number"},[e._v("7")]),t("br")])]),t("h2",{attrs:{id:"缺点三-暂时只能解决数学问题"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#缺点三-暂时只能解决数学问题"}},[e._v("#")]),e._v(" 缺点三：暂时只能解决数学问题")]),e._v(" "),t("p",[e._v("我解释下，这里提到的数学问题，并不仅仅指的是数学运算这种数学问题，而是能通过数学解决的问题。比如我们可以研发无人驾驶汽车，当它遇到行人突然横穿马路时，能自己刹车停下来，这就是一个数学问题，它通过计算识别行人，并进行刹车。")]),e._v(" "),t("p",[e._v("但如果这辆无人车在一个单行道的巷子里遇到一辆堵在巷子的汽车，它就没有办法了，只能报警，让司机过来挪车，这就是一个数学无法解决的问题。")]),e._v(" "),t("p",[e._v("暂时来看目前大多数的 LLMs 都只能解决数学问题，有些不可计算的问题，暂时都没法解决。特别像是需要自己实操进行实验的问题。")]),e._v(" "),t("p",[e._v("当然我这里也只是称其为「暂时」，因为可能未来机器人 + LLMs 有可能会将可计算的范围拓展宽一点。")])])}),[],!1,null,null,null);t.default=r.exports}}]);
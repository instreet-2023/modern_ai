(window.webpackJsonp=window.webpackJsonp||[]).push([[35],{363:function(e,s,n){"use strict";n.r(s);var t=n(4),a=Object(t.a)({},(function(){var e=this,s=e._self._c;return s("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[s("head",[s("script",{attrs:{defer:"defer",src:"https://embed.trydyno.com/embedder.js"}}),e._v(" "),s("link",{attrs:{href:"https://embed.trydyno.com/embedder.css",rel:"stylesheet"}})]),e._v(" "),s("p",[e._v("要解决这个缺陷，就要使用到新的技巧，Few-Shot Chain of Thought。")]),e._v(" "),s("p",[e._v("根据 Wei 他们团队在 "),s("a",{attrs:{href:"https://arxiv.org/pdf/2201.11903.pdf",target:"_blank",rel:"noopener noreferrer"}},[e._v("2022 年的研究"),s("OutboundLink")],1),e._v("表明：")]),e._v(" "),s("blockquote",[s("p",[e._v("通过向大语言模型展示一些少量的样例，并在样例中解释推理过程，大语言模型在回答提示时也会显示推理过程。这种推理的解释往往会引导出更准确的结果。")])]),e._v(" "),s("p",[e._v("下面是论文里的案例，使用方法很简单，在技巧 2 的基础上，再将逻辑过程告知给模型即可。从下面这个案例里，你可以看到加入解释后，输出的结果就正确了。")]),e._v(" "),s("p",[e._v("那本章开头提的例子就应该是这样的（注：本例子同样来自 Wei 团队论文）：")]),e._v(" "),s("div",{staticClass:"language-other line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[e._v("The odd numbers in this group add up to an even number: 4, 8, 9, 15, 12, 2, 1.\nA: Adding all the odd numbers (9, 15, 1) gives 25. The answer is False.\n\nThe odd numbers in this group add up to an even number: 17,  10, 19, 4, 8, 12, 24.\nA: Adding all the odd numbers (17, 19) gives 36. The answer is True.\n\nThe odd numbers in this group add up to an even number: 16,  11, 14, 4, 8, 13, 24.\nA: Adding all the odd numbers (11, 13) gives 24. The answer is True.\n\nThe odd numbers in this group add up to an even number: 17,  9, 10, 12, 13, 4, 2.\nA: Adding all the odd numbers (17, 9, 13) gives 39. The answer is False.\n\nThe odd numbers in this group add up to an even number: 15, 32, 5, 13, 82, 7, 1.\nA:\n")])]),e._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[e._v("1")]),s("br"),s("span",{staticClass:"line-number"},[e._v("2")]),s("br"),s("span",{staticClass:"line-number"},[e._v("3")]),s("br"),s("span",{staticClass:"line-number"},[e._v("4")]),s("br"),s("span",{staticClass:"line-number"},[e._v("5")]),s("br"),s("span",{staticClass:"line-number"},[e._v("6")]),s("br"),s("span",{staticClass:"line-number"},[e._v("7")]),s("br"),s("span",{staticClass:"line-number"},[e._v("8")]),s("br"),s("span",{staticClass:"line-number"},[e._v("9")]),s("br"),s("span",{staticClass:"line-number"},[e._v("10")]),s("br"),s("span",{staticClass:"line-number"},[e._v("11")]),s("br"),s("span",{staticClass:"line-number"},[e._v("12")]),s("br"),s("span",{staticClass:"line-number"},[e._v("13")]),s("br"),s("span",{staticClass:"line-number"},[e._v("14")]),s("br")])]),s("p",[e._v("聊完技巧，我们再结合前面的 Zero-Shot Chain of Thought，来聊聊 Chain of Thought 的关键知识。根据 "),s("a",{attrs:{href:"https://arxiv.org/search/cs?searchtype=author&query=Min%2C+S",target:"_blank",rel:"noopener noreferrer"}},[e._v("Sewon Min"),s("OutboundLink")],1),e._v(" 等人在 "),s("a",{attrs:{href:"https://arxiv.org/abs/2202.12837",target:"_blank",rel:"noopener noreferrer"}},[e._v("2022 年的研究"),s("OutboundLink")],1),e._v(" 表明，思维链有以下特点：")]),e._v(" "),s("ol",[s("li",[e._v('"the label space and the distribution of the input text specified by the demonstrations are both key (regardless of whether the labels are correct for individual inputs)" 标签空间和输入文本的分布都是关键因素（无论这些标签是否正确）。')]),e._v(" "),s("li",[e._v("the format you use also plays a key role in performance, even if you just use random labels, this is much better than no labels at all. 即使只是使用随机标签，使用适当的格式也能提高性能。")])]),e._v(" "),s("p",[e._v("理解起来有点难，我一个 prompt 案例给大家解释（🆘 如果你有更好的解释，不妨反馈给我）。我给 ChatGPT 一些不一定准确的例子：")]),e._v(" "),s("div",{staticClass:"language-other line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[e._v("I loved the new Batman movie!  // Negative\nThis is bad // Positive\nThis is good // Negative\nWhat a good show! //\n")])]),e._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[e._v("1")]),s("br"),s("span",{staticClass:"line-number"},[e._v("2")]),s("br"),s("span",{staticClass:"line-number"},[e._v("3")]),s("br"),s("span",{staticClass:"line-number"},[e._v("4")]),s("br")])]),s("p",[e._v("Output 是这样的：")]),e._v(" "),s("div",{staticClass:"language-other line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[e._v("Positive\n")])]),e._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[e._v("1")]),s("br")])]),s("p",[e._v("在上述的案例里，每一行，我都写了一句话和一个情感词，并用 // 分开，但我给这些句子都标记了错误的答案，比如第一句其实应该是 Positive 才对。但：")]),e._v(" "),s("ol",[s("li",[e._v("即使我给内容打的标签是错误的（比如第一句话，其实应该是 Positive），对于模型来说，它仍然会知道需要输出什么东西。换句话说，模型知道 // 划线后要输出一个衡量该句子表达何种感情的词（Positive or Negative）。这就是前面论文里 #1 提到的，即使我给的标签是错误的，或者换句话说，是否基于事实，并不重要。标签和输入的文本，以及格式才是关键因素。")]),e._v(" "),s("li",[e._v("只要给了示例，即使随机的标签，对于模型生成结果来说，都是有帮助的。这就是前面论文里 #2 提到的内容。")])]),e._v(" "),s("p",[e._v("最后，需要记住，思维链仅在使用大于等于 100B 参数的模型时，才会生效。")]),e._v(" "),s("p",[e._v("BTW，如果你想要了解更多相关信息，可以看看斯坦福大学的讲义："),s("a",{attrs:{href:"http://web.stanford.edu/class/cs224n/slides/cs224n-2023-lecture11-prompting-rlhf.pdf",target:"_blank",rel:"noopener noreferrer"}},[e._v("Natural Language Processing with Deep Learning"),s("OutboundLink")],1)])])}),[],!1,null,null,null);s.default=a.exports}}]);
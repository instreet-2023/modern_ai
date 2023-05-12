(window.webpackJsonp=window.webpackJsonp||[]).push([[32],{360:function(e,n,t){"use strict";t.r(n);var s=t(4),a=Object(s.a)({},(function(){var e=this,n=e._self._c;return n("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[n("head",[n("script",{attrs:{defer:"defer",src:"https://embed.trydyno.com/embedder.js"}}),e._v(" "),n("link",{attrs:{href:"https://embed.trydyno.com/embedder.css",rel:"stylesheet"}})]),e._v(" "),n("p",[e._v("不管是信息总结，还是信息提取，你一定会输入大段文字，甚至多段文字，此时有个小技巧。")]),e._v(" "),n("p",[e._v("可以用“”“将指令和文本分开。根据我的测试，如果你的文本有多段，增加”“”会提升 AI 反馈的准确性（这个技巧来自于 OpenAI 的 API "),n("a",{attrs:{href:"https://help.openai.com/en/articles/6654000-best-practices-for-prompt-engineering-with-openai-api",target:"_blank",rel:"noopener noreferrer"}},[e._v("最佳实践文档"),n("OutboundLink")],1),e._v("）")]),e._v(" "),n("div",{staticClass:"custom-block note"},[n("p",{staticClass:"custom-block-title"},[e._v("笔记")]),e._v(" "),n("p",[e._v("感谢 CraneHuang6 的提醒，这里还能用 ### 符号区隔，不过我一般会用“”“ ，因为我有的时候会用 # 作为格式示例，太多 # 的话 prompt 会看起来比较晕 😂")])]),e._v(" "),n("p",[e._v("像我们之前写的 prompt 就属于 Less effective prompt。为什么呢？据我的测试，主要还是 AI 不知道什么是指令，什么是待处理的内容，用符号分隔开来会更利于 AI 区分。")]),e._v(" "),n("div",{staticClass:"language-other line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[e._v("Please summarize the following sentences to make them easier to understand.\nOpenAI is an American artificial intelligence (AI) research laboratory consisting of the non-profit OpenAI Incorporated (OpenAI Inc.) and its for-profit subsidiary corporation OpenAI Limited Partnership (OpenAI LP). OpenAI conducts AI research with the declared intention of promoting and developing a friendly AI. OpenAI systems run on the fifth most powerful supercomputer in the world.[5][6][7] The organization was founded in San Francisco in 2015 by Sam Altman, Reid Hoffman, Jessica Livingston, Elon Musk, Ilya Sutskever, Peter Thiel and others,[8][1][9] who collectively pledged US$1 billion. Musk resigned from the board in 2018 but remained a donor. Microsoft provided OpenAI LP with a $1 billion investment in 2019 and a second multi-year investment in January 2023, reported to be $10 billion.[10]\n")])]),e._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[e._v("1")]),n("br"),n("span",{staticClass:"line-number"},[e._v("2")]),n("br")])]),n("p",[e._v("Better prompt:")]),e._v(" "),n("div",{staticClass:"language-other line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[e._v('Please summarize the following sentences to make them easier to understand.\n\nText: """\nOpenAI is an American artificial intelligence (AI) research laboratory consisting of the non-profit OpenAI Incorporated (OpenAI Inc.) and its for-profit subsidiary corporation OpenAI Limited Partnership (OpenAI LP). OpenAI conducts AI research with the declared intention of promoting and developing a friendly AI. OpenAI systems run on the fifth most powerful supercomputer in the world.[5][6][7] The organization was founded in San Francisco in 2015 by Sam Altman, Reid Hoffman, Jessica Livingston, Elon Musk, Ilya Sutskever, Peter Thiel and others,[8][1][9] who collectively pledged US$1 billion. Musk resigned from the board in 2018 but remained a donor. Microsoft provided OpenAI LP with a $1 billion investment in 2019 and a second multi-year investment in January 2023, reported to be $10 billion.[10]\n"""\n')])]),e._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[e._v("1")]),n("br"),n("span",{staticClass:"line-number"},[e._v("2")]),n("br"),n("span",{staticClass:"line-number"},[e._v("3")]),n("br"),n("span",{staticClass:"line-number"},[e._v("4")]),n("br"),n("span",{staticClass:"line-number"},[e._v("5")]),n("br")])]),n("p",[e._v("另外，在吴恩达的 ChatGPT Prompt Engineering "),n("a",{attrs:{href:"https://www.deeplearning.ai/short-courses/chatgpt-prompt-engineering-for-developers/",target:"_blank",rel:"noopener noreferrer"}},[e._v("课程"),n("OutboundLink")],1),e._v("中，还提到，你可以使用其他特殊符号来分割文本和 prompt，比如"),n("code",[e._v("<>")]),e._v("，"),n("code",[e._v("<tag></tag>")]),e._v(" 等，课程中的案例是这样的（注意这个是 python 代码，需要关注的是 prompt 里的 text）：")]),e._v(" "),n("div",{staticClass:"language-python line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-python"}},[n("code",[e._v("text "),n("span",{pre:!0,attrs:{class:"token operator"}},[e._v("=")]),e._v(" "),n("span",{pre:!0,attrs:{class:"token string-interpolation"}},[n("span",{pre:!0,attrs:{class:"token string"}},[e._v('f"""\nYou should express what you want a model to do by \\\nproviding instructions that are as clear and \\\nspecific as you can possibly make them. \\\nThis will guide the model towards the desired output, \\\nand reduce the chances of receiving irrelevant \\\nor incorrect responses. Don\'t confuse writing a \\\nclear prompt with writing a short prompt. \\\nIn many cases, longer prompts provide more clarity \\\nand context for the model, which can lead to \\\nmore detailed and relevant outputs.\n"""')])]),e._v("\n\nprompt "),n("span",{pre:!0,attrs:{class:"token operator"}},[e._v("=")]),e._v(" "),n("span",{pre:!0,attrs:{class:"token string-interpolation"}},[n("span",{pre:!0,attrs:{class:"token string"}},[e._v('f"""\nSummarize the text delimited by triple backticks \\\ninto a single sentence.\n`')]),n("span",{pre:!0,attrs:{class:"token interpolation"}},[n("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("{")]),e._v("text"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("}")])]),n("span",{pre:!0,attrs:{class:"token string"}},[e._v('`\n"""')])]),e._v("\n")])]),e._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[e._v("1")]),n("br"),n("span",{staticClass:"line-number"},[e._v("2")]),n("br"),n("span",{staticClass:"line-number"},[e._v("3")]),n("br"),n("span",{staticClass:"line-number"},[e._v("4")]),n("br"),n("span",{staticClass:"line-number"},[e._v("5")]),n("br"),n("span",{staticClass:"line-number"},[e._v("6")]),n("br"),n("span",{staticClass:"line-number"},[e._v("7")]),n("br"),n("span",{staticClass:"line-number"},[e._v("8")]),n("br"),n("span",{staticClass:"line-number"},[e._v("9")]),n("br"),n("span",{staticClass:"line-number"},[e._v("10")]),n("br"),n("span",{staticClass:"line-number"},[e._v("11")]),n("br"),n("span",{staticClass:"line-number"},[e._v("12")]),n("br"),n("span",{staticClass:"line-number"},[e._v("13")]),n("br"),n("span",{staticClass:"line-number"},[e._v("14")]),n("br"),n("span",{staticClass:"line-number"},[e._v("15")]),n("br"),n("span",{staticClass:"line-number"},[e._v("16")]),n("br"),n("span",{staticClass:"line-number"},[e._v("17")]),n("br"),n("span",{staticClass:"line-number"},[e._v("18")]),n("br")])]),n("p",[e._v("如果你是在开发一款允许用户输入内容，并对内容进行总结的 AI 产品，那你就可以使用到这个技巧。")])])}),[],!1,null,null,null);n.default=a.exports}}]);
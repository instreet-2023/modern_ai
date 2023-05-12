(window.webpackJsonp=window.webpackJsonp||[]).push([[34],{362:function(s,n,t){"use strict";t.r(n);var e=t(4),a=Object(e.a)({},(function(){var s=this,n=s._self._c;return n("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[n("head",[n("script",{attrs:{defer:"defer",src:"https://embed.trydyno.com/embedder.js"}}),s._v(" "),n("link",{attrs:{href:"https://embed.trydyno.com/embedder.css",rel:"stylesheet"}})]),s._v(" "),n("p",[s._v("基于上述的第三点缺点，研究人员就找到了一个叫 Chain of Thought 的技巧。")]),s._v(" "),n("p",[s._v("这个技巧使用起来非常简单，只需要在问题的结尾里放一句 "),n("code",[s._v("Let‘s think step by step")]),s._v(" （让我们一步步地思考），模型输出的答案会更加准确。")]),s._v(" "),n("p",[s._v("这个技巧来自于 Kojima 等人 2022 年的论文 "),n("a",{attrs:{href:"https://arxiv.org/abs/2205.11916",target:"_blank",rel:"noopener noreferrer"}},[s._v("Large Language Models are Zero-Shot Reasoners"),n("OutboundLink")],1),s._v("。在论文里提到，当我们向模型提一个逻辑推理问题时，模型返回了一个错误的答案，但如果我们在问题最后加入 "),n("code",[s._v("Let‘s think step by step")]),s._v(" 这句话之后，模型就生成了正确的答案：")]),s._v(" "),n("p",[s._v("论文里有讲到原因，感兴趣的朋友可以去看看，我简单解释下为什么（🆘 如果你有更好的解释，不妨反馈给我）：")]),s._v(" "),n("ol",[n("li",[s._v("首先各位要清楚像 ChatGPT 这类产品，它是一个统计语言模型，本质上是基于过去看到过的所有数据，用统计学意义上的预测结果进行下一步的输出（这也就是为什么你在使用 ChatGPT 的时候，它的答案是一个字一个字地吐出来，而不是直接给你的原因，因为答案是一个字一个字算出来的）。")]),s._v(" "),n("li",[s._v("当它拿到的数据里有逻辑，它就会通过统计学的方法将这些逻辑找出来，并将这些逻辑呈现给你，让你感觉到它的回答很有逻辑。")]),s._v(" "),n("li",[s._v("在计算的过程中，模型会进行很多假设运算（不过暂时不知道它是怎么算的）。比如解决某个问题是从 A 到 B 再到 C，中间有很多假设。")]),s._v(" "),n("li",[s._v("它第一次算出来的答案错误的原因，只是因为它在中间跳过了一些步骤（B）。而让模型一步步地思考，则有助于其按照完整的逻辑链（A > B > C）去运算，而不会跳过某些假设，最后算出正确的答案。")])]),s._v(" "),n("p",[s._v("按照论文里的解释，零样本思维链涉及两个补全结果，左侧气泡表示基于提示输出的第一次的结果，右侧气泡表示其收到了第一次结果后，将最开始的提示一起拿去运算，最后得出了正确的答案：")]),s._v(" "),n("p",[s._v("这个技巧，用于解复杂问题有用外，还适合生成一些连贯主题的内容，比如写长篇文章、电影剧本等。")]),s._v(" "),n("p",[s._v("但需要注意其缺点，连贯不代表它就一定不会算错，如果其中某一步骤算错了，错误会因为逻辑链，逐步将错误积累，导致生成的文本可能出现与预期不符的内容。")]),s._v(" "),n("p",[s._v("另外，根据 Wei 等人在 "),n("a",{attrs:{href:"https://arxiv.org/pdf/2201.11903.pdf",target:"_blank",rel:"noopener noreferrer"}},[s._v("2022 年的论文"),n("OutboundLink")],1),s._v("表明，还有它仅在大于等于 100B 参数的模型中使用才会有效。如果你使用的是小样本模型，这个方法不会生效。")]),s._v(" "),n("hr"),s._v(" "),n("p",[s._v("2023-04-12 更新（感谢"),n("a",{attrs:{href:"https://github.com/qq-740943515",target:"_blank",rel:"noopener noreferrer"}},[s._v("qq-740943515"),n("OutboundLink")],1),s._v("分享）：\n根据 Yongchao Zhou 等人的"),n("a",{attrs:{href:"https://sites.google.com/view/automatic-prompt-engineer",target:"_blank",rel:"noopener noreferrer"}},[s._v("最新论文"),n("OutboundLink")],1),s._v("，更好的 prompt 是：")]),s._v(" "),n("div",{staticClass:"language- line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[s._v("Let's work this out in a step by step way to be sure we have the right answer.\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br")])]),n("hr"),s._v(" "),n("p",[s._v("在吴恩达的 ChatGPT Prompt Engineering "),n("a",{attrs:{href:"https://www.deeplearning.ai/short-courses/chatgpt-prompt-engineering-for-developers/",target:"_blank",rel:"noopener noreferrer"}},[s._v("课程"),n("OutboundLink")],1),s._v("中，有提到一个这个技巧的另一种用法，不仅仅只是让 AI 按步骤行事，还会告知 AI 每一步要做什么。比如这个案例（注意这个是 python 代码）：")]),s._v(" "),n("div",{staticClass:"language- line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[s._v('prompt_2 = f"""\nYour task is to perform the following actions:\n1 - Summarize the following text delimited by\n  <> with 1 sentence.\n2 - Translate the summary into French.\n3 - List each name in the French summary.\n4 - Output a json object that contains the\n  following keys: french_summary, num_names.\n\nUse the following format:\nText: <text to summarize>\nSummary: <summary>\nTranslation: <summary translation>\nNames: <list of names in Italian summary>\nOutput JSON: <json with summary and num_names>\n\nText: <{text}>\n"""\n')])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br"),n("span",{staticClass:"line-number"},[s._v("3")]),n("br"),n("span",{staticClass:"line-number"},[s._v("4")]),n("br"),n("span",{staticClass:"line-number"},[s._v("5")]),n("br"),n("span",{staticClass:"line-number"},[s._v("6")]),n("br"),n("span",{staticClass:"line-number"},[s._v("7")]),n("br"),n("span",{staticClass:"line-number"},[s._v("8")]),n("br"),n("span",{staticClass:"line-number"},[s._v("9")]),n("br"),n("span",{staticClass:"line-number"},[s._v("10")]),n("br"),n("span",{staticClass:"line-number"},[s._v("11")]),n("br"),n("span",{staticClass:"line-number"},[s._v("12")]),n("br"),n("span",{staticClass:"line-number"},[s._v("13")]),n("br"),n("span",{staticClass:"line-number"},[s._v("14")]),n("br"),n("span",{staticClass:"line-number"},[s._v("15")]),n("br"),n("span",{staticClass:"line-number"},[s._v("16")]),n("br"),n("span",{staticClass:"line-number"},[s._v("17")]),n("br"),n("span",{staticClass:"line-number"},[s._v("18")]),n("br")])]),n("p",[s._v("简单解释下这个代码：")]),s._v(" "),n("ol",[n("li",[s._v("开头是让 AI 按照 1 ～ 4 步运行")]),s._v(" "),n("li",[s._v("然后再让 AI 根据特定格式输出内容")])]),s._v(" "),n("p",[s._v("最后 AI 的输出是这样的：")]),s._v(" "),n("div",{staticClass:"language- line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[s._v('Summary: Jack and Jill go on a quest to fetch water, but misfortune strikes and they tumble down the hill, returning home slightly battered but with their adventurous spirits undimmed.\nTranslation: Jack et Jill partent en quête d\'eau, mais la malchance frappe et ils dégringolent la colline, rentrant chez eux légèrement meurtris mais avec leurs esprits aventureux intacts.\nNames: Jack, Jill\nOutput JSON: {"french_summary": "Jack et Jill partent en quête d\'eau, mais la malchance frappe et ils dégringolent la colline, rentrant chez eux légèrement meurtris mais avec leurs esprits aventureux intacts.", "num_names": 2}\n')])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br"),n("span",{staticClass:"line-number"},[s._v("3")]),n("br"),n("span",{staticClass:"line-number"},[s._v("4")]),n("br")])]),n("p",[s._v("上述的案例只是将任务拆解，能让 AI 生成的结果更加符合要求，这个方法同样能提升 AI 的回答准确性，比如这个案例：")]),s._v(" "),n("div",{staticClass:"language- line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[s._v("Determine if the student's solution is correct or not.\n\nQuestion:\nI'm building a solar power installation and I need help working out the financials.\n\nLand costs $100 / square foot\n\nI can buy solar panels for $250 / square foot\n\nI negotiated a contract for maintenance that will cost \\\nme a flat $100k per year, and an additional $10 / square foot\nWhat is the total cost for the first year of operations\nas a function of the number of square feet.\n\nStudent's Solution:\nLet x be the size of the installation in square feet.\nCosts:\n\nLand cost: 100x\n\nSolar panel cost: 250x\n\nMaintenance cost: 100,000 + 100x\nTotal cost: 100x + 250x + 100,000 + 100x = 450x + 100,000\n\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br"),n("span",{staticClass:"line-number"},[s._v("3")]),n("br"),n("span",{staticClass:"line-number"},[s._v("4")]),n("br"),n("span",{staticClass:"line-number"},[s._v("5")]),n("br"),n("span",{staticClass:"line-number"},[s._v("6")]),n("br"),n("span",{staticClass:"line-number"},[s._v("7")]),n("br"),n("span",{staticClass:"line-number"},[s._v("8")]),n("br"),n("span",{staticClass:"line-number"},[s._v("9")]),n("br"),n("span",{staticClass:"line-number"},[s._v("10")]),n("br"),n("span",{staticClass:"line-number"},[s._v("11")]),n("br"),n("span",{staticClass:"line-number"},[s._v("12")]),n("br"),n("span",{staticClass:"line-number"},[s._v("13")]),n("br"),n("span",{staticClass:"line-number"},[s._v("14")]),n("br"),n("span",{staticClass:"line-number"},[s._v("15")]),n("br"),n("span",{staticClass:"line-number"},[s._v("16")]),n("br"),n("span",{staticClass:"line-number"},[s._v("17")]),n("br"),n("span",{staticClass:"line-number"},[s._v("18")]),n("br"),n("span",{staticClass:"line-number"},[s._v("19")]),n("br"),n("span",{staticClass:"line-number"},[s._v("20")]),n("br"),n("span",{staticClass:"line-number"},[s._v("21")]),n("br"),n("span",{staticClass:"line-number"},[s._v("22")]),n("br"),n("span",{staticClass:"line-number"},[s._v("23")]),n("br"),n("span",{staticClass:"line-number"},[s._v("24")]),n("br"),n("span",{staticClass:"line-number"},[s._v("25")]),n("br")])]),n("p",[s._v("AI 的回答是「The student's solution is correct」。但其实学生的答案是错误的，应该 360x + 100,000，我们将 prompt 调整成这样：")]),s._v(" "),n("div",{staticClass:"language-python line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-python"}},[n("code",[s._v("prompt "),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token string-interpolation"}},[n("span",{pre:!0,attrs:{class:"token string"}},[s._v("f\"\"\"\nYour task is to determine if the student's solution \\\nis correct or not.\nTo solve the problem do the following:\n- First, work out your own solution to the problem.\n- Then compare your solution to the student's solution \\\nand evaluate if the student's solution is correct or not.\nDon't decide if the student's solution is correct until\nyou have done the problem yourself.\nUse the following format:\nQuestion:\n###\nquestion here\n###\nStudent's solution:\n###\nstudent's solution here\n###\nActual solution:\n###\nsteps to work out the solution and your solution here\n###\nIs the student's solution the same as actual solution \\\njust calculated:\n###\nyes or no\n###\nStudent grade:\n###\ncorrect or incorrect\n###\nQuestion:\n###\nI'm building a solar power installation and I need help \\\nworking out the financials.\n- Land costs $100 / square foot\n- I can buy solar panels for $250 / square foot\n- I negotiated a contract for maintenance that will cost \\\n  me a flat $100k per year, and an additional $10 / square \\\n  foot\n  What is the total cost for the first year of operations \\\n  as a function of the number of square feet.\n###\nStudent's solution:\n###\nLet x be the size of the installation in square feet.\nCosts:\n1. Land cost: 100x\n2. Solar panel cost: 250x\n3. Maintenance cost: 100,000 + 100x\n   Total cost: 100x + 250x + 100,000 + 100x = 450x + 100,000\n###\nActual solution:\n\"\"\"")])]),s._v("\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br"),n("span",{staticClass:"line-number"},[s._v("3")]),n("br"),n("span",{staticClass:"line-number"},[s._v("4")]),n("br"),n("span",{staticClass:"line-number"},[s._v("5")]),n("br"),n("span",{staticClass:"line-number"},[s._v("6")]),n("br"),n("span",{staticClass:"line-number"},[s._v("7")]),n("br"),n("span",{staticClass:"line-number"},[s._v("8")]),n("br"),n("span",{staticClass:"line-number"},[s._v("9")]),n("br"),n("span",{staticClass:"line-number"},[s._v("10")]),n("br"),n("span",{staticClass:"line-number"},[s._v("11")]),n("br"),n("span",{staticClass:"line-number"},[s._v("12")]),n("br"),n("span",{staticClass:"line-number"},[s._v("13")]),n("br"),n("span",{staticClass:"line-number"},[s._v("14")]),n("br"),n("span",{staticClass:"line-number"},[s._v("15")]),n("br"),n("span",{staticClass:"line-number"},[s._v("16")]),n("br"),n("span",{staticClass:"line-number"},[s._v("17")]),n("br"),n("span",{staticClass:"line-number"},[s._v("18")]),n("br"),n("span",{staticClass:"line-number"},[s._v("19")]),n("br"),n("span",{staticClass:"line-number"},[s._v("20")]),n("br"),n("span",{staticClass:"line-number"},[s._v("21")]),n("br"),n("span",{staticClass:"line-number"},[s._v("22")]),n("br"),n("span",{staticClass:"line-number"},[s._v("23")]),n("br"),n("span",{staticClass:"line-number"},[s._v("24")]),n("br"),n("span",{staticClass:"line-number"},[s._v("25")]),n("br"),n("span",{staticClass:"line-number"},[s._v("26")]),n("br"),n("span",{staticClass:"line-number"},[s._v("27")]),n("br"),n("span",{staticClass:"line-number"},[s._v("28")]),n("br"),n("span",{staticClass:"line-number"},[s._v("29")]),n("br"),n("span",{staticClass:"line-number"},[s._v("30")]),n("br"),n("span",{staticClass:"line-number"},[s._v("31")]),n("br"),n("span",{staticClass:"line-number"},[s._v("32")]),n("br"),n("span",{staticClass:"line-number"},[s._v("33")]),n("br"),n("span",{staticClass:"line-number"},[s._v("34")]),n("br"),n("span",{staticClass:"line-number"},[s._v("35")]),n("br"),n("span",{staticClass:"line-number"},[s._v("36")]),n("br"),n("span",{staticClass:"line-number"},[s._v("37")]),n("br"),n("span",{staticClass:"line-number"},[s._v("38")]),n("br"),n("span",{staticClass:"line-number"},[s._v("39")]),n("br"),n("span",{staticClass:"line-number"},[s._v("40")]),n("br"),n("span",{staticClass:"line-number"},[s._v("41")]),n("br"),n("span",{staticClass:"line-number"},[s._v("42")]),n("br"),n("span",{staticClass:"line-number"},[s._v("43")]),n("br"),n("span",{staticClass:"line-number"},[s._v("44")]),n("br"),n("span",{staticClass:"line-number"},[s._v("45")]),n("br"),n("span",{staticClass:"line-number"},[s._v("46")]),n("br"),n("span",{staticClass:"line-number"},[s._v("47")]),n("br"),n("span",{staticClass:"line-number"},[s._v("48")]),n("br"),n("span",{staticClass:"line-number"},[s._v("49")]),n("br"),n("span",{staticClass:"line-number"},[s._v("50")]),n("br"),n("span",{staticClass:"line-number"},[s._v("51")]),n("br"),n("span",{staticClass:"line-number"},[s._v("52")]),n("br"),n("span",{staticClass:"line-number"},[s._v("53")]),n("br"),n("span",{staticClass:"line-number"},[s._v("54")]),n("br")])]),n("p",[s._v("本质上，也是将任务分拆成多步，这次 AI 输出的结果是这样的（结果就是正确的了）：")]),s._v(" "),n("div",{staticClass:"language- line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[s._v("Let x be the size of the installation in square feet.\n\nCosts:\n\n1. Land cost: 100x\n2. Solar panel cost: 250x\n3. Maintenance cost: 100,000 + 10x\n\nTotal cost: 100x + 250x + 100,000 + 10x = 360x + 100,000\n\nIs the student's solution the same as actual solution just calculated:\nNo\n\nStudent grade:\nIncorrect\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br"),n("span",{staticClass:"line-number"},[s._v("3")]),n("br"),n("span",{staticClass:"line-number"},[s._v("4")]),n("br"),n("span",{staticClass:"line-number"},[s._v("5")]),n("br"),n("span",{staticClass:"line-number"},[s._v("6")]),n("br"),n("span",{staticClass:"line-number"},[s._v("7")]),n("br"),n("span",{staticClass:"line-number"},[s._v("8")]),n("br"),n("span",{staticClass:"line-number"},[s._v("9")]),n("br"),n("span",{staticClass:"line-number"},[s._v("10")]),n("br"),n("span",{staticClass:"line-number"},[s._v("11")]),n("br"),n("span",{staticClass:"line-number"},[s._v("12")]),n("br"),n("span",{staticClass:"line-number"},[s._v("13")]),n("br"),n("span",{staticClass:"line-number"},[s._v("14")]),n("br"),n("span",{staticClass:"line-number"},[s._v("15")]),n("br")])])])}),[],!1,null,null,null);n.default=a.exports}}]);
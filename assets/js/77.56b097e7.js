(window.webpackJsonp=window.webpackJsonp||[]).push([[77],{400:function(t,l,s){"use strict";s.r(l);var e=s(3),a=Object(e.a)({},(function(){var t=this,l=t._self._c;return l("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[l("h1",{attrs:{id:"索引相关"}},[l("a",{staticClass:"header-anchor",attrs:{href:"#索引相关"}},[t._v("#")]),t._v(" 索引相关")]),t._v(" "),l("h2",{attrs:{id:"索引"}},[l("a",{staticClass:"header-anchor",attrs:{href:"#索引"}},[t._v("#")]),t._v(" 索引")]),t._v(" "),l("p",[t._v("索引与表结构是分开存储的,sql查询语句的执行过程是这样的")]),t._v(" "),l("ol",[l("li",[t._v("根据查询条件去分析,检索字段是否有索引")]),t._v(" "),l("li",[t._v("如果有索引,索引字段是否囊括展示字段")]),t._v(" "),l("li",[t._v("如果没有,根据索引中存储的表数据位置,去查询其他字段(回表)")])]),t._v(" "),l("h2",{attrs:{id:"规范"}},[l("a",{staticClass:"header-anchor",attrs:{href:"#规范"}},[t._v("#")]),t._v(" 规范")]),t._v(" "),l("ol",[l("li",[t._v("经常出现在Where子句中的字段且过滤性很强的,应该建立索引")]),t._v(" "),l("li",[t._v("经常与其他表进行连接的表,在连接字段上应该建立索引\n"),l("ol",[l("li",[t._v("嵌套循环连接中的被驱动表和排序合并连接，均应在连接列上创建适合的索引")])])]),t._v(" "),l("li",[t._v("多列组合后的唯一值多，且这些列经常出现在WHERE子句中(可以考虑复合索引)")]),t._v(" "),l("li",[t._v("复合索引建立要注意索引列的次序，区分度高的字段应放在前面(如何判断复合索引的次序)\n"),l("ol",[l("li",[t._v("做相等比较的列，尽量放到前边。")]),t._v(" "),l("li",[t._v("过滤性好的列，尽量放在前边")]),t._v(" "),l("li",[t._v("出现频率高的列，尽量放在前边")])])]),t._v(" "),l("li",[t._v("外键列上应创建索引")]),t._v(" "),l("li",[t._v("数据量超过1000的表应该考虑设计索引")]),t._v(" "),l("li",[t._v("避免冗余或重复索引\n"),l("ol",[l("li",[t._v("合理创建复合索引（避免冗余），index(a, b, c) 相当于 index(a)、index(a, b)、index(a, b, c) 。")])])]),t._v(" "),l("li",[t._v("OLTP系统，慎重使用位图索引\n"),l("ol",[l("li",[t._v("OLTP（在线交易系统）的特点为是DML操作频繁，而位图索引的特点是会因更新一行，而导致多行被锁。因此，其不适合在OLTP系统中使用。")])])]),t._v(" "),l("li",[t._v("频繁DML(写次数明显超过读次数)的表,不要建立太多的索引")]),t._v(" "),l("li",[t._v("禁止在更新十分频繁、区分度不高的属性上建立索引(Mysql)")]),t._v(" "),l("li",[t._v("在分区表中，合理使用全局索引和本地分区索引\n"),l("ol",[l("li",[t._v("由于做分区维护操作时可能会导致全局索引失效，影响SQL执行效率，需要更多的维护工作量和维护窗口时间。但全局索引在不限定分区键条件时，查询效率更高。需要结合具体情况，进行相应的设计和使用。")])])]),t._v(" "),l("li",[t._v("单表索引建议控制在5个以内，单索引字段数不允许超过5个(Mysql)\n"),l("ol",[l("li",[t._v("过多的索引会对表的insert、update带来很大的性能影响，从而影响数据库的稳定性。")])])]),t._v(" "),l("li",[t._v("高并发表的索引设计，应避免索引字段采用单序列生成\n"),l("ol",[l("li",[t._v("序列值的产生是单调增长（减少）的，会导致插入时，集中于索引的最右（左）侧的叶子块或分支块上，否则容易产生索引争用，降低数据插入效率；")])])]),t._v(" "),l("li",[t._v("WHERE条件表达式两侧的数据类型要一致")]),t._v(" "),l("li",[t._v("like子句尽量避免%开头的模糊查询")]),t._v(" "),l("li",[t._v("谨慎用负（反）向查询\n"),l("ol",[l("li",[t._v("NOT、!=、<>、NOT IN、NOT LIKE等，会导致全表扫描")])])])]),t._v(" "),l("div",{staticClass:"language- line-numbers-mode"},[l("pre",{pre:!0,attrs:{class:"language-text"}},[l("code",[t._v("not in 改写为外链接\nselect * from dept where deptno not in (select deptno from emp);\n\n如果没有找到deptno中与其匹配的,那自然就是不包含deptno\n select * from dept e left join emp d on e.deptno=d.deptno where d.deptno is null;\n\n")])]),t._v(" "),l("div",{staticClass:"line-numbers-wrapper"},[l("span",{staticClass:"line-number"},[t._v("1")]),l("br"),l("span",{staticClass:"line-number"},[t._v("2")]),l("br"),l("span",{staticClass:"line-number"},[t._v("3")]),l("br"),l("span",{staticClass:"line-number"},[t._v("4")]),l("br"),l("span",{staticClass:"line-number"},[t._v("5")]),l("br"),l("span",{staticClass:"line-number"},[t._v("6")]),l("br")])]),l("ol",{attrs:{start:"17"}},[l("li",[t._v("不对索引列进行数学运算或函数运算\n"),l("ol",[l("li",[t._v("尽量把运算施加到条件值上，而不是在条件列上。对于无法避免在索引列上的函数运算，可以通过创建函数索引来解决。但因函数索引上的一些限制和特性，除非必要，不要使用函数索引。")])])])]),t._v(" "),l("h1",{attrs:{id:"存储过程"}},[l("a",{staticClass:"header-anchor",attrs:{href:"#存储过程"}},[t._v("#")]),t._v(" 存储过程")]),t._v(" "),l("h1",{attrs:{id:"sql编码"}},[l("a",{staticClass:"header-anchor",attrs:{href:"#sql编码"}},[t._v("#")]),t._v(" Sql编码")]),t._v(" "),l("h1",{attrs:{id:"库表相关"}},[l("a",{staticClass:"header-anchor",attrs:{href:"#库表相关"}},[t._v("#")]),t._v(" 库表相关")])])}),[],!1,null,null,null);l.default=a.exports}}]);
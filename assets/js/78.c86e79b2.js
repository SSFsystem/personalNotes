(window.webpackJsonp=window.webpackJsonp||[]).push([[78],{401:function(t,s,v){"use strict";v.r(s);var _=v(3),a=Object(_.a)({},(function(){var t=this,s=t._self._c;return s("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[s("h2",{attrs:{id:"数据库性能问题"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#数据库性能问题"}},[t._v("#")]),t._v(" 数据库性能问题")]),t._v(" "),s("h2",{attrs:{id:"sql执行轨迹"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#sql执行轨迹"}},[t._v("#")]),t._v(" sql执行轨迹")]),t._v(" "),s("p",[t._v("与mysql 必知必会一样\nservice层\\引擎层")]),t._v(" "),s("p",[t._v("可以优化的地方: 连接器,优化器,引擎")]),t._v(" "),s("h3",{attrs:{id:"连接器"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#连接器"}},[t._v("#")]),t._v(" 连接器:")]),t._v(" "),s("ol",[s("li",[t._v("长连接被长时间占用,长连接oom")]),t._v(" "),s("li",[t._v("短连接大量建立/废弃")])]),t._v(" "),s("h3",{attrs:{id:"优化器"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#优化器"}},[t._v("#")]),t._v(" 优化器:")]),t._v(" "),s("p",[s("strong",[t._v("逻辑转换:")]),t._v("\nsql查询字段与数据库字段一直\n"),s("strong",[t._v("最优路径选择:")])]),t._v(" "),s("h2",{attrs:{id:"业务经典场景"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#业务经典场景"}},[t._v("#")]),t._v(" 业务经典场景")]),t._v(" "),s("p",[s("strong",[t._v("left join")])]),t._v(" "),s("ol",[s("li",[t._v("非驱动表的关联字段加上索引")]),t._v(" "),s("li",[t._v("小表驱动大表")]),t._v(" "),s("li",[t._v("驱动表基于临时表提前过滤出小数据的join数据")]),t._v(" "),s("li",[t._v("大量的join业务适当增加session维度的join Buffer")]),t._v(" "),s("li",[t._v("不要用*作为查询列,只返回需要的列")])]),t._v(" "),s("p",[s("strong",[t._v("count")])]),t._v(" "),s("ol",[s("li",[t._v("冗余存储")]),t._v(" "),s("li",[t._v("拒绝无效join")]),t._v(" "),s("li",[t._v("前端限制妥协,不显示总数")]),t._v(" "),s("li",[t._v("减少回表和增加限制条件")]),t._v(" "),s("li",[t._v("函数选择 count( * ) ( 索引字段 )")])]),t._v(" "),s("p",[s("strong",[t._v("Offset")]),t._v("\n优化覆盖索引")]),t._v(" "),s("h2",{attrs:{id:"数据库锁"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#数据库锁"}},[t._v("#")]),t._v(" 数据库锁")]),t._v(" "),s("h2",{attrs:{id:"集群健康"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#集群健康"}},[t._v("#")]),t._v(" 集群健康")])])}),[],!1,null,null,null);s.default=a.exports}}]);
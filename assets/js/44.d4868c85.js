(window.webpackJsonp=window.webpackJsonp||[]).push([[44],{366:function(t,s,e){"use strict";e.r(s);var i=e(3),n=Object(i.a)({},(function(){var t=this._self._c;return t("ContentSlotsDistributor",{attrs:{"slot-key":this.$parent.slotKey}},[t("p",[this._v("如果service层中某个方法需要用到事务，且需要加分布式锁，则一般事务在内层，锁在外层，")]),this._v(" "),t("p",[this._v("避免出现已经解锁了但是事务还没提交，从而出现优惠券超领的情况")]),this._v(" "),t("p",[this._v("所以一般都是事务在service层中添加，但是分布式锁在controller层中添加")]),this._v(" "),t("p",[this._v("因为如果锁不加在controller,就会出现异步并行的情况")])])}),[],!1,null,null,null);s.default=n.exports}}]);
(window.webpackJsonp=window.webpackJsonp||[]).push([[47],{370:function(a,t,s){"use strict";s.r(t);var e=s(3),n=Object(e.a)({},(function(){var a=this,t=a._self._c;return t("ContentSlotsDistributor",{attrs:{"slot-key":a.$parent.slotKey}},[t("p",[t("a",{attrs:{name:"ujZni"}})]),a._v(" "),t("h1",{attrs:{id:"一-推荐资料"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#一-推荐资料"}},[a._v("#")]),a._v(" 一: 推荐资料")]),a._v(" "),t("ol",[t("li",[a._v("《深入理解Kafka：核心设计与实践原理 》")]),a._v(" "),t("li",[t("a",{attrs:{href:"https://www.processon.com/view/link/624d3c2bf346fb57dbebfd1b",target:"_blank",rel:"noopener noreferrer"}},[a._v("Kafka核心知识整理 | ProcessOn免费在线作图,在线流程图,在线思维导图"),t("OutboundLink")],1),a._v(" "),t("a",{attrs:{name:"GSB1O"}})])]),a._v(" "),t("h1",{attrs:{id:"二-入门"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#二-入门"}},[a._v("#")]),a._v(" 二: 入门")]),a._v(" "),t("p",[t("a",{attrs:{name:"vVXmH"}})]),a._v(" "),t("h2",{attrs:{id:"_1-基础入门"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_1-基础入门"}},[a._v("#")]),a._v(" 1-基础入门")]),a._v(" "),t("p",[t("a",{attrs:{name:"ni81W"}})]),a._v(" "),t("h3",{attrs:{id:"kafka-是如何工作的"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#kafka-是如何工作的"}},[a._v("#")]),a._v(" kafka 是如何工作的")]),a._v(" "),t("p",[a._v("Kafka是一个分布式系统，由通过高性能"),t("a",{attrs:{href:"https://kafka.apache.org/protocol.html",target:"_blank",rel:"noopener noreferrer"}},[a._v("TCP网络协议"),t("OutboundLink")],1),a._v("进行通信的"),t("strong",[a._v("服务器")]),a._v("和"),t("strong",[a._v("客户端")]),a._v("组成。它可以部署在本地和云环境中的裸机硬件、虚拟机和容器上。\n**服务器:  **Kafka作为一个或多个服务器的集群运行,可以设置备份与功能分化,具有高度可扩展性和容错能力\n**客户端: **允许你编写分布式应用程序和微服务，这些应用程序和微服务以并行、大规模和容错方式读取、写入和处理事件流， "),t("a",{attrs:{name:"XIaea"}})]),a._v(" "),t("h3",{attrs:{id:"主要概念和术语"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#主要概念和术语"}},[a._v("#")]),a._v(" 主要概念和术语")]),a._v(" "),t("p",[t("img",{attrs:{src:"1648451060192-d796ab9b-abb4-41b5-b3b7-922995aaf323.jpeg",alt:""}}),a._v("\n**事件:  **记录发生了某事的事实,事件具有 "),t("code",[a._v("键``值")]),a._v(" "),t("code",[a._v("时间戳")]),a._v("和 可选的元数据标头\n**Producer（生产者): **向Kafka 发布（写入）事件的客户端应用程序\n**Consumer（消费者)😗*订阅（读取和处理）这些事件的客户端应用程序\n"),t("strong",[a._v("Consumer Group（消费者组）")]),a._v(" ：多个消费者实例共同组成的一个组，同时消费多个分区以实现高吞吐。\n"),t("strong",[a._v("Broker（代理）")]),a._v(" : 可以看作是一个独立的 Kafka 实例，负责处理客户端请求以及对消息持久化。")]),a._v(" "),t("blockquote",[t("p",[a._v("在kafka中生产者和消费者是完全解耦的,彼此不可知")])]),a._v(" "),t("p",[a._v("每个 "),t("strong",[a._v("Broker")]),a._v(" 中又包含了 **Topic **以及 "),t("strong",[a._v("Partition "),t("strong",[a._v("这两个重要的概念：\n"),t("strong",[a._v("Topic（主题）")]),a._v(" : Producer 将消息发送到特定的主题，Consumer 通过订阅特定的 Topic 来消费消息。\n"),t("strong",[a._v("Partition（分区）")]),a._v(" : Partition 属于 Topic 的一部分。一个 Topic 可以有多个 Partition ，并且同一 Topic 下的 Partition 可以分布在不同的 Broker 上，这也就表明一个 Topic 可以横跨多个 Broker 。\n事件被组织并持久的存储在")]),a._v("主题")]),a._v("中,"),t("code",[a._v("主题")]),a._v("支持零或多个 生产者和写入者,即兼容通道模式."),t("strong",[a._v("主题")]),a._v("中的数据在使用后不会被删除,可以通过每个主题的配置设置定义 Kafka 应将事件保留多长时间.")]),a._v(" "),t("blockquote",[t("p",[a._v("Kafka的性能在数据大小方面实际上是恒定的，因此长时间存储数据是完全可以的。")])]),a._v(" "),t("p",[a._v("主题是"),t("strong",[a._v("分区")]),a._v("的,意味数据具有容错能力和高可用性")]),a._v(" "),t("p",[t("a",{attrs:{name:"myzHh"}})]),a._v(" "),t("h3",{attrs:{id:"操作部署"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#操作部署"}},[a._v("#")]),a._v(" 操作部署")]),a._v(" "),t("p",[a._v("通过docker-compose.yml,执行   docker-compose  up运行\n访问  kafka-manager  图形化管理界面对kafka进行设置")]),a._v(" "),t("div",{staticClass:"language-yaml line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-yaml"}},[t("code",[t("span",{pre:!0,attrs:{class:"token key atrule"}},[a._v("version")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(":")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[a._v("'3'")]),a._v("\n"),t("span",{pre:!0,attrs:{class:"token key atrule"}},[a._v("services")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(":")]),a._v("\n  "),t("span",{pre:!0,attrs:{class:"token key atrule"}},[a._v("zookepper")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(":")]),a._v("\n    "),t("span",{pre:!0,attrs:{class:"token key atrule"}},[a._v("image")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(":")]),a._v(" wurstmeister/zookeeper                    "),t("span",{pre:!0,attrs:{class:"token comment"}},[a._v("# 原镜像`wurstmeister/zookeeper`")]),a._v("\n    "),t("span",{pre:!0,attrs:{class:"token key atrule"}},[a._v("container_name")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(":")]),a._v(" zookeeper                        "),t("span",{pre:!0,attrs:{class:"token comment"}},[a._v("# 容器名为'zookeeper'")]),a._v("\n    "),t("span",{pre:!0,attrs:{class:"token key atrule"}},[a._v("volumes")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(":")]),a._v("                                         "),t("span",{pre:!0,attrs:{class:"token comment"}},[a._v("# 数据卷挂载路径设置,将本机目录映射到容器目录")]),a._v("\n      "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("-")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[a._v('"/etc/localtime:/etc/localtime"')]),a._v("\n    "),t("span",{pre:!0,attrs:{class:"token key atrule"}},[a._v("ports")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(":")]),a._v("                                           "),t("span",{pre:!0,attrs:{class:"token comment"}},[a._v("# 映射端口")]),a._v("\n      "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("-")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[a._v('"2181:2181"')]),a._v("\n\n  "),t("span",{pre:!0,attrs:{class:"token key atrule"}},[a._v("kafka")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(":")]),a._v("\n    "),t("span",{pre:!0,attrs:{class:"token key atrule"}},[a._v("image")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(":")]),a._v(" wurstmeister/kafka                                "),t("span",{pre:!0,attrs:{class:"token comment"}},[a._v("# 原镜像`wurstmeister/kafka`")]),a._v("\n    "),t("span",{pre:!0,attrs:{class:"token key atrule"}},[a._v("container_name")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(":")]),a._v(" kafka                                    "),t("span",{pre:!0,attrs:{class:"token comment"}},[a._v("# 容器名为'kafka'")]),a._v("\n    "),t("span",{pre:!0,attrs:{class:"token key atrule"}},[a._v("volumes")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(":")]),a._v("                                                 "),t("span",{pre:!0,attrs:{class:"token comment"}},[a._v("# 数据卷挂载路径设置,将本机目录映射到容器目录")]),a._v("\n      "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("-")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[a._v('"/etc/localtime:/etc/localtime"')]),a._v("\n    "),t("span",{pre:!0,attrs:{class:"token key atrule"}},[a._v("environment")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(":")]),a._v("                                                       "),t("span",{pre:!0,attrs:{class:"token comment"}},[a._v("# 设置环境变量,相当于docker run命令中的-e")]),a._v("\n      "),t("span",{pre:!0,attrs:{class:"token key atrule"}},[a._v("KAFKA_BROKER_ID")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(":")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token number"}},[a._v("0")]),a._v("                                               "),t("span",{pre:!0,attrs:{class:"token comment"}},[a._v("# 在kafka集群中，每个kafka都有一个BROKER_ID来区分自己")]),a._v("\n      "),t("span",{pre:!0,attrs:{class:"token key atrule"}},[a._v("KAFKA_ADVERTISED_LISTENERS")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(":")]),a._v(" PLAINTEXT"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(":")]),a._v("//ip"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(":")]),t("span",{pre:!0,attrs:{class:"token number"}},[a._v("9092")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token comment"}},[a._v("# TODO 将kafka的地址端口注册给zookeeper")]),a._v("\n      "),t("span",{pre:!0,attrs:{class:"token key atrule"}},[a._v("KAFKA_LISTENERS")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(":")]),a._v(" PLAINTEXT"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(":")]),a._v("//0.0.0.0"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(":")]),t("span",{pre:!0,attrs:{class:"token number"}},[a._v("9092")]),a._v("                        "),t("span",{pre:!0,attrs:{class:"token comment"}},[a._v("# 配置kafka的监听端口")]),a._v("\n      "),t("span",{pre:!0,attrs:{class:"token key atrule"}},[a._v("KAFKA_ZOOKEEPER_CONNECT")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(":")]),a._v(" zookeeper"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(":")]),t("span",{pre:!0,attrs:{class:"token number"}},[a._v("2181")]),a._v("                \n      "),t("span",{pre:!0,attrs:{class:"token key atrule"}},[a._v("KAFKA_CREATE_TOPICS")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(":")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[a._v('"hello_world"')]),a._v("\n    "),t("span",{pre:!0,attrs:{class:"token key atrule"}},[a._v("ports")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(":")]),a._v("                              "),t("span",{pre:!0,attrs:{class:"token comment"}},[a._v("# 映射端口")]),a._v("\n      "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("-")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[a._v('"9092:9092"')]),a._v("\n    "),t("span",{pre:!0,attrs:{class:"token key atrule"}},[a._v("depends_on")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(":")]),a._v("                         "),t("span",{pre:!0,attrs:{class:"token comment"}},[a._v("# 解决容器依赖启动先后问题")]),a._v("\n      "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("-")]),a._v(" zookepper\n\n  "),t("span",{pre:!0,attrs:{class:"token key atrule"}},[a._v("kafka-manager")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(":")]),a._v("\n    "),t("span",{pre:!0,attrs:{class:"token key atrule"}},[a._v("image")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(":")]),a._v(" sheepkiller/kafka"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("-")]),a._v("manager                         "),t("span",{pre:!0,attrs:{class:"token comment"}},[a._v("# 原镜像`sheepkiller/kafka-manager`")]),a._v("\n    "),t("span",{pre:!0,attrs:{class:"token key atrule"}},[a._v("container_name")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(":")]),a._v(" kafka"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("-")]),a._v("manager                            "),t("span",{pre:!0,attrs:{class:"token comment"}},[a._v("# 容器名为'kafka-manager'")]),a._v("\n    "),t("span",{pre:!0,attrs:{class:"token key atrule"}},[a._v("environment")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(":")]),a._v("                        "),t("span",{pre:!0,attrs:{class:"token comment"}},[a._v("# 设置环境变量,相当于docker run命令中的-e")]),a._v("\n      "),t("span",{pre:!0,attrs:{class:"token key atrule"}},[a._v("ZK_HOSTS")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(":")]),a._v(" zookeeper"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(":")]),t("span",{pre:!0,attrs:{class:"token number"}},[a._v("2181")]),a._v(" \n      "),t("span",{pre:!0,attrs:{class:"token key atrule"}},[a._v("APPLICATION_SECRET")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(":")]),a._v(" xxxxx\n      "),t("span",{pre:!0,attrs:{class:"token key atrule"}},[a._v("KAFKA_MANAGER_AUTH_ENABLED")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(":")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[a._v('"true"')]),a._v("  "),t("span",{pre:!0,attrs:{class:"token comment"}},[a._v("# 开启kafka-manager权限校验")]),a._v("\n      "),t("span",{pre:!0,attrs:{class:"token key atrule"}},[a._v("KAFKA_MANAGER_USERNAME")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(":")]),a._v(" admin       "),t("span",{pre:!0,attrs:{class:"token comment"}},[a._v("# 登陆账户")]),a._v("\n      "),t("span",{pre:!0,attrs:{class:"token key atrule"}},[a._v("KAFKA_MANAGER_PASSWORD")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(":")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token number"}},[a._v("123456")]),a._v("      "),t("span",{pre:!0,attrs:{class:"token comment"}},[a._v("# 登陆密码")]),a._v("\n    "),t("span",{pre:!0,attrs:{class:"token key atrule"}},[a._v("ports")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(":")]),a._v("                              "),t("span",{pre:!0,attrs:{class:"token comment"}},[a._v("# 映射端口")]),a._v("\n      "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("-")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[a._v('"9000:9000"')]),a._v("\n    "),t("span",{pre:!0,attrs:{class:"token key atrule"}},[a._v("depends_on")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(":")]),a._v("                         "),t("span",{pre:!0,attrs:{class:"token comment"}},[a._v("# 解决容器依赖启动先后问题")]),a._v("\n      "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("-")]),a._v(" kafka\n")])]),a._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[a._v("1")]),t("br"),t("span",{staticClass:"line-number"},[a._v("2")]),t("br"),t("span",{staticClass:"line-number"},[a._v("3")]),t("br"),t("span",{staticClass:"line-number"},[a._v("4")]),t("br"),t("span",{staticClass:"line-number"},[a._v("5")]),t("br"),t("span",{staticClass:"line-number"},[a._v("6")]),t("br"),t("span",{staticClass:"line-number"},[a._v("7")]),t("br"),t("span",{staticClass:"line-number"},[a._v("8")]),t("br"),t("span",{staticClass:"line-number"},[a._v("9")]),t("br"),t("span",{staticClass:"line-number"},[a._v("10")]),t("br"),t("span",{staticClass:"line-number"},[a._v("11")]),t("br"),t("span",{staticClass:"line-number"},[a._v("12")]),t("br"),t("span",{staticClass:"line-number"},[a._v("13")]),t("br"),t("span",{staticClass:"line-number"},[a._v("14")]),t("br"),t("span",{staticClass:"line-number"},[a._v("15")]),t("br"),t("span",{staticClass:"line-number"},[a._v("16")]),t("br"),t("span",{staticClass:"line-number"},[a._v("17")]),t("br"),t("span",{staticClass:"line-number"},[a._v("18")]),t("br"),t("span",{staticClass:"line-number"},[a._v("19")]),t("br"),t("span",{staticClass:"line-number"},[a._v("20")]),t("br"),t("span",{staticClass:"line-number"},[a._v("21")]),t("br"),t("span",{staticClass:"line-number"},[a._v("22")]),t("br"),t("span",{staticClass:"line-number"},[a._v("23")]),t("br"),t("span",{staticClass:"line-number"},[a._v("24")]),t("br"),t("span",{staticClass:"line-number"},[a._v("25")]),t("br"),t("span",{staticClass:"line-number"},[a._v("26")]),t("br"),t("span",{staticClass:"line-number"},[a._v("27")]),t("br"),t("span",{staticClass:"line-number"},[a._v("28")]),t("br"),t("span",{staticClass:"line-number"},[a._v("29")]),t("br"),t("span",{staticClass:"line-number"},[a._v("30")]),t("br"),t("span",{staticClass:"line-number"},[a._v("31")]),t("br"),t("span",{staticClass:"line-number"},[a._v("32")]),t("br"),t("span",{staticClass:"line-number"},[a._v("33")]),t("br"),t("span",{staticClass:"line-number"},[a._v("34")]),t("br"),t("span",{staticClass:"line-number"},[a._v("35")]),t("br"),t("span",{staticClass:"line-number"},[a._v("36")]),t("br"),t("span",{staticClass:"line-number"},[a._v("37")]),t("br"),t("span",{staticClass:"line-number"},[a._v("38")]),t("br"),t("span",{staticClass:"line-number"},[a._v("39")]),t("br")])]),t("p",[t("a",{attrs:{name:"FaLJ3"}})]),a._v(" "),t("h2",{attrs:{id:"_2-常用操作"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_2-常用操作"}},[a._v("#")]),a._v(" 2:常用操作:")]),a._v(" "),t("p",[t("a",{attrs:{name:"BQwaO"}})]),a._v(" "),t("h3",{attrs:{id:"kafka-应用程序接口"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#kafka-应用程序接口"}},[a._v("#")]),a._v(" kafka 应用程序接口")]),a._v(" "),t("p",[a._v("除了用于管理任务的命令行工具外，Kafka 还有五个用于 Java 和 Scala 的核心 API：")]),a._v(" "),t("ol",[t("li",[t("a",{attrs:{href:"https://kafka.apache.org/documentation/#producerapi",target:"_blank",rel:"noopener noreferrer"}},[a._v("Producer API"),t("OutboundLink")],1),a._v(" :用于将事件流发布（写入）到一个或多个 Kafka 主题")]),a._v(" "),t("li",[t("a",{attrs:{href:"https://kafka.apache.org/documentation/#consumerapi",target:"_blank",rel:"noopener noreferrer"}},[a._v("Consumer API"),t("OutboundLink")],1),a._v(" :用于订阅（读取）一个或多个主题并处理向其生成的事件流")]),a._v(" "),t("li",[t("a",{attrs:{href:"https://kafka.apache.org/32/documentation/streams",target:"_blank",rel:"noopener noreferrer"}},[a._v("Streams API"),t("OutboundLink")],1),a._v(" : 用于实现流处理应用程序和微服务api")]),a._v(" "),t("li",[t("a",{attrs:{href:"https://kafka.apache.org/documentation/#connectapi",target:"_blank",rel:"noopener noreferrer"}},[a._v("Connect API"),t("OutboundLink")],1),a._v(" : 用于构建和运行可重用的数据导入/导出连接器 (不需要自己实现 ,kafka社区意见提供了很多连接器)")]),a._v(" "),t("li",[t("a",{attrs:{href:"https://kafka.apache.org/documentation/#adminapi",target:"_blank",rel:"noopener noreferrer"}},[a._v("Admin API"),t("OutboundLink")],1),a._v(" : 用于管理和检查主题、代理和其他 Kafka 对象")])]),a._v(" "),t("p",[t("a",{attrs:{name:"DBiot"}})]),a._v(" "),t("h1",{attrs:{id:"三-热门知识点"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#三-热门知识点"}},[a._v("#")]),a._v(" 三: 热门知识点")]),a._v(" "),t("p",[t("a",{attrs:{name:"HjF2Z"}})]),a._v(" "),t("h2",{attrs:{id:"如何保证顺序消费"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#如何保证顺序消费"}},[a._v("#")]),a._v(" 如何保证顺序消费")]),a._v(" "),t("p",[a._v("经常有业务场景需要严格保证消息的消费顺序,例如修改会员等级与根据会员等级这两个操作对顺序性要求就严格.\nKafka 中 "),t("strong",[a._v("Partition(分区)"),t("strong",[a._v("是真正保存消息的地方，我们发送的消息都被放在了这里。而我们的 "),t("strong",[a._v("Partition(分区)")]),a._v(" 又存在于 "),t("strong",[a._v("Topic(主题) "),t("strong",[a._v("这个概念中，并且我们可以给特定 Topic 指定多个 "),t("strong",[a._v("Partition")]),a._v(",多个分区可以存在不同的")]),a._v("Broker")]),a._v("中\n这就导致")]),a._v("kafka")]),a._v("可以保证"),t("strong",[a._v("Partition(分区)"),t("strong",[a._v("中消息的顺序性,不能保证")]),a._v(" Topic(主题) "),t("strong",[a._v("中的")]),a._v(" Partition(分区)")]),a._v(" 的有序")]),a._v(" "),t("blockquote",[t("p",[a._v("消息在被追加到 Partition(分区)的时候都会分配一个特定的偏移量（offset）。Kafka 通过偏移量（offset）来保证消息在分区内的顺序性。")])]),a._v(" "),t("p",[t("img",{attrs:{src:"1623850209944-c6d54675-be87-4e88-a862-e5eea11c021c.png",alt:""}}),a._v(" "),t("a",{attrs:{name:"hmmhM"}})]),a._v(" "),t("h3",{attrs:{id:"解决措施-需求是要求强一致"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#解决措施-需求是要求强一致"}},[a._v("#")]),a._v(" 解决措施(需求是要求强一致):")]),a._v(" "),t("p",[a._v("Kafka 中发送 1 条消息的时候，可以指定 topic, partition, key,data（数据） 4 个参数。如果你发送消息的时候指定了 Partition 的话，所有消息都会被发送到指定的 Partition。并且，同一个 key 的消息可以保证只发送到同一个 partition，这个我们可以采用表/对象的 id 来作为 key 。\n"),t("strong",[a._v("最终一致:")])]),a._v(" "),t("ol",[t("li",[a._v("1 个 Topic 只对应一个 Partition。")]),a._v(" "),t("li",[a._v("**单处理:**发送消息时指定key/Partition,() (推荐)")])]),a._v(" "),t("p",[t("strong",[a._v("最终一致:")])]),a._v(" "),t("ol",[t("li",[a._v("**宽表: **将每一个订单状态，单独分出一个或多个独立的字段。消息来时只更新对应的字段就好，消息只会存在短暂的状态不一致问题，但是状态最终是一致的")]),a._v(" "),t("li",[a._v("**消息补偿机制：**另一个进行消费相同topic的数据，消息落盘，延迟处理。将消息与DB进行对比，如果发现数据不一致，再重新发送消息至主进程处理")]),a._v(" "),t("li",[a._v("**单处理:**只需要把相同userId/orderId发送到相同的partition（因为一个partition由一个Consumer消费），又能解决大部分消费顺序的问题()")])]),a._v(" "),t("p",[t("a",{attrs:{name:"eouD0"}})]),a._v(" "),t("h2",{attrs:{id:"消费者组与重平衡"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#消费者组与重平衡"}},[a._v("#")]),a._v(" 消费者组与重平衡")]),a._v(" "),t("p",[a._v("多个消费者实例组成消费者组,Kafka 以 Consumer Group 这一个"),t("strong",[a._v("整体")]),a._v("来订阅 Topic （主题） ，Consumer Group 内的所有 Consumer 共同来消费订阅的 Topic 内的所有  Partition（分区）。可以创建多个消费者组订阅同一主题来进行同一消息的重复消费.")]),a._v(" "),t("p",[a._v("Kafka 通过 Group ID（字符串） 唯一标识 Consumer Group 。")]),a._v(" "),t("p",[a._v("并且，Topic 下的每个 Partition 只从属于 Consumer Group 中的一个 Consumer，"),t("strong",[a._v("不可能出现 Consumer Group 中的两个 Consumer 负责同一个 Partition")]),a._v("。\n如果消费者组内数量大于主题分区,就会有消费者空闲,因此一般建议消费者组内"),t("strong",[a._v("消费者数量")]),a._v("等于"),t("strong",[a._v("主题数量")])]),a._v(" "),t("blockquote",[t("p",[a._v("重平衡:假如消费者组的数量发生变化呢,就会触发Rebalance")])]),a._v(" "),t("p",[t("strong",[a._v("什么是 Rebalance 呢？")]),a._v(" Rebalance 翻译过来就是 "),t("strong",[a._v("重平衡")]),a._v(" ，它本质上是一种协议，规定了一个 Consumer Group 下的所有 Consumer 如何达成一致来分配订阅 Topic 的每个分区。比如某个 Consumer Group 下有 3 个 Consumer，它订阅了 3 个 Topic，总共 6个 Partition 。正常情况下，Kafka 平均会为每个 Consumer 分配 2 个 "),t("strong",[a._v("分区")]),a._v("。这个分配的过程就叫 Rebalance。")]),a._v(" "),t("p",[a._v("除了 Consumer Group 的 Consumer 发生变化时会发生 Rebalance，下面这些情况也会发生 Rebalance：")]),a._v(" "),t("ul",[t("li",[a._v("订阅的 Topic 内的 Partition 发生变更")]),a._v(" "),t("li",[a._v("订阅的 Topic 发生变更")])]),a._v(" "),t("p",[t("a",{attrs:{name:"SxJm3"}})]),a._v(" "),t("h2",{attrs:{id:"如何保证数据不丢失"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#如何保证数据不丢失"}},[a._v("#")]),a._v(" 如何保证数据不丢失")]),a._v(" "),t("p",[a._v("丢失消息有 3 种不同的情况，针对每一种情况有不同的解决方案。")]),a._v(" "),t("ol",[t("li",[a._v("生产者丢失消息的情况")]),a._v(" "),t("li",[a._v("消费者丢失消息的情况")]),a._v(" "),t("li",[a._v("Kafka 弄丢了消息 "),t("a",{attrs:{name:"p7Tjv"}})])]),a._v(" "),t("h3",{attrs:{id:"生产者丢失消息的情况"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#生产者丢失消息的情况"}},[a._v("#")]),a._v(" 生产者丢失消息的情况")]),a._v(" "),t("p",[a._v("生产者(Producer) 调用send方法发送消息之后，消息可能因为网络问题并没有发送过去。所以，我们不能默认在调用 send() 方法发送消息之后消息消息发送成功了。\n为了确定消息是发送成功，我们要判断消息发送的结果。\n但是，要注意的是 Producer 使用 send() 方法发送消息实际上是异步的操作，我们可以通过 get()方法获取调用结果，但是这样也让它变为了同步操作，示例代码如下：\n但是一般不推荐这么做！可以采用为其添加回调函数的形式，示例代码如下：\n如果消息发送失败的话，我们检查失败的原因之后重新发送即可！\n另外，这里推荐为 Producer 的 retries（重试次数）设置一个比较合理的值，一般是 3 ，但是为了保证消息不丢失的话一般会设置比较大一点。设置完成之后，当出现网络问题之后能够自动重试消息发送，避免消息丢失。另外，建议还要设置重试间隔，因为间隔太小的话重试的效果就不明显了，网络波动一次你 3 次一下子就重试完了 "),t("a",{attrs:{name:"oT5nD"}})]),a._v(" "),t("h3",{attrs:{id:"消费者丢失消息的情况"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#消费者丢失消息的情况"}},[a._v("#")]),a._v(" 消费者丢失消息的情况")]),a._v(" "),t("p",[a._v("我们知道消息在被追加到 Partition(分区)的时候都会分配一个特定的偏移量（offset）。offset 表示 Consumer 当前消费到的 Partition(分区)的所在的位置。Kafka 通过偏移量（offset）可以保证消息在分区内的顺序性。")]),a._v(" "),t("p",[a._v("当消费者拉取到了分区的某个消息之后，消费者会自动提交了 offset。自动提交的话会有一个问题，试想一下，当消费者刚拿到这个消息准备进行真正消费的时候，突然挂掉了，消息实际上并没有被消费，但是 offset 却被自动提交了。\n这种情况的解决办法也比较粗暴，我们手动关闭自动提交 offset，每次在真正消费完消息之后之后再自己手动提交 offset 。但是，细心的朋友一定会发现，这样会带来消息被重新消费的问题。比如你刚刚消费完消息之后，还没提交 offset，结果自己挂掉了，那么这个消息理论上就会被消费两次。 "),t("a",{attrs:{name:"KKzJh"}})]),a._v(" "),t("h3",{attrs:{id:"kafka-弄丢了消息"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#kafka-弄丢了消息"}},[a._v("#")]),a._v(" Kafka 弄丢了消息")]),a._v(" "),t("p",[a._v("我们知道 Kafka 为 Partition 引入了多副本（Replica）机制。Partition 中的多个副本之间会有一个叫做 Leader 的家伙，其他副本称为 Follower。我们发送的消息会被发送到 Leader 副本，然后 Follower 副本才能从 Leader 副本中拉取消息进行同步。生产者和消费者只与 Leader 副本交互。你可以理解为其他副本只是 Leader 副本的拷贝，它们的存在只是为了保证消息存储的安全性。\n试想一种情况：假如  Leader 副本所在的 Broker 突然挂掉，那么就要从 Fllower 副本重新选出一个  Leader ，但是  Leader 的数据还有一些没有被 Follower 副本的同步的话，就会造成消息丢失。 "),t("a",{attrs:{name:"KXO3u"}})]),a._v(" "),t("h4",{attrs:{id:"设置-acks-all"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#设置-acks-all"}},[a._v("#")]),a._v(" 设置 acks = all")]),a._v(" "),t("p",[a._v("解决办法就是我们设置  acks = all。acks 是 Kafka 生产者(Producer)  很重要的一个参数。\nacks 的默认值即为1，代表我们的消息被leader副本接收之后就算被成功发送。当我们配置 acks = all 表示只有所有 ISR 列表的副本全部收到消息时，生产者才会接收到来自服务器的响应. 这种模式是最高级别的，也是最安全的，可以确保不止一个 Broker 接收到了消息. 该模式的延迟会很高. "),t("a",{attrs:{name:"xGokz"}})]),a._v(" "),t("h4",{attrs:{id:"设置-replication-factor-3"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#设置-replication-factor-3"}},[a._v("#")]),a._v(" 设置 replication.factor >= 3")]),a._v(" "),t("p",[a._v("为了保证 Leader 副本能有 Follower 副本能同步消息，我们一般会为 Topic 设置 replication.factor >= 3。这样就可以保证每个 Partition 至少有 3 个副本。虽然造成了数据冗余，但是带来了数据的安全性。 "),t("a",{attrs:{name:"ZxPgX"}})]),a._v(" "),t("h4",{attrs:{id:"设置-min-insync-replicas-1"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#设置-min-insync-replicas-1"}},[a._v("#")]),a._v(" 设置 min.insync.replicas > 1")]),a._v(" "),t("p",[a._v("一般情况下我们还需要设置 min.insync.replicas> 1 ，这样配置代表消息至少要被写入到 2 个副本才算是被成功发送。min.insync.replicas 的默认值为 1 ，在实际生产中应尽量避免默认值 1。\n但是，为了保证整个 Kafka 服务的高可用性，你需要确保 replication.factor > min.insync.replicas 。为什么呢？设想一下假如两者相等的话，只要是有一个副本挂掉，整个分区就无法正常工作了。这明显违反高可用性！一般推荐设置成 replication.factor = min.insync.replicas + 1。 "),t("a",{attrs:{name:"qxU4g"}})]),a._v(" "),t("h4",{attrs:{id:"设置-unclean-leader-election-enable-false"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#设置-unclean-leader-election-enable-false"}},[a._v("#")]),a._v(" 设置 unclean.leader.election.enable = false")]),a._v(" "),t("p",[a._v("Kafka 0.11.0.0 版本开始 unclean.leader.election.enable 参数的默认值由原来的 true 改为 false\n我们最开始也说了我们发送的消息会被发送到 Leader 副本，然后 Follower 副本才能从 Leader 副本中拉取消息进行同步。多个 Follower 副本之间的消息同步情况不一样，当我们配置了 unclean.leader.election.enable = false 的话，当 Leader 副本发生故障时就不会从 Follower 副本中和 Leader 同步程度达不到要求的副本中选择出 Leader ，这样降低了消息丢失的可能性。\nReference")]),a._v(" "),t("ul",[t("li",[a._v("Kafka 官方文档："),t("a",{attrs:{href:"https://kafka.apache.org/documentation/",target:"_blank",rel:"noopener noreferrer"}},[a._v("https://kafka.apache.org/documentation/"),t("OutboundLink")],1)]),a._v(" "),t("li",[a._v("极客时间—《Kafka 核心技术与实战》第 11 节：无消息丢失配置怎么实现？")])]),a._v(" "),t("h2",{attrs:{id:"kafka如何保证高可用"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#kafka如何保证高可用"}},[a._v("#")]),a._v(" kafka如何保证高可用")])])}),[],!1,null,null,null);t.default=n.exports}}]);
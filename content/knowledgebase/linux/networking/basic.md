---
title: 'Basic'
date: '2018-09-03T05:33:48Z'
---

http://linux-ip.net/html/routing-tables.html


# ip rule
```
man ip rule
ip rule list
```
Semantically, the natural action is to select the nexthop and the output device.

At startup time the kernel configures the default RPDB consisting of three rules:

1.     Priority: 0, Selector: match anything, Action: lookup routing table local (ID 255).  The local table is a
        special routing table containing high priority control routes for local and broadcast addresses.

2.     Priority: 32766, Selector: match anything, Action: lookup routing table main (ID 254).  The main table is
        the normal routing table containing all non-policy routes. This rule may be deleted and/or overridden with
        other ones by the administrator.

3.     Priority: 32767, Selector: match anything, Action: lookup routing table default (ID 253).  The default table
        is empty. It is reserved for some post-processing if no previous default rules selected the packet.  This
        rule may also be deleted.

# ip route 
cat /etc/iproute2/rt_tables

ip -d route show table local
ip -d route show table main

# iptables

https://www.kernel.org/doc/Documentation/networking/tproxy.txt

https://n0where.net/how-does-it-work-iptables

 
![iptables Processing Flowchart](https://stuffphilwrites.com/wp-content/uploads/2018/09/FW-IDS-iptables-Flowchart-2018-09-01.png)

# TPROXY

https://github.com/kristrev/tproxy-example

# books
https://blog.csdn.net/freeking101/article/details/71473369
首先要说讲述TCP/IP的书很多，其中有3本书很全。

分别是《TCP/IP详解》三卷本，《用TCP/IP进行网际互连》三卷本，《TCP/IP指南》+《IPv6》四卷本

其中TCP/IP详解的作者还写了另外2本经典著作，《Unix环境高级编程》，《Unix网络编程》

作者W.Richard Stevens个人网站  http://www.kohala.com/

大师作品部部经典，可惜1999年去另一个世界维护Unix了。。。。。。。。。
---
title: 'proxy'
date: '2018-09-03T02:47:42Z'
---


client:
```bash
ip route del default via <old_gateway>
ip route add default via <new_gateway>

```

server
```bash
#1 enable ip forward
sysctl -w net.ipv4.ip_forward=1


net.ipv4.ip_forward = 0
sysctl -p /etc/sysctl.conf 


# marking non-local sockets work 
iptables -t mangle -N DIVERT
iptables -t mangle -A PREROUTING -p tcp -m socket -j DIVERT
iptables -t mangle -A DIVERT -j MARK --set-mark 0x1/0x1
iptables -t mangle -A DIVERT -j ACCEPT

ip rule add fwmark 1 lookup 100
ip route add local 0.0.0.0/0 dev lo table 100


iptables -t mangle -A PREROUTING -p tcp -d 1.2.3.4 -j TPROXY --tproxy-mark 0x1/0x1 --on-port 50080
iptables -t mangle -A PREROUTING -p udp -d 1.2.3.4 -j TPROXY --tproxy-mark 0x1/0x1 --on-port 50080


```


tsocket
Transparent Proxying Patches, Take 3
https://lwn.net/Articles/252545/

squid
https://wiki.squid-cache.org/Features/Tproxy4

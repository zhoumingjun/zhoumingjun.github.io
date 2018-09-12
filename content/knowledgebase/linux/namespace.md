---
title : "namespace"
date : "2018-08-27T05:22:27Z"
tags : ['misc']
---
https://medium.com/@teddyking/namespaces-in-go-basics-e3f0fc1ff69a


* view docker container's namespace 

```bash
pid=`docker inspect -f '{{.State.Pid}}' $container_id`
ln -s /proc/$pid/ns/net /var/run/netns/$container_id
```
---
title : "network in deep"
date : "2017-03-06T16:03:35+08:00"
---

* docker int details    
https://docker-k8s-lab.readthedocs.io/en/latest/index.html

* Container Namespaces – Deep Dive into Container Networking    
https://platform9.com/blog/container-namespaces-deep-dive-container-networking/

```bash
container_name=xxx
pid=$(docker inspect -f '{{.State.Pid}}' "$container_name")
sudo mkdir -p /var/run/netns
sudo ln -sf /proc/$pid/ns/net "/var/run/netns/$container_name"
sudo ip netns
sudo ip netns exec "$container_name" ip a
```

* netadmin
Docker containers do not have full privileges by default. Try adding this to the docker run command:


  --cap-add=NET_ADMIN

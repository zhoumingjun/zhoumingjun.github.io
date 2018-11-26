---
title : "k8s"
date : "2018-10-31T09:11:17Z"
tags: ["k8s"]
---

## references
https://github.com/ramitsurana/awesome-kubernetes

## microservice on k8s
https://ewanvalentine.io/microservices-in-golang-part-1/

## minikube start with RABC

from https://gist.github.com/F21/08bfc2e3592bed1e931ec40b8d2ab6f5







minikube start  --cache-images --vm-driver kvm2 --cpus 4 --memory 4096 --extra-config=apiserver.authorization-mode=RBAC


kubectl create clusterrolebinding add-on-cluster-admin --clusterrole=cluster-admin --serviceaccount=kube-system:default


## logs 
minikube ssh
sudo journalctl -u kubelet -f

## download kublet 
https://kubernetes.io/docs/setup/independent/install-kubeadm/

RELEASE="$(curl -sSL https://dl.k8s.io/release/stable.txt)"

mkdir -p /opt/bin
cd /opt/bin
curl -L --remote-name-all https://storage.googleapis.com/kubernetes-release/release/${RELEASE}/bin/linux/amd64/{kubeadm,kubelet,kubectl}
chmod +x {kubeadm,kubelet,kubectl}

curl -sSL "https://raw.githubusercontent.com/kubernetes/kubernetes/${RELEASE}/build/debs/kubelet.service" | sed "s:/usr/bin:/opt/bin:g" > /etc/systemd/system/kubelet.service
mkdir -p /etc/systemd/system/kubelet.service.d
curl -sSL "https://raw.githubusercontent.com/kubernetes/kubernetes/${RELEASE}/build/debs/10-kubeadm.conf" | sed "s:/usr/bin:/opt/bin:g" > /etc/systemd/system/kubelet.service.d/10-kubeadm.conf


## errors
unknown flag: --Authorization.Mode
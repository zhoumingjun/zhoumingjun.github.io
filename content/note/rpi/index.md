---
title : "RaspberryPi zero w"
date : "2018-10-15T08:10:38Z"
tags : ["rpi"]

---

# introduction

# config
## enable ssh
```
cd boot
touch ssh
```
## hack config.txt

/boot/config.txt

dtoverlay=dwc2

## hack cmdline.txt

/boot/cmdline.txt

modules-load=dwc2,g_ether

# network

## set wireless configuration

find the available wireless ap
`iw dev wlan0 scan` 

cat /etc/wpa_supplicant/wpa_supplicant.conf
```
ctrl_interface=DIR=/var/run/wpa_supplicant GROUP=netdev
update_config=1
country=CN

network={
	ssid="BBHome"
	psk="--"
}

network={
	ssid="Boxin2.4G_2"
	psk="--"
}
```

## set static address

```
interface usb0
metric 300
static ip_address=192.168.7.2
static routers=192.168.7.1
static domain_name_servers=192.168.7.1

interface wlan0
metric 200
static ip_address=10.0.0.200/24
static routers=10.0.0.99
static domain_name_servers=10.0.0.99

```

## share network from usb0
```
sudo iptables -t nat -A POSTROUTING -o enp4s0 -j MASQUERADE
```
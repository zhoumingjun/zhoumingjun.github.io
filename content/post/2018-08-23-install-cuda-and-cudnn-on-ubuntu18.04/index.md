---
title : "Install cuda9.2 and cudnn7.2 on ubuntu 18.04"
date : "2018-08-23T15:01:49Z"
tags : ml
---

# Overview
To run tensorflow/pytorch with gpu, I need to install cuda and cudnn.
It's really tricky, but finally I found the method. 

The secret is   
* install the graphics driver from a PPA 
* install the toolkit from the run file

# packages
The following packages need to be installed.
* nvidia graphics driver     
* cuda 9.2  
* cudnn 7.2

For nvidia graphics driver, there are two sources:
1. raphics-drivers/ppa:     
https://launchpad.net/~graphics-drivers/+archive/ubuntu/ppa         
the package is nvidia-driver-396

2. nvidia official repo
https://developer.download.nvidia.com/compute/cuda/repos/ubuntu1710/x86_64/cuda-drivers_396.44-1_amd64.deb  
the package is cuda-drivers

In fact the nvidia cuda-drivers is for ubuntu 17.10, and there are no official nvidia repo for ubuntu 18.04 currently.  
Here we need to select option 1, I have try option2, but there are conflict with other packages.    
I install the cuda-drivers with "--force-overwrite", but gdm can't be launched normally.

For cuda 9.2, it can be download directly from nvidia website.

For cudnn7.2, **it can be download from nvidia machine-learning repo without login**


# installation steps

install nvidia graphics driver  

```bash 
sudo add-apt-repository ppa:graphics-drivers/ppa
sudo apt update
sudo apt-get install nvidia-driver-396
```

install cuda    

```bash
# dowload installer
aria2c https://developer.nvidia.com/compute/cuda/9.2/Prod2/local_installers/cuda_9.2.148_396.37_linux 

aria2c https://developer.nvidia.com/compute/cuda/9.2/Prod2/patches/1/cuda_9.2.148.1_linux  

# install cuda9.2 and patch
chmod +x cuda*

sudo ./cuda_9.2.148_396.37_linux.run --verbose --silent --toolkit --override

sudo ./cuda_9.2.148.1_linux.run --silent --accept-eula

# add to ld
sudo echo "/usr/local/cuda-9.2/lib64" >> /etc/ld.so.conf
sudo ldconfig
```

install cudnn   
```bash
#download packages
aria2c https://developer.download.nvidia.com/compute/machine-learning/repos/ubuntu1604/x86_64/libcudnn7_7.2.1.38-1+cuda9.2_amd64.deb

aria2c https://developer.download.nvidia.com/compute/machine-learning/repos/ubuntu1604/x86_64/libcudnn7-dev_7.2.1.38-1+cuda9.2_amd64.deb    

# install
sudo dpkg -i libcudnn7_7.2.1.38-1+cuda9.2_amd64.deb
sudo dpkg -i libcudnn7-dev_7.2.1.38-1+cuda9.2_amd64.deb
```

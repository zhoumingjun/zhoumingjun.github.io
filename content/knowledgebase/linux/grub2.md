---
title : "grub2"
date : "2018-09-11T09:28:01Z"
tags : ['linux', 'grub2']
---

# Boot system from grub2 cli

```bash
# check the fs and content of the disk
ls
ls (hd0,2)/

# set parameters and boot 
set root=(hd0,2)
linux (hd0,2)/vmlinuz
initrd (hd0,2)/initrd.img
boot
```


# Install grub2 via livecd
from ubuntu offical site https://help.ubuntu.com/community/Grub2/Installing 

```bash
sudo mount /dev/sdXY /mnt # Example: sudo mount /dev/sda5 /mnt
sudo grub-install --boot-directory=/mnt/boot /dev/sdX # Example: sudo grub-install --boot-directory=/mnt/boot /dev/sda
```

# Install grub2 from the running ubuntu
make sure to mount the efi partition first,
grub-isntall will install bootable efi files under /boot/efi/EFI/{BOOT,ubuntu}

```bash
grub-install /dev/sdX
```
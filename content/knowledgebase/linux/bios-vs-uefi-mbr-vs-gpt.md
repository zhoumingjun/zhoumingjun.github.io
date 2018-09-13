---
title : "BIOS vs UEFI & MBR vs GPT"
date : "2018-09-11T09:28:01Z"
tags : ['linux', 'system', 'uefi']
slug: 'bios-vs-uefi-and-mbr-vs-gtp
---

# Introduction

refer to manjaro wiki
> https://wiki.manjaro.org/index.php?title=Some_basics_of_MBR_v/s_GPT_and_BIOS_v/s_UEFI

# efibootmgr

```bash 
# check 
efibootmgr -v

# remove
efibootmgr -b 0001 -B

# create
efibootmgr -c  -L "os name" -d /dev/sda -p 1 -l \\EFI\\ubuntu\\shimx64.efi
```
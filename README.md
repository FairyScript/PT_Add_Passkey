
# PT站下载链接补全

## 简述
  - 此js脚本为油猴脚本，请结合TamperMoney使用。
  - 此脚本目的在于可以直接在种子目录界面复制可用于bt下载工具（如Transmission）的下载链接而不需要进入种子详情界面。
  - 适用于基于NexusPHP的PT站点。
  - 目前支持站点有：U2分享园、Ourbits、HDU、HDHome. 后期会陆续增加支持。

## 使用方法
  修改对应的\**_key 变量为你对应站点的Passkey，如有额外参数请一并填写
  ![001.png](https://i.loli.net/2018/03/10/5aa2b1d2bebb1.png)
### 自定义
  
  &emsp;&emsp;因客观原因本人无法测试所有的站点，但是理论上使用了NexusPHP且未在界面上做魔改的站点本脚本都可正常工作。故可通过自行修改部分代码以增加适配的站点。添加格式为[hostname,'&passkey=1111']。脚本上方的@match部分也需要同步添加。

  &emsp;&emsp;需要注意的是，不同的站点实现的功能不同，对应情况需要作出针对性的修改。
## 脚本行为
  &emsp;&emsp;此脚本会修改 \*/torrents.php 以及 \*/details.php内的“下载种子”按钮所指向的地址（形如\*/download.php?id=11111）
  ![38.png](https://i.loli.net/2017/12/19/5a38e0895800f.png)

  ![42.png](https://i.loli.net/2017/12/19/5a38e322a4591.png)

  并将其修改为\*/download.php?id=11111&passkey=22222的格式。
## 注意事项
  - 一般情况下，你可以通过种子详情内的“\[下载链接\]”来获取到你的Passkey。
  - 特别的，因为passkey的局限性，已知U2分享园已经关闭了一般途径获取passkey的通道，但仍然可以通过RSS订阅相关的方式来获取passkey。

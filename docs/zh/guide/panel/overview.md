# 概览

概览面板用于查看设备的基本信息，包括名称、品牌、型号、序列号、Android 版本、处理器、分辨率、存储和内存等信息。

![overview](/overview.png)

## 基础使用

首次打开会从设备拉取信息显示，需要刷新时，点击工具栏右侧的 <Icon name="refresh"/> 即可重新获取。任意项单击可复制其值，字体缩放支持双击修改。

## 工具栏

顶部工具栏集成了常用入口：

* <Icon name="terminal"/> ADB 命令行接口：需要执行命令时可以打开内置终端；
* <Icon name="reset"/> 重启 ADB 服务：连接异常时可一键重启 ADB 服务；
* <Icon name="unlock"/> Root 模式：设备具备 Root 能力时可以尝试切换到 Root 模式；
* <Icon name="bidirection"/> 端口映射：端口映射窗口用于配置正向、反向代理；
* <Icon name="remote-controller"/> 遥控器：配合投屏使用遥控器进行远程操作；

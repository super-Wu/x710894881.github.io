# 仿腾讯微云项目
---

### 微云功能分析：

1. 数据渲染：
    
    文件区域、文件导航区域、树形菜单区域
    
    知识点：字符串拼接、函数传参、递归函数、dataset、createElement

2. 对文件的操作：
    
    新建文件、删除文件、重命名、移动到、拖拽框选、单选和全选

    知识点：DOM、BOM、事件、removeChild、addEventListener、contentmenu、拖拽的原理和实现、createElement、appendChild、弹框组件的使用、拖拽生成div、碰撞检测选中的文件夹、addClass、removeClass的使用、阻止冒泡ev.stopPropagation()、事件委托等。


### 目录结构

    每种资源分别放置对应的文件夹中
    js文件放置自己写的文件
    src文件放置第三方文件，比如工具函数库（tools.js、handledata.js、dialog.js、data.js）

### 工具文件说明

- tool.js：原生封装的操作DOM的方法
            元素的获取、事件绑定、对class进行增删改查

- handledata.js：对数据结构进行操作
            获取子数据、获取所有父数据、删除数据

- dialog.js：弹框组件库

- data.js：数据结构
        





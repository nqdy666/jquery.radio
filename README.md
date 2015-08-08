# jquery.radio
### 效果
![radiobox.png](http://qjzd.qiniudn.com/FrtmmpF8Xm6gnMa0yoro1C2oFeg9)
### 依赖
jquery-1.11.2.min.js
### 使用
```
引用css
<link rel="stylesheet" type="text/css" href="radiobox.css"/>
引用js
<script type="text/javascript" src="jquery.radiobox.js"></script>
```
### 基本方法
在html页面上, input radiobox一定要包含一个label
```
<label id="labelRb"><input type="radiobox" id="inputRb"/>我是新radiobox</label>
$("#labelRb").radiobox();
```
### 高级用法
```
初始化
var radioboxObjs = $.QjzdRadiobox($labelObjs);
var radioboxObjs = $.QjzdRadiobox($inputObjs);
setChecked方法
radioboxObjs. setChecked()   //默认选中第一个为true
radioboxObjs.setChecked(true) //同上默认选中
radioboxObjs.setChecked($("#label") 设置true
radioboxObjs.setChecked("#lalel") 设置true
radioboxObjs.setChecked("#lalel", true) 设置true
radioboxObjs.setChecked("#radioInput") 设置true
radioboxObjs.setChecked("#radioInput", true) 设置true
```

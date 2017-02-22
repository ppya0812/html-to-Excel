# htmlToExcel 插件

* 这是一款将html导出为excel的插件，已解决编码问题，目前支持ie、Firefox、chrome、Safari浏览器。
* 不依赖任何模块，纯原生js实现，支持单文件直接引入

## install
[![NPM](https://nodei.co/npm/html-to-excel.png)](https://nodei.co/npm/html-to-excel/)

github: https://github.com/ppya0812/html-to-Excel

## 引用示例

```
<!DOCTYPE html>
<html>
    <head>
        <meta charset="utf-8">
        <title>导出excel表格</title>
        <script type="text/javascript" src="./htmlToExcel.js">
        </script>
    </head>
    <body>
        <table id="mytable" width="100%" border="1" cellspacing="0" cellpadding="0">
            <tr>
                <td colspan="5" align="center">html 表格导出道Excel</td>
            </tr>
            <tr align="center">
                <td>列标题1</td>
                <td>列标题2</td>
                <td>类标题3</td>
                <td>列标题4</td>
                <td>列标题5</td>
            </tr>
            <tr align="center">
                <td>aaa</td>
                <td>bbb</td>
                <td>ccc</td>
                <td>ddd</td>
                <td>eee</td>
            </tr>
            <tr align="center">
                <td>AAA</td>
                <td>BBB</td>
                <td>CCC</td>
                <td>DDD</td>
                <td>EEE</td>
            </tr>
            <tr align="center">
                <td>FFF</td>
                <td>GGG</td>
                <td>HHH</td>
                <td>III</td>
                <td>JJJ</td>
            </tr>
        </table>
        <input id="exportExcel" type="button" value="导出EXCEL"
                onclick="javascript:exportExcel('mytable')" />
    </body>
</html>
```

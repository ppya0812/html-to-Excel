function exportExcel(tableId) {
    var timer = null;
    function  getExplorer() {
        var explorer = window.navigator.userAgent ;
        //ie
        if (explorer.indexOf("MSIE") >= 0) {
            return 'ie';
        }
        //firefox
        else if (explorer.indexOf("Firefox") >= 0) {
            return 'Firefox';
        }
        //Chrome
        else if(explorer.indexOf("Chrome") >= 0){
            return 'Chrome';
        }
        //Opera
        else if(explorer.indexOf("Opera") >= 0){
            return 'Opera';
        }
        //Safari
        else if(explorer.indexOf("Safari") >= 0){
            return 'Safari';
        }
    }

    function clearUp() {
        window.clearInterval(timer);
        CollectGarbage();
    }

    var tableToExcel = (function() {
        var uri = 'data:application/vnd.ms-excel;base64,';
        var template = '<html xmlns:o="urn:schemas-microsoft-com:office:office" xmlns:x="urn:schemas-microsoft-com:office:excel" xmlns="http://www.w3.org/TR/REC-html40"><head><meta http-equiv="Content-Type" charset="utf-8"><!--[if gte mso 9]><xml><x:ExcelWorkbook><x:ExcelWorksheets><x:ExcelWorksheet><x:Name>{worksheet}</x:Name><x:WorksheetOptions><x:DisplayGridlines/></x:WorksheetOptions></x:ExcelWorksheet></x:ExcelWorksheets></x:ExcelWorkbook></xml><![endif]--></head><body><table>{table}</table></body></html>';
        function base64(s) {
            return window.btoa(unescape(encodeURIComponent(s)));
        }
        function format(s, c) {
            return s.replace(/{(\w+)}/g, function(m, p) {
                return c[p];
            });
        }
        return function(table, name) {
            if (!table.nodeType) {
                table = document.getElementById(table);
            }
            var ctx = {
                worksheet: name || 'worksheet',
                table: table.innerHTML
            };
            window.location.href = uri + base64(format(template, ctx));
        }
    }) ()

    function getExcel(tableId) {
        //整个表格拷贝到EXCEL中
        if (getExplorer() === 'ie') {
            //创建AX对象excel
            var currentTB = document.getElementById(tableId);
            var oXL = new ActiveXObject('Excel.Application');
            //获取workbook对象
            var oWB = oXL.Workbooks.Add();
            //激活当前sheet
            var xlsheet = oWB.Worksheets(1);
            //把表格中的内容移到TextRange中
            var sel = document.body.createTextRange();
            sel.moveToElementText(currentTB);
            //全选TextRange中内容
            sel.select;
            //复制TextRange中内容
            sel.execCommand('Copy');
            //粘贴到活动的EXCEL中
            xlsheet.Paste();
            //设置excel可见属性
            oXL.Visible = true;

            try {
                var fname = oXL.Application.GetSaveAsFilename('haha.xls', 'Excel Spreadsheets (*.xls), *.xls');
            } catch (e) {
                print('Nested catch caught ' + e);
                alert("请确认:\n1.Microsoft Excel已被安装.\n2.工具 => Internet 选项=> 安全 => 设置 \"启用不安全的 ActiveX\"");
            } finally {
                oWB.SaveAs(fname);

                oWB.Close(savechanges = false);
                //xls.visible = false;
                oXL.Quit();
                oXL = null;
                //结束excel进程，退出完成
                //window.setInterval("Cleanup();",1);
                timer = window.setInterval('cleanup();', 1);

            }

        }
        else {
            tableToExcel(tableId);
        }

    }
    getExcel(tableId);
}

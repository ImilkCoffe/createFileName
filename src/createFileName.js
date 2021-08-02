const vscode = require('vscode');
module.exports = function(context) {
    context.subscriptions.push(vscode.commands.registerCommand('extension.demo.createFileName', (uri) => {
        vscode.workspace.onDidCreateFiles( async(a,b,c)=>{
            let path=a.files[0]?a.files[0].path:null
            let str = ''
            let itemStr = ''
            if(path && path.split('pages').length>1){
                let paths = path.split('pages')
                let strAll = paths[1]
                let strList =strAll.split('/')
                if(strList && strList.length<=3){
                  strList && strList.map((item,index)=>{
                    if(item[0]){
                        itemStr=(index>0?item[0].toLocaleUpperCase():item[0])+item.slice(1,item.length)
                    }
                    str+=itemStr
                })
                //文件名大于三层的情况下只取最上层、自己的上层、以及自己
                }else{
                  strList && strList.map((item,index)=>{
                    if(index===1 || index===strList.length-1 || index===strList.length-2 ){
                      if(item[0]){
                        itemStr=item[0].toLocaleUpperCase()+item.slice(1,item.length)
                    }
                    str+=itemStr
                    }
                })
                }
                //配合重命名功能将后缀去除
                let newName = str.split('.')[0][0].toLocaleLowerCase()+str.split('.')[0].slice(1,str.split('.')[0].length)
                await vscode.env.clipboard.writeText(newName)
                vscode.window.showInformationMessage(`已在剪切板生成新的文件名,文件名为：${newName ? newName : '空'}`);
            }else{
              str=path
              vscode.window.showInformationMessage(`creatFileName插件只在pages文件夹中生效`);
            }
         })
    }));
  
};
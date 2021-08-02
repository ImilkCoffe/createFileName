# vscode-plugin-createFileName

根据嵌套文件夹自动生成文件名的插件

# 说明

* 功能:会根据文件夹自动生成文件名
* 规则:1.只在pages文件夹下的文件生效.2.文件夹嵌套少于三层时,由文件夹名嵌套自动拼接成一个新的文件名.3.嵌套大于三层时,取pages下面的第一层文件夹名+当前文件的上一层+当前文件夹4.生成的新文件名在剪贴板上,不包含后缀,方便重命名时粘贴
* 使用:1.插件会自动激活.2.新建一个文件,新建完成,新的文件名即生成在剪贴板上(不包含文件类型后缀)3.重命名新建文件,直接粘贴新文件名即可
* 注意:由于此插件会在新建文件之后重写剪贴板内容,请在新建文件前保证剪贴板内容为无效内容

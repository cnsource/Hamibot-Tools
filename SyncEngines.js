//<引入 SyncEngins
var BlockEngines = {
    instance : function(){
        let blockEngines = {}
        blockEngines.run = function(name,funstr){
            let es = engines.all().length
            engines.execScript(name, name+"();\n" + funstr);
            do{
                sleep(200)
                let ns = engines.all().length
            }while(es != ns)
            return blockEngines
        }
        return blockEngines
    }
}
//引入>

//<使用 BlockEngins
//说明： run方法两个参数----1.  函数名
//                      2.  函数名.toString()
//返回值：BlockEngines对象
BlockEngines.instance().run("func-name",func-name.toString())
//使用>


//使用案例见README.md文档中的 BlockEngines


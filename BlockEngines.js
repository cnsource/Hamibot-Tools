var BlockEngines = {
    instance : function(){
        let blockEngines = {}
        blockEngines.run = function(name,funstr){
            let es = engines.all().length
            let ns = 0
            engines.execScript(name, name+"();\n" + funstr);
            do{
                sleep(200)
                ns = engines.all().length
            }while(es != ns)
            return blockEngines
        }
        return blockEngines
    }
}
function myfun(){
    console.show()
    for(var i = 0;i<10;i++){
        console.log(i)
        sleep(800)
    }
    console.hide()
}
function myfun2(){
    console.show()
    for(var i = 0;i<10;i++){
        console.log(i)
        sleep(800)
    }
    console.hide()
}
BlockEngines.instance().run("myfun",myfun.toString()).run("myfun2",myfun2.toString())
log("脚本执行完毕")
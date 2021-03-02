var BlockEngines = function(){
        let blockEngines = {}
        blockEngines.run = function(name,funstr){
            let es = engines.all().length
            let ns = 0
            console.show()// 如果只是想阻塞主线程脚本，这两句可以删掉
            console.hide()//这两句是解决坐标获取超出屏幕范围的
            engines.execScript(name, name+"();\n" + funstr);
            do{
                sleep(200)
                ns = engines.all().length
            }while(es != ns)
            return blockEngines
        }
    return blockEngines
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
var blockEngines = new BlockEngines()
blockEngines.run("myfun",myfun.toString()).run("myfun2",myfun2.toString())
log("脚本执行完毕")
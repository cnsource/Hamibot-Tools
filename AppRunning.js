var AppRunning = function (){
    this.start = function (appName) {
        log("启动监测AppRunning:"+appName)
        let thread = threads.start(function() {
            while(true) {
                if(currentPackage()!=getPackageName(appName)){
                    launch(getPackageName(appName))
                    sleep(1500)
                }
                log("AppRunning:"+appName+"："+getPackageName(appName))
                sleep(500)
            }
        })
        return thread
    },
        this.stop = function (task){
            task.interrupt()
            log("终止检测AppRunning:"+task.isAlive())
        }
}

var appRunning = new AppRunning()
var task = appRunning.start("校园集结号")

console.show()
for(var i = 0;i<15;i++){
    console.log("集结号运行中..."+i)
    sleep(1000)
}

appRunning.stop(task)
class Dep{
    constructor(){
        this.dep = {}
    }
    on(type,fn){
        if(!this.dep[type]){
            this.dep[type] = []
        }
        this.dep[type].push(fn)
    }
    emit(type,...args){
        this.dep[type] && this.dep[type].forEach(fn => {
            fn(...args)
        })
    }

  remove(type,fn){
    this.dep[type]=[]
  }
}

const dep1 = new Dep()
dep1.on('click',(a,b,c)=>{
    console.log('click',a,b,c)
})
dep1.on('click',(a,b,c)=>{
    console.log('click2',a,b,c)
})
dep1.emit('click',1,2,3)
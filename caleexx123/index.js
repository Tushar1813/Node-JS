function add(x,y){
    return x+y
}
function sub(x,y){
    return x-y
}
function mul(x,y){
    return x*y
}
function div(x,y){
    return x/y
}
function rem(x,y){
    return x%y
}
function pow(x,y){
    return x**y
}
function fac(x){
    if(x==1 || x==0){
        return 1
    }
    else{
        return x*fac(x-1)
    }
}
module.exports={add,sub,mul,div,rem,pow,fac}
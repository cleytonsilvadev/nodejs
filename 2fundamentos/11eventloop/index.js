function a() {
    console.log('executa a()')
}
function b() {
    console.log('executa b()')
}
function c() {
    console.log('executa c()')
    a()
    b()
}


c()
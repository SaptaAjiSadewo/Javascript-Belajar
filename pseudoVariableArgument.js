function tambah(){
    var total = 0;
    for (let i = 0; i < arguments.length; i++) {
        total += arguments[i];
    }
    return total;
}

tambah(1,2,3,4,5)

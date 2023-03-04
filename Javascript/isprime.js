function isprime(x){
    if(x==1) return false;
    for(let i=2;i*i<=x;i++){
        if(x%i==0) return false;
    }
    return true;
}

for(let i=1;i<=10;i++){
    if(isprime(i)){
        console.log(i,"Prime");
    }
    else{
        console.log(i,"Not Prime");
    }
}
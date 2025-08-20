let obj={
    First_Name:"John",
    last_Name:"Doe",
    full_Name:function(){
        return ` ${this.First_Name}  ${this.last_Name}`;
    }
    
};

let result=obj.full_Name()
console.log(result);

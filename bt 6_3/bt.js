class pet{
  constructor(name,talk){
    this.name = name;
    this.talk = talk;
  }
  introduce(){
    console.log(`ten toi la ${this.name + this.talk}`)
    return this.name + this.talk;
  }
}
class dog extends pet {
  constructor(name,talk,kind){
    super(name,talk);
    this.kind = kind;
  }
  kind(){
    console.log(`toi la dong vat ${this.kind}`)
  }
}
var myPet = new pet(' momo',' meomeo');
myPet.introduce();
var mydog = new dog('momo', ' meomeo', ' dog');

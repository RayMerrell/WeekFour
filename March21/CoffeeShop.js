import inquirer from 'inquirer';

class CoffeeShopTill {
    constructor(){
        this.arrPrices=[];     
        this.arrItems=[];   
        this.Total=0;
        this.arrOrder=[];
    };
    addItem(strItem, fPrice){
        let len = this.arrPrices.length;
        this.arrItems[len]= strItem;
        this.arrPrices[len] = fPrice;
    };
    fetchMenu(){
        let arrMenu=[];
        let objItem={};
        for(let c=0;c<this.arrItems.length; c++){
            objItem = { 
                name:this.arrItems[c]+" £" + this.arrPrices[c].toFixed(2),
                value:this.arrItems[c]
            }
            arrMenu.push(objItem);
        }
        return arrMenu;
    }
    takeOrder(arrOrder){
        this.arrOrder=arrOrder;
    };
    getTotalPrice(){
        this.Total=0;
        for (let d= 0; d<this.arrOrder.length; d+=2){
            for(let p = 0; p<this.arrItems.length; p++){
                if(this.arrOrder[d] === this.arrItems[p]){
                    this.Total+=this.arrPrices[p]*this.arrOrder[d+1];
                };
            };
        };
    };
    getTotal(){
        return this.Total;
    };
    sellDrinksTo(objCustomer){
        let bal = objCustomer.reportBalance() ;
        this.getTotalPrice();
        if (bal >= this.Total){
            objCustomer.spendCash(this.Total);
            return true;
        }else{
            return false;
        }
    }
};

class Customer{
    constructor(strName){
        this.strName = strName;
        this.Cash=0;
    }
    reportBalance(){
        return this.Cash;
    }
    addCash(fMoney){
        this.Cash+=fMoney;
    }
    spendCash(fMoney){
        this.Cash-=fMoney;        
    }
};

let objTill = new CoffeeShopTill();
objTill.addItem ("Old Fashioned", 2.50);
objTill.addItem ("Negroni", 1.75);
objTill.addItem ("Daiquiri", 2.30);
objTill.addItem ("Dry Martini", 3.27);
objTill.addItem ("Margarita", 1.50);
objTill.addItem ("Espresso Martini", 2.43);
objTill.addItem ("Whiskey Sour", 3.40)
const arrDrinksOrder = [];

const orderPrompts = [
  {
    type: 'list',
    name: 'drink',
    message: "Please select a drink to add to your order. Select 'Done' to finish.",
    choices: objTill.fetchMenu()
  },

  {
    type: 'number',
    name: 'quantity',
    message: 'How many would you like?',
    default: 1,
    validate:(drinksOrder) => {
        if (isNaN(drinksOrder)){
            return "Please enter the number of drinks you wish to order";
        }else{
            return true;
        }
    },
    when (drinksOrder){
        console.log("drink=" + drinksOrder.drink);
        if (drinksOrder.drink !== "Done"){
            return true;
        }else{
            return false;
        };
    }
  },
  {
    type: 'confirm',
    name: 'askAgain',
    message: 'Would you like to add another drink to your order?',
    default: true,
    when (drinksOrder){
        if (drinksOrder.drink !== "Done"){
            return true;
        }else{
            return false;
        };
    }
  }
];

function takeDrinksOrder() {
  inquirer.prompt(orderPrompts).then((drinksOrder) => {
    if (drinksOrder.drink != "Done"){
        arrDrinksOrder.push(drinksOrder.drink);
        arrDrinksOrder.push(drinksOrder.quantity);
    }
    if (drinksOrder.askAgain) {
        takeDrinksOrder();
    } else {
        objTill.takeOrder(arrDrinksOrder);
        sellDrinks();
    }
  }).catch((error) => {
    if (error.isTtyError) {
      console.log("Prompt cannot render");
    } else {
      console.log(error);
    };
  });
}

let Bob = new Customer("Roberto");
takeDrinksOrder();
function sellDrinks(){
    if (objTill.sellDrinksTo(Bob) == true){
        console.log("Order Successful");
    }else{
        console.log("Not enough cash, add more funds");
        Bob.addCash(1000);
    }
    if (objTill.sellDrinksTo(Bob) == true){
        console.log("Order Successful");
    }else{
        console.log("Not enough cash, add more funds");
        Bob.addCash(1000);
    };
}

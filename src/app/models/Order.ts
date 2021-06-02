export class Order {
    public id: number;
    public companyId: number = 23456; 
    public created: Date;
    public createdBy: string;
    public paymentMethod: string;
    public totalPrice: number;
    public status: number;
    public orderRows:OrderItems[];

    constructor(id, createdBy, paymentMethod, totalPrice, orderRows) { 
        this.id = id;
        this.createdBy = createdBy;
        this.paymentMethod = paymentMethod;
        this.totalPrice = totalPrice;
        this.orderRows= orderRows; 
    }
}

export class OrderItems{
    id: number;
    productId:number;
    amount:number;
    orderId:string;
}

export class Customer{
    name:string;
    telephoneNumber: number;
    email: string;
}

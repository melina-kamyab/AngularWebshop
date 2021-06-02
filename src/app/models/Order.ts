export class Order {
    public id: number;
    public companyId: number = 23456; //Just a random number that will represent the number of our company-id
    public created: Date;
    public createdBy: string;
    public paymentMethod: string;
    public totalPrice: number;
    public status: number;
    public orderRows: OrderItems[];

    constructor(created, createdBy, paymentMethod, totalPrice, orderRows) {
        this.created = created;
        this.createdBy = createdBy;
        this.paymentMethod = paymentMethod;
        this.totalPrice = totalPrice;
        this.orderRows = orderRows;
    }
}

export class OrderItems {
    id: number;
    productId: number;
    amount: number;
    orderId: string;

    constructor(productId) {
        this.productId = productId;
    }
}



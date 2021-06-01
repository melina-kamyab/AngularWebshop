export class Movie {
    constructor(
        public id: number,
        public companyId: number,
        public created: Date,
        public createdBy: string,
        public paymentMethod: string,
        public totalPrice: number,
        public status: number,
        public orderRows:Array<String>,
    ) { }
}
export class Movie {
    constructor(
        public id: number,
        public name: string,
        public description: string,
        public price: number,
        public imageUrl: string,
        public year: number,
        public added: Date,
        public productCategory:Array<String>,
    ) { }
}
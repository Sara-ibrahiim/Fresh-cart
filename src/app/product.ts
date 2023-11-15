export interface Product {
    _id:string;
    title:string;
    description:string;
    imageCover:string;
    price:Number;
    ratingsAverage:Number;
    category:Category;

}
export interface Category{
_id:  string;
name: string;
slug: string;
image:string;
}
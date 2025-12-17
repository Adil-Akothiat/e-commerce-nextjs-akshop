export type ProductProps = {
  id: number;
  title: string;
  description: string;
  category: string;
  brand: string;
  sku: string;

  price: number;
  discountPercentage: number;
  rating: number;
  stock: number;
  minimumOrderQuantity: number;

  availabilityStatus: string;
  returnPolicy: string;
  shippingInformation: string;
  warrantyInformation: string;

  weight: number;

  dimensions: {
    width: number;
    height: number;
    depth: number;
  };

  thumbnail: string;
  images: string[];
  tags: string[];

  meta: {
    createdAt: string;
    updatedAt: string;
    barcode: string;
    qrCode: string;
  };

  reviews: ReviewProps[];
  quantity?:number;
};

export interface ProductsResponseProps {
    limit:number,
    skip:number,
    total:number,
    products:ProductProps[],
}

export type ReviewProps = {
  rating: number;
  comment: string;
  date: string;
  reviewerName: string;
  reviewerEmail: string;
};

export interface CategoryObjectProps {
  slug:string;
  name:string;
  url:string;
}
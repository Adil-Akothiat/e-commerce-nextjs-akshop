import type { ProductProps } from "@/features/products/api/types";

export type CartItemProps = {
  id: number;
  quantity: number;
} & ProductProps;

export type CartStateProps = {
  items: CartItemProps[];
  count: number;
};
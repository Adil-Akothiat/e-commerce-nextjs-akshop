"use client";
import { useEffect } from "react";
import { addItem, removeItem } from "@/redux/store";
import Items from "./components/Items";
import TotalItems from "./components/TotalItems";
import { useAppDispatch, useAppSelector } from "@/redux/hooks";

const MyCart = () => {
    const dispatch = useAppDispatch();
    const items = useAppSelector(state => state.cart.items);
    const count = useAppSelector(state => state.cart.count);

    const addItemHandler = (id:number) => {
        const item = items.filter(item=> item.id == id).map(item=> ({ ...item, quantity:item.quantity+1 }))[0];
        dispatch(addItem(item));
    }
    const removeItemHandler = (id:number) => {
        const item = items.filter(item=> item.id == id).map(item=> ({ ...item, quantity:item.quantity-1 }))[0];
        dispatch(removeItem(item));
    }
    useEffect(()=> {
        window.scrollTo(0, 0);
    }, []);

    return (
        <div 
            className="flex gap-4 h-full min-h-0 flex-wrap"
        >
            <div className="flex-1 overflow-y-auto">
                <Items 
                    items={items}
                    count={count}
                    addItemHandler={addItemHandler}
                    removeItemHandler={removeItemHandler}
                    />
            </div>
            <div className="w-full md:w-96 flex-shrink-0">
                <TotalItems items={items} count={count}/>
            </div>
        </div>
    );
}

export default MyCart;
import Card from "./Card";
import { FaShippingFast } from "react-icons/fa";
import { MdOutlineSecurity } from "react-icons/md";
import { TbTruckReturn } from "react-icons/tb";
import { MdOutlineSupportAgent } from "react-icons/md";

const OrderSecurity = ()=> {
    const orderSecurity = [
        {
            title: "Free Shipping",
            description: "Free on order over $100",
            icon: <FaShippingFast />
        },
        {
            title: "Security Payment",
            description: "100% security payment",
            icon: <MdOutlineSecurity />
        },
        {
            title: "30 Day Return",
            description: "30 day money guarantee",
            icon: <TbTruckReturn />
        },
        {
            title: "24/7 Support",
            description: "Support every time fast",
            icon: <MdOutlineSupportAgent />
        }
    ]
    return (
        <section className="px-4 md:px-10 lg:px-16 xl:px-24 grid grid-cols-1 gap-y-6 md:grid-cols-2 md:gap-x-6 xl:grid-cols-4">
            {
                orderSecurity.map((item, i)=> <Card key={"card-"+i} title={item.title} description={item.description} icon={item.icon} />)
            }    
        </section>
    );
}

export default OrderSecurity;
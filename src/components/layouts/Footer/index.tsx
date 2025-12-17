"use client";
import Link from "next/link";
import Image from "next/image";
import { FaXTwitter, FaInstagram, FaFacebookF, FaPinterestP } from "react-icons/fa6";
import NewsLetterSubscription from "./NewsLetterSubs";
import { useStringCategoriesQuery } from "@/features/products/hooks/hooks";

const Footer = () => {
    let { data:categories } = useStringCategoriesQuery();
    var information = [{ name: "about company", link: "#about" }, { name: "payment type", link: "#paymenttype" }, { name: "awards winning", link: "#awardswinning" }, { name: "world media partner", link: "#partner" }, { name: "becom an agent", link: "#becomanagent" }, { name: "refund policy", link: "refundpolicy" }];
    var helpSupport = [{ name: "Vendor", link: "#vendor" }, { name: "FAQ Information", link: "#faq" }, { name: "return policy", link: "#returnpolicy" }, { name: "shipping & delivery", link: "#shippingdelivery" }, { name: "order tranking", link: "#ordertranking" }, { name: "list of shops", link: "#listshops" }]
    const paymentMethodsIcons =  ["visa.svg", "payoneer.svg", "master.svg", "paypal.svg"]

    // show just 5 categories
    categories = categories.slice(0, 5);

    // social media
    var social = [{ name: "x", link: "#x" }, { name: "instagram", link: "#instagram" }, { name: "facebook", link: "#facebook" }, { name: "pinterest", link: "#pinterest" }];

    return (
        <footer className="w-full px-4 md:px-10 lg:px-16 xl:px-24 bg-stone-50 capitalize mt-28">
            <NewsLetterSubscription />
            <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                <div className="flex flex-col xl:flex-row gap-8 pt-14 pb-14">
                    <div className="w-full xl:max-w-[265px] max-xl:mb-8">
                        <Link href="/" className="text-md md:text-xl font-bold text-slate-700 block mb-4">
                            Ak-Shop
                        </Link>
                        <div className="flex max-xl:items-center max-xl:justify-between flex-col sm:flex-row xl:flex-col">
                            <p className="text-gray-500 mb-5 text-center lg:text-left">Download our app now from stores</p>
                            <div className="flex max-xl:items-center xl:flex-col">
                                <Link href="#googleplay" className=" flex justify-center lg:justify-start group w-max">
                                    <Image
                                        src="/assets/footer/icons/google-play-badge.svg"
                                        alt="google play badge"
                                        width="0"
                                        height="0"
                                        className="w-40 h-16"
                                        unoptimized={true}
                                    />
                                </Link>
                                <Link href="#googleplay" className="flex justify-center lg:justify-start group w-max">
                                    <Image
                                        src="/assets/footer/icons/app-store-badge.svg"
                                        alt="google play badge"
                                        width="0"
                                        height="0"
                                        className="w-40 h-16"
                                        unoptimized={true}
                                    />
                                </Link>
                            </div>
                        </div>
                    </div>
                    <div className="grid grid-cols-2 sm:grid-cols-3 min-[890px]:grid-cols-4 lg:grid-cols-4 gap-4 xl:gap-8 w-full max-w-sm mx-auto sm:max-w-3xl min-[890px]:max-w-full">
                        <div className="w-full  text-left">
                            <h4 className="text-xl text-gray-900 font-medium mb-7">Information</h4>
                            <ul className=" transition-all duration-500">
                                {
                                    information.map(({ name, link }, i) =>
                                        <li className="mb-6" key={"link-" + i}><Link href={link} className="text-gray-600 hover:text-gray-900 capitalize">{name}</Link>
                                        </li>
                                    )
                                }
                            </ul>
                        </div>
                        <div className="w-full  text-left">
                            <h4 className="text-xl text-gray-900 font-medium mb-7">Category</h4>
                            <ul className=" transition-all duration-500">
                                {
                                    categories.map((c, i) =>
                                        <li className="mb-6" key={"link-" + i}><Link href={"/products?category=" + c} className="text-gray-600 hover:text-gray-900">{c}</Link></li>
                                    )
                                }
                            </ul>
                        </div>
                        <div className="w-full  text-left">
                            <h4 className="text-xl text-gray-900 font-medium mb-7">Help & Support</h4>
                            <ul className="  transition-all duration-500">
                                {
                                    helpSupport.map(({ name, link }, i) =>
                                        <li className="mb-6" key={"hps-" + i}><Link href={link} className="text-gray-600 hover:text-gray-900">{name}</Link>
                                        </li>
                                    )
                                }
                            </ul>
                        </div>
                        <div className="w-full  text-left">
                            <h4 className="text-xl text-gray-900 font-medium mb-7">Payment Support</h4>
                            <div className="grid grid-cols-2">
                                {
                                    paymentMethodsIcons.map((src, i) =>
                                        <Image
                                            key={"kwu-" + i}
                                            src={"/assets/footer/icons/"+src}
                                            alt="visa card"
                                            width="0"
                                            height="0"
                                            className="w-full h-16 cursor-pointer"
                                            unoptimized={true}
                                        />
                                    )
                                }
                            </div>
                        </div>
                    </div>
                </div>
                <div className="py-7 border-t border-gray-200">
                    <div className="flex items-center justify-center flex-col sm:justify-between sm:flex-row">
                        <span className="text-sm text-gray-500 ">©<a href="https://pagedone.io/">Ak-Shop</a>{new Date().getFullYear()}, All rights reserved.</span>
                        <div className="flex mt-6 space-x-4 sm:justify-center sm:mt-0 ">
                            {
                                social.map(({ name, link }, i) => (
                                    <Link
                                        key={"social-" + i}
                                        href={link}
                                        className="group w-9 h-9 transition-all duration-500 rounded-full border border-gray-300 flex justify-center items-center hover:border-indigo-600">
                                        {
                                            name == "x" ? <FaXTwitter /> :
                                                name == "instagram" ? <FaInstagram /> :
                                                    name == "facebook" ? <FaFacebookF /> :
                                                        name == "pinterest" ? <FaPinterestP /> : null
                                        }
                                    </Link>
                                ))
                            }
                        </div>
                    </div>
                </div>
            </div>
        </footer>

    );
}

export default Footer;
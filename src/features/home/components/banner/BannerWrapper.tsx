import dynamic from "next/dynamic";

const BannerComponent = dynamic(() => import("./index"), {
  ssr: false,
  loading: () => <div className="w-full h-96 bg-gray-200 animate-pulse" />,
});

export default BannerComponent;
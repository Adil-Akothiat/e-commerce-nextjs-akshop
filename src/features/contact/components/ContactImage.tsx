import Image from "next/image";

export default function ContactImage() {
  return (
    <div className="rounded-md lg:max-h-96 custom-shadow">
      <Image
        unoptimized
        src="/assets/contact/contact_us.jpg"
        alt="contact us"
        width="0"
        height="0"
        className="w-full h-full object-contain"
      />
    </div>
  );
}
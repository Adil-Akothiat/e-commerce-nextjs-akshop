import Link from "next/link";

type UnfoundProps = {
    message?: string;
}

export default function Unfound({ message = "Page Not Found" }: UnfoundProps) {
    return (
        <div className="min-h-screen flex items-center justify-center bg-gradient-to-b from-base-100 to-base-200 px-4">
            <div className="text-center">
                {/* 404 Number */}
                <h1 className="text-9xl font-bold text-primary opacity-10 mb-4">404</h1>
                
                {/* Error Message */}
                <h2 className="text-3xl font-bold text-base-content mb-2">{message}</h2>
                <p className="text-base-content/70 mb-8">
                    The product you're looking for doesn't exist or has been removed.
                </p>
                
                {/* Action Buttons */}
                <div className="flex gap-3 justify-center flex-wrap">
                    <Link href="/" className="btn btn-primary">
                        Back to Home
                    </Link>
                    <Link href="/products" className="btn btn-outline">
                        Browse Products
                    </Link>
                </div>
                
                {/* Optional: Illustration placeholder */}
                <div className="mt-12">
                    <div className="inline-flex items-center justify-center w-32 h-32 bg-base-300 rounded-full">
                        <svg className="w-16 h-16 text-base-content/30" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M20 13V6a2 2 0 00-2-2H6a2 2 0 00-2 2v7m16 0v5a2 2 0 01-2 2H6a2 2 0 01-2-2v-5m16 0h-2.586a1 1 0 00-.707.293l-2.414 2.414a1 1 0 01-.707.293h-3.172a1 1 0 01-.707-.293l-2.414-2.414A1 1 0 006.586 13H4" />
                        </svg>
                    </div>
                </div>
            </div>
        </div>
    );
}
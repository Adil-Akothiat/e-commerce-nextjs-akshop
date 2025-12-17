export default function ErrorFallback({ error, resetErrorBoundary }: any) {
    return (
        <div className="min-h-screen flex items-center justify-center bg-base-200 px-4">
            <div className="card bg-base-100 shadow-xl max-w-md w-full">
                <div className="card-body">
                    {/* Error Icon */}
                    <div className="flex justify-center mb-4">
                        <div className="badge badge-error badge-lg">!</div>
                    </div>
                    
                    {/* Error Title */}
                    <h2 className="card-title text-center text-error">Something Went Wrong</h2>
                    
                    {/* Error Message */}
                    <p className="text-center text-sm text-base-content/70">
                        {error?.message || "An unexpected error occurred. Please try again."}
                    </p>
                    
                    {/* Error Details */}
                    {error?.response?.status && (
                        <p className="text-center text-xs text-base-content/50">
                            Error Code: {error.response.status}
                        </p>
                    )}
                    
                    {/* Action Button */}
                    <div className="card-actions justify-center gap-2 mt-6">
                        <button 
                            onClick={() => resetErrorBoundary()} 
                            className="btn btn-primary btn-sm"
                        >
                            Try Again
                        </button>
                        <a 
                            href="/" 
                            className="btn btn-outline btn-sm"
                        >
                            Go Home
                        </a>
                    </div>
                </div>
            </div>
        </div>
    );
}
import Link from "next/link";

export default function NotFound() {
    return (
        <div className="min-h-screen w-full flex items-center justify-center bg-background">
            <div className="text-center">
                <h1 className="text-6xl font-bold font-display text-primary mb-4">404</h1>
                <h2 className="text-2xl font-display mb-4">Page Not Found</h2>
                <p className="text-muted-foreground mb-8">
                    The page you&apos;re looking for doesn&apos;t exist or has been moved.
                </p>
                <Link
                    href="/"
                    className="px-8 py-4 bg-primary text-white font-semibold hover:bg-primary/90 transition-all"
                >
                    Go Home
                </Link>
            </div>
        </div>
    );
}

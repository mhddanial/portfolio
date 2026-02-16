import Link from "next/link";

export default function NotFound() {
    return (
        <div className="min-h-screen w-full flex items-center justify-center bg-background">
            <div className="text-center">
                <h1 className="text-8xl font-bold font-display text-accent mb-4">404</h1>
                <h2 className="text-2xl font-display text-foreground mb-4">Page Not Found</h2>
                <p className="text-muted-foreground mb-8 max-w-md mx-auto">
                    The page you&apos;re looking for doesn&apos;t exist or has been moved.
                </p>
                <Link
                    href="/"
                    className="px-8 py-4 bg-foreground text-white font-semibold rounded-lg hover:bg-foreground/85 transition-all inline-block"
                >
                    Go Home
                </Link>
            </div>
        </div>
    );
}

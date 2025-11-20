import Link from "next/link";

export function Footer() {
    return (
        <footer className="bg-muted/20 border-t border-border/50 py-12">
            <div className="container px-4 md:px-6">
                <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-8">
                    <div>
                        <h3 className="font-bold mb-4">Platform</h3>
                        <ul className="space-y-2 text-sm text-muted-foreground">
                            <li><Link href="/features" className="hover:text-primary">Features</Link></li>
                            <li><Link href="/pricing" className="hover:text-primary">Pricing</Link></li>
                            <li><Link href="/revenue-simulator" className="hover:text-primary">Calculator</Link></li>
                            <li><Link href="/success-stories" className="hover:text-primary">Success Stories</Link></li>
                        </ul>
                    </div>
                    <div>
                        <h3 className="font-bold mb-4">Resources</h3>
                        <ul className="space-y-2 text-sm text-muted-foreground">
                            <li><Link href="/blog" className="hover:text-primary">Blog</Link></li>
                            <li><Link href="/academy" className="hover:text-primary">Academy</Link></li>
                            <li><Link href="/manifesto" className="hover:text-primary">Manifesto</Link></li>
                            <li><Link href="/faq" className="hover:text-primary">FAQ</Link></li>
                        </ul>
                    </div>
                    <div>
                        <h3 className="font-bold mb-4">Company</h3>
                        <ul className="space-y-2 text-sm text-muted-foreground">
                            <li><Link href="/about" className="hover:text-primary">About Us</Link></li>
                            <li><Link href="/scout" className="hover:text-primary">Scout Program</Link></li>
                            <li><Link href="/contact" className="hover:text-primary">Contact</Link></li>
                        </ul>
                    </div>
                    <div>
                        <h3 className="font-bold mb-4">Legal</h3>
                        <ul className="space-y-2 text-sm text-muted-foreground">
                            <li><Link href="/privacy" className="hover:text-primary">Privacy Policy</Link></li>
                            <li><Link href="/terms" className="hover:text-primary">Terms of Service</Link></li>
                            <li><Link href="/trust" className="hover:text-primary">Trust & Safety</Link></li>
                        </ul>
                    </div>
                </div>
                <div className="text-center text-sm text-muted-foreground pt-8 border-t border-border/20">
                    <p>&copy; {new Date().getFullYear()} Anti-Amazon Collective. All rights reserved.</p>
                </div>
            </div>
        </footer>
    );
}

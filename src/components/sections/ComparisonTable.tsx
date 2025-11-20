import { Check, X } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/Card";

export function ComparisonTable() {
    return (
        <section className="py-20 bg-muted/30">
            <div className="container px-4 md:px-6">
                <div className="text-center mb-12">
                    <h2 className="text-3xl md:text-5xl font-bold mb-4">The Old Way vs. The New Way</h2>
                    <p className="text-muted-foreground text-lg">Why the "Best Seller" list is a trap.</p>
                </div>

                <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
                    {/* Amazon / Old Way */}
                    <Card className="border-border/50 bg-card/50 opacity-70 hover:opacity-100 transition-opacity">
                        <CardHeader>
                            <CardTitle className="text-muted-foreground">Amazon / Traditional</CardTitle>
                        </CardHeader>
                        <CardContent className="space-y-4">
                            <div className="flex items-center gap-3">
                                <X className="text-red-500 h-6 w-6" />
                                <span className="text-lg">30-70% Platform Fee</span>
                            </div>
                            <div className="flex items-center gap-3">
                                <X className="text-red-500 h-6 w-6" />
                                <span className="text-lg">No Customer Emails</span>
                            </div>
                            <div className="flex items-center gap-3">
                                <X className="text-red-500 h-6 w-6" />
                                <span className="text-lg">Passive Reading</span>
                            </div>
                            <div className="flex items-center gap-3">
                                <X className="text-red-500 h-6 w-6" />
                                <span className="text-lg">Algorithm Controls You</span>
                            </div>
                            <div className="flex items-center gap-3">
                                <X className="text-red-500 h-6 w-6" />
                                <span className="text-lg">Low Ticket ($2.99 - $9.99)</span>
                            </div>
                        </CardContent>
                    </Card>

                    {/* New Way */}
                    <Card className="border-primary/50 bg-card/80 shadow-[0_0_30px_rgba(0,240,255,0.1)]">
                        <CardHeader>
                            <CardTitle className="text-primary text-glow">Your Platform</CardTitle>
                        </CardHeader>
                        <CardContent className="space-y-4">
                            <div className="flex items-center gap-3">
                                <Check className="text-primary h-6 w-6" />
                                <span className="text-lg font-medium">70% Revenue Share</span>
                            </div>
                            <div className="flex items-center gap-3">
                                <Check className="text-primary h-6 w-6" />
                                <span className="text-lg font-medium">You Own the Data</span>
                            </div>
                            <div className="flex items-center gap-3">
                                <Check className="text-primary h-6 w-6" />
                                <span className="text-lg font-medium">Live Interactive Events</span>
                            </div>
                            <div className="flex items-center gap-3">
                                <Check className="text-primary h-6 w-6" />
                                <span className="text-lg font-medium">Direct-to-Fan Relationship</span>
                            </div>
                            <div className="flex items-center gap-3">
                                <Check className="text-primary h-6 w-6" />
                                <span className="text-lg font-medium">High Ticket ($20 - $100+)</span>
                            </div>
                        </CardContent>
                    </Card>
                </div>
            </div>
        </section>
    );
}

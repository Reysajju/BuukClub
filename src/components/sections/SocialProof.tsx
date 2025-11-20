import { Card, CardContent } from "@/components/ui/Card";

const testimonials = [
    {
        name: "Sarah J.",
        role: "Romance Author",
        quote: "I was making $200/mo on Kindle Unlimited. My first month here I made $2,400. It's insane.",
        avatar: "S",
    },
    {
        name: "Marcus T.",
        role: "Sci-Fi Writer",
        quote: "Finally, I know who my readers are. We hang out in Discord every Friday. Best decision ever.",
        avatar: "M",
    },
    {
        name: "Elena R.",
        role: "Non-Fiction",
        quote: "The tech just works. I don't have to worry about payments or hosting. I just write.",
        avatar: "E",
    },
];

export function SocialProof() {
    return (
        <section className="py-20">
            <div className="container px-4 md:px-6">
                <div className="text-center mb-12">
                    <h2 className="text-3xl md:text-5xl font-bold mb-4">Join the Resistance</h2>
                    <p className="text-muted-foreground text-lg">Authors who stopped waiting to be picked.</p>
                </div>

                <div className="grid md:grid-cols-3 gap-6">
                    {testimonials.map((t, i) => (
                        <Card key={i} className="bg-muted/20 border-border/50">
                            <CardContent className="pt-6">
                                <div className="flex items-center gap-4 mb-4">
                                    <div className="h-10 w-10 rounded-full bg-primary/20 flex items-center justify-center text-primary font-bold">
                                        {t.avatar}
                                    </div>
                                    <div>
                                        <div className="font-medium">{t.name}</div>
                                        <div className="text-xs text-muted-foreground">{t.role}</div>
                                    </div>
                                </div>
                                <p className="text-muted-foreground italic">"{t.quote}"</p>
                            </CardContent>
                        </Card>
                    ))}
                </div>
            </div>
        </section>
    );
}

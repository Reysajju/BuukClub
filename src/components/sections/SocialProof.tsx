"use client";

import { Card, CardContent } from "@/components/ui/Card";
import { motion } from "framer-motion";

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
    {
        name: "David K.",
        role: "Thriller Author",
        quote: "Amazon's algorithm buried my book. BuukClub helped me build a direct income stream.",
        avatar: "D",
    },
    {
        name: "Jessica L.",
        role: "Fantasy Writer",
        quote: "The community features are game-changing. My readers are more engaged than ever.",
        avatar: "J",
    }
];

export function SocialProof() {
    return (
        <section className="py-20 overflow-hidden bg-muted/10">
            <div className="container px-4 md:px-6 mb-12">
                <div className="text-center">
                    <h2 className="text-3xl md:text-5xl font-bold mb-4 serif-heading">Join the Resistance</h2>
                    <p className="text-muted-foreground text-lg">Authors who stopped waiting to be picked.</p>
                </div>
            </div>

            <div className="relative w-full flex overflow-hidden mask-image-linear-gradient">
                <div className="absolute inset-y-0 left-0 w-20 bg-gradient-to-r from-background to-transparent z-10" />
                <div className="absolute inset-y-0 right-0 w-20 bg-gradient-to-l from-background to-transparent z-10" />

                <motion.div
                    className="flex gap-6 whitespace-nowrap"
                    animate={{ x: [0, -1000] }}
                    transition={{
                        x: {
                            repeat: Infinity,
                            repeatType: "loop",
                            duration: 20,
                            ease: "linear",
                        },
                    }}
                >
                    {[...testimonials, ...testimonials, ...testimonials].map((t, i) => (
                        <Card key={i} className="w-[350px] flex-shrink-0 bg-card/50 backdrop-blur-sm border-border/50 hover:border-primary/30 transition-colors">
                            <CardContent className="pt-6 whitespace-normal">
                                <div className="flex items-center gap-4 mb-4">
                                    <div className="h-10 w-10 rounded-full bg-primary/10 flex items-center justify-center text-primary font-bold">
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
                </motion.div>
            </div>
        </section>
    );
}

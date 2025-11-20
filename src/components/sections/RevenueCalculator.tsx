"use client";

import { useState, useEffect } from "react";
import { Input } from "@/components/ui/Input";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/Card";
import { Button } from "@/components/ui/Button";
import { motion, useSpring, useTransform, animate } from "framer-motion";
import Link from "next/link";

function Counter({ value }: { value: number }) {
    const [displayValue, setDisplayValue] = useState(0);

    useEffect(() => {
        const controls = animate(displayValue, value, {
            duration: 1,
            onUpdate: (latest) => setDisplayValue(Math.floor(latest)),
            ease: "easeOut"
        });
        return controls.stop;
    }, [value]);

    return <span>{displayValue.toLocaleString()}</span>;
}

export function RevenueCalculator() {
    const [followers, setFollowers] = useState<number>(10000);
    const [price, setPrice] = useState<number>(20);

    // Assumptions:
    // 1% conversion rate to paid club members
    const conversionRate = 0.01;
    const members = Math.floor(followers * conversionRate);
    const monthlyIncome = members * price;

    return (
        <section className="py-20 relative overflow-hidden">
            <div className="absolute inset-0 bg-primary/5 blur-[100px] -z-10" />

            <div className="container px-4 md:px-6">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-center mb-12"
                >
                    <h2 className="text-3xl md:text-5xl font-bold mb-4 serif-heading">Calculate Your Escape Velocity</h2>
                    <p className="text-muted-foreground text-lg">See what happens when you own the platform.</p>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5 }}
                >
                    <Card className="max-w-2xl mx-auto border-primary/30 shadow-[0_0_50px_rgba(197,160,89,0.15)] bg-card/80 backdrop-blur-sm">
                        <CardHeader>
                            <CardTitle className="text-center font-serif text-2xl">Monthly Revenue Simulator</CardTitle>
                        </CardHeader>
                        <CardContent className="space-y-8">
                            <div className="grid gap-8 md:grid-cols-2">
                                <div className="space-y-4">
                                    <label className="text-sm font-medium flex justify-between">
                                        <span>Total Social Followers</span>
                                        <span className="text-primary font-bold">{followers.toLocaleString()}</span>
                                    </label>
                                    <input
                                        type="range"
                                        min="1000"
                                        max="1000000"
                                        step="1000"
                                        value={followers}
                                        onChange={(e) => setFollowers(Number(e.target.value))}
                                        className="w-full h-2 bg-muted rounded-lg appearance-none cursor-pointer accent-primary"
                                    />
                                    <p className="text-xs text-muted-foreground">Across all platforms (TikTok, IG, Twitter)</p>
                                </div>
                                <div className="space-y-4">
                                    <label className="text-sm font-medium flex justify-between">
                                        <span>Monthly Membership Price</span>
                                        <span className="text-primary font-bold">${price}</span>
                                    </label>
                                    <input
                                        type="range"
                                        min="5"
                                        max="100"
                                        step="1"
                                        value={price}
                                        onChange={(e) => setPrice(Number(e.target.value))}
                                        className="w-full h-2 bg-muted rounded-lg appearance-none cursor-pointer accent-primary"
                                    />
                                    <p className="text-xs text-muted-foreground">Recommended: $20 - $50</p>
                                </div>
                            </div>

                            <div className="p-6 bg-muted/50 rounded-lg space-y-4 border border-border/50">
                                <div className="flex justify-between items-center">
                                    <span className="text-muted-foreground">Est. True Fans (1%)</span>
                                    <span className="font-mono text-xl"><Counter value={members} /></span>
                                </div>
                                <div className="h-px bg-border" />
                                <div className="flex justify-between items-center">
                                    <span className="text-lg font-medium">Potential Monthly Income</span>
                                    <motion.span
                                        key={monthlyIncome}
                                        initial={{ scale: 1.2, color: "var(--primary)" }}
                                        animate={{ scale: 1, color: "var(--primary)" }}
                                        className="text-4xl font-bold text-primary text-glow"
                                    >
                                        $<Counter value={monthlyIncome} />
                                    </motion.span>
                                </div>
                                <p className="text-xs text-center text-muted-foreground pt-2">
                                    *Based on a conservative 1% conversion rate. Top authors see 3-5%.
                                </p>
                            </div>

                            <Link href="/apply" className="block">
                                <Button className="w-full text-lg h-12 shadow-lg hover:shadow-primary/20 transition-all" variant="default">
                                    Start Earning This Now
                                </Button>
                            </Link>
                        </CardContent>
                    </Card>
                </motion.div>
            </div>
        </section>
    );
}

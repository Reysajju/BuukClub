"use client";

import { useState } from "react";
import { Input } from "@/components/ui/Input";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/Card";
import { Button } from "@/components/ui/Button";

export function RevenueCalculator() {
    const [followers, setFollowers] = useState<number>(10000);
    const [price, setPrice] = useState<number>(20);

    // Assumptions:
    // 1% conversion rate to paid club members
    const conversionRate = 0.01;
    const members = Math.floor(followers * conversionRate);
    const monthlyIncome = members * price;
    const amazonCut = monthlyIncome * 0.7; // Amazon takes ~70% on low priced books, but let's say 30-70%.
    // Actually, for books, Amazon keeps 30-70%.
    // If we compare to Amazon:
    // Amazon: You sell books at $10. You get $7 (70%) or $3.5 (35%).
    // Club: You sell membership at $20. You keep 70% ($14).

    // Let's just show the raw potential income vs "Donating to Amazon".
    // If they made this on Amazon (assuming same volume which is unlikely but for comparison):
    // Let's say Amazon takes 30% of this revenue? No, Amazon doesn't do subscriptions easily.
    // Let's just show the Total Potential Income.

    return (
        <section className="py-20 relative overflow-hidden">
            <div className="absolute inset-0 bg-primary/5 blur-[100px] -z-10" />

            <div className="container px-4 md:px-6">
                <div className="text-center mb-12">
                    <h2 className="text-3xl md:text-5xl font-bold mb-4">Calculate Your Escape Velocity</h2>
                    <p className="text-muted-foreground text-lg">See what happens when you own the platform.</p>
                </div>

                <Card className="max-w-2xl mx-auto border-primary/30 shadow-[0_0_50px_rgba(0,240,255,0.15)]">
                    <CardHeader>
                        <CardTitle className="text-center">Monthly Revenue Simulator</CardTitle>
                    </CardHeader>
                    <CardContent className="space-y-8">
                        <div className="grid gap-6 md:grid-cols-2">
                            <div className="space-y-2">
                                <label className="text-sm font-medium">Total Social Followers</label>
                                <Input
                                    type="number"
                                    value={followers}
                                    onChange={(e) => setFollowers(Number(e.target.value))}
                                    className="text-lg"
                                />
                                <p className="text-xs text-muted-foreground">Across all platforms (TikTok, IG, Twitter)</p>
                            </div>
                            <div className="space-y-2">
                                <label className="text-sm font-medium">Monthly Membership Price ($)</label>
                                <Input
                                    type="number"
                                    value={price}
                                    onChange={(e) => setPrice(Number(e.target.value))}
                                    className="text-lg"
                                />
                                <p className="text-xs text-muted-foreground">Recommended: $20 - $50</p>
                            </div>
                        </div>

                        <div className="p-6 bg-muted/50 rounded-lg space-y-4 border border-border/50">
                            <div className="flex justify-between items-center">
                                <span className="text-muted-foreground">Est. True Fans (1%)</span>
                                <span className="font-mono text-xl">{members}</span>
                            </div>
                            <div className="h-px bg-border" />
                            <div className="flex justify-between items-center">
                                <span className="text-lg font-medium">Potential Monthly Income</span>
                                <span className="text-4xl font-bold text-primary text-glow">
                                    ${monthlyIncome.toLocaleString()}
                                </span>
                            </div>
                            <p className="text-xs text-center text-muted-foreground pt-2">
                                *Based on a conservative 1% conversion rate. Top authors see 3-5%.
                            </p>
                        </div>

                        <Button className="w-full text-lg h-12" variant="default">
                            Start Earning This Now
                        </Button>
                    </CardContent>
                </Card>
            </div>
        </section>
    );
}

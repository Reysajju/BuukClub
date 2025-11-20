"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/Button";
import Link from "next/link";

export function Hero() {
    return (
        <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
            {/* Background Effects */}
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--primary)_0%,_transparent_40%)] opacity-10 blur-3xl" />

            <div className="container px-4 md:px-6 relative z-10 text-center">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                >
                    <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold tracking-tighter mb-6">
                        Stop Donating <span className="text-primary text-glow">70%</span> of Your
                        <br />
                        Royalties to Amazon.
                    </h1>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.2 }}
                >
                    <p className="text-xl md:text-2xl text-muted-foreground mb-8 max-w-3xl mx-auto">
                        Build a High-Ticket Live Book Club. Your Fans, Your Data, Your Revenue.
                        <br />
                        <span className="text-accent">Real authors have communities. Amateurs have readers.</span>
                    </p>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.4 }}
                    className="flex flex-col sm:flex-row gap-4 justify-center"
                >
                    <Link href="/apply">
                        <Button variant="default" size="lg" className="text-lg px-8">
                            Apply for Access
                        </Button>
                    </Link>
                    <Link href="/manifesto">
                        <Button variant="ghost" size="lg" className="text-lg">
                            Read the Manifesto
                        </Button>
                    </Link>
                </motion.div>
            </div>
        </section>
    );
}

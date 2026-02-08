"use client";

import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { insertInquirySchema } from "@/lib/schema";
import { useCreateInquiry } from "@/lib/use-inquiries";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { Loader2 } from "lucide-react";
import { motion } from "framer-motion";
import { z } from "zod";

type ContactFormValues = z.infer<typeof insertInquirySchema>;

export default function ContactForm() {
    const mutation = useCreateInquiry();

    const form = useForm<ContactFormValues>({
        resolver: zodResolver(insertInquirySchema),
        defaultValues: {
            name: "",
            email: "",
            message: ""
        }
    });

    const onSubmit = (data: ContactFormValues) => {
        mutation.mutate(data, {
            onSuccess: () => {
                form.reset();
            }
        });
    };

    return (
        <section id="contact" className="py-24 bg-secondary/20 border-t border-white/5">
            <div className="container mx-auto px-4 md:px-16">
                <div className="grid md:grid-cols-2 gap-16 lg:gap-24">
                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                    >
                        <h2 className="text-4xl md:text-6xl font-bold font-display mb-6">Let&apos;s build something extraordinary.</h2>
                        <p className="text-xl text-muted-foreground mb-8">
                            Have a project in mind? We&apos;d love to hear about it. Drop us a line and let&apos;s start a conversation.
                        </p>

                        <div className="space-y-6 mt-12">
                            <div>
                                <h3 className="text-sm font-mono text-primary uppercase tracking-wider mb-2">Email Us</h3>
                                <p className="text-lg">hello@studio.design</p>
                            </div>
                            <div>
                                <h3 className="text-sm font-mono text-primary uppercase tracking-wider mb-2">Visit Us</h3>
                                <p className="text-lg">123 Creative Ave, Design District<br />New York, NY 10013</p>
                            </div>
                        </div>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, x: 30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                        className="bg-card p-8 md:p-10 border border-white/10"
                    >
                        <Form {...form}>
                            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                                <FormField
                                    control={form.control}
                                    name="name"
                                    render={({ field }) => (
                                        <FormItem>
                                            <FormLabel className="text-base">Name</FormLabel>
                                            <FormControl>
                                                <Input
                                                    placeholder="John Doe"
                                                    {...field}
                                                    className="bg-background/50 border-white/10 focus:border-primary h-12"
                                                />
                                            </FormControl>
                                            <FormMessage />
                                        </FormItem>
                                    )}
                                />

                                <FormField
                                    control={form.control}
                                    name="email"
                                    render={({ field }) => (
                                        <FormItem>
                                            <FormLabel className="text-base">Email</FormLabel>
                                            <FormControl>
                                                <Input
                                                    placeholder="john@example.com"
                                                    type="email"
                                                    {...field}
                                                    className="bg-background/50 border-white/10 focus:border-primary h-12"
                                                />
                                            </FormControl>
                                            <FormMessage />
                                        </FormItem>
                                    )}
                                />

                                <FormField
                                    control={form.control}
                                    name="message"
                                    render={({ field }) => (
                                        <FormItem>
                                            <FormLabel className="text-base">Message</FormLabel>
                                            <FormControl>
                                                <Textarea
                                                    placeholder="Tell us about your project..."
                                                    {...field}
                                                    className="bg-background/50 border-white/10 focus:border-primary min-h-[150px] resize-none"
                                                />
                                            </FormControl>
                                            <FormMessage />
                                        </FormItem>
                                    )}
                                />

                                <Button
                                    type="submit"
                                    className="w-full h-12 text-base font-semibold bg-primary hover:bg-primary/90"
                                    disabled={mutation.isPending}
                                >
                                    {mutation.isPending ? (
                                        <>
                                            <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                                            Sending...
                                        </>
                                    ) : (
                                        "Send Message"
                                    )}
                                </Button>
                            </form>
                        </Form>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}

"use client";

import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { insertInquirySchema } from "@/lib/schema";
import { useCreateInquiry } from "@/lib/use-inquiries";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { Loader2, Github, Linkedin, Mail } from "lucide-react";
import { motion } from "framer-motion";
import { z } from "zod";
import { AnnotatedText } from "@/components/AnnotatedText";

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
        <section id="contact" className="py-24 md:py-32 bg-white relative min-h-screen">
            <div className="container max-w-7xl mx-auto px-6 relative z-10">
                {/* Header */}
                <div className="mb-12">
                    <motion.h1
                        className="text-3xl md:text-5xl font-light font-display text-foreground mb-3"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5 }}
                    >
                        Let&apos;s work {" "}
                        <AnnotatedText type="box" color="#4F46E5" strokeWidth={2} animationDelay={800} padding={[6, 8]} className="font-bold">
                            together
                        </AnnotatedText>
                        .
                    </motion.h1>
                    <motion.p
                        className="text-md md:text-lg text-muted-foreground w-full"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.1 }}
                    >
                        Have a project in mind or want to{" "}
                        <AnnotatedText type="highlight" color="hsla(58, 100%, 63%, 0.96)" strokeWidth={4} animationDelay={1200} padding={[4, 6]} className="font-bold">
                            collaborate
                        </AnnotatedText>
                        ?{" "}
                        I&apos;d love to hear from you.
                        <br />
                        Drop me a message and I&apos;ll get back to you soon.
                    </motion.p>
                </div>

                <div className="grid md:grid-cols-2 gap-16 lg:gap-24">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.2 }}
                    >
                        {/* Contact Info */}
                        <div className="space-y-6">
                            <div>
                                <h3 className="text-sm font-medium text-primary uppercase tracking-wider mb-2">Email</h3>
                                <p className="text-lg text-foreground">mhd2danial3@gmail.com</p>
                            </div>
                            <div>
                                <h3 className="text-sm font-medium text-primary uppercase tracking-wider mb-2">Location</h3>
                                <p className="text-lg text-foreground">Batam, Riau Islands, Indonesia</p>
                            </div>
                        </div>

                        {/* Social Links */}
                        <div className="flex gap-3 mt-8">
                            {[
                                { icon: Github, href: "https://github.com/mhddanial", label: "GitHub" },
                                { icon: Linkedin, href: "https://www.linkedin.com/in/muhammaddanial628/", label: "LinkedIn" },
                                { icon: Mail, href: "mailto:mhd2danial3@gmail.com", label: "Email" },
                            ].map(({ icon: Icon, href, label }) => (
                                <a
                                    key={label}
                                    href={href}
                                    aria-label={label}
                                    className="p-3 rounded-xl border border-border bg-white text-muted-foreground hover:text-accent hover:border-accent transition-all"
                                >
                                    <Icon className="w-5 h-5" />
                                </a>
                            ))}
                        </div>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.3 }}
                        className="bg-white p-8 md:p-10 rounded-2xl border border-border shadow-sm"
                    >
                        <Form {...form}>
                            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                                <FormField
                                    control={form.control}
                                    name="name"
                                    render={({ field }) => (
                                        <FormItem>
                                            <FormLabel className="text-base text-foreground">Name</FormLabel>
                                            <FormControl>
                                                <Input
                                                    placeholder="Your name"
                                                    {...field}
                                                    className="bg-secondary/50 border-border focus:border-accent h-12 rounded-lg"
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
                                            <FormLabel className="text-base text-foreground">Email</FormLabel>
                                            <FormControl>
                                                <Input
                                                    placeholder="you@example.com"
                                                    type="email"
                                                    {...field}
                                                    className="bg-secondary/50 border-border focus:border-accent h-12 rounded-lg"
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
                                            <FormLabel className="text-base text-foreground">Message</FormLabel>
                                            <FormControl>
                                                <Textarea
                                                    placeholder="Tell me about your project..."
                                                    {...field}
                                                    className="bg-secondary/50 border-border focus:border-accent min-h-[150px] resize-none rounded-lg"
                                                />
                                            </FormControl>
                                            <FormMessage />
                                        </FormItem>
                                    )}
                                />

                                <Button
                                    type="submit"
                                    className="w-full h-12 text-base font-semibold bg-foreground text-white hover:bg-foreground/85 rounded-lg"
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

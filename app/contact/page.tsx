import ContactForm from "@/components/ContactForm";
import type { Metadata } from "next";

export const metadata: Metadata = {
    title: "Contact — Dann's Create",
    description: "Have a project in mind or want to collaborate? Get in touch with Muhammad Danial.",
};

export default function ContactPage() {
    return <ContactForm />;
}

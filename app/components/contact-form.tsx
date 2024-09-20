"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";

export default function ContactForm() {
  const [isOpen, setIsOpen] = useState(false);

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    console.log("Form submitted");
    setIsOpen(false);
  };

  return (
    <Dialog open={isOpen} onOpenChange={setIsOpen}>
      <DialogTrigger asChild>
        <Button
          className="h-10 w-30 text-lg bg-gradient-to-b from-purple-400 to-purple-700 text-white hover:from-purple-500 hover:to-purple-800 transition-colors duration-300"
          size={"lg"}
        >
          Let's talk
        </Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle className="text-2xl font-semibold mb-2">Contact Us</DialogTitle>
        </DialogHeader>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="space-y-2">
            <Label htmlFor="name" className="text-lg">Name</Label>
            <Input id="name" placeholder="Enter your name" required/>
          </div>
          <div className="space-y-2">
            <Label htmlFor="email" className="text-lg">Email</Label>
            <Input id="email" type="email" placeholder="Enter your email" required />
          </div>
          <div className="space-y-2">
            <Label htmlFor="phone" className="text-lg">Phone Number</Label>
            <Input
              id="phone"
              type="tel"
              placeholder="Enter your phone number"
              required
            />
          </div>
          <div className="space-y-2">
            <Label htmlFor="message" className="text-lg">Message</Label>
            <Textarea id="message" placeholder="Tell us, how can we help you?" required />
          </div>
          <Button type="submit" className="w-full bg-gradient-to-b from-purple-400 to-purple-700 text-white hover:from-purple-500 hover:to-purple-800 transition-colors duration-300">
            Submit
          </Button>
        </form>
      </DialogContent>
    </Dialog>
  );
}

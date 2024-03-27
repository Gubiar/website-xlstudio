import { Button } from "../ui/button";
import { Input } from "../ui/input";
import { Textarea } from "../ui/textarea";

export default function Contact() {
  return (
    <section id="contact" className="w-full py-12 md:py-16 lg:py-20 flex">
      <div className="container space-y-12 px-4 md:px-6 m-auto">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <div className="space-y-2">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">
              Contact Us
            </h2>
            <p className="max-w-[600px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
              Ready to take your brand to the next level? Let's talk. Contact us
              to discuss how XL Studio can help you achieve your marketing
              goals.
            </p>
          </div>
        </div>
        <div className="mx-auto max-w-[400px] space-y-4">
          <div className="grid grid-cols-2 gap-4">
            <Input id="name" placeholder="Name" required />
            <Input id="email" placeholder="Email" required type="email" />
          </div>
          <Input id="company" placeholder="Company" required />
          <Textarea id="message" placeholder="Message" required />
          <Button size="lg">Submit</Button>
        </div>
      </div>
    </section>
  );
}

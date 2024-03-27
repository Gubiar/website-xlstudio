import Image from "next/image";
import { Button } from "../ui/button";
import { InstagramLogoIcon } from "@radix-ui/react-icons";

export default function About() {
  return (
    <section className="w-full py-12 md:py-16 lg:py-20 flex">
      <div className="container flex flex-col gap-10 px-4 md:px-6 items-center justify-center w-full m-auto">
        <div className="grid items-center gap-6 lg:grid-cols-[1fr_500px] lg:gap-12 xl:grid-cols-[1fr_550px] w-full">
          <Image
            alt="Image"
            className="mx-auto aspect-video overflow-hidden rounded-xl object-cover object-center sm:w-full"
            height={310}
            src="/placeholder.svg"
            width={550}
          />
          <div className="flex flex-col justify-center space-y-4">
            <div className="space-y-2">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
                About XL Studio
              </h2>
              <p className="max-w-[600px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
                At XL Studio, we believe in the power of creativity and
                innovation. Our mission is to help businesses thrive in the
                digital age by delivering compelling and impactful marketing
                solutions. We are driven by our passion for storytelling and our
                commitment to excellence. Whether it's crafting engaging social
                media campaigns, producing stunning visual content, or devising
                strategic digital advertising strategies, we are dedicated to
                making our clients shine. Our team of experienced marketers,
                creative minds, and digital experts is here to elevate your
                brand and amplify your message. Let us be your partner in
                success.
              </p>
              <Button size="sm" variant="secondary" asChild>
                <a href="https://www.instagram.com/xlstudio.br/">
                  <InstagramLogoIcon className="mr-2 h-4 w-4" />
                  Follow us on Instagram
                </a>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

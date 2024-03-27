import { InstagramLogoIcon } from "@radix-ui/react-icons";
import DefaultLogo from "../default-logo";
import { Button } from "../ui/button";
import { BookmarkCheck } from "lucide-react";

export default function Hero() {
  return (
    <section className="w-full py-12 md:py-16 lg:py-20 flex justify-center">
      <div className="container space-y-12 px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <div className="space-y-2">
            <div className="flex">
              <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl">
                Elevate your brand with
              </h1>
              <DefaultLogo className="dark:fill-[white] fill-[black] object-contain h-14 ml-4" />
            </div>
            <p className="max-w-[900px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
              We are a full-service marketing agency dedicated to helping our
              clients stand out in the digital world. Let us tell your story and
              connect you with your audience.
            </p>
            <Button size="sm" variant="default" asChild>
              <a href="#contact">
                <BookmarkCheck className="mr-2 h-4 w-4" />
                Get in touch
              </a>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}

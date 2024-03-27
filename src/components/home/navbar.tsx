import { BookmarkCheck } from "lucide-react";
import DefaultLogo from "../default-logo";
import { Button } from "../ui/button";
import dynamic from "next/dynamic";

const ThemeButton = dynamic(() => import("@/components/theme-button"), {
  ssr: false,
});

export default function Navbar() {
  return (
    <div className="bg-gray-50/90 border-b border-gray-200 dark:bg-gray-950 dark:border-gray-800 bg-white w-full">
      <div className="container py-3.5 px-4 md:px-6 m-auto">
        <div className="flex items-center justify-between">
          <a href="/" aria-label="Link para a página inicial">
            <DefaultLogo
              className="dark:fill-[white] fill-[black] object-contain"
              width={200}
              height={30}
            />
          </a>
          <div className="ml-auto flex items-center space-x-2 gap-4">
            <ThemeButton />
            <Button size="sm" variant="outline" asChild>
              <a href="#contact">
                <BookmarkCheck className="mr-2 h-4 w-4" />
                Get in touch
              </a>
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}

import Image from "next/image";

export default function Portfolio() {
  return (
    <section className="w-full py-12 md:py-16 lg:py-20 flex">
      <div className="container space-y-12 px-4 md:px-6 m-auto">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <div className="space-y-2">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">
              Our Portfolio
            </h2>
            <p className="max-w-[600px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
              Check out some of our recent projects and success stories.
            </p>
          </div>
        </div>
        <div className="grid md:grid-cols-2 gap-6 lg:gap-8 xl:gap-10">
          <div className="flex flex-col gap-2">
            <Image
              alt="Project 1"
              className="aspect-video rounded-lg object-cover object-center overflow-hidden"
              height={400}
              src="/placeholder.svg"
              width={600}
            />
            <div className="grid gap-1">
              <h3 className="text-xl font-semibold">
                Social Media Campaign: Summer Vibes
              </h3>
              <p className="text-sm text-gray-500 dark:text-gray-400">
                Capturing the essence of the season with engaging content.
              </p>
            </div>
          </div>
          <div className="flex flex-col gap-2">
            <Image
              alt="Project 2"
              className="aspect-video rounded-lg object-cover object-center overflow-hidden"
              height={400}
              src="/placeholder.svg"
              width={600}
            />
            <div className="grid gap-1">
              <h3 className="text-xl font-semibold">
                Video Production: Behind the Scenes
              </h3>
              <p className="text-sm text-gray-500 dark:text-gray-400">
                Giving audiences an exclusive look at the magic behind the
                scenes.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

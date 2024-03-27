import Image from "next/image";

export default function TrustedBy() {
  return (
    <section className="w-full py-12 md:py-24 lg:py-32 flex">
      <div className="container grid items-center justify-center gap-4 px-4 text-center md:px-6 lg:gap-10 m-auto">
        <div className="space-y-3">
          <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
            Trusted by the Best
          </h2>
          <p className="mx-auto max-w-[700px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
            We help brands shine on social media. Our clients are some of the
            most recognized names in the industry.
          </p>
        </div>
        <div className="grid w-full grid-cols-2 lg:grid-cols-5 items-center justify-center gap-8 lg:gap-12 [&>img]:mx-auto">
          {/* Use Image components for optimized image handling */}
          <Image
            alt="Logo"
            className="aspect-[2/1] overflow-hidden rounded-lg object-contain object-center"
            height={70}
            src="/placeholder.svg"
            width={140}
          />
          <Image
            alt="Logo"
            className="aspect-[2/1] overflow-hidden rounded-lg object-contain object-center"
            height={70}
            src="/placeholder.svg"
            width={140}
          />
          <Image
            alt="Logo"
            className="aspect-[2/1] overflow-hidden rounded-lg object-contain object-center"
            height={70}
            src="/placeholder.svg"
            width={140}
          />
          <Image
            alt="Logo"
            className="aspect-[2/1] overflow-hidden rounded-lg object-contain object-center"
            height={70}
            src="/placeholder.svg"
            width={140}
          />
          <Image
            alt="Logo"
            className="aspect-[2/1] overflow-hidden rounded-lg object-contain object-center"
            height={70}
            src="/placeholder.svg"
            width={140}
          />
        </div>
      </div>
    </section>
  );
}

import Image from "next/image";

export default function Testimonials() {
  return (
    <section className="w-full py-12 md:py-16 lg:py-20 flex">
      <div className="container space-y-12 px-4 md:px-6 m-auto">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <div className="space-y-2">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">
              Client Testimonials
            </h2>
            <p className="max-w-[600px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
              Don't just take our word for it. See what our clients have to say
              about working with us.
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
              <h3 className="text-xl font-semibold">Emily Parker</h3>
              <p className="text-sm text-gray-500 dark:text-gray-400">
                "XL Studio has been instrumental in helping us reach our
                audience and grow our brand. Their creative approach to social
                media management has resulted in increased engagement and brand
                visibility. I highly recommend their services to any business
                looking to make an impact in the digital space."
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
              <h3 className="text-xl font-semibold">Alex Johnson</h3>
              <p className="text-sm text-gray-500 dark:text-gray-400">
                "XL Studio has been a fantastic partner in our digital marketing
                journey. Their expertise in creating compelling content and
                managing our social media channels has helped us connect with
                our customers in meaningful ways. The team is dedicated,
                creative, and always goes the extra mile to deliver results.
                Working with XL Studio has been a game-changer for our brand."
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

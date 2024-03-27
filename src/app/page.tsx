
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { BookmarkCheck} from "lucide-react"
import { JSX, SVGProps } from "react"
import { useTheme } from "next-themes"
import ThemeButton from "@/components/theme-button"
import { Footer } from "@/components/footer"

export default function PageHome() {
  return (
    <>
      <div className="bg-gray-50/90 border-b border-gray-200 dark:bg-gray-950 dark:border-gray-800 bg-white w-full">
        <div className="container py-3.5 px-4 md:px-6 m-auto">
          <div className="flex items-center justify-between">
            <a href="/">
              <DefaultLogo className="dark:fill-[white] fill-[black] object-contain" width={200} height={30} />
            </a>
            <div className="ml-auto flex items-center space-x-2 gap-4">
            <ThemeButton />
              <Button size="sm" variant="outline">
                <BookmarkCheck className="mr-2 h-4 w-4" />
                Get in touch
              </Button>
            </div>
          </div>
        </div>
      </div>
      <section className="w-full py-12 md:py-16 lg:py-20 flex justify-center">
        <div className="container space-y-12 px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
          <div className="flex">
          <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl">
                Elevate your brand with
              </h1>
              <DefaultLogo className="dark:fill-[white] fill-[black] object-contain h-14 ml-4"/>
          </div>
              <p className="max-w-[900px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
                We are a full-service marketing agency dedicated to helping our clients stand out in the digital world.
                Let us tell your story and connect you with your audience.
              </p>
            </div>
          </div>
        </div>
      </section>
      <section className="w-full py-12 md:py-16 lg:py-20 flex">
        <div className="container flex flex-col gap-10 px-4 md:px-6 items-center justify-center w-full m-auto">
          <div className="grid items-center gap-6 lg:grid-cols-[1fr_500px] lg:gap-12 xl:grid-cols-[1fr_550px] w-full">
            <img
              alt="Image"
              className="mx-auto aspect-video overflow-hidden rounded-xl object-cover object-center sm:w-full"
              height="310"
              src="/placeholder.svg"
              width="550"
            />
            <div className="flex flex-col justify-center space-y-4">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">About XL Studio</h2>
                <p className="max-w-[600px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
                  At XL Studio, we believe in the power of creativity and innovation. Our mission is to help businesses
                  thrive in the digital age by delivering compelling and impactful marketing solutions. We are driven by
                  our passion for storytelling and our commitment to excellence. Whether it's crafting engaging social
                  media campaigns, producing stunning visual content, or devising strategic digital advertising
                  strategies, we are dedicated to making our clients shine. Our team of experienced marketers, creative
                  minds, and digital experts is here to elevate your brand and amplify your message. Let us be your
                  partner in success.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="w-full py-12 md:py-16 lg:py-20 flex">
        <div className="container space-y-12 px-4 md:px-6 m-auto">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">Our Services</h2>
              <p className="max-w-[600px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
                We offer a comprehensive range of services designed to help you achieve your marketing goals. From
                managing your social media presence to creating captivating content, we have the expertise to elevate
                your brand.
              </p>
            </div>
          </div>
          <div className="grid gap-6 md:gap-8 lg:gap-10 lg:grid-cols-2 xl:grid-cols-4">
            <div className="flex flex-col items-center justify-center space-y-2">
              <CameraIcon className="w-12 h-12 rounded-lg bg-gray-100 p-3 dark:bg-gray-800" />
              <h3 className="text-lg font-bold">Content Creation</h3>
              <p className="text-sm text-gray-500 dark:text-gray-400">Engaging visual storytelling</p>
            </div>
            <div className="flex flex-col items-center justify-center space-y-2">
              <UsersIcon className="w-12 h-12 rounded-lg bg-gray-100 p-3 dark:bg-gray-800" />
              <h3 className="text-lg font-bold">Social Media Management</h3>
              <p className="text-sm text-gray-500 dark:text-gray-400">Community building and engagement</p>
            </div>
            <div className="flex flex-col items-center justify-center space-y-2">
              <TrendingUpIcon className="w-12 h-12 rounded-lg bg-gray-100 p-3 dark:bg-gray-800" />
              <h3 className="text-lg font-bold">Digital Advertising</h3>
              <p className="text-sm text-gray-500 dark:text-gray-400">Targeted campaigns for growth</p>
            </div>
            <div className="flex flex-col items-center justify-center space-y-2">
              <MessageSquareIcon className="w-12 h-12 rounded-lg bg-gray-100 p-3 dark:bg-gray-800" />
              <h3 className="text-lg font-bold">Email Marketing</h3>
              <p className="text-sm text-gray-500 dark:text-gray-400">Personalized communication strategies</p>
            </div>
          </div>
        </div>
      </section>
      <section className="w-full py-12 md:py-16 lg:py-20 flex">
        <div className="container space-y-12 px-4 md:px-6 m-auto">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">Our Portfolio</h2>
              <p className="max-w-[600px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
                Check out some of our recent projects and success stories.
              </p>
            </div>
          </div>
          <div className="grid md:grid-cols-2 gap-6 lg:gap-8 xl:gap-10">
            <div className="flex flex-col gap-2">
              <img
                alt="Project 1"
                className="aspect-video rounded-lg object-cover object-center overflow-hidden"
                height="400"
                src="/placeholder.svg"
                width="600"
              />
              <div className="grid gap-1">
                <h3 className="text-xl font-semibold">Social Media Campaign: Summer Vibes</h3>
                <p className="text-sm text-gray-500 dark:text-gray-400">
                  Capturing the essence of the season with engaging content.
                </p>
              </div>
            </div>
            <div className="flex flex-col gap-2">
              <img
                alt="Project 2"
                className="aspect-video rounded-lg object-cover object-center overflow-hidden"
                height="400"
                src="/placeholder.svg"
                width="600"
              />
              <div className="grid gap-1">
                <h3 className="text-xl font-semibold">Video Production: Behind the Scenes</h3>
                <p className="text-sm text-gray-500 dark:text-gray-400">
                  Giving audiences an exclusive look at the magic behind the scenes.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="w-full py-12 md:py-16 lg:py-20 flex">
        <div className="container space-y-12 px-4 md:px-6 m-auto">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">Client Testimonials</h2>
              <p className="max-w-[600px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
                Don't just take our word for it. See what our clients have to say about working with us.
              </p>
            </div>
          </div>
          <div className="grid md:grid-cols-2 gap-6 lg:gap-8 xl:gap-10">
            <div className="flex flex-col gap-2">
              <img
                alt="Project 1"
                className="aspect-video rounded-lg object-cover object-center overflow-hidden"
                height="400"
                src="/placeholder.svg"
                width="600"
              />
              <div className="grid gap-1">
                <h3 className="text-xl font-semibold">Emily Parker</h3>
                <p className="text-sm text-gray-500 dark:text-gray-400">
                  "XL Studio has been instrumental in helping us reach our audience and grow our brand. Their creative
                  approach to social media management has resulted in increased engagement and brand visibility. I
                  highly recommend their services to any business looking to make an impact in the digital space."
                </p>
              </div>
            </div>
            <div className="flex flex-col gap-2">
              <img
                alt="Project 2"
                className="aspect-video rounded-lg object-cover object-center overflow-hidden"
                height="400"
                src="/placeholder.svg"
                width="600"
              />
              <div className="grid gap-1">
                <h3 className="text-xl font-semibold">Alex Johnson</h3>
                <p className="text-sm text-gray-500 dark:text-gray-400">
                  "XL Studio has been a fantastic partner in our digital marketing journey. Their expertise in creating
                  compelling content and managing our social media channels has helped us connect with our customers in
                  meaningful ways. The team is dedicated, creative, and always goes the extra mile to deliver results.
                  Working with XL Studio has been a game-changer for our brand."
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="w-full py-12 md:py-16 lg:py-20 flex">
        <div className="container space-y-12 px-4 md:px-6 m-auto">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">Contact Us</h2>
              <p className="max-w-[600px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
                Ready to take your brand to the next level? Let's talk. Contact us to discuss how XL Studio can help you
                achieve your marketing goals.
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
      <Footer/>
    </>
  )
}


function SquareIcon(props: JSX.IntrinsicAttributes & SVGProps<SVGSVGElement>) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <rect width="18" height="18" x="3" y="3" rx="2" />
    </svg>
  )
}


function LogInIcon(props: JSX.IntrinsicAttributes & SVGProps<SVGSVGElement>) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M15 3h4a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2h-4" />
      <polyline points="10 17 15 12 10 7" />
      <line x1="15" x2="3" y1="12" y2="12" />
    </svg>
  )
}


function CameraIcon(props: JSX.IntrinsicAttributes & SVGProps<SVGSVGElement>) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M14.5 4h-5L7 7H4a2 2 0 0 0-2 2v9a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V9a2 2 0 0 0-2-2h-3l-2.5-3z" />
      <circle cx="12" cy="13" r="3" />
    </svg>
  )
}


function UsersIcon(props: JSX.IntrinsicAttributes & SVGProps<SVGSVGElement>) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" />
      <circle cx="9" cy="7" r="4" />
      <path d="M22 21v-2a4 4 0 0 0-3-3.87" />
      <path d="M16 3.13a4 4 0 0 1 0 7.75" />
    </svg>
  )
}


function TrendingUpIcon(props: JSX.IntrinsicAttributes & SVGProps<SVGSVGElement>) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <polyline points="22 7 13.5 15.5 8.5 10.5 2 17" />
      <polyline points="16 7 22 7 22 13" />
    </svg>
  )
}


function MessageSquareIcon(props: JSX.IntrinsicAttributes & SVGProps<SVGSVGElement>) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
    </svg>
  )
}

const DefaultLogo = (props: JSX.IntrinsicAttributes & SVGProps<SVGSVGElement>) => (
  <svg
    id="Layer_1"
    data-name="Layer 1"
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 657 144"
    {...props}
  >
    <polygon
      points="113.06 78.42 87.54 47.92 57.83 12.53 13.27 12.53 58.87 66.86 83.4 96.13 112.7 130.96 157.26 130.96 113.06 78.42"
    />
    <polygon
      points="70.12 114.09 70.12 95.26 70.12 95.26 56.5 78.88 13.34 131.03 57.89 131.03 70.12 114.09 70.12 114.09"
    />
    <polygon
      points="100.42 29.95 100.42 48.78 100.42 48.78 114.05 65.16 157.21 13.01 112.66 13.01 100.42 29.95 100.42 29.95"
    />
    <rect
      x={176.23}
      y={104.35}
      width={56.35}
      height={26.61}
    />
    <polygon
      points="145.96 41.43 145.96 104.35 176.23 104.35 176.23 12.9 169.57 12.9 145.96 41.43"
    />
    <polygon
      points="100.42 29.95 100.42 48.78 100.42 48.78 114.05 65.16 157.21 13.01 112.66 13.01 100.42 29.95 100.42 29.95"
    />
    <path
      d="M303.73,118.1c-26.58,0-40.61-12.29-40.61-34.27h11.42c0,16.76,10.06,24.71,29.44,24.71,15.15,0,21.85-4.84,21.85-14.53,0-6.83-4.47-12.05-14.65-14.66L286.71,73c-13.78-3.6-19.5-11.55-19.5-22,0-15.15,10.93-23.22,31.05-23.22,23.85,0,36.39,11.42,36.39,30.3H323.1c0-13.91-8.32-20.87-24.84-20.87-12.79,0-19.62,4.35-19.62,13.29,0,6.21,3.73,10.93,13.29,13.42L316.14,70c14.16,3.6,21.12,11.8,21.12,23.35C337.26,109,327.07,118.1,303.73,118.1Z"
    />
    <path
      d="M391.4,92V55h11.18V90.9c0,12.67,4.72,17.64,15.28,17.64,13.53,0,21.85-10.68,21.85-27.32V55h10.93v61.73H439.71V99.85C436.36,111,427.67,118,414.13,118,399.85,118,391.4,108.66,391.4,92Z"
    />
    <path
      d="M459.58,85.81c0-18.75,11.3-32,28.94-32,13.78,0,22.47,7,26.57,16.52V25.46H526v91.28H515.09V101.46c-4.22,9.81-13,16.52-26.57,16.52C470.88,118,459.58,104.57,459.58,85.81Zm32.54,22.73c12,0,22.6-7.58,22.6-22.73s-10.56-22.6-22.6-22.6-21.49,7.2-21.49,22.6S480.2,108.54,492.12,108.54Z"
    />
    <path
      d="M611.34,53.77c19.62,0,32.66,13.79,32.66,32S631,118,611.34,118s-32.79-13.79-32.79-32.17S591.59,53.77,611.34,53.77Zm0,54.77c14,0,21.73-10.18,21.73-22.73s-7.7-22.6-21.73-22.6-21.86,10.18-21.86,22.6S597.18,108.54,611.34,108.54Z"
    />
    <rect x={545.66} y={28.55} width={15.56} height={15.56} />
    <polygon
      points="561.29 107.3 561.29 64.45 551.11 64.45 551.11 55.01 538.32 55.01 538.32 64.45 551.11 64.45 551.11 107.3 533.97 107.3 533.97 116.74 578.55 116.74 578.55 107.3 561.29 107.3"
    />
    <polygon
      points="363.71 107.42 363.71 64.45 383.08 64.45 383.08 55.01 363.71 55.01 363.71 36.01 352.65 39.37 352.65 55.01 338.99 55.01 338.99 64.45 352.65 64.45 352.65 107.45 363.76 107.45 363.76 116.74 385.56 116.74 385.56 107.3 363.71 107.42"
    />
  </svg>
);

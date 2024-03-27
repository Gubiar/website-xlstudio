import { JSX, SVGProps } from "react";

export default function Services() {
  return (
    <section className="w-full py-12 md:py-16 lg:py-20 flex">
      <div className="container space-y-12 px-4 md:px-6 m-auto">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <div className="space-y-2">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">
              Our Services
            </h2>
            <p className="max-w-[600px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
              We offer a comprehensive range of services designed to help you
              achieve your marketing goals. From managing your social media
              presence to creating captivating content, we have the expertise to
              elevate your brand.
            </p>
          </div>
        </div>
        <div className="grid gap-6 md:gap-8 lg:gap-10 lg:grid-cols-2 xl:grid-cols-4">
          <div className="flex flex-col items-center justify-center space-y-2">
            <CameraIcon className="w-12 h-12 rounded-lg bg-gray-100 p-3 dark:bg-gray-800" />
            <h3 className="text-lg font-bold">Content Creation</h3>
            <p className="text-sm text-gray-500 dark:text-gray-400">
              Engaging visual storytelling
            </p>
          </div>
          <div className="flex flex-col items-center justify-center space-y-2">
            <UsersIcon className="w-12 h-12 rounded-lg bg-gray-100 p-3 dark:bg-gray-800" />
            <h3 className="text-lg font-bold">Social Media Management</h3>
            <p className="text-sm text-gray-500 dark:text-gray-400">
              Community building and engagement
            </p>
          </div>
          <div className="flex flex-col items-center justify-center space-y-2">
            <TrendingUpIcon className="w-12 h-12 rounded-lg bg-gray-100 p-3 dark:bg-gray-800" />
            <h3 className="text-lg font-bold">Digital Advertising</h3>
            <p className="text-sm text-gray-500 dark:text-gray-400">
              Targeted campaigns for growth
            </p>
          </div>
          <div className="flex flex-col items-center justify-center space-y-2">
            <MessageSquareIcon className="w-12 h-12 rounded-lg bg-gray-100 p-3 dark:bg-gray-800" />
            <h3 className="text-lg font-bold">Email Marketing</h3>
            <p className="text-sm text-gray-500 dark:text-gray-400">
              Personalized communication strategies
            </p>
          </div>
        </div>
      </div>
    </section>
  );
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
  );
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
  );
}

function TrendingUpIcon(
  props: JSX.IntrinsicAttributes & SVGProps<SVGSVGElement>
) {
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
  );
}

function MessageSquareIcon(
  props: JSX.IntrinsicAttributes & SVGProps<SVGSVGElement>
) {
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
  );
}

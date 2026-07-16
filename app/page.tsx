import Image from "next/image";
import Link from "next/link";
import AccessCard from "@/components/AccessCard";

export default function Home() {
  return (
    <div className="flex justify-center my-6 text-brand-black">
      <div>
        <div className="flex justify-center">
          <Image 
            src="/logos/211-Wealth-primary-color-logo-png.png"
            width={180}
            height={180}
            alt="211 Wealth Logo"
            loading="eager"
          />
        </div>
        <AccessCard />
        <p className="text-center mt-4 md:mt-8 text-sm">Need help? Contact 
          <Link 
            href="https://www.asiasonline.com/"
            className="pl-1 text-brand-primary-green-600 underline">asiasonline
          </Link>
        </p>
      </div>
    </div>
  );
}

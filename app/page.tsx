import Image from "next/image";

export default function Home() {
  return (
    <div>
      <Image 
        src="/logos/211-Wealth-primary-color-logo-png.png"
        width={400}
        height={400}
        alt="211 Wealth Logo"
        loading="eager"
      />
    </div>
  );
}

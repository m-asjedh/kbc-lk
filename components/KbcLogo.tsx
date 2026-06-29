import Image from "next/image";
import Link from "next/link";

const sizeMap = {
  sm: "h-8",
  md: "h-10",
  lg: "h-14",
  xl: "h-20",
  nav: "h-12 sm:h-14",
  header: "h-20 w-auto sm:h-24 lg:h-28",
  hero: "h-12 sm:h-14",
  watermark: "h-48 w-auto opacity-[0.07] sm:h-64 lg:h-80",
};

type KbcLogoProps = {
  size?: keyof typeof sizeMap;
  className?: string;
  priority?: boolean;
  href?: string | null;
  onClick?: () => void;
};

export default function KbcLogo({
  size = "md",
  className = "",
  priority = false,
  href = "/",
  onClick,
}: KbcLogoProps) {
  const image = (
    <Image
      src="/Logo.svg"
      alt="KBC Original"
      width={801}
      height={801}
      priority={priority}
      className={`w-auto object-contain ${sizeMap[size]} ${className}`}
    />
  );

  if (href) {
    return (
      <Link
        href={href}
        onClick={onClick}
        className="inline-flex shrink-0"
        aria-label="KBC Original home"
      >
        {image}
      </Link>
    );
  }

  return image;
}

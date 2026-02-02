import Image from "next/image";
import Link from "next/link";
type LogoProps = {
  src?: string;
  text?: string;
};

export default function Logo({
  src = "/logo.svg",
  text = "WINONA",
}: LogoProps) {
  return (
    <div className="flex justify-center items-center gap-2">
      <Link href={'/'}>
      <Image
        src={src}
        alt={text}
        width={140}
        height={40}
        priority
      />
      <span className="sr-only">{text}</span>
      </Link>
    </div>
  );
}

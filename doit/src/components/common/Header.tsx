import Image from "next/image";
import Link from "next/link";
import LogoText from "@/app/assets/images/logo_text.svg";
import LogoSmall from "@/app/assets/images/logo_small.svg";

export default function Header() {
  return (
    <div className="w-full bg-(--color-background) flex items-center justify-start ">
      <Link href="/">
        <div className="block sm:hidden">
          <Image src={LogoSmall} alt="로고 이미지" width={71} height={40} />
        </div>
        <div className="hidden sm:block">
          <Image src={LogoText} alt="로고 이미지" width={151} height={40} />
        </div>
      </Link>
    </div>
  );
}

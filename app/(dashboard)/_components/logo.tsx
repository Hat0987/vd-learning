import Image from "next/image";

export const Logo = () => {
  return (
    <Image
      height={180}
      width={500}
      alt="logo"
      src="/logo.svg"
    />
  )
}
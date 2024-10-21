import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <div>
      
      <h1 classNam='text-5xl'>Welcome to recipe page </h1>
      <Link href='/recipe-list'>Explore recipe</Link>
    </div>
  );
}

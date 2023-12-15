import { Catalogue, Hero } from "@/components";
import { fetchCars } from "@/utils";
import Image from "next/image";
import { HomeProps } from '@/types';

export default function Home({searchParams}: HomeProps) {

  return (
    <main className="overflow-hidden">
      <Hero />
      <Catalogue searchParams={searchParams} />
    </main>
  );
}

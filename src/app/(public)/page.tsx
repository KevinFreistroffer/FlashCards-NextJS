import Image from "next/image";
import Link from "next/link";
import "./styles.css";
import FlashCards from "../components/FlashCards/FlashCards";

export default function Home() {
  return (
    <main
      id={"main-screen"}
      className="flex min-h-screen justify-center mt-30 mb-20  p-24"
    >
      <FlashCards />
    </main>
  );
}

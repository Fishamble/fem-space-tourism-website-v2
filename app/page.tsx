import Image from "next/image";
import styles from "./page.module.css";
import Link from "next/link";

export default function Home() {
  return (
    <main className="test flex">
      <div>
        <h5 className="uppercase fs-300 ff-bellefair text-white">So, you want to travel to</h5>
        <h1 className="uppercase fs-750 ff-bellefair text-white">Space</h1>
        <p>
          Let’s face it; if you want to go to space, you might as well genuinely go to outer space and not hover kind of on the edge of it. Well sit
          back, and relax because we’ll give you a truly out of this world experience!
        </p>
      </div>
      <div className=" ">
        <Link href="/">
          <span>Explore</span>
        </Link>
      </div>
    </main>
  );
}

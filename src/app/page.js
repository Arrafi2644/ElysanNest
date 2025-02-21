import Image from "next/image";
import Navbar from "./components/Navbar";
import Banner from "./components/Banner";
import Rooms from "./components/Rooms";
import Discover from "./components/Discover";
import Gallery from "./components/Gallery";

export default function Home() {
  return (
 <>
  <Banner></Banner>
  <Discover></Discover>
  <Rooms></Rooms>
  <Gallery></Gallery>
 </>

  );
}

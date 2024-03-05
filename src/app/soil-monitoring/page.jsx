"use client";

import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import { useRouter } from "next/navigation";
import Cookies from "js-cookie";
import { useEffect, useState } from "react";

export default function SoilMonitor() {
  const router = useRouter();
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    if (!Cookies.get("loggedmacaddress")) {
      router.push("/");
    } else {
      setIsLoading(false);
    }
  }, []);

  return (
    <>
      {isLoading ? (
        <p>Loading...</p>
      ) : (
        <>
          <Navbar />
          <div className="mt-24 mb-8 flex flex-col justify-center items-center">
            <embed
              src="https://thingsboard.cloud/dashboard/fc194980-d118-11ee-a2dd-dda04d5a084f?publicId=410c63f0-d11a-11ee-a550-01ba59c8406a"
              className="h-[1800px] w-[400px] md:w-[1000px] md:h-[450px] rounded-xl md:rounded-3xl"
              data-aos="fade-up"
            ></embed>
          </div>
          <Footer />
        </>
      )}
    </>
  );
}

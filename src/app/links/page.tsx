"use client";
import Navbar from "@/components/navbar";
import Image from "next/image";
import group from "../../../public/Group 273.png";
import Mobile from "@/components/phone";
import Footer from "@/components/footer";
import { useState } from "react";
import List from "@/components/link_list";
const LinksPage = () => {
  const [links, setLinks] = useState<any>([]);
  console.log(links);
  return (
    <div>
      <Navbar />
      <div
        id="screen"
        className="flex  gap-6 sm:p-6 p-4 sm:pt-0 justify-center max-w"
      >
        <Mobile />
        <div className="flex flex-col flex-grow">
          <div className="flex flex-col gap-10 bg-[--white] sm:p-10 p-[24px] border-b rounded-xl rounded-b-none">
            <div>
              <h1 className="font-bold sm:text-[32px] text-[24px]">
                Customize your links
              </h1>
              <span>
                Add/edit/remove links below and then share all your profiles
                with the world!
              </span>
            </div>

            <div className="flex flex-col gap-6 max-h-[500px] transition-all overflow-y-scroll">
              <button
                onClick={() => {
                  setLinks([...links, ["hi"]]);
                }}
                className="w-full rounded-lg border border-[--purple] text-[--purple] px-[27px] py-[11px] hover:bg-[--purple-light]"
              >
                + Add new link
              </button>
              {links.length <= 0 ? (
                <div className="flex flex-col items-center gap-10 bg-[--light-gray] p-5">
                  <Image src={group} alt="prv" />
                  <div className="text-center sm:max-w-[488px] max-w-[255px]">
                    <h1 className="font-bold sm:text-[32px] text-[24px]">
                      Let’s get you started
                    </h1>
                    <span className="sm:w-[488px]">
                      Use the “Add new link” button to get started. Once you
                      have more than one link, you can reorder and edit them.
                      We’re here to help you share your profiles with everyone!
                    </span>
                  </div>
                </div>
              ) : (
                links.map((link: [], i: number) => {
                  return (
                    <List key={i} link={link} i={i}/>
                  );
                })
              )}
            </div>
          </div>
          <Footer />
        </div>
      </div>
    </div>
  );
};

export default LinksPage;

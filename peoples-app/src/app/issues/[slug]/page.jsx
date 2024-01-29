"use client";

import useFetch from "@/hook/useFetch";
import { useParams } from "next/navigation";
import Navbar from "@/components/NavBar";
import { CiLocationOn } from "react-icons/ci";
import Image from "next/image";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { MdOutlinePending } from "react-icons/md";
import { MdConstruction } from "react-icons/md";
import { MdOutlineDownloadDone } from "react-icons/md";
import AuthProvider from "@/context/AuthContext";

import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

const page = () => {
  const petionId = useParams().slug;
  console.log(petionId);
  const data = useFetch(
    `http://localhost:3001/issues/?_id=${petionId}&userId=null`
  );
  const petitionDetail = data.data[0];
  console.log(petitionDetail);

  return (
    <AuthProvider>

    <div>
      <Navbar />
      <div className="mt-28">
        {petitionDetail && (
          <main className="max-container">
            <h2 className="text-2xl text-center">
              Grievance - {petitionDetail.issue_type}
            </h2>
            <section className=" p-8 flex gap-8">
              <div className="basis-1/2 bg-[#ccfbf1] p-4 rounded-md flex flex-col gap-4">
                <div className="w-full flex gap-4 item-center">
                  <p className="bg-red-100/100 flex-1 rounded-md p-2">
                    Ref Number: <span>{petitionDetail._id}</span>
                  </p>
                  <Button
                    variant="destructive"
                    size="lg"
                    className={` ${
                      petitionDetail.issue_status === "under review"
                        ? "bg-red-600/80 hover:bg-red-600/80"
                        : petitionDetail.issue_status === "work in progress"
                        ? "bg-sky-600/80 hover:bg-sky-600/80"
                        : "bg-green-600/80 hover:bg-sky-600/80"
                    }`}
                  >
                    {petitionDetail.issue_status === "under review" ? (
                      <p className="flex gap-2 items-center">
                        <MdOutlinePending />
                        {petitionDetail.issue_status}
                      </p>
                    ) : petitionDetail.issue_status === "work in progress" ? (
                      <p className="flex gap-2 items-center">
                        <MdConstruction />
                        {petitionDetail.issue_status}
                      </p>
                    ) : (
                      <p className="flex gap-2 items-center">
                        <MdOutlineDownloadDone />
                        {petitionDetail.issue_status}
                      </p>
                    )}
                  </Button>
                </div>
                <div className="p-2 w-full bg-blue-100/100">
                  <p className="flex gap-2 items-center">
                    <CiLocationOn /> {petitionDetail.address}
                  </p>
                </div>
                <div className="p-2 w-full bg-blue-100/100">
                  <p>Description : {petitionDetail.description}</p>
                </div>
                <div className="p-2 w-full bg-green-100/100">
                  <h3>Complainee Details</h3>
                  <div>
                    <p>Name: {petitionDetail.name}</p>
                    <p>Contact: {petitionDetail.phone_no}</p>
                  </div>
                </div>
              </div>
              <div className="basis-1/2 flex gap-2 flex-col">
                <div className="bg-[#ccfbf1]">
                  <Carousel
                    className="w-full max-w-md mx-auto  p-4"
                    opts={{ loop: true }}
                  >
                    <CarouselContent>
                      {petitionDetail?.images_list.map((item, index) => (
                        <CarouselItem key={index}>
                          <div className="p-1">
                            <Card>
                              <CardContent className="flex aspect-square items-center justify-center p-6">
                                <img
                                  src={`https://namma-kovai.s3.ap-south-1.amazonaws.com/${item}`}
                                  alt="fgrdhbgjh"
                                  className="w-[400px] h-[400px]  object-cover"
                                />
                              </CardContent>
                            </Card>
                          </div>
                        </CarouselItem>
                      ))}
                    </CarouselContent>
                    <CarouselPrevious />
                    <CarouselNext />
                  </Carousel>
                </div>
              </div>
            </section>
            {/* <div>
          <iframe
            width="300"
            height="170"
            frameborder="0"
            scrolling="no"
            marginheight="0"
            marginwidth="0"
            src="https://maps.google.com/maps?q='+11.016844+','+76.955833+'&hl=es&z=14&amp;output=embed"
          ></iframe>
          <br />
          <small>
            <a
              href="https://maps.google.com/maps?q='+data.lat+','+data.lon+'&hl=es;z=14&amp;output=embed"
              // style="color:#0000FF;text-align:left"
              target="_blank"
            >
              See map bigger
            </a>
          </small>
        </div>  */}
          </main>
        )}
      </div>
    </div>
    </AuthProvider>

  );
};

export default page;

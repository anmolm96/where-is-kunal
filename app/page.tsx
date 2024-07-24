"use client";
import Image from "next/image";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { useState } from "react";

export default function Home() {
  const [open, setOpen] = useState(false);
  const [ins, setIns] = useState(true);
  const found = () => {
    setOpen(true);
  };
  return (
    <>
      <>
        <div className="relative w-screen h-screen overflow-hidden md:block hidden">
          <Image
            src="/bg.png"
            alt="image"
            layout="fill"
            objectFit="cover"
            useMap="#image-map-full"
          />
          <map name="image-map-full">
            <area
              shape="rectange"
              coords="0,0,800,400"
              alt="Section 1"
              href="#"
              className="cursor-default"
              onClick={(e) => found()}
            />
          </map>
        </div>
        <div className="relative w-screen h-screen overflow-hidden md:hidden block">
          <Image
            src="/bg-m.png"
            alt="image"
            layout="fill"
            objectFit="cover"
            useMap="#image-map-mobile"
          />
          <map name="image-map-mobile">
            <area
              shape="rectange"
              coords="0,0,200,200"
              alt="Section 1"
              href="#"
              className="cursor-default"
              onClick={(e) => found()}
            />
          </map>
        </div>
      </>
      <Dialog open={open} onOpenChange={(open) => setOpen(open)}>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>You Found Kunal Shah&apos;s lookalike</DialogTitle>
            <DialogDescription>
              The real Kunal is busy building, stop reading{" "}
              <a
                href="https://x.com/mister_whistler/status/1815260434330759425"
                className="underline"
              >
                fake news
              </a>{" "}
              and get back to work.
            </DialogDescription>
          </DialogHeader>
        </DialogContent>
      </Dialog>
      <Dialog open={ins} onOpenChange={(open) => setIns(open)}>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>Where is Kunal Shah?</DialogTitle>
            <DialogDescription>
              Click on him to earn 10,000 CRED coins.
            </DialogDescription>
          </DialogHeader>
        </DialogContent>
      </Dialog>
    </>
  );
}

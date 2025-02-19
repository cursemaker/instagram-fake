import Image from "next/image";
import * as React from "react";
import ThreeDot from "@/../public/instagram-imgs/Three dots.svg";
import Heart from "@/../public/instagram-imgs/Heart.svg";
import Comment from "@/../public/instagram-imgs/Comment.svg";
import Share from "@/../public/instagram-imgs/Share.svg";
import Bookmark from "@/../public/instagram-imgs/Bookmark.svg";
import { ICards } from "@/interfaces/interface";

export function CardComponent(props: ICards) {
  return (
    <div className="pt-8">
      <div className="flex justify-between px-2">
        <div className="flex items-center text-left gap-[7px] ">
          <img
            src={props.avatar_url}
            alt="avatar"
            className="w-8 h-8 rounded-full m-[3px]"
          />
          <div className="py-[6px]">
            <h4 className="font-bold">{props.name}</h4>
            <div className="text-xs">{props.location}</div>
          </div>
        </div>
        {/* section image post */}
        <div className="flex justify-center items-center">
          <Image src={ThreeDot} alt="option" />
        </div>
      </div>
      <img src={props.image_url} alt="post-image" className="w-full h-80" />
      {/* section info post */}
      <div className="p-2">
        {/* like section */}
        <div className="flex justify-between">
          <div className="flex gap-3">
            <Image src={Heart} alt="bookmark" className="w-5 h-5" />
            <Image src={Comment} alt="bookmark" className="w-5 h-5" />
            <Image src={Share} alt="bookmark" className="w-5 h-5" />
          </div>
          <div>
            <Image src={Bookmark} alt="bookmark" className="w-5 h-5" />
          </div>
        </div>
        {/* caption section */}
        <div className="flex pt-2">
            <span className="text-left">
            <b>{props.username}</b> {props.caption}
            </span>
        </div>
      </div>
    </div>
  );
}

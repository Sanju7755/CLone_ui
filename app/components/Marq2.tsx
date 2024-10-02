import { useState, useEffect } from "react";
import Marquee from "@/components/magicui/marquee";
import {
    GradientButton,
    GradientButtonProps,
    StoryBook,
    useControls,
    useCreateStore,
  } from '@lobehub/ui';

const reviews = [
  {
    name: "Jack",
    username: "@jack",
    body: "I've never seen anything like this before. It's amazing. I love it.",
    img: "https://avatar.vercel.sh/jack",
  },
  {
    name: "Jill",
    username: "@jill",
    body: "I don't know what to say. I'm speechless. This is amazing.",
    img: "https://avatar.vercel.sh/jill",
  },
  {
    name: "John",
    username: "@john",
    body: "I'm at a loss for words. This is amazing. I love it.",
    img: "https://avatar.vercel.sh/john",
  },
  {
    name: "Jane",
    username: "@jane",
    body: "I'm at a loss for words. This is amazing. I love it.",
    img: "https://avatar.vercel.sh/jane",
  },
  {
    name: "Jenny",
    username: "@jenny",
    body: "I'm at a loss for words. This is amazing. I love it.",
    img: "https://avatar.vercel.sh/jenny",
  },
  {
    name: "James",
    username: "@james",
    body: "I'm at a loss for words. This is amazing. I love it.",
    img: "https://avatar.vercel.sh/james",
  },
];



const chunkSize = Math.ceil(reviews.length / 3);
const firstRow = reviews.slice(0, chunkSize);
const secondRow = reviews.slice(chunkSize, 2 * chunkSize);
const thirdRow = reviews.slice(2 * chunkSize);

const ReviewCard = ({
  img,
  name,
  username,
  body,
}: {
  img: string;
  name: string;
  username: string;
  body: string;
}) => {
  return (
    <figure className="relative w-64 cursor-pointer bg-black overflow-hidden rounded-xl border p-4 border-gray-50/[.1] bg-gray-50/[.10] hover:bg-gray-50/[.15]">
      <div className="flex flex-row items-center gap-2">
        <img className="rounded-full" width="32" height="32" alt="" src={img} />
        <div className="flex flex-col">
          <figcaption className="text-sm font-medium text-white">{name}</figcaption>
          <p className="text-xs font-medium text-white/40">{username}</p>
        </div>
      </div>
      <blockquote className="mt-2 text-sm">{body}</blockquote>
    </figure>
  );
};

export default function Marq2() {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true); // Ensure the component only starts rendering client-side specific elements after mount
  }, []);

  return (
    <div className="bg-black">
      <div className="bg-black pt-4 mb-6">
        <h3 className="text-slate-500 text-center text-3xl">Millions love</h3>
        <h3 className="text-white font-normal text-center text-3xl">to evo with LobeHub 🫶</h3>
      </div>
      <div className="relative flex bg-black h-[500px] w-full flex-col items-center justify-center overflow-hidden text-white md:shadow-xl">
        {isMounted && (
          <>
            <Marquee pauseOnHover className="[--duration:20s]">
              {firstRow.map((review) => (
                <ReviewCard key={review.username} {...review} />
              ))}
            </Marquee>
            <Marquee reverse pauseOnHover className="[--duration:20s]">
              {secondRow.map((review) => (
                <ReviewCard key={review.username} {...review} />
              ))}
            </Marquee>
            <Marquee pauseOnHover className="[--duration:20s]">
              {thirdRow.map((review) => (
                <ReviewCard key={review.username} {...review} />
              ))}
            </Marquee>
          </>
        )}
        <div className="pointer-events-none absolute inset-y-0 left-0 w-1/3 bg-gradient-to-r from-black"></div>
        <div className="pointer-events-none absolute inset-y-0 right-0 w-1/3 bg-gradient-to-l from-black"></div>
      </div>
    </div>
  );
}

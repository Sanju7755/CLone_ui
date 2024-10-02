import { useState, useEffect } from "react";
import Marquee from "@/components/magicui/morquee"

const reviews = [
    {
        name: "GeorGie",
        username: "@hellacoster",
        body: "这个功能很好，但可能需要针对大数据集进行优化。",
        img: "https://plus.unsplash.com/premium_photo-1689551670902-19b441a6afde?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8cmFuZG9tJTIwcGVvcGxlfGVufDB8fDB8fHww",
    },
    {
        name: "Jill",
        username: "@jill",
        body: "我们可以重构这部分代码以提高可读性吗",
        img: "data:image/jpeg;base64,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",
    },
    {
        name: "Marylin",
        username: "@Cat",
        body: "参与这个项目是一次非常有价值的学习经历。它展示了现代设计原则和非常突出的功能性",
        img: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjB8fHJhbmRvbSUyMHBlcnNvbnxlbnwwfHwwfHx8MA%3D%3D",
    },
    {
        name: "Jane",
        username: "@jane",
        body: "性能优化非常明显。页面加载迅速，响应式设计在不同屏幕尺寸下表现良好",
        img: "https://media.istockphoto.com/id/508956644/photo/pretty-colombian-woman.jpg?s=612x612&w=0&k=20&c=jEwTCMKSpjYsaSfiFIlifYneUpczureQFl8o543_ZjE=",
    },
    {
        name: "Aurthor",
        username: "@Youtube",
        body: "The interface is user-friendly and offers a variety of features. It’s clear a lot of effort has been put into this.",
        img: "https://t4.ftcdn.net/jpg/06/78/09/75/360_F_678097580_mgsNEISedI7fngOwIipYtEU0T6SN8qKv.jpg",
    },
    {
        name: "Jessica",
        username: "@Jjames",
        body: "Working on this has been a valuable learning experience. It showcases modern design principles and functionality that really stand out",
        img: "https://media.istockphoto.com/id/2058319417/photo/face-business-and-woman-with-arms-crossed-smile-and-career-with-teamwork-meeting-or-planning.jpg?s=612x612&w=0&k=20&c=IwafinWO1ryhwrdA3fB4wU0AtwjT7CGOliNrQijNh3A=",
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

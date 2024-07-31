"use client";

import Image from "next/image";
import { useState } from "react";

const data = [
    {
        title: 'Savor the Flavors of Spain',
        description: 'Traditional Spanish Dishes. Delivered to your Doorstep.',
        CTA: 'Order Now',
        imageId: 1,
        bannerId: 1
    },
    {
        title: 'Savor the Flavors of Spain',
        description: 'Traditional Spanish Dishes. Delivered to your Doorstep.',
        CTA: 'Order Now',
        imageId: 2,
        bannerId: 2
    },
    {
        title: 'Savor the Flavors of Spain',
        description: 'Traditional Spanish Dishes. Delivered to your Doorstep.',
        CTA: 'Order Now',
        imageId: 3,
        bannerId: 3
    },
    {
        title: 'Savor the Flavors of Spain',
        description: 'Traditional Spanish Dishes. Delivered to your Doorstep.',
        CTA: 'Order Now',
        imageId: 4,
        bannerId: 4
    },
];

function EditBannerTemplateBs(params: any) {
    const [d, setD] = useState(data[params.id]);

    function handleImageChange(Id: number) {
        setD((prev) => ({ ...prev, imageId: Id }));
    }

    function handleSave() {
        data[params.id] = d;
        params.setModal(null);
    }
    function handleReset() {
        setD(data[params.id]);
    }
    return (
        <div className="w-[100vw] h-[100vh] fixed z-50 top-0 left-0 bg-opacity-50 bg-[#f1f1f1] flex items-end justify-center">
            <div className="bg-white p-6 animate-animate-appear rounded-lg w-[40vw] h-[90vh] shadow-lg overflow-scroll flex items-center justify-start flex-col gap-4 relative">
                <button onClick={() => params.setModal(null)} className="text-black absolute top-3 right-3">
                    <Image src={'/icons/x.png'} width={30} height={30} alt="x" />
                </button>
                <h1 className="text-gray-500 font-bold text-xl w-full">Edit Banner</h1>
                <BannerImageComp id={params.id} d={d} modal={params.id} setModal={params.setModal} />
                <div className="text-gray-500 font-bold w-full">Images</div>
                <div className="w-auto h-[100px] flex items-center justify-start gap-6">
                    {[1, 2, 3, 4].map((id, index) => (
                        <Image key={index} src={`/banners/banner${id}.jpg`} width={100} height={100} alt="image" className="rounded-full object-cover w-[100px] h-[100px]" onClick={() => handleImageChange(id)} />
                    ))}
                </div>

                <div className="w-full flex flex-col items-start justify-start gap-3 text-gray-500">
                    <label htmlFor="title" className="font-bold">Title</label>
                    <input type="text" id="title" className="border-2 w-full border-gray-300 p-3 rounded-sm" value={d.title} onChange={(e) => setD((prev) => ({ ...prev, title: e.target.value }))} />
                </div>

                <div className="w-full flex flex-col items-start justify-start gap-3 text-gray-500">
                    <label htmlFor="description" className="font-bold">Description</label>
                    <input type="text" id="description" className="border-2 w-full border-gray-300 p-3 rounded-sm" value={d.description} onChange={(e) => setD((prev) => ({ ...prev, description: e.target.value }))} />
                </div>

                <div className="w-full flex flex-col items-start justify-start gap-3 text-gray-500">
                    <label htmlFor="cta" className="font-bold">CTA</label>
                    <input type="text" id="cta" className="border-2 w-full border-gray-300 p-3 rounded-sm" value={d.CTA} onChange={(e) => setD((prev) => ({ ...prev, CTA: e.target.value }))} />
                </div>

                <button className="bg-blue-500 border-none p-3 rounded-md text-sm font-bold hover:bg-blue-800 transition-colors" onClick={handleSave}>Save</button>
                <button className="bg-red-500 border-none p-3 rounded-md text-sm font-bold hover:bg-red-800 transition-colors" onClick={handleReset}>Reset</button>
            </div>
        </div>
    );
}

function BannerImageComp(params: any) {
    const d = params.d;
    return (
        <div className="hover:brightness-75 transition-all duration-300 cursor-pointer border-2">
            <div className="relative w-[400px] h-[400px]">
                <Image src={`/banners/banner${d.imageId}.jpg`} alt="banner" width={400} height={400} className="absolute bottom-0 left-0 z-0 overflow-hidden" />
                <Image src={`/templates/square_transparent${d.bannerId}.png`} alt="banner" width={400} height={400} className="absolute top-0 left-0 z-20 overflow-hidden" />
                <button className={`absolute top-3 right-3 z-40 ${params.modal !== null ? 'hidden' : 'block'}`} onClick={() => params.setModal(params.id)}>
                    <Image src={'/icons/pen.svg'} alt="pen" width={30} height={30} />
                </button>
                <div className="absolute z-30 top-6 left-4 text-2xl font-bold text-gray-700">{d.title}</div>
                <div className="absolute z-30 top-16 left-4 text-sm font-bold text-gray-400">{d.description}</div>
                <div className="absolute z-30 bottom-16 left-4 shadow-md font-bold text-black bg-blue-500 p-3 rounded-sm">{d.CTA}</div>
                
            </div>
        </div>
    );
}

export default function Home() {
    const [modal, setModal] = useState<number | null>(null);

    return (
        <div className="w-[100vw] h-fit py-10 bg-white">
            <div className="h-fit w-fit mx-auto grid grid-cols-2 gap-5">
                {data.map((d, index) => (
                    <div key={index}>
                        <BannerImageComp id={index} d={d} setModal={setModal} modal={modal} />
                    </div>
                ))}
                {modal !== null && <EditBannerTemplateBs id={modal} setModal={setModal} />}
            </div>
        </div>
    );
}

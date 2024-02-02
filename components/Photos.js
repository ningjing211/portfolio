import React from 'react'
import { Gallery } from 'next-gallery'


const images = [
    { src: "/Ai-Visuals/1.jpeg", aspect_ratio: 1/1 },
    { src: "/Ai-Visuals/2.jpeg", aspect_ratio: 1/1 },
    { src: "/Ai-Visuals/3.jpeg", aspect_ratio: 1/1 },
    { src: "/Ai-Visuals/4.jpeg", aspect_ratio: 1/1 },
    { src: "/Ai-Visuals/5.jpeg", aspect_ratio: 1/1 },
    { src: "/Ai-Visuals/6.jpeg", aspect_ratio: 1/1 },
    { src: "/Ai-Visuals/7.jpeg", aspect_ratio: 1/1 },
    { src: "/Ai-Visuals/8.jpeg", aspect_ratio: 1/1 },
    { src: "/Ai-Visuals/9.jpeg", aspect_ratio: 1/1 },
    { src: "/Ai-Visuals/10.jpeg", aspect_ratio: 1/1 },
    { src: "/Ai-Visuals/11.jpeg", aspect_ratio: 1/1 },
    { src: "/Ai-Visuals/12.jpeg", aspect_ratio: 1/1 },

]

const widths = [500, 1000, 1600]
const ratios = [2.2, 4, 6, 8]

export default function BasicPage() {
    return (
        <div className="flex flex-col gap-10">
            <Gallery {...{images, widths, ratios}} />
        </div>
    )
}

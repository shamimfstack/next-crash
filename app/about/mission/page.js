import cakeImg from "@/public/images/birthday_cake.jpg"
import Image from "next/image"
import Button from '@/app/components/Button';
import React from 'react';

const MissionPage = () => {
    return (
        <main className='mt-10'>
            <div>
                Mission page
            </div>

            {/* set image on next.js way (optimized way) */}
            <div className="w-[300px]">
            <Image quality={80} placeholder="blur" src={cakeImg} alt="birthday cake image" />

            </div>

            <Button />
        </main>
    );
};

export default MissionPage;
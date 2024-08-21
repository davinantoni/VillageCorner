
import Campaign from '@/components/wisata-berkelanjutan/Campaign';
import Hero from '@/components/wisata-berkelanjutan/Hero';
import Overview from '@/components/wisata-berkelanjutan/Overview';
import Steps from '@/components/wisata-berkelanjutan/Steps';
import Article from '@/components/wisata-berkelanjutan/Article';
import Image from 'next/image';
import React, { useState } from 'react'
import Quotes from '@/components/elements/Quotes';

const WisataBerkelanjutanViews = () => {


    return (
        <main className="bg-[#F7F1E5]">
            <Hero />
            <Overview />
            <Steps />
            <Campaign />
            <Article/>
            <Quotes/>
        </main>
    )
};

export default WisataBerkelanjutanViews;
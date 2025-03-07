import Image from "next/image";
import Header from "./common/Header";

const Hero = () => {
    return (
        <div className="relative mx-auto overflow-hidden">
            <Header />
            <div className="d-flex align-items-center position-relative hero-nekozuma justify-content-center">
                <div className="container position-relative z-1">
                    <h1 className="hero-heading font-franklin m-0">NEKOZUMA</h1>
                    <p className="m-0 text-white hero-description">
                        The collection of 5555 NFTs on the Solana blockchain. The collection
                        serves to be a rising force against the anime meta of collections
                        with undoxxed teams and is therefore backed by the team at Nubbies
                        NFT & Karmic Labs.
                    </p>
                    <button className="text-white fw-normal hero-button">
                        Connect Wallet
                    </button>
                </div>
                <Image className="pe-none position-relative z-1" src="/assets/images/webp/hero-cat.webp" alt="hero cat" width={557} height={557} />
                <Image className="pe-none position-absolute bottom-0 start-0 left-vector" src="/assets/images/webp/hero-left-vector.webp" alt="left vector" width={212} height={411} />
                <Image className="pe-none position-absolute end-0 bottom-0 z-1 right-vector" src="/assets/images/webp/hero-right-vector.webp" alt="right vector" width={564} height={543} />
                <Image className="pe-none position-absolute end-0 bottom-0 blue-box" src="/assets/images/webp/blue-box.webp" alt="blue box" width={640} height={273} />
            </div>
        </div>
    );
};

export default Hero;

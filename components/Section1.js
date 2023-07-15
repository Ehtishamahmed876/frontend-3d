const TextImageSection = ({ title, text, imageUrl }) => {
    return (
        <section className="flex bg-white mt-2 text-black gap-2 flex-col lg:flex-row items-center lg:items-start max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">



            {/* Text */}
            <div className="lg:w-1/2 lg:pl-8 p-2">
                <h2 className="text-5xl font-serif font-bold mb-4">{title}</h2>
                <p className="text-3xl font-serif">{text}</p>
            </div>



            {/* Image */}
            <div className="lg:w-1/2 mb-8 lg:mb-0">
                <img src={imageUrl} alt="Image" className="w-full h-auto" />
            </div>


        </section>
    );
};

export default TextImageSection;

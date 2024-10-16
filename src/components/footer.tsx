const Footer = () => {
  return (
    <footer className="mt-[135px] w-full">
      <div className="w-full max-w-[1200px] px-12 xl:px-0 mx-auto pb-[135px] grid grid-cols-1 lg:grid-cols-5 md:grid-cols-2 gap-6">
        {/* start */}
        <div className="col-span-1 md:col-span-2">
          <a href="/" className="">
            <img src="/logo.png" alt="Logo" className="h-auto w-auto" />
          </a>
        </div>
        <div className="col-span-1 flex flex-col gap-4">
          <h5 className="text-primary-200 font-dm text-[22px] lg:text-[25px] leading-loose">
            Pages
          </h5>
          <div className="flex flex-col gap-6">
            <a
              href="/about"
              className="tracking-tight text-base lg:text-[22px] lg:leading-[33px] font-jost text-text-gray"
            >
              Home
            </a>
            <a
              href="/services"
              className="tracking-tight text-base lg:text-[22px] lg:leading-[33px] font-jost text-text-gray"
            >
              Online Meetings
            </a>
            <a
              href="/contact"
              className="tracking-tight text-base lg:text-[22px] lg:leading-[33px] font-jost text-text-gray"
            >
              Gallery
            </a>
          </div>
        </div>
        <div className="col-span-1 flex flex-col gap-4">
          <h5 className="text-primary-200 font-dm text-[22px] lg:text-[25px] leading-loose">
            Pages
          </h5>
          <div className="flex flex-col gap-6">
            <p className="tracking-tight text-base lg:text-[22px] lg:leading-[33px] font-jost text-text-gray">
              Blog
            </p>
            <p className="tracking-tight text-base lg:text-[22px] lg:leading-[33px] font-jost text-text-gray">
              Dear Departed
            </p>
            <p className="tracking-tight text-base lg:text-[22px] lg:leading-[33px] font-jost text-text-gray">
              Jokes
            </p>
            <p className="tracking-tight text-base lg:text-[22px] lg:leading-[33px] font-jost text-text-gray">
              Quiz
            </p>
          </div>
        </div>
        <div className="col-span-1 flex flex-col gap-4">
          <h5 className="text-primary-200 font-dm text-[22px] lg:text-[25px] leading-loose">
            Contact
          </h5>
          <div className="flex flex-col gap-6">
            <p className="tracking-tight text-base lg:text-[22px] lg:leading-[33px] font-jost text-text-gray">
              Address
            </p>
            <p className="tracking-tight text-base lg:text-[22px] lg:leading-[33px] font-jost text-text-gray">
              contact@
            </p>
            <p className="tracking-tight text-base lg:text-[22px] lg:leading-[33px] font-jost text-text-gray">
              (123) 456 - 7890
            </p>
          </div>
        </div>

        {/* End */}
      </div>
    </footer>
  );
};

export default Footer;

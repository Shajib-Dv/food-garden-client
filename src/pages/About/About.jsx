/** @format */

import SectionTitle from "../../components/SectionTitle";

const About = () => {
  return (
    <>
      <SectionTitle subHeading="Take a look" heading="Featured Video for you" />
      <div className="flex items-center justify-center my-20">
        <iframe
          width="960"
          height="540"
          src="https://www.youtube.com/embed/ctmlsgiDMxs"
          title="Boost Your Restaurant with Fleksa: The Ultimate All-in-One Solution!"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowFullScreen
        ></iframe>
      </div>
    </>
  );
};

export default About;

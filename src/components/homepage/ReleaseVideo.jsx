import React, { useState } from "react";
import VideoPlaceholder from "../../assets/img/audacity-placeholder.webp";

function ReleaseVideo() {
  const [isClicked, setIsClicked] = useState(false);

  function handleVideoClick() {
    setIsClicked(true);
    console.log("video clicked");
  }

  return (
    <section className="bg-gray-900">
      <div className="grid grid-cols-12 max-w-screen-xl mx-6 sm:mx-16 xl:mx-auto py-8 sm:py-12 md:py-12 gap-6 md:gap-12">
        <div className="flex justify-center flex-col col-span-12 md:col-span-6 gap-4">
          <h2 className="text-white">
            Produce music. Produce podcasts. Take total control of your sound.
          </h2>
          <a
            href="https://support.audacityteam.org/additional-resources/changelog"
            target="_blank"
          >
            <p className="dark-hyperlink">More about our new release</p>
          </a>
        </div>
        <div className="flex row-start-1 col-span-12 md:col-span-6 md:col-start-7">
          {isClicked ? (
            <iframe
              className="w-full aspect-video rounded-md shadow-xl"
              loading="lazy"
              src="https://www.youtube-nocookie.com/embed/DTRnDNR9LR8"
              title="Audacity 3.2 - Real-Time Effects and Free Cloud Sharing"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowfullscreen
            ></iframe>
          ) : (
            <img
              tabIndex="0"
              src={VideoPlaceholder.src}
              alt="YouTube thumbnail"
              className="w-full aspect-video rounded-md shadow-xl"
              onClick={() => handleVideoClick()}
              onKeyDown={e => e.key === 'Enter' && handleVideoClick()}
            />
          )}
        </div>
      </div>
    </section>
  );
}

export default ReleaseVideo;

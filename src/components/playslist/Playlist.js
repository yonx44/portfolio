import React from 'react';
import Title from '../layouts/Title';

const Playlist = () => {
  const playlistId = '5Cjn20ihXSv5sl3gbcFhmE';

  return (
    <div>
      <section id="playlist" className="w-full py-5 border-b-[0px]"></section>
      <div className="flex justify-center items-center text-center">
        <Title title="Get to know me" des="My Spotify Playlist" />
      </div>
      <iframe
  title="Spotify Embed: Night Drive"
  src={`https://open.spotify.com/embed/playlist/5Cjn20ihXSv5sl3gbcFhmE?utm_source=generator&theme=0`}
  width="100%"
  height="100%"
  style={{ minHeight: '420px' }}
  frameBorder="0"
  allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
  loading="lazy"
/>
      <section className="w-full py-10 border-b-[1px] border-b-black"></section>
    </div>
  );
};

export default Playlist;
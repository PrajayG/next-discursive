export default function Ticker({ children }) {

  return (
    <div className="ticker">
      <marquee id="newsTicker" behavior="scrolling" direction="left" hspace="20"><span class="ticker__title">Sit down, stay awhile </span></marquee>
    </div>
  );
}


import { forwardRef, useRef, useImperativeHandle } from 'react';
import gsap from 'gsap';
import { TimelineHandle } from '../utility/TimelineHandle';

export const Title = forwardRef<TimelineHandle>((_, ref) => {
  const titleRef = useRef<HTMLDivElement>(null);

  useImperativeHandle(ref, () => ({
    createStartTimeline: () => {
      const tl = gsap.timeline();

      if (titleRef.current) {
        tl.fromTo(titleRef.current, 
          { opacity: 0 }, 
          { opacity: 1, duration: 1, ease: 'power1.out' }
        );
      }
      return tl;
    },
    createEndTimeline: () => {
      const tl = gsap.timeline();

      if (titleRef.current) {
        tl.fromTo(titleRef.current, 
          { opacity: 1 }, 
          { opacity: 0, duration: 1, ease: 'power1.out' });
      }
      return tl;
    },

    domElement: titleRef.current,
  }));

    return (
    <div className="landing-title" ref={titleRef}>
      <a className="topic-tag" href="https://www.twreporter.org/topics/loan-crisis" target="_blank">
        揭開「融資租賃」的高利結構
      </a>
      <h1>債務為什麼愈滾愈多</h1>
      <div className="subtitle">
        <hr />
        <h2>兩位借款人的債務迷宮</h2>
      </div>
    </div>
  );
});

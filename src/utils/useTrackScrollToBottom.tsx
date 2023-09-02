
import { useEffect } from 'react';
import mixpanel from 'mixpanel-browser';

const useTrackScrollToBottom = () => {
  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = (document.documentElement && document.documentElement.scrollTop) || document.body.scrollTop;
      const scrollHeight = (document.documentElement && document.documentElement.scrollHeight) || document.body.scrollHeight;
      
      if (scrollTop + window.innerHeight >= scrollHeight) {
        // User has scrolled to the bottom
        mixpanel.track("Scrolled to Bottom");
      }
    };

    window.addEventListener('scroll', handleScroll);
    
    // Cleanup event listener on component unmount
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);
}

export default useTrackScrollToBottom;

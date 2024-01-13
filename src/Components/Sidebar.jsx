import React, { useEffect, useRef } from 'react';
import { links } from '../data';
import { useGlobalContext } from '../context';

const Sidebar = () => {
  const { isSidebarOpen } = useGlobalContext();
  const linksContainerRef = useRef(null);

  useEffect(() => {
    const linksContainer = linksContainerRef.current;

    const handleTransitionEnd = () => {
      if (isSidebarOpen) {
        linksContainer.classList.add('links-visible');
      } else {
        linksContainer.classList.remove('links-visible');
      }

      // Remove the event listener to avoid multiple executions
      linksContainer.removeEventListener('transitionend', handleTransitionEnd);
    };

    if (linksContainer) {
      // Add event listener for the 'transitionend' event
      linksContainer.addEventListener('transitionend', handleTransitionEnd);

      // Toggle the 'show-sidebar' class to trigger the transition
      linksContainer.classList.toggle('show-sidebar', isSidebarOpen);
    }

    // Cleanup: Remove the event listener on component unmount
    return () => {
      if (linksContainer) {
        linksContainer.removeEventListener('transitionend', handleTransitionEnd);
      }
    };
  }, [isSidebarOpen]);

  return (
    <aside className={`sidebar ${isSidebarOpen ? 'show-sidebar' : ''}`} ref={linksContainerRef}>
      <ul className='links'>
        {links.map((link) => {
          const { id, url, text } = link;
          return (
            <li key={id}>
              <a href={url}>{text}</a>
            </li>
          );
        })}
      </ul>
    </aside>
  );
};

export default Sidebar;

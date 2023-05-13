import React from 'react';
/**
 * useKeyPress
 * @param {string} key - the name of the key to respond to, compared against event.key
 * @param {function} action - the action to perform on key press
 */

export default function useKeypress(key: string, action: (...arg: any[]) => void) {
  React.useEffect(() => {
    function onKeyup(e: any) {
      if (e.key === key) action();
    }

    window.addEventListener('keyup', onKeyup);
    return () => window.removeEventListener('keyup', onKeyup);
  }, [key, action]);
}
/**
 ** How to use:
 *
 * 
 * useKeypress('Escape', () => {
    alert('you pressed escape!')
  });
 *
 */

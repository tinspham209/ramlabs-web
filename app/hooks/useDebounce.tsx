import React from 'react';

const useDebounce = (value: any, delay: number) => {
  const [debouncedValue, setDebouncedValue] = React.useState(value);
  React.useEffect(() => {
    const timeoutId = setTimeout(() => {
      setDebouncedValue(value);
    }, delay);
    return () => {
      clearTimeout(timeoutId);
    };
  }, [delay, value]);

  return debouncedValue;
};

export default useDebounce;

/**
 ** How to use:
 * 
 * const [search, setSearch] = React.useState('');
 * const debouncedSearch = useDebounced(search, 300);
 * return (
    <>
      <input
        type="text"
        value={search}
        onChange={(e) => setSEarch(e.target.value)}
      />
      <p>{debouncedSearch}</p>
    </>
  )
 *
 */

'use client';

import Image from 'next/image';
import React from 'react';

interface Props {
  src?: string | null | undefined;
}

const Avatar: React.FC<Props> = ({ src }) => {
  return (
    <Image
      className="rounded-full"
      height={'30'}
      width={'30'}
      alt="Avatar"
      src={src || '/images/default_avatar.jpg'}
    />
  );
};

export default Avatar;

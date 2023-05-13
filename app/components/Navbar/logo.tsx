'use client';
import Image from 'next/image';
import { useRouter } from 'next/navigation';

import React from 'react';

const Logo = () => {
  const router = useRouter();
  return (
    <Image
      alt="Logo"
      className="hidden md:block cursor-pointer mr-6"
      src="/images/logo.webp"
      width={100}
      height={30}
      priority={true}
      placeholder="empty"
      onClick={() => {
        router.push('/');
      }}
    />
  );
};

export default Logo;

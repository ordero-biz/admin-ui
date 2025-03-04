'use client';

import { usePathname } from 'next/navigation';
import Link from 'next/link';
import { PropsWithChildren } from 'react';

type TestProps = PropsWithChildren<{
  href: string;
}>;

export default function Test({ href, children }: TestProps) {
  console.log(usePathname());
  return <Link href={href}>{children}</Link>;
}
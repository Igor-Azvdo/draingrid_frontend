import type { Metadata } from "next";

const SITE_URL = "https://dentistacanabica.com.br";

export const metadata: Metadata = {
  alternates: { canonical: `${SITE_URL}/old` },
  robots: { index: false, follow: true },
};

export default function OldLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}

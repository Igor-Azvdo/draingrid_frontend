import type { Metadata } from "next";

const SITE_URL = "https://dentistacanabica.com.br";
const URL = `${SITE_URL}/newhomepage`;

export const metadata: Metadata = {
  alternates: { canonical: URL },
};

export default function NewHomepageLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}

import type {Metadata} from "next";

export const metadata: Metadata = {
  title: "About IGDev",
  description: "A page that contains detailed information about Dorultan Ianos",
};


export default function RootLayout({
                                     children,
                                   }: Readonly<{
  children: React.ReactNode;
}>) {

  return (
          <>
            {children}
          </>
  );
}

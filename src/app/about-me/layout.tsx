import type {Metadata} from "next";

export const metadata: Metadata = {
  title: "Dorultan Ianos | About",
  description: "Generated by create next app",
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

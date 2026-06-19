import {Heart} from 'lucide-react';
import Container from '@/components/container';
import LinkButton from '@/components/link-button';
import contact from '@/content/contact';
import PDFDownloadLinkC from '@/components/pdf-download-button';

export default function Footer() {
  return (
      <Container className="mt-0">
        <div className="flex gap-4 w-full justify-center py-10 md:py-15">
          <LinkButton icon="github" size="xs" href={contact.github} aspect="square" external
                      label="Github"
                      variant="ghost"
                      className="w-fit"/>
          <LinkButton icon="telegram" size="xs" href={`tg://${contact.telegram}`} aspect="square" external
                      variant="ghost"
                      label="Telegram"
                      className="w-fit"/>
          <LinkButton icon="linkedin" size="xs" href={contact.linkedin} aspect="square" external
                      variant="ghost"
                      label="LinkedIn"
                      className="w-fit"/>
          <LinkButton icon="email" size="xs" href={`mailto:${contact.email}`} aspect="square" external
                      variant="ghost"
                      label="Email"
                      className="w-fit"/>
          <LinkButton icon="call" size="xs" href={`tel:${contact.phone}`} aspect="square" external
                      variant="ghost"
                      label="Phone"
                      className="w-fit"/>
        </div>
        <div className="flex justify-center items-center w-full mb-12">
          <PDFDownloadLinkC/>
        </div>

        <span className="flex w-full justify-center gap-2 text-sm items-center pb-10 md:pb-16">Built with <Heart
            className="text-indigo-500"/></span>
      </Container>
  );
}
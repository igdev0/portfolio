import {renderToFile} from '@react-pdf/renderer';
import path from 'path';
import Resume from '@/components/resume';
import contact from '@/content/contact';
import * as fs from 'node:fs';


for (const location of contact.locations) {
  const city = location.split(',').at(-2)?.trim().toLowerCase() ?? "resume";
  if(!fs.existsSync(path.resolve("public", "resume", city))) {
    fs.mkdirSync(path.resolve("public", "resume", city));
  }
  await renderToFile(<Resume
      location={location}/>, path.resolve("public", "resume", city, "igdev-resume.pdf"));
}
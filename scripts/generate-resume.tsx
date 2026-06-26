import {renderToFile} from '@react-pdf/renderer';
import path from 'path';
import Resume from '@/components/resume';


await renderToFile(<Resume/>, path.resolve("public", "igdev-resume.pdf"));
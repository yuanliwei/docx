// Add text to header and footer
// Import from 'docx' rather than '../build' if you install from npm
import * as fs from "fs";
import { Document, Footer, Header, Packer, Paragraph } from "../build";

const doc = new Document();

doc.addSection({
    headers: {
        default: new Header({
            children: [new Paragraph("Header text")],
        }),
    },
    footers: {
        default: new Footer({
            children: [new Paragraph("Footer text")],
        }),
    },
    children: [new Paragraph("Hello World")],
});

const packer = new Packer();

packer.toBuffer(doc).then((buffer) => {
    fs.writeFileSync("My Document.docx", buffer);
});

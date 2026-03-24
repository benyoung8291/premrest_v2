'use client';

import { useEffect, useRef } from 'react';
import Script from 'next/script';
import RedesignLayout from '@/app/redesign-layout';
import PageHero from '@/app/components/sections/PageHero';
import { ContentSection } from '@/app/components/sections/ContentSection';
import { colors, typography, spacing, borderRadius } from '@/app/lib/tokens';

export default function OandMCreatorContent() {
  const toolRef = useRef<HTMLDivElement>(null);
  const initialized = useRef(false);

  useEffect(() => {
    if (initialized.current) return;

    const checkAndInit = () => {
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      const win = window as any;
      if (!win.Sortable || !win.PDFLib) {
        setTimeout(checkAndInit, 200);
        return;
      }
      initialized.current = true;
      initOandMTool(win);
    };

    checkAndInit();
  }, []);

  return (
    <RedesignLayout>
      <PageHero
        title="O&M Creator"
        subtitle="Create Operations & Maintenance documents for floor care projects. Compile PDFs with cover pages, group headers, and a linked table of contents."
        backgroundColor={colors.charcoal.dark}
        compact
      />

      <Script src="https://cdnjs.cloudflare.com/ajax/libs/Sortable/1.15.0/Sortable.min.js" strategy="afterInteractive" />
      <Script src="https://unpkg.com/pdf-lib/dist/pdf-lib.min.js" strategy="afterInteractive" />

      <ContentSection>
        <div ref={toolRef}>
          <style dangerouslySetInnerHTML={{ __html: `
            .oam-form label {
              display: block;
              font-weight: bold;
              margin-top: 1rem;
              font-family: ${typography.fontFamily.body};
              color: ${colors.charcoal.DEFAULT};
            }
            .oam-form input, .oam-form button, .oam-form select {
              font-size: 1rem;
              margin: 0.5rem 0;
              padding: 0.5rem;
              font-family: ${typography.fontFamily.body};
            }
            .oam-form .form-section {
              background: ${colors.offWhite};
              border: 1px solid #ddd;
              padding: 1.5rem;
              border-radius: ${borderRadius.lg};
              margin-bottom: 1.5rem;
            }
            .oam-form h4 {
              font-family: ${typography.fontFamily.headline};
              font-weight: ${String(typography.fontWeight.bold)};
              color: ${colors.charcoal.DEFAULT};
              margin: 0 0 0.5rem;
            }
            .oam-form #fileList {
              list-style: none;
              padding: 0;
              margin: 0;
              max-width: 550px;
            }
            .oam-form #fileList li {
              border: 1px solid #ccc;
              margin-bottom: 0.5rem;
              padding: 0.5rem;
              display: flex;
              align-items: center;
              gap: 0.5rem;
              background: #f9f9f9;
              border-radius: ${borderRadius.md};
            }
            .oam-form #fileList li button.remove-item {
              background: transparent;
              border: none;
              color: #900;
              font-size: 1.2rem;
              cursor: pointer;
              padding: 0 0.3rem;
            }
            .oam-form #fileList li.group {
              background: ${colors.charcoal.dark};
              color: #fff;
              font-style: italic;
              padding: 0.3rem 0.5rem;
            }
            .oam-form #fileList li.group input {
              background: ${colors.charcoal.dark};
              color: #fff;
              border: none;
              flex: 1;
            }
            .oam-form input[type="color"] {
              width: 40px;
              height: 30px;
              padding: 0;
              border: none;
              margin: 0;
            }
            .oam-form .preset-groups { margin-bottom: 1rem; }
            .oam-form .preset-groups button {
              margin-right: 0.5rem;
              margin-bottom: 0.5rem;
              cursor: pointer;
              background: ${colors.offWhite};
              border: 1px solid #ddd;
              border-radius: ${borderRadius.md};
              padding: 0.4rem 0.8rem;
              font-size: 0.875rem;
            }
            .oam-form .action-buttons {
              margin-top: 1rem;
              display: flex;
              gap: 0.5rem;
              flex-wrap: wrap;
            }
            .oam-form .action-buttons button {
              background: ${colors.orange.DEFAULT};
              color: #fff;
              border: none;
              border-radius: ${borderRadius.md};
              padding: 0.6rem 1.2rem;
              cursor: pointer;
              font-weight: bold;
            }
          `}} />

          <form id="pdfForm" className="oam-form">
            <div className="form-section">
              <h4>Cover Page Options</h4>
              <label htmlFor="customCover">Upload Custom Cover Page (optional):</label>
              <input type="file" id="customCover" accept="application/pdf" />
              <p style={{ fontFamily: typography.fontFamily.body, fontSize: typography.fontSize['body-sm'], color: colors.charcoal.light, marginTop: spacing[1] }}>
                If no custom cover is uploaded, the default cover image will be used.
              </p>
              <label style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', fontWeight: 'normal' }}>
                <input type="checkbox" id="includeSecondCover" defaultChecked />
                Include Second Cover Page (Maintain Your Carpet Investment)
              </label>
              <label htmlFor="projectName">Project Name</label>
              <input type="text" id="projectName" name="projectName" placeholder="Enter project name" style={{ width: '100%', maxWidth: '400px', display: 'block' }} />
              <label htmlFor="completionDate">Date of Completion</label>
              <input type="date" id="completionDate" name="completionDate" />
              <label htmlFor="projectManager">Project Manager</label>
              <input type="text" id="projectManager" name="projectManager" placeholder="Enter project manager" style={{ width: '100%', maxWidth: '400px', display: 'block' }} />
            </div>

            <div className="form-section">
              <h4>Select PDFs &amp; Organize</h4>
              <input type="file" id="newFiles" accept="application/pdf" multiple />
              <div className="preset-groups">
                {['Warranties', 'Maintenance', 'SDS', 'Product Certificates', 'Installation Warranty', 'Cleaning Contact'].map(title => (
                  <button key={title} type="button" className="preset-group-btn" data-title={title}>{title}</button>
                ))}
              </div>
              <button type="button" id="addGroupButton" style={{ background: colors.charcoal.DEFAULT, color: '#fff', border: 'none', borderRadius: borderRadius.md, padding: '0.4rem 0.8rem', cursor: 'pointer', marginBottom: '1rem' }}>
                Add Custom Group Header
              </button>
              <h3 style={{ fontFamily: typography.fontFamily.headline, fontWeight: typography.fontWeight.bold, color: colors.charcoal.DEFAULT }}>Ordered Items (Drag to reorder)</h3>
              <ul id="fileList"></ul>
            </div>

            <div className="action-buttons">
              <button type="button" id="compileButton">Compile PDFs</button>
              <button type="button" id="saveSettingsButton">Save Settings</button>
              <button type="button" id="loadSettingsButton">Load Settings</button>
              <input type="file" id="loadSettingsInput" accept="application/json" style={{ display: 'none' }} />
            </div>
          </form>
        </div>
      </ContentSection>
    </RedesignLayout>
  );
}

/* eslint-disable @typescript-eslint/no-explicit-any */
function initOandMTool(win: any) {
  const A4_WIDTH = 595;
  const A4_HEIGHT = 842;
  const defaultColors = ["#FF6F61", "#FF8C42", "#FFD700", "#32CD32", "#1E90FF", "#9932CC", "#00FA9A"];
  function getDefaultColor(index: number) {
    return index < defaultColors.length ? defaultColors[index] : `hsl(${Math.floor(Math.random() * 360)}, 80%, 60%)`;
  }
  function formatDate(dateStr: string) {
    if (!dateStr) return "";
    const parts = dateStr.split("-");
    return parts.length === 3 ? `${parts[2]}/${parts[1]}/${parts[0]}` : dateStr;
  }
  function base64ToUint8Array(base64: string) {
    const binaryString = atob(base64.split(',')[1]);
    const len = binaryString.length;
    const bytes = new Uint8Array(len);
    for (let i = 0; i < len; i++) bytes[i] = binaryString.charCodeAt(i);
    return bytes;
  }
  function addInternalLink(page: any, rect: number[], destPage: any) {
    const { PDFName } = win.PDFLib;
    const destArray = [destPage.ref, PDFName.of('Fit')];
    const linkAnnot = page.doc.context.obj({ Type: 'Annot', Subtype: 'Link', Rect: rect, Border: [0, 0, 0], Dest: destArray, A: page.doc.context.obj({ Type: 'Action', S: PDFName.of('GoTo'), D: destArray }) });
    let annots = page.node.lookup(PDFName.of('Annots'));
    if (!annots) { annots = page.doc.context.obj([]); page.node.set(PDFName.of('Annots'), annots); }
    annots.push(linkAnnot);
  }
  function fileToDataURL(file: File): Promise<string> {
    return new Promise((resolve, reject) => { const r = new FileReader(); r.onload = () => resolve(r.result as string); r.onerror = reject; r.readAsDataURL(file); });
  }

  const fileObjects: Record<string, any> = {};
  let nextFileId = 0;

  document.getElementById('newFiles')?.addEventListener('change', (e) => {
    const files = (e.target as HTMLInputElement).files;
    if (!files) return;
    const fileList = document.getElementById('fileList')!;
    for (let i = 0; i < files.length; i++) {
      const file = files[i];
      const color = getDefaultColor(Object.keys(fileObjects).length);
      const id = nextFileId++;
      fileObjects[id] = { file, name: file.name, color, data: null };
      const li = document.createElement('li');
      li.dataset.id = String(id); li.dataset.type = "pdf"; li.style.maxWidth = "550px";
      li.innerHTML = `<input type="text" value="${file.name}" placeholder="File name" style="flex:1;" /><input type="color" value="${color}" title="Select color" style="width:40px; padding:0; border:none;" /><button type="button" class="remove-item" title="Remove File">&times;</button>`;
      li.querySelector('.remove-item')!.addEventListener('click', () => { delete fileObjects[li.dataset.id!]; li.remove(); });
      fileList.appendChild(li);
    }
  });

  function addGroupHeader(title: string) {
    const fileList = document.getElementById('fileList')!;
    const li = document.createElement('li');
    li.dataset.type = "group"; li.classList.add("group"); li.style.maxWidth = "550px";
    li.innerHTML = `<input type="text" value="${title}" placeholder="Group Title" style="flex:1; text-align:left; font-style:italic; background:#333; color:#fff;" /><button type="button" class="remove-item" title="Remove Group">&times;</button>`;
    li.querySelector('.remove-item')!.addEventListener('click', () => li.remove());
    fileList.appendChild(li);
  }

  document.getElementById('addGroupButton')?.addEventListener('click', () => addGroupHeader("Group Title"));
  document.querySelectorAll('.preset-group-btn').forEach(btn => {
    btn.addEventListener('click', () => addGroupHeader((btn as HTMLElement).dataset.title || "Group"));
  });

  win.Sortable.create(document.getElementById('fileList'), { animation: 150 });

  function updateOrderedItems() {
    const items: any[] = [];
    document.querySelectorAll('#fileList li').forEach(li => {
      const el = li as HTMLElement;
      if (el.dataset.type === "group") {
        items.push({ type: "group", title: (el.querySelector('input') as HTMLInputElement).value });
      } else {
        const id = el.dataset.id!;
        const newName = (el.querySelector('input[type="text"]') as HTMLInputElement).value;
        const newColor = (el.querySelector('input[type="color"]') as HTMLInputElement).value;
        items.push({ type: "pdf", fileObj: fileObjects[id], name: newName, color: newColor });
        if (fileObjects[id]) { fileObjects[id].name = newName; fileObjects[id].color = newColor; }
      }
    });
    return items;
  }

  // Save settings
  document.getElementById('saveSettingsButton')?.addEventListener('click', async () => {
    const projectName = (document.getElementById('projectName') as HTMLInputElement).value;
    const completionDate = (document.getElementById('completionDate') as HTMLInputElement).value;
    const projectManager = (document.getElementById('projectManager') as HTMLInputElement).value;
    const customCoverInput = document.getElementById('customCover') as HTMLInputElement;
    let customCoverData = null;
    if (customCoverInput.files?.[0]) customCoverData = await fileToDataURL(customCoverInput.files[0]);
    const orderedItems = updateOrderedItems();
    const itemsToSave: any[] = [];
    for (const item of orderedItems) {
      if (item.type === "group") { itemsToSave.push({ type: "group", title: item.title }); }
      else {
        if (!item.fileObj.data && item.fileObj.file) item.fileObj.data = await fileToDataURL(item.fileObj.file);
        itemsToSave.push({ type: "pdf", name: item.name, color: item.color, data: item.fileObj.data });
      }
    }
    const settings = { projectName, completionDate, projectManager, customCoverData, items: itemsToSave };
    const blob = new Blob([JSON.stringify(settings, null, 2)], { type: 'application/json' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a'); a.href = url; a.download = "pdfCompilerSettings.json"; a.click();
    URL.revokeObjectURL(url);
  });

  // Load settings
  document.getElementById('loadSettingsButton')?.addEventListener('click', () => { document.getElementById('loadSettingsInput')?.click(); });
  document.getElementById('loadSettingsInput')?.addEventListener('change', (e) => {
    const file = (e.target as HTMLInputElement).files?.[0];
    if (!file) return;
    const reader = new FileReader();
    reader.onload = () => {
      try {
        const settings = JSON.parse(reader.result as string);
        (document.getElementById('projectName') as HTMLInputElement).value = settings.projectName || "";
        (document.getElementById('completionDate') as HTMLInputElement).value = settings.completionDate || "";
        (document.getElementById('projectManager') as HTMLInputElement).value = settings.projectManager || "";
        win.savedCustomCoverData = settings.customCoverData || null;
        document.getElementById('fileList')!.innerHTML = "";
        for (const key in fileObjects) delete fileObjects[key];
        nextFileId = 0;
        settings.items.forEach((item: any) => {
          if (item.type === "group") { addGroupHeader(item.title); }
          else {
            const id = nextFileId++;
            fileObjects[id] = { file: null, name: item.name, color: item.color, data: item.data };
            const li = document.createElement('li');
            li.dataset.id = String(id); li.dataset.type = "pdf"; li.style.maxWidth = "550px";
            li.innerHTML = `<input type="text" value="${item.name}" placeholder="File name" style="flex:1;" /><input type="color" value="${item.color}" title="Select color" style="width:40px; padding:0; border:none;" /><button type="button" class="remove-item" title="Remove File">&times;</button>`;
            li.querySelector('.remove-item')!.addEventListener('click', () => { delete fileObjects[li.dataset.id!]; li.remove(); });
            document.getElementById('fileList')!.appendChild(li);
          }
        });
        alert("Settings loaded!");
      } catch { alert("Error loading settings."); }
    };
    reader.readAsText(file);
  });

  // Compile PDFs
  document.getElementById('compileButton')?.addEventListener('click', async () => {
    const projectName = (document.getElementById('projectName') as HTMLInputElement).value;
    const completionDate = formatDate((document.getElementById('completionDate') as HTMLInputElement).value);
    const projectManager = (document.getElementById('projectManager') as HTMLInputElement).value;
    const orderedItems = updateOrderedItems();
    if (!orderedItems.some((item: any) => item.type === "pdf")) { alert("Please select at least one PDF file."); return; }
    const pdfFilename = `Flooring O&M - ${projectName} - Premrest.pdf`;
    const { PDFDocument, StandardFonts, rgb, PDFName } = win.PDFLib;
    const mergedPdf = await PDFDocument.create();
    let coverPagesCount = 0;
    const customCoverInput = document.getElementById('customCover') as HTMLInputElement;

    if ((customCoverInput.files?.[0]) || win.savedCustomCoverData) {
      let coverData;
      if (customCoverInput.files?.[0]) coverData = await fileToDataURL(customCoverInput.files[0]);
      else coverData = win.savedCustomCoverData;
      const coverPdf = await PDFDocument.load(coverData);
      const [coverPage] = await mergedPdf.copyPages(coverPdf, [0]);
      mergedPdf.addPage(coverPage);
      coverPagesCount++;
    } else {
      const defaultCoverUrl = "https://45610113.fs1.hubspotusercontent-na1.net/hubfs/45610113/Used%20in%20tools%20(BY)/Coverpage2025.png";
      const imageBytes = await fetch(defaultCoverUrl).then((r: Response) => r.arrayBuffer());
      const embeddedImage = await mergedPdf.embedPng(imageBytes);
      const coverPage = mergedPdf.addPage([A4_WIDTH, A4_HEIGHT]);
      const scale = Math.min(A4_WIDTH / embeddedImage.width, A4_HEIGHT / embeddedImage.height);
      const dw = embeddedImage.width * scale, dh = embeddedImage.height * scale;
      coverPage.drawImage(embeddedImage, { x: (A4_WIDTH - dw) / 2, y: (A4_HEIGHT - dh) / 2, width: dw, height: dh });
      const fontBold = await mergedPdf.embedFont(StandardFonts.HelveticaBold);
      coverPage.drawText(projectName, { x: 50, y: A4_HEIGHT / 2, size: 36, font: fontBold, color: rgb(0.1, 0.1, 0.1) });
      coverPage.drawText(`Date: ${completionDate}`, { x: 50, y: A4_HEIGHT / 2 - 40, size: 20, font: fontBold, color: rgb(0.1, 0.1, 0.1) });
      coverPage.drawText(`Manager: ${projectManager}`, { x: 50, y: A4_HEIGHT / 2 - 70, size: 20, font: fontBold, color: rgb(0.1, 0.1, 0.1) });
      coverPagesCount++;
    }

    if ((document.getElementById('includeSecondCover') as HTMLInputElement).checked) {
      const url2 = "https://45610113.fs1.hubspotusercontent-na1.net/hubfs/45610113/Used%20in%20tools%20(BY)/Maintain%20Your%20Carpet%20Investment.png";
      const ib2 = await fetch(url2).then((r: Response) => r.arrayBuffer());
      const ei2 = await mergedPdf.embedPng(ib2);
      const p2 = mergedPdf.addPage([A4_WIDTH, A4_HEIGHT]);
      const s2 = Math.min(A4_WIDTH / ei2.width, A4_HEIGHT / ei2.height);
      p2.drawImage(ei2, { x: (A4_WIDTH - ei2.width * s2) / 2, y: (A4_HEIGHT - ei2.height * s2) / 2, width: ei2.width * s2, height: ei2.height * s2 });
      coverPagesCount++;
    }

    const tocPage = mergedPdf.addPage([A4_WIDTH, A4_HEIGHT]);
    const tocEntries: any[] = [];
    const pdfPageRanges: any[] = [];

    for (const item of orderedItems) {
      if (item.type === "pdf") {
        const startPage = mergedPdf.getPageCount();
        let pdfBytes;
        if (item.fileObj.data) pdfBytes = base64ToUint8Array(item.fileObj.data);
        else pdfBytes = await item.fileObj.file.arrayBuffer();
        const donorPdf = await PDFDocument.load(pdfBytes);
        const donorPages = await mergedPdf.copyPages(donorPdf, donorPdf.getPageIndices());
        donorPages.forEach((pg: any) => mergedPdf.addPage(pg));
        tocEntries.push({ type: "pdf", title: item.name, startPage: startPage + 1, color: item.color });
        pdfPageRanges.push({ start: startPage, count: donorPdf.getPageCount(), color: item.color });
      } else {
        tocEntries.push({ type: "group", title: item.title });
      }
    }

    const totalPages = mergedPdf.getPageCount();
    const nonContentPages = coverPagesCount + 1;
    for (let i = 0; i < totalPages; i++) {
      const page = mergedPdf.getPage(i);
      const { width, height } = page.getSize();
      if (i >= nonContentPages) page.drawRectangle({ x: 0, y: 0, width: 5, height, color: rgb(0.9, 0.9, 0.9) });
      page.drawText(`${i + 1}`, { x: width - 50, y: 15, size: 12, color: rgb(0.2, 0.2, 0.2) });
    }

    pdfPageRanges.forEach((range: any) => {
      const hex = range.color.replace(/^#/, '');
      const v = parseInt(hex.length === 3 ? hex.split('').map((x: string) => x + x).join('') : hex, 16);
      const cr = rgb(((v >> 16) & 255) / 255, ((v >> 8) & 255) / 255, (v & 255) / 255);
      for (let p = range.start; p < range.start + range.count; p++) {
        if (p < nonContentPages) continue;
        const pg = mergedPdf.getPage(p);
        pg.drawRectangle({ x: 0, y: 0, width: 5, height: pg.getSize().height, color: cr });
      }
    });

    // TOC
    const tocFont = await mergedPdf.embedFont(StandardFonts.Helvetica);
    tocPage.drawRectangle({ x: 0, y: 0, width: A4_WIDTH, height: A4_HEIGHT, color: rgb(0.98, 0.98, 0.98) });
    tocPage.drawText("Table of Contents", { x: 50, y: A4_HEIGHT - 70, size: 28, font: tocFont, color: rgb(0.2, 0.2, 0.2) });
    let yPos = A4_HEIGHT - 110;
    let currentIndent = 0;
    for (const entry of tocEntries) {
      if (entry.type === "group") {
        yPos -= 15;
        tocPage.drawText(entry.title, { x: 50, y: yPos, size: 18, font: tocFont, color: rgb(0.1, 0.1, 0.1) });
        yPos -= 40; currentIndent = 20;
      } else {
        tocPage.drawText("- " + entry.title, { x: 50 + currentIndent, y: yPos, size: 14, font: tocFont, color: rgb(0.2, 0.2, 0.2) });
        const pw = tocFont.widthOfTextAtSize(String(entry.startPage), 14);
        tocPage.drawText(String(entry.startPage), { x: A4_WIDTH - 70 - pw, y: yPos, size: 14, font: tocFont, color: rgb(0.2, 0.2, 0.2) });
        addInternalLink(tocPage, [50 + currentIndent, yPos, A4_WIDTH - 70, yPos + 19], mergedPdf.getPage(entry.startPage - 1));
        yPos -= 25;
      }
    }

    // Back to top
    const backFont = await mergedPdf.embedFont(StandardFonts.Helvetica);
    const tocPageObj = mergedPdf.getPage(coverPagesCount);
    for (let i = nonContentPages; i < totalPages; i++) {
      const page = mergedPdf.getPage(i);
      const { width } = page.getSize();
      const xp = width - 90;
      page.drawRectangle({ x: xp, y: 10, width: 80, height: 20, color: rgb(0.2, 0.6, 0.86), borderColor: rgb(0.1, 0.4, 0.7), borderWidth: 1 });
      const tw = backFont.widthOfTextAtSize("Back to top", 10);
      page.drawText("Back to top", { x: xp + (80 - tw) / 2, y: 15, size: 10, font: backFont, color: rgb(1, 1, 1) });
      addInternalLink(page, [xp, 10, xp + 80, 30], tocPageObj);
    }

    const mergedPdfBytes = await mergedPdf.save();
    const blob = new Blob([mergedPdfBytes], { type: 'application/pdf' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a'); a.href = url; a.download = pdfFilename; a.click();
    URL.revokeObjectURL(url);
  });
}

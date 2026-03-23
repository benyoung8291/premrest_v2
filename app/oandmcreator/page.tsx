import type { Metadata } from 'next';
import Script from 'next/script';

export const metadata: Metadata = {
  title: 'Premrest',
  description: '',
};

export default function Page() {
  return (
    <>
      {/* Page-specific styles */}
      <style dangerouslySetInnerHTML={{ __html: `
/* Make text look crisper and more legible in all browsers */
body {
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  font-smoothing: antialiased;
  text-rendering: optimizeLegibility;
}
/* Focus state style for keyboard navigation for the focusable elements */
*[tabindex]:focus-visible,
  input[type="file"]:focus-visible {
   outline: 0.125rem solid #4d65ff;
   outline-offset: 0.125rem;
}
/* Set color style to inherit */
.inherit-color * {
    color: inherit;
}
/* Get rid of top margin on first element in any rich text element */
.w-richtext > :not(div):first-child, .w-richtext > div:first-child > :first-child {
  margin-top: 0 !important;
}
/* Get rid of bottom margin on last element in any rich text element */
.w-richtext>:last-child, .w-richtext ol li:last-child, .w-richtext ul li:last-child {
	margin-bottom: 0 !important;
}
/* Make sure containers never lose their center alignment */
.container-medium,.container-small, .container-large {
	margin-right: auto !important;
  margin-left: auto !important;
}
/* 
Make the following elements inherit typography styles from the parent and not have hardcoded values. 
Important: You will not be able to style for example "All Links" in Designer with this CSS applied.
Uncomment this CSS to use it in the project. Leave this message for future hand-off.
*/
/*
a,
.w-input,
.w-select,
.w-tab-link,
.w-nav-link,
.w-dropdown-btn,
.w-dropdown-toggle,
.w-dropdown-link {
  color: inherit;
  text-decoration: inherit;
  font-size: inherit;
}
*/
/* Apply "..." after 3 lines of text */
.text-style-3lines {
	display: -webkit-box;
	overflow: hidden;
	-webkit-line-clamp: 3;
	-webkit-box-orient: vertical;
}
/* Apply "..." after 2 lines of text */
.text-style-2lines {
	display: -webkit-box;
	overflow: hidden;
	-webkit-line-clamp: 2;
	-webkit-box-orient: vertical;
}
/* These classes are never overwritten */
.hide {
  display: none !important;
}
@media screen and (max-width: 991px) {
    .hide, .hide-tablet {
        display: none !important;
    }
}
  @media screen and (max-width: 767px) {
    .hide-mobile-landscape{
      display: none !important;
    }
}
  @media screen and (max-width: 479px) {
    .hide-mobile{
      display: none !important;
    }
}
.margin-0 {
  margin: 0rem !important;
}
.padding-0 {
  padding: 0rem !important;
}
.spacing-clean {
padding: 0rem !important;
margin: 0rem !important;
}
.margin-top {
  margin-right: 0rem !important;
  margin-bottom: 0rem !important;
  margin-left: 0rem !important;
}
.padding-top {
  padding-right: 0rem !important;
  padding-bottom: 0rem !important;
  padding-left: 0rem !important;
}
.margin-right {
  margin-top: 0rem !important;
  margin-bottom: 0rem !important;
  margin-left: 0rem !important;
}
.padding-right {
  padding-top: 0rem !important;
  padding-bottom: 0rem !important;
  padding-left: 0rem !important;
}
.margin-bottom {
  margin-top: 0rem !important;
  margin-right: 0rem !important;
  margin-left: 0rem !important;
}
.padding-bottom {
  padding-top: 0rem !important;
  padding-right: 0rem !important;
  padding-left: 0rem !important;
}
.margin-left {
  margin-top: 0rem !important;
  margin-right: 0rem !important;
  margin-bottom: 0rem !important;
}
.padding-left {
  padding-top: 0rem !important;
  padding-right: 0rem !important;
  padding-bottom: 0rem !important;
}
.margin-horizontal {
  margin-top: 0rem !important;
  margin-bottom: 0rem !important;
}
.padding-horizontal {
  padding-top: 0rem !important;
  padding-bottom: 0rem !important;
}
.margin-vertical {
  margin-right: 0rem !important;
  margin-left: 0rem !important;
}
.padding-vertical {
  padding-right: 0rem !important;
  padding-left: 0rem !important;
}


    /* Basic CSS */
    html {
      -webkit-text-size-adjust: 100%;
      -ms-text-size-adjust: 100%;
      font-family: sans-serif;
    }
    body {
      margin: 0;
      padding: 1rem;
      background: #f4f4f4;
    }
    h1, h2, h3 {
      margin: 1rem 0;
    }
    label {
      display: block;
      font-weight: bold;
      margin-top: 1rem;
    }
    input, button, select {
      font-size: 1rem;
      margin: 0.5rem 0;
      padding: 0.5rem;
    }
    .form-section {
      background: #fff;
      border: 1px solid #ddd;
      padding: 1rem;
      border-radius: 4px;
      margin-bottom: 1.5rem;
    }
    /* File list: aligned left */
    #fileList {
      list-style: none;
      padding: 0;
      margin: 0;
      max-width: 550px;
      text-align: left;
    }
    /* PDF file items */
    #fileList li {
      border: 1px solid #ccc;
      margin-bottom: 0.5rem;
      padding: 0.5rem;
      display: flex;
      align-items: center;
      gap: 0.5rem;
      background: #f9f9f9;
    }
    /* Remove button */
    #fileList li button.remove-item {
      background: transparent;
      border: none;
      color: #900;
      font-size: 1.2rem;
      cursor: pointer;
      padding: 0 0.3rem;
    }
    /* Group header styling */
    #fileList li.group {
      background: #333;
      color: #fff;
      font-style: italic;
      padding: 0.3rem 0.5rem;
      display: flex;
      justify-content: space-between;
      align-items: center;
    }
    #fileList li.group input {
      background: #333;
      color: #fff;
      border: none;
      flex: 1;
    }
    /* Compact color input */
    input[type="color"] {
      width: 40px;
      height: 30px;
      padding: 0;
      border: none;
      margin: 0;
    }
    /* Preset group buttons */
    .preset-groups {
      margin-bottom: 1rem;
    }
    .preset-groups button {
      margin-right: 0.5rem;
      margin-bottom: 0.5rem;
      cursor: pointer;
    }
    /* Action buttons */
    .action-buttons {
      margin-top: 1rem;
    }
  ` }} />
      {/* Webflow page content - exact export */}
      <div dangerouslySetInnerHTML={{ __html: `
  <div class="page-wrapper">
    <div class="global-styles w-embed">
      <style>
/* Make text look crisper and more legible in all browsers */
body {
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  font-smoothing: antialiased;
  text-rendering: optimizeLegibility;
}
/* Focus state style for keyboard navigation for the focusable elements */
*[tabindex]:focus-visible,
  input[type="file"]:focus-visible {
   outline: 0.125rem solid #4d65ff;
   outline-offset: 0.125rem;
}
/* Set color style to inherit */
.inherit-color * {
    color: inherit;
}
/* Get rid of top margin on first element in any rich text element */
.w-richtext > :not(div):first-child, .w-richtext > div:first-child > :first-child {
  margin-top: 0 !important;
}
/* Get rid of bottom margin on last element in any rich text element */
.w-richtext>:last-child, .w-richtext ol li:last-child, .w-richtext ul li:last-child {
	margin-bottom: 0 !important;
}
/* Make sure containers never lose their center alignment */
.container-medium,.container-small, .container-large {
	margin-right: auto !important;
  margin-left: auto !important;
}
/* 
Make the following elements inherit typography styles from the parent and not have hardcoded values. 
Important: You will not be able to style for example "All Links" in Designer with this CSS applied.
Uncomment this CSS to use it in the project. Leave this message for future hand-off.
*/
/*
a,
.w-input,
.w-select,
.w-tab-link,
.w-nav-link,
.w-dropdown-btn,
.w-dropdown-toggle,
.w-dropdown-link {
  color: inherit;
  text-decoration: inherit;
  font-size: inherit;
}
*/
/* Apply "..." after 3 lines of text */
.text-style-3lines {
	display: -webkit-box;
	overflow: hidden;
	-webkit-line-clamp: 3;
	-webkit-box-orient: vertical;
}
/* Apply "..." after 2 lines of text */
.text-style-2lines {
	display: -webkit-box;
	overflow: hidden;
	-webkit-line-clamp: 2;
	-webkit-box-orient: vertical;
}
/* These classes are never overwritten */
.hide {
  display: none !important;
}
@media screen and (max-width: 991px) {
    .hide, .hide-tablet {
        display: none !important;
    }
}
  @media screen and (max-width: 767px) {
    .hide-mobile-landscape{
      display: none !important;
    }
}
  @media screen and (max-width: 479px) {
    .hide-mobile{
      display: none !important;
    }
}
.margin-0 {
  margin: 0rem !important;
}
.padding-0 {
  padding: 0rem !important;
}
.spacing-clean {
padding: 0rem !important;
margin: 0rem !important;
}
.margin-top {
  margin-right: 0rem !important;
  margin-bottom: 0rem !important;
  margin-left: 0rem !important;
}
.padding-top {
  padding-right: 0rem !important;
  padding-bottom: 0rem !important;
  padding-left: 0rem !important;
}
.margin-right {
  margin-top: 0rem !important;
  margin-bottom: 0rem !important;
  margin-left: 0rem !important;
}
.padding-right {
  padding-top: 0rem !important;
  padding-bottom: 0rem !important;
  padding-left: 0rem !important;
}
.margin-bottom {
  margin-top: 0rem !important;
  margin-right: 0rem !important;
  margin-left: 0rem !important;
}
.padding-bottom {
  padding-top: 0rem !important;
  padding-right: 0rem !important;
  padding-left: 0rem !important;
}
.margin-left {
  margin-top: 0rem !important;
  margin-right: 0rem !important;
  margin-bottom: 0rem !important;
}
.padding-left {
  padding-top: 0rem !important;
  padding-right: 0rem !important;
  padding-bottom: 0rem !important;
}
.margin-horizontal {
  margin-top: 0rem !important;
  margin-bottom: 0rem !important;
}
.padding-horizontal {
  padding-top: 0rem !important;
  padding-bottom: 0rem !important;
}
.margin-vertical {
  margin-right: 0rem !important;
  margin-left: 0rem !important;
}
.padding-vertical {
  padding-right: 0rem !important;
  padding-left: 0rem !important;
}
</style>
    </div>
    <main class="main-wrapper">
      <div>
        <div class="container-large"></div>
        <div class="code-embed-7 w-embed w-script">
          <!DOCTYPE html>
          <html lang="en">
          <head>
            <meta charset="UTF-8">
            <title>Premrest O&M Creator</title>
            
            <script src="https://cdnjs.cloudflare.com/ajax/libs/Sortable/1.15.0/Sortable.min.js"></script>
            
            <script src="https://unpkg.com/pdf-lib/dist/pdf-lib.min.js"></script>
            <style>
    /* Basic CSS */
    html {
      -webkit-text-size-adjust: 100%;
      -ms-text-size-adjust: 100%;
      font-family: sans-serif;
    }
    body {
      margin: 0;
      padding: 1rem;
      background: #f4f4f4;
    }
    h1, h2, h3 {
      margin: 1rem 0;
    }
    label {
      display: block;
      font-weight: bold;
      margin-top: 1rem;
    }
    input, button, select {
      font-size: 1rem;
      margin: 0.5rem 0;
      padding: 0.5rem;
    }
    .form-section {
      background: #fff;
      border: 1px solid #ddd;
      padding: 1rem;
      border-radius: 4px;
      margin-bottom: 1.5rem;
    }
    /* File list: aligned left */
    #fileList {
      list-style: none;
      padding: 0;
      margin: 0;
      max-width: 550px;
      text-align: left;
    }
    /* PDF file items */
    #fileList li {
      border: 1px solid #ccc;
      margin-bottom: 0.5rem;
      padding: 0.5rem;
      display: flex;
      align-items: center;
      gap: 0.5rem;
      background: #f9f9f9;
    }
    /* Remove button */
    #fileList li button.remove-item {
      background: transparent;
      border: none;
      color: #900;
      font-size: 1.2rem;
      cursor: pointer;
      padding: 0 0.3rem;
    }
    /* Group header styling */
    #fileList li.group {
      background: #333;
      color: #fff;
      font-style: italic;
      padding: 0.3rem 0.5rem;
      display: flex;
      justify-content: space-between;
      align-items: center;
    }
    #fileList li.group input {
      background: #333;
      color: #fff;
      border: none;
      flex: 1;
    }
    /* Compact color input */
    input[type="color"] {
      width: 40px;
      height: 30px;
      padding: 0;
      border: none;
      margin: 0;
    }
    /* Preset group buttons */
    .preset-groups {
      margin-bottom: 1rem;
    }
    .preset-groups button {
      margin-right: 0.5rem;
      margin-bottom: 0.5rem;
      cursor: pointer;
    }
    /* Action buttons */
    .action-buttons {
      margin-top: 1rem;
    }
  </style>
          </head>
          <body>
            <h2>Premrest O&M Creator</h2>
            <form id="pdfForm">
              
              <div class="form-section">
                <h4>Cover Page Options</h4>
                <label for="customCover">Upload Custom Cover Page (optional):</label>
                <input type="file" id="customCover" accept="application/pdf">
                <p>If no custom cover is uploaded, the default cover image will be used.</p>
                
                <label>
                  <input type="checkbox" id="includeSecondCover" checked="">
                  Include Second Cover Page (Maintain Your Carpet Investment)
                </label>
                <label for="projectName">Project Name</label>
                <input type="text" id="projectName" name="projectName" placeholder="Enter project name">
                <label for="completionDate">Date of Completion</label>
                <input type="date" id="completionDate" name="completionDate">
                <label for="projectManager">Project Manager</label>
                <input type="text" id="projectManager" name="projectManager" placeholder="Enter project manager">
              </div>
              
              <div class="form-section">
                <h4>Select PDFs &amp; Organize</h4>
                <input type="file" id="newFiles" accept="application/pdf" multiple="">
                <div class="preset-groups">
                  <button type="button" class="preset-group-btn" data-title="Warranties">Warranties</button>
                  <button type="button" class="preset-group-btn" data-title="Maintenance">Maintenance</button>
                  <button type="button" class="preset-group-btn" data-title="SDS">SDS</button>
                  <button type="button" class="preset-group-btn" data-title="Product Certificates">Product Certificates</button>
                  <button type="button" class="preset-group-btn" data-title="Installation Warranty">Installation Warranty</button>
                  <button type="button" class="preset-group-btn" data-title="Cleaning Contact">Cleaning Contact</button>
                </div>
                <button type="button" id="addGroupButton">Add Custom Group Header</button>
                <h3>Ordered Items (Drag to reorder)</h3>
                <ul id="fileList">
                  
                </ul>
              </div>
              
              <div class="action-buttons">
                <button type="button" id="compileButton">Compile PDFs</button>
                <button type="button" id="saveSettingsButton">Save Settings</button>
                <button type="button" id="loadSettingsButton">Load Settings</button>
                <input type="file" id="loadSettingsInput" accept="application/json" style="display:none">
              </div>
            </form>
            <script>
    // --------------------------
    // GLOBAL VARIABLES & HELPERS
    // --------------------------
    const A4_WIDTH = 595;
    const A4_HEIGHT = 842;
    const defaultColors = ["#FF6F61", "#FF8C42", "#FFD700", "#32CD32", "#1E90FF", "#9932CC", "#00FA9A"];
    function getDefaultColor(index) {
      return index < defaultColors.length ? defaultColors[index] : \`hsl(\${Math.floor(Math.random() * 360)}, 80%, 60%)\`;
    }
    function formatDate(dateStr) {
      if (!dateStr) return "";
      const parts = dateStr.split("-");
      return parts.length === 3 ? \`\${parts[2]}/\${parts[1]}/\${parts[0]}\` : dateStr;
    }
    function base64ToUint8Array(base64) {
      const binaryString = atob(base64.split(',')[1]);
      const len = binaryString.length;
      const bytes = new Uint8Array(len);
      for (let i = 0; i < len; i++) {
        bytes[i] = binaryString.charCodeAt(i);
      }
      return bytes;
    }
    // Internal link annotation helper that sets both "Dest" and an "A" action.
    function addInternalLink(page, rect, destPage) {
      const { PDFName, PDFArray } = PDFLib;
      const destArray = [destPage.ref, PDFName.of('Fit')];
      const linkAnnot = page.doc.context.obj({
        Type: 'Annot',
        Subtype: 'Link',
        Rect: rect,
        Border: [0, 0, 0],
        Dest: destArray,
        A: page.doc.context.obj({
          Type: 'Action',
          S: PDFName.of('GoTo'),
          D: destArray
        })
      });
      let annots = page.node.lookup(PDFName.of('Annots'));
      if (!annots) {
        annots = page.doc.context.obj([]);
        page.node.set(PDFName.of('Annots'), annots);
      }
      annots.push(linkAnnot);
    }
    // --------------------------
    // FILE & GROUP MANAGEMENT
    // --------------------------
    const fileObjects = {};
    let nextFileId = 0;
    document.getElementById('newFiles').addEventListener('change', (e) => {
      console.log("New files selected:", e.target.files);
      const files = e.target.files;
      const fileList = document.getElementById('fileList');
      for (let i = 0; i < files.length; i++) {
        const file = files[i];
        const color = getDefaultColor(Object.keys(fileObjects).length);
        const id = nextFileId++;
        fileObjects[id] = { file: file, name: file.name, color: color, data: null };
        const li = document.createElement('li');
        li.dataset.id = id;
        li.dataset.type = "pdf";
        li.style.maxWidth = "550px";
        li.innerHTML = \`
          <input type="text" value="\${file.name}" placeholder="File name" style="flex:1;" />
          <input type="color" value="\${color}" title="Select color" style="width:40px; padding:0; border:none;" />
          <button type="button" class="remove-item" title="Remove File">&times;</button>
        \`;
        li.querySelector('.remove-item').addEventListener('click', () => {
          delete fileObjects[li.dataset.id];
          li.remove();
        });
        fileList.appendChild(li);
      }
    });
    document.getElementById('addGroupButton').addEventListener('click', () => { addGroupHeader("Group Title"); });
    document.querySelectorAll('.preset-group-btn').forEach(btn => {
      btn.addEventListener('click', () => { addGroupHeader(btn.dataset.title); });
    });
    function addGroupHeader(title) {
      const fileList = document.getElementById('fileList');
      const li = document.createElement('li');
      li.dataset.type = "group";
      li.classList.add("group");
      li.style.maxWidth = "550px";
      li.innerHTML = \`
        <input type="text" value="\${title}" placeholder="Group Title" style="flex:1; text-align:left; font-style:italic; background:#333; color:#fff;" />
        <button type="button" class="remove-item" title="Remove Group">&times;</button>
      \`;
      li.querySelector('.remove-item').addEventListener('click', () => { li.remove(); });
      fileList.appendChild(li);
    }
    Sortable.create(document.getElementById('fileList'), { animation: 150 });
    function updateOrderedItems() {
      const items = [];
      const liElements = document.querySelectorAll('#fileList li');
      liElements.forEach(li => {
        const type = li.dataset.type;
        if (type === "group") {
          const title = li.querySelector('input').value;
          items.push({ type: "group", title: title });
        } else {
          const id = li.dataset.id;
          const newName = li.querySelector('input[type="text"]').value;
          const newColor = li.querySelector('input[type="color"]').value;
          items.push({ type: "pdf", fileObj: fileObjects[id], name: newName, color: newColor });
          if (fileObjects[id]) {
            fileObjects[id].name = newName;
            fileObjects[id].color = newColor;
          }
        }
      });
      return items;
    }
    // --------------------------
    // SAVE & LOAD SETTINGS VIA JSON FILE
    // --------------------------
    document.getElementById('saveSettingsButton').addEventListener('click', async () => {
      const projectName = document.getElementById('projectName').value;
      const completionDate = document.getElementById('completionDate').value;
      const projectManager = document.getElementById('projectManager').value;
      const customCoverInput = document.getElementById('customCover');
      let customCoverData = null;
      if (customCoverInput.files && customCoverInput.files[0]) {
        customCoverData = await fileToDataURL(customCoverInput.files[0]);
      }
      const orderedItems = updateOrderedItems();
      const itemsToSave = [];
      for (let item of orderedItems) {
        if (item.type === "group") {
          itemsToSave.push({ type: "group", title: item.title });
        } else {
          if (!item.fileObj.data && item.fileObj.file) {
            item.fileObj.data = await fileToDataURL(item.fileObj.file);
          }
          itemsToSave.push({ type: "pdf", name: item.name, color: item.color, data: item.fileObj.data });
        }
      }
      const settings = { projectName, completionDate, projectManager, customCoverData, items: itemsToSave };
      const blob = new Blob([JSON.stringify(settings, null, 2)], { type: 'application/json' });
      const url = URL.createObjectURL(blob);
      const a = document.createElement('a');
      a.href = url;
      a.download = "pdfCompilerSettings.json";
      a.click();
      URL.revokeObjectURL(url);
    });
    function fileToDataURL(file) {
      return new Promise((resolve, reject) => {
        const reader = new FileReader();
        reader.onload = () => resolve(reader.result);
        reader.onerror = reject;
        reader.readAsDataURL(file);
      });
    }
    document.getElementById('loadSettingsButton').addEventListener('click', () => {
      document.getElementById('loadSettingsInput').click();
    });
    document.getElementById('loadSettingsInput').addEventListener('change', (e) => {
      const file = e.target.files[0];
      if (!file) return;
      const reader = new FileReader();
      reader.onload = () => {
        try {
          const settings = JSON.parse(reader.result);
          document.getElementById('projectName').value = settings.projectName || "";
          document.getElementById('completionDate').value = settings.completionDate || "";
          document.getElementById('projectManager').value = settings.projectManager || "";
          window.savedCustomCoverData = settings.customCoverData || null;
          document.getElementById('fileList').innerHTML = "";
          for (const key in fileObjects) { delete fileObjects[key]; }
          nextFileId = 0;
          settings.items.forEach(item => {
            if (item.type === "group") {
              addGroupHeader(item.title);
            } else {
              const id = nextFileId++;
              fileObjects[id] = { file: null, name: item.name, color: item.color, data: item.data };
              const li = document.createElement('li');
              li.dataset.id = id;
              li.dataset.type = "pdf";
              li.style.maxWidth = "550px";
              li.innerHTML = \`
                <input type="text" value="\${item.name}" placeholder="File name" style="flex:1;" />
                <input type="color" value="\${item.color}" title="Select color" style="width:40px; padding:0; border:none;" />
                <button type="button" class="remove-item" title="Remove File">&times;</button>
              \`;
              li.querySelector('.remove-item').addEventListener('click', () => {
                delete fileObjects[li.dataset.id];
                li.remove();
              });
              document.getElementById('fileList').appendChild(li);
            }
          });
          alert("Settings loaded!");
        } catch (err) {
          alert("Error loading settings.");
        }
      };
      reader.readAsText(file);
    });
    // --------------------------
    // COMPILE PDFs
    // --------------------------
    document.getElementById('compileButton').addEventListener('click', async () => {
      const projectName = document.getElementById('projectName').value;
      const completionDateRaw = document.getElementById('completionDate').value;
      const projectManager = document.getElementById('projectManager').value;
      const completionDate = formatDate(completionDateRaw);
      const orderedItems = updateOrderedItems();
      if (!orderedItems.some(item => item.type === "pdf")) {
        alert("Please select at least one PDF file.");
        return;
      }
      // Final PDF filename
      const pdfFilename = \`Flooring O&M - \${projectName} - Premrest.pdf\`;
      const { PDFDocument, StandardFonts, rgb, PDFName, PDFArray } = PDFLib;
      const mergedPdf = await PDFDocument.create();
      // --- COVER PAGE ---
      // If a custom cover is provided, use its first page.
      // Otherwise, fetch and embed the default cover image, scaling to A4.
      let coverPagesCount = 0;
      if ((document.getElementById('customCover').files && document.getElementById('customCover').files[0]) ||
          window.savedCustomCoverData) {
        let coverData;
        if (document.getElementById('customCover').files && document.getElementById('customCover').files[0]) {
          coverData = await fileToDataURL(document.getElementById('customCover').files[0]);
        } else {
          coverData = window.savedCustomCoverData;
        }
        const coverPdf = await PDFDocument.load(coverData);
        const [coverPage] = await mergedPdf.copyPages(coverPdf, [0]);
        mergedPdf.addPage(coverPage);
        coverPagesCount++;
      } else {
        const defaultCoverUrl = "https://45610113.fs1.hubspotusercontent-na1.net/hubfs/45610113/Used%20in%20tools%20(BY)/Coverpage2025.png";
        const imageBytes = await fetch(defaultCoverUrl).then(res => res.arrayBuffer());
        const embeddedImage = await mergedPdf.embedPng(imageBytes);
        const coverPage = mergedPdf.addPage([A4_WIDTH, A4_HEIGHT]);
        // Scale image to fit A4 while preserving aspect ratio:
        const scale = Math.min(A4_WIDTH / embeddedImage.width, A4_HEIGHT / embeddedImage.height);
        const drawWidth = embeddedImage.width * scale;
        const drawHeight = embeddedImage.height * scale;
        const x = (A4_WIDTH - drawWidth) / 2;
        const y = (A4_HEIGHT - drawHeight) / 2;
        coverPage.drawImage(embeddedImage, { x, y, width: drawWidth, height: drawHeight });
        // Overlay project details:
        const fontBold = await mergedPdf.embedFont(StandardFonts.HelveticaBold);
        coverPage.drawText(projectName, { x: 50, y: A4_HEIGHT / 2, size: 36, font: fontBold, color: rgb(0.1,0.1,0.1) });
        coverPage.drawText(\`Date: \${completionDate}\`, { x: 50, y: A4_HEIGHT / 2 - 40, size: 20, font: fontBold, color: rgb(0.1,0.1,0.1) });
        coverPage.drawText(\`Manager: \${projectManager}\`, { x: 50, y: A4_HEIGHT / 2 - 70, size: 20, font: fontBold, color: rgb(0.1,0.1,0.1) });
        coverPagesCount++;
      }
      // --- SECOND COVER PAGE (Optional) ---
      const includeSecondCover = document.getElementById('includeSecondCover').checked;
      if (includeSecondCover) {
        const secondCoverUrl = "https://45610113.fs1.hubspotusercontent-na1.net/hubfs/45610113/Used%20in%20tools%20(BY)/Maintain%20Your%20Carpet%20Investment.png";
        const imageBytes2 = await fetch(secondCoverUrl).then(res => res.arrayBuffer());
        const embeddedImage2 = await mergedPdf.embedPng(imageBytes2);
        const secondCoverPage = mergedPdf.addPage([A4_WIDTH, A4_HEIGHT]);
        const scale2 = Math.min(A4_WIDTH / embeddedImage2.width, A4_HEIGHT / embeddedImage2.height);
        const drawWidth2 = embeddedImage2.width * scale2;
        const drawHeight2 = embeddedImage2.height * scale2;
        const x2 = (A4_WIDTH - drawWidth2) / 2;
        const y2 = (A4_HEIGHT - drawHeight2) / 2;
        secondCoverPage.drawImage(embeddedImage2, { x: x2, y: y2, width: drawWidth2, height: drawHeight2 });
        // (No text overlay specified for the second cover page.)
        coverPagesCount++;
      }
      // --- TABLE OF CONTENTS (TOC) PAGE ---
      const tocPage = mergedPdf.addPage([A4_WIDTH, A4_HEIGHT]);
      // --- MERGE PDFs & BUILD TOC ENTRIES (Content Pages) ---
      const tocEntries = [];
      const pdfPageRanges = [];
      for (let item of orderedItems) {
        if (item.type === "pdf") {
          const startPage = mergedPdf.getPageCount();
          let pdfBytes;
          if (item.fileObj.data) {
            pdfBytes = base64ToUint8Array(item.fileObj.data);
          } else {
            pdfBytes = await item.fileObj.file.arrayBuffer();
          }
          const donorPdf = await PDFDocument.load(pdfBytes);
          const donorPages = await mergedPdf.copyPages(donorPdf, donorPdf.getPageIndices());
          donorPages.forEach(page => mergedPdf.addPage(page));
          const pageCount = donorPdf.getPageCount();
          tocEntries.push({ type: "pdf", title: item.name, startPage: startPage + 1, color: item.color });
          pdfPageRanges.push({ start: startPage, count: pageCount, color: item.color });
        } else if (item.type === "group") {
          tocEntries.push({ type: "group", title: item.title });
        }
      }
      // --- ADD PAGE NUMBERS & LEFT STRIPS ---
      const totalPages = mergedPdf.getPageCount();
      const nonContentPages = coverPagesCount + 1;  // cover(s) + TOC
      for (let i = 0; i < totalPages; i++) {
        const page = mergedPdf.getPage(i);
        const { width, height } = page.getSize();
        if (i >= nonContentPages) {
          page.drawRectangle({ x: 0, y: 0, width: 5, height: height, color: rgb(0.9,0.9,0.9) });
        }
        page.drawText(\`\${i + 1}\`, { x: width - 50, y: 15, size: 12, color: rgb(0.2,0.2,0.2) });
      }
      // Re-draw left strips for content pages:
      pdfPageRanges.forEach(range => {
        function hexToRgb(hex) {
          hex = hex.replace(/^#/, '');
          if (hex.length === 3) { hex = hex.split('').map(x => x + x).join(''); }
          const intVal = parseInt(hex, 16);
          return { r: ((intVal >> 16) & 255)/255, g: ((intVal >> 8) & 255)/255, b: (intVal & 255)/255 };
        }
        const { r, g, b } = hexToRgb(range.color);
        for (let p = range.start; p < range.start + range.count; p++) {
          if (p < nonContentPages) continue;
          const page = mergedPdf.getPage(p);
          const { height } = page.getSize();
          page.drawRectangle({ x: 0, y: 0, width: 5, height: height, color: rgb(r, g, b) });
        }
      });
      // --- DRAW THE TABLE OF CONTENTS USING INTERNAL "Dest" LINKS ---
      {
        const tocFont = await mergedPdf.embedFont(StandardFonts.Helvetica);
        tocPage.drawRectangle({ x: 0, y: 0, width: A4_WIDTH, height: A4_HEIGHT, color: rgb(0.98,0.98,0.98) });
        const headerText = "Table of Contents";
        const headerSize = 28;
        tocPage.drawText(headerText, { x: 50, y: A4_HEIGHT - 70, size: headerSize, font: tocFont, color: rgb(0.2,0.2,0.2) });
        let yPos = A4_HEIGHT - 110;
        const pdfRowSpacing = 25;
        const groupRowSpacing = 40;
        const extraGroupSpacing = 15; // extra space before a group header
        const textSize = 14;
        let currentIndent = 0;
        for (let i = 0; i < tocEntries.length; i++) {
          const entry = tocEntries[i];
          if (entry.type === "group") {
            yPos -= extraGroupSpacing;
            tocPage.drawText(entry.title, { x: 50, y: yPos, size: 18, font: tocFont, color: rgb(0.1,0.1,0.1) });
            yPos -= groupRowSpacing;
            currentIndent = 20;
          } else if (entry.type === "pdf") {
            tocPage.drawText("- " + entry.title, { x: 50 + currentIndent, y: yPos, size: textSize, font: tocFont, color: rgb(0.2,0.2,0.2) });
            const pageNumText = entry.startPage.toString();
            const pageNumWidth = tocFont.widthOfTextAtSize(pageNumText, textSize);
            tocPage.drawText(pageNumText, { x: A4_WIDTH - 70 - pageNumWidth, y: yPos, size: textSize, font: tocFont, color: rgb(0.2,0.2,0.2) });
            // Create an internal link annotation linking to the destination page.
            const destPage = mergedPdf.getPage(entry.startPage - 1);
            const linkRect = [50 + currentIndent, yPos, A4_WIDTH - 70, yPos + textSize + 5];
            addInternalLink(tocPage, linkRect, destPage);
            yPos -= pdfRowSpacing;
          }
        }
      }
      // --- ADD "BACK TO TOP" BUTTON ON EVERY CONTENT PAGE ---
      {
        const backButtonWidth = 80;
        const backButtonHeight = 20;
        const backText = "Back to top";
        const backFontSize = 10;
        const backFont = await mergedPdf.embedFont(StandardFonts.Helvetica);
        const tocPageObj = mergedPdf.getPage(coverPagesCount); // TOC is after cover pages
        for (let i = 0; i < totalPages; i++) {
          if (i < nonContentPages) continue;
          const page = mergedPdf.getPage(i);
          const { width, height } = page.getSize();
          const textWidth = backFont.widthOfTextAtSize(backText, backFontSize);
          const xPos = width - backButtonWidth - 10;
          const yPos = 10;
          page.drawRectangle({ x: xPos, y: yPos, width: backButtonWidth, height: backButtonHeight, color: rgb(0.2,0.6,0.86), borderColor: rgb(0.1,0.4,0.7), borderWidth: 1 });
          page.drawText(backText, { x: xPos + (backButtonWidth - textWidth) / 2, y: yPos + (backButtonHeight - backFontSize) / 2, size: backFontSize, font: backFont, color: rgb(1,1,1) });
          const linkRect = [xPos, yPos, xPos + backButtonWidth, yPos + backButtonHeight];
          addInternalLink(page, linkRect, tocPageObj);
        }
      }
      // --- FINALIZE & DOWNLOAD ---
      const mergedPdfBytes = await mergedPdf.save();
      const blob = new Blob([mergedPdfBytes], { type: 'application/pdf' });
      const url = URL.createObjectURL(blob);
      const a = document.createElement('a');
      a.href = url;
      a.download = pdfFilename;
      a.click();
      URL.revokeObjectURL(url);
    });
  </script>
          </body>
          </html>
        </div>
      </div>
    </main>
  </div>
  <script src="https://d3e54v103j8qbb.cloudfront.net/js/jquery-3.5.1.min.dc5e7f18c8.js?site=675661387278edf4cf92de17" type="text/javascript" integrity="sha256-9/aliU8dGd2tb6OSsuzixeV4y/faTqgFtohetphbbj0=" crossorigin="anonymous"></script>
  <script src="/js/webflow.js" type="text/javascript"></script>
` }} />
    </>
  );
}

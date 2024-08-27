import PDFMerger from 'pdf-merger-js';


export const mergePDF=async (p1,p2) => {
  const merger = new PDFMerger();
 await merger.add(p1); 
 await  merger.add(p2);
let d=new Date().getTime();
  await merger.save('public/merged.pdf'); 
  
  
}



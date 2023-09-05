import XLSX from 'sheetjs-style';
import * as FileSaver from 'file-saver';

import { fileExtension, fileType } from './constants';
class Export {
  public async exportToExcel(data: any, fileName: string) {
    const ws = XLSX.utils.json_to_sheet(data);
    const wb = { Sheets: { data: ws }, SheetNames: ['data'] };
    const excelBuffer = XLSX.write(wb, { bookType: 'xlsx', type: 'array' });
    const data1 = new Blob([excelBuffer], { type: fileType });

    FileSaver.saveAs(data1, fileName + fileExtension);
  }
}
// eslint-disable-next-line import/no-anonymous-default-export
export default new Export();

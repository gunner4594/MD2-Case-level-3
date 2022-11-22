import {IManagement} from "./IManagement";
import {Document} from "./Document";

export class DocumentManager implements IManagement<Document> {
    documentList: Document[] = [];
    listOfType: Document[] = [];
    add(t: Document) {
        this.documentList.push(t);
    };

    remove(id: string) {
        let removeItem = this.documentList.filter(document => document.id !== id);
        console.log(removeItem)
    };

    edit(id: string, t: Document) {
        let index = this.findById(id);
        if (index === -1) {
            console.log('Không tìm thấy');
        } else {
            this.documentList[index] = t;
            console.log('Sửa thành công')
        }
    };

    findDocumentByName(name: string): Document[] {
        let findItem = this.documentList.filter(document => document.name === name);
        return findItem;
    };

    findDocumentByType(type: any): any[] {
        this.documentList.forEach((element) =>{
            if(element instanceof type) {
                this.listOfType.push(element)
            }
        })
        return this.listOfType
    };

    findById(id: string) {
        for (let i = 0; i < this.documentList.length; i++) {
            if (this.documentList[i].id === id) {
                return i;
            }
        }
        return -1;
    };

    findAll(): Document[] {
        return this.documentList;
    };
};



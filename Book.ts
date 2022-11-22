import {Document} from "./Document";
export class Book extends Document {
    authorName: string;
    totalPage: number;

    constructor(id: string, publishingCompany: string, totalRelease: number, name: string, authorName: string, totalPage: number) {
        super(id, publishingCompany, totalRelease, name);
        this.authorName = authorName;
        this.totalPage = totalPage;
    }
};




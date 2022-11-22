import {Document} from "./Document";
export class Magazine extends Document {
    issueNumber: number
    releaseMonth: number;

    constructor(id: string, publishingCompany: string, totalRelease: number, name: string, issueNumber: number, releaseMonth: number) {
        super(id, publishingCompany, totalRelease, name);
        this.issueNumber = issueNumber;
        this.releaseMonth = releaseMonth;
    };


}
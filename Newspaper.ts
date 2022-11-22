import {Document} from "./Document";

export class Newspaper extends Document {
    releaseDate: string;

    constructor(id: string, publishingCompany: string, totalRelease: number, name: string, releaseDate: string) {
        super(id, publishingCompany, totalRelease, name);
        this.releaseDate = releaseDate;
    }
}
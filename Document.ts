export class Document {
     id: string;
     publishingCompany: string;
     totalRelease: number;
     name: string;

    constructor(id: string, publishingCompany: string, totalRelease: number, name: string) {
        this.id = id;
        this.publishingCompany = publishingCompany;
        this.totalRelease = totalRelease;
        this.name = name;
    }

    getId(): string {
        return this.id;
    }

    setId(value: string) {
        this.id = value;
    }

    getPublishingCompany(): string {
        return this.publishingCompany;
    }

    setPublishingCompany(value: string) {
        this.publishingCompany = value;
    }

    getTotalRelease(): number {
        return this.totalRelease;
    }

    setTotalRelease(value: number) {
        this.totalRelease = value;
    }

    getName(): string {
        return this.name;
    }

    setName(value: string) {
        this.name = value;
    }
}
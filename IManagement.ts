import {Document} from "./Document";

export interface IManagement<T> {
    add(t: T): void;
    remove(id: string): void;
    edit(id: string, t: T): void;
    findDocumentByName(name: string): T[];
    findDocumentByType(type: any) : any[];
    findAll(): T[];
};
import {DocumentManager} from "./DocumentManager";
import {Document} from "./Document";
import {Book} from "./Book";
import {Newspaper} from "./Newspaper";
import {Magazine} from "./Magazine";

let readlineSync = require('readline-sync');
let documentManager = new DocumentManager();
let book = new Book('B001', 'Kim Đồng', 50, 'Tuổi Hoa', 'Nguyễn Lân', 70);

documentManager.add(book);
console.log(documentManager.findAll());

function addBook () {
    console.log('-----Hiển thị thêm mới sách------');
    let id = readlineSync.question('Enter id : ');
    let publishingCompany = readlineSync.question('Enter Publishing Company : ');
    let totalRelease = +readlineSync.question('Enter Total Release : ');
    let name = readlineSync.question('Enter Name : ');
    let authorName = readlineSync.question('Enter Author Name : ');
    let totalPage = +readlineSync.question('Enter Total Page : ');
    let book = new Book(id, publishingCompany, totalRelease, name, authorName, totalPage);
    documentManager.add(book);
};

function addNewspaper () {
    console.log('-----Hiển thị thêm mới báo------');
    let id = readlineSync.question('Enter id : ');
    let publishingCompany = readlineSync.question('Enter Publishing Company : ');
    let totalRelease = +readlineSync.question('Enter Total Release : ');
    let name = readlineSync.question('Enter Name : ');
    let releaseDate = readlineSync.question('Enter ReleaseDate : ');
    let newspaper = new Newspaper(id, publishingCompany, totalRelease, name, releaseDate);
    documentManager.add(newspaper);
};

function addMagazine () {
    console.log('-----Hiển thị thêm mới tạp chí------');
    let id = readlineSync.question('Enter id : ');
    let publishingCompany = readlineSync.question('Enter Publishing Company : ');
    let totalRelease = +readlineSync.question('Enter Total Release : ');
    let name = readlineSync.question('Enter Name : ');
    let issueNumber = +readlineSync.question('Enter issueNumber : ');
    let releaseMonth = +readlineSync.question('Enter releaseMonth : ');
    let magazine = new Magazine(id, publishingCompany, totalRelease, name, issueNumber, releaseMonth);
    documentManager.add(magazine);
};

function addChoice() {
    let menu = `--------Chọn loại tài liệu muốn thêm ----------
    1.Thêm sách
    2.Thêm báo
    3.Thêm tạp chí
    4.Dừng việc thêm`

    let choice = -1;
    do {
        console.log(menu);
        choice = +readlineSync.question('Enter choice : ');
        switch (choice) {
            case 1:
                addBook();
                break;
            case 2:
                addNewspaper();
                break;
            case 3:
                addMagazine();
                break;
        }
    } while (choice !== 0);
};

function displayAll() {
    console.log('------Hiển thị sản phẩm-------');
    console.log(documentManager.findAll());
};

function displayBook() {
    console.log('------Danh sách toàn bộ sách-------');
    console.log(documentManager.findDocumentByType(Book))
};

function displayNewspaper() {
    console.log('-------Danh sách toàn bộ báo--------');
    console.log(documentManager.findDocumentByType(Newspaper))
};

function displayMagazine() {
    console.log('------Danh sách toàn bộ tạp chí--------');
    console.log(documentManager.findDocumentByType(Magazine))
};

function deleteDocument () {
    console.log('-------Hiển thị form xóa-------');
    let id = readlineSync.question('Enter id : ');
    console.log(documentManager.remove(id))
};

function main() {
    let menu = `--------Menu chính----------
    1.Thêm mới tài liệu
    2.Xóa tài liệu theo mã
    3.Hiển thị tất cả thông tin
    4.Hiển thị sách
    5.Hiển thị báo
    6.Hiển thị tạp chí
    0.Thoát chương trình`

    let choice = -1;
    do {
        console.log(menu);
        choice = +readlineSync.question('Enter choice : ');
        switch (choice) {
            case 1:
                addChoice();
                break;
            case 2:
                deleteDocument();
                break;
            case 3:
                displayAll();
                break;
            case 4:
                displayBook();
                break;
            case 5:
                displayNewspaper();
                break;
            case 6:
                displayMagazine();
                break;
        }
    } while (choice !== 0)
}
main();
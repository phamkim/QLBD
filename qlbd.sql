DROP Database if exists qlbd;
Create Database qlbd default character set utf8 collate utf8_unicode_ci;
USE qlbd;

-- tạo bảng thể loại
create table if not exists theLoai
(
    id int primary key auto_increment,
    tenTheLoai varchar(55) not null,
    ghiChu varchar(255)
);
-- thêm dữ liệu bảng thể loại
insert into theLoai(tenTheLoai,ghiChu)
values ('phim hoạt hình','đây là mô tả');

insert into theLoai(tenTheLoai,ghiChu)
values ('phim hành động','đây là mô tả');

insert into theLoai(tenTheLoai,ghiChu)
values ('phim khoa học viễn tưởng','đây là mô tả');

-- tạo bảng băng đĩa
create table if not exists bangDia
(
    id int primary key auto_increment,
    idTheLoai int not null,
    tenBangDia varchar(55) not null,
    nhaSX varchar(55),
    tinhTrang varchar(55),
    ngayTao date not null default current_timestamp,
    ngaySua date,
    ghiChu varchar(255),
    foreign key(idTheLoai) references theLoai(id)
);

-- thêm dữ liệu bảng băng đĩa
insert into bangDia(idTheLoai,tenBangDia,nhaSX,tinhTrang,ghiChu)
values (1,'phim pikachu','nhật bản','mới','đây là mô tả');

insert into bangDia(idTheLoai,tenBangDia,nhaSX,tinhTrang,ghiChu)
values (2,'phim thành long','trung quốc','mới','đây là mô tả');

insert into bangDia(idTheLoai,tenBangDia,nhaSX,tinhTrang,ghiChu)
values (3,'phim chiến tranh giữa các vì sao','mỹ','mới','đây là mô tả');

-- tạo bảng thành viên
create table if not exists thanhVien
(
    id int primary key auto_increment,
    hoTen varchar(55) not null,
    diaChi varchar(255),
    soCMT char(11) not null,
    ngayTao date not null default current_timestamp,
    ngaySua date,
    phanQuyen int,
    userName varchar(55),
    passW varchar(55)
);
-- thêm dữ liệu bảng thành viên
insert into thanhVien(hoTen,diaChi,soCMT,userName,passW)
values ('phạm hoàng kim','thái nguyên','0912367','kim2k','kim@123');

insert into thanhVien(hoTen,diaChi,soCMT,userName,passW)
values ('cao hải nam','hạ long','0912367','nam2k','nam@123');

insert into thanhVien(hoTen,diaChi,soCMT)
values ('kiều hoàng phúc','hà nội','0912367');


-- tạo bảng phiếu thuê
create table if not exists phieuThue
(
    id int primary key auto_increment,
    ngayThue date not null default current_timestamp,
    ngayTra date,
    ngaySua date,
    idNguoiTao int not null, 
    idNguoiThue int not null,
    soNgayThue int not null,
    foreign key(idNguoiThue) references thanhVien(id)
);
--  thêm dữ liệu bảng phieuThue
insert into phieuThue(idNguoiTao,idNguoiThue,soNgayThue)
values (1,1,20);

insert into phieuThue(idNguoiTao,idNguoiThue,soNgayThue)
values (1,2,20);

insert into phieuThue(idNguoiTao,idNguoiThue,soNgayThue)
values (1,3,20);


-- tạo bảng chi tiết phiểu thuê
create table if not exists chiTietPhieuThue
(
    id int auto_increment,
    idPhieuThue int not null,
    idBangDia int not null,
    soLuong int not null,
    donGia float not null,
    primary key(id,idPhieuThue),
    constraint pk_1 foreign key(idPhieuThue) references phieuThue(id),
    constraint pk_2 foreign key(idbangDia) references bangDia(id)
);
-- thêm dữ liệu bảng chiTietPhieuThue
insert into chiTietPhieuThue(idPhieuThue,idBangDia,soLuong,donGia)
values(1,1,20,23.12);

insert into chiTietPhieuThue(idPhieuThue,idBangDia,soLuong,donGia)
values(1,2,20,23.12);

insert into chiTietPhieuThue(idPhieuThue,idBangDia,soLuong,donGia)
values(1,3,20,23.12);

insert into chiTietPhieuThue(idPhieuThue,idBangDia,soLuong,donGia)
values(2,1,20,23.12);

insert into chiTietPhieuThue(idPhieuThue,idBangDia,soLuong,donGia)
values(3,1,20,23.12);

insert into chiTietPhieuThue(idPhieuThue,idBangDia,soLuong,donGia)
values(3,3,20,23.12);


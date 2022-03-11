drop database if exists qlbd;
create database qlbd default character set utf8 collate utf8_unicode_ci;
use qlbd;

-- tạo bảng thể loại
create table if not exists theLoai
(
    id int primary key auto_increment,
    tenTheLoai varchar(55) not null,
    ghiChu varchar(255)
);
-- thêm dữ liệu bảng thể loại
-- id=1
insert into theLoai(tenTheLoai,ghiChu)
values ('Phim hài','Phim hài là thể loại phim mà các tình tiết chủ yếu tập trung vào những chi tiết hài hước, gây cười cho người xem. Các tình tiết hài trong phim thường được sắp xếp rất khéo léo, ban đầu để người xem cười thoải mái, sau đó sẽ có một khoảng trống (khoảng lặng) để người xem ngẫm lại chi tiết hài mình vừa xem.');
-- id=2
insert into theLoai(tenTheLoai,ghiChu)
values ('Viễn tưởng','Một trong những thể loại phim có mặt đầu tiên, phim khoa học viễn tưởng thường nói về nhứng công nghệ khoa học có thể có trong tương lai, đó có thể là du hành vũ trụ, du hành xuyên thời gian, hay thậm chí là những cuộc chiến với người ngoài hành tinh… Nói chung hầu hết các bộ phim khoa học viễn tưởng thường sử dựng nhiều kĩ xảo, do đó kinh phí thường rất lớn.');
-- id=3
insert into theLoai(tenTheLoai,ghiChu)
values ('Kinh dị','Phim kinh dị được dàn dựng với mục đích làm khiếp sợ, tạo ra cảm giác hồi hộp, và khơi dậy những nỗi lo sợ sâu kín trong thâm tâm của chúng ta . Thường phim kinh dị có một kết thúc rất sốc, gây kinh hãi cho người xem, cũng đồng thời thu hút khán giả ');
-- id=4
insert into theLoai(tenTheLoai,ghiChu)
values ('Viễn tây','Phim Viễn Tây là những bộ phim có bối cảnh đặt trong miền Viễn Tây nước Mĩ (hoặc ở cùng Alaska, Canada hay Australia), trong thời kì lịch sử từ đầu thế kỉ 19 (đặc biệt là từ trận Alamo – 1837) tới đầu thế kỉ 20, nhưng chủ yếu tập trung vào thời kì nội chiến Mĩ, hoặc thời kì đổ xô đi tìm vàng (nửa cuối thế kỉ 19).');
-- id=5
insert into theLoai(tenTheLoai,ghiChu)
values ('Chiến tranh','Phim chiến tranh là những bộ phim có bối cảnh là các cuộc chiến tranh lớn, ví dụ như chiến tranh thế giới, chiến tranh Triều Tiên, chiến tranh Việt Nam, nội chiến Mĩ… trên tất cả các mặt trận: trên không, trên bộ và trên đường biển… ');
-- id=6
insert into theLoai(tenTheLoai,ghiChu)
values ('Tình cảm','phim Tình cảm là những bộ phim thiên hẳn về những chi tiết nặng chất tình yêu nam nữ giữa những nhân vật chính. Một trong những kịch bản kinh điển thường thấy ở các bộ phim tình cảm là sự cuốn hút lẫn nhau giữa các nhân vật, hoặc một tình yêu bất ngờ gặp phải khó khăn nào đó tưởng chừng như không thể vượt qua ');
-- id=7
insert into theLoai(tenTheLoai,ghiChu)
values ('Ca nhạc','Phim ca nhạc là phim mà các lời thoại của những nhân vật trong phim được thay bằng những lời hát của các bản nhạc được sáng tác trước phục vụ cho phim. ');
-- id=8
insert into theLoai(tenTheLoai,ghiChu)
values ('Hoạt hình','Có lẽ phim hoạt hình là một trong những thể loại phim được biết đến rộng rãi nhất, và cũng là thể loại phim dễ nhận diện nhất. Như các bạn đã biết, phim hoạt hình được sản xuất bằng cách cho dịch chuyển nhanh những tấm hình vẽ sẵn, từ đó tạo ra một ảo giác về sự chuyển động của hình vẽ đó. ');
-- id=9
insert into theLoai(tenTheLoai,ghiChu)
values ('Tội phạm','Phim tội phạm là những bộ phim mà nội dung có chứa các tình tiết liên quan tới các hành động trái pháp luật, hoặc những hoạt động của các tổ chức tội phạm và mạng lưới tội phạm ngoài vòng pháp luật. ');
-- id=10
insert into theLoai(tenTheLoai,ghiChu)
values ('Film Noir','Phim Noir là một thuật ngữ điện ảnh có nguồn gốc từ một thuật ngữ tiếng Pháp, dịch theo nghĩa đen là “phim đen” (blackfilm). Thuật ngữ này được sử dụng để chỉ những bộ phim nói về những hành động tội ác trong thế giới ngầm của Hollywood, đặc biệt nhấn mạnh những hành động có sự nhập nhằng giữa các chuẩn mực đạo đức, những đam mê giới tính….');


-- tạo bảng nhà Sản xuất
create table if not exists nhaSX
(
    id int primary key auto_increment,
    tenNhaSX varchar(55) not null,
    diaChi varchar(255)
);
-- thêm dữ liệu bảng nhà Sản xuất
-- id=1
insert into nhaSX(tenNhaSX,diaChi)
values ('Marvel Studios','Oshkosh, Wisconsin');
-- id=2
insert into nhaSX(tenNhaSX,diaChi)
values ('Warner Bros','Oshkosh, Wisconsin');
-- id=3
insert into nhaSX(tenNhaSX,diaChi)
values ('Universal Pictures','Oshkosh, Wisconsin');
-- id=4
insert into nhaSX(tenNhaSX,diaChi)
values ('Walt Disney Studios Motion Pictures','Oshkosh, Wisconsin');
-- id=5
insert into nhaSX(tenNhaSX,diaChi)
values ('20th Century Fox','Oshkosh, Wisconsin');
-- id=6
insert into nhaSX(tenNhaSX,diaChi)
values ('Paramount Pictures','Oshkosh, Wisconsin');
-- id=7
insert into nhaSX(tenNhaSX,diaChi)
values ('Sony Pictures Studios','Oshkosh, Wisconsin');
-- id=8
insert into nhaSX(tenNhaSX,diaChi)
values ('Pixar','Oshkosh, Wisconsin');


-- tạo bảng băng đĩa
create table if not exists bangDia
(
    id int primary key auto_increment,
    hinhAnh text,
    tenBangDia varchar(55) not null,
    idTheLoai int, 
    idNhaSX int,
    tinhTrang varchar(55),
    ngayTao date not null default current_timestamp,
    ngaySua date,
    giaThue float,
    ghiChu varchar(255),
    constraint pk_bd_1 foreign key(idTheLoai) references theLoai(id),
    constraint pk_bd_2 foreign key(idNhaSX) references nhaSX(id)
);

-- thêm dữ liệu bảng băng đĩa

-- id=1
insert into bangDia(tenBangDia,idTheLoai,idNhaSX,tinhTrang,giaThue,ghiChu)
values ('Some Like It Hot',1,4,'Mới',12000,'phim được công nhận là một trong những phim hài hay nhất.');

-- id=2
insert into bangDia(tenBangDia,idTheLoai,idNhaSX,tinhTrang,giaThue,ghiChu)
values ('Man Of The Year',1,2,'Mới',12000,'phim được công nhận là một trong những phim hài hay nhất.');

-- id=3
insert into bangDia(tenBangDia,idTheLoai,idNhaSX,tinhTrang,giaThue,ghiChu)
values ('Dr. Strangelove',1,1,'Mới',12000,'phim được công nhận là một trong những phim hài hay nhất.');

-- id=4
insert into bangDia(tenBangDia,idTheLoai,idNhaSX,tinhTrang,giaThue,ghiChu)
values ('City Lights',1,3,'Mới',12000,'phim được công nhận là một trong những phim hài hay nhất.');

-- id=5
insert into bangDia(tenBangDia,idTheLoai,idNhaSX,tinhTrang,giaThue,ghiChu)
values ('The Pink Panther',1,4,'Mới',12000,'phim được công nhận là một trong những phim hài hay nhất.');

-- id=6
insert into bangDia(tenBangDia,idTheLoai,idNhaSX,tinhTrang,giaThue,ghiChu)
values ('A Space Odyssey',2,4,'Mới',12000,'phim được công nhận là một trong những phim hài hay nhất.');

-- id=7
insert into bangDia(tenBangDia,idTheLoai,idNhaSX,tinhTrang,giaThue,ghiChu)
values ('Back To The Future',2,4,'Mới',12000,'phim được công nhận là một trong những phim hài hay nhất.');

-- id=8
insert into bangDia(tenBangDia,idTheLoai,idNhaSX,tinhTrang,giaThue,ghiChu)
values ('Man In Black ',2,5,'Mới',12000,'phim được công nhận là một trong những phim hài hay nhất.');

-- id=9
insert into bangDia(tenBangDia,idTheLoai,idNhaSX,tinhTrang,giaThue,ghiChu)
values ('Spiderman',2,1,'Mới',12000,'phim được công nhận là một trong những phim hài hay nhất.');

-- id=10
insert into bangDia(tenBangDia,idTheLoai,idNhaSX,tinhTrang,giaThue,ghiChu)
values ('Superman',2,1,'Mới',12000,'phim được công nhận là một trong những phim hài hay nhất.');

-- id=11
insert into bangDia(tenBangDia,idTheLoai,idNhaSX,tinhTrang,giaThue,ghiChu)
values ('A Clcokwork Orange ',2,6,'Mới',12000,'phim được công nhận là một trong những phim hài hay nhất.');

-- id=12
insert into bangDia(tenBangDia,idTheLoai,idNhaSX,tinhTrang,giaThue,ghiChu)
values ('Psycho',3,6,'Mới',12000,'phim được công nhận là một trong những phim hài hay nhất.');

-- id=13
insert into bangDia(tenBangDia,idTheLoai,idNhaSX,tinhTrang,giaThue,ghiChu)
values ('The Silence Of The Lamb',3,6,'Mới',12000,'phim được công nhận là một trong những phim hài hay nhất.');

-- id=14
insert into bangDia(tenBangDia,idTheLoai,idNhaSX,tinhTrang,giaThue,ghiChu)
values ('The Exorcist',3,5,'Mới',12000,'phim được công nhận là một trong những phim hài hay nhất.');

-- id=15
insert into bangDia(tenBangDia,idTheLoai,idNhaSX,tinhTrang,giaThue,ghiChu)
values ('Head Spin',3,6,'Mới',12000,'phim được công nhận là một trong những phim hài hay nhất.');

-- id=16
insert into bangDia(tenBangDia,idTheLoai,idNhaSX,tinhTrang,giaThue,ghiChu)
values ('Paranatural',3,2,'Mới',12000,'phim được công nhận là một trong những phim hài hay nhất.');

-- id=17
insert into bangDia(tenBangDia,idTheLoai,idNhaSX,tinhTrang,giaThue,ghiChu)
values ('The Magnificent Seven',4,7,'Mới',12000,'phim được công nhận là một trong những phim hài hay nhất.');

-- id=18
insert into bangDia(tenBangDia,idTheLoai,idNhaSX,tinhTrang,giaThue,ghiChu)
values ('The Searchers',4,6,'Mới',12000,'phim được công nhận là một trong những phim hài hay nhất.');

-- id=19
insert into bangDia(tenBangDia,idTheLoai,idNhaSX,tinhTrang,giaThue,ghiChu)
values ('High Noon ',4,8,'Mới',12000,'phim được công nhận là một trong những phim hài hay nhất.');

-- id=20
insert into bangDia(tenBangDia,idTheLoai,idNhaSX,tinhTrang,giaThue,ghiChu)
values ('The Quiet Man ',4,5,'Mới',12000,'phim được công nhận là một trong những phim hài hay nhất.');

-- id=21
insert into bangDia(tenBangDia,idTheLoai,idNhaSX,tinhTrang,giaThue,ghiChu)
values ('How The West Was Won',4,3,'Mới',12000,'phim được công nhận là một trong những phim hài hay nhất.');

-- id=22
insert into bangDia(tenBangDia,idTheLoai,idNhaSX,tinhTrang,giaThue,ghiChu)
values ('Shane',4,3,'Mới',12000,'phim được công nhận là một trong những phim hài hay nhất.');

-- id=23
insert into bangDia(tenBangDia,idTheLoai,idNhaSX,tinhTrang,giaThue,ghiChu)
values ('Saving Private Ryan',5,3,'Mới',12000,'phim được công nhận là một trong những phim hài hay nhất.');

-- id=24
insert into bangDia(tenBangDia,idTheLoai,idNhaSX,tinhTrang,giaThue,ghiChu)
values ('SSchindlers List',5,4,'Mới',12000,'phim được công nhận là một trong những phim hài hay nhất.');

-- id=25
insert into bangDia(tenBangDia,idTheLoai,idNhaSX,tinhTrang,giaThue,ghiChu)
values ('The Dirty Dozen',5,4,'Mới',12000,'phim được công nhận là một trong những phim hài hay nhất.');

-- id=26
insert into bangDia(tenBangDia,idTheLoai,idNhaSX,tinhTrang,giaThue,ghiChu)
values ('MacArthur',5,7,'Mới',12000,'phim được công nhận là một trong những phim hài hay nhất.');

-- id=28
insert into bangDia(tenBangDia,idTheLoai,idNhaSX,tinhTrang,giaThue,ghiChu)
values ('Tommy',6,7,'Mới',12000,'phim được công nhận là một trong những phim hài hay nhất.');

-- id=29
insert into bangDia(tenBangDia,idTheLoai,idNhaSX,tinhTrang,giaThue,ghiChu)
values ('Don Lockwood',6,7,'Mới',12000,'phim được công nhận là một trong những phim hài hay nhất.');

-- id=30
insert into bangDia(tenBangDia,idTheLoai,idNhaSX,tinhTrang,giaThue,ghiChu)
values ('The Big Combo',7,5,'Mới',12000,'phim được công nhận là một trong những phim hài hay nhất.');

-- id=30
insert into bangDia(tenBangDia,idTheLoai,idNhaSX,tinhTrang,giaThue,ghiChu)
values ('Rebecca',7,7,'Mới',12000,'phim được công nhận là một trong những phim hài hay nhất.');

-- id=31
insert into bangDia(tenBangDia,idTheLoai,idNhaSX,tinhTrang,giaThue,ghiChu)
values ('Double Indemnity',7,2,'Mới',12000,'phim được công nhận là một trong những phim hài hay nhất.');

-- id=32
insert into bangDia(tenBangDia,idTheLoai,idNhaSX,tinhTrang,giaThue,ghiChu)
values ('Snow White and the Seven Dwarfs',8,7,'Mới',12000,'phim được công nhận là một trong những phim hài hay nhất.');

-- id=33
insert into bangDia(tenBangDia,idTheLoai,idNhaSX,tinhTrang,giaThue,ghiChu)
values ('Snow White and the Seven Dwarfs',8,3,'Mới',12000,'phim được công nhận là một trong những phim hài hay nhất.');

-- id=34
insert into bangDia(tenBangDia,idTheLoai,idNhaSX,tinhTrang,giaThue,ghiChu)
values ('Ratatouille',8,3,'Mới',12000,'phim được công nhận là một trong những phim hài hay nhất.');

-- id=35
insert into bangDia(tenBangDia,idTheLoai,idNhaSX,tinhTrang,giaThue,ghiChu)
values ('Finding Nemo',8,3,'Mới',12000,'phim được công nhận là một trong những phim hài hay nhất.');

-- id=36
insert into bangDia(tenBangDia,idTheLoai,idNhaSX,tinhTrang,giaThue,ghiChu)
values ('Sleeping Beauty',8,3,'Mới',12000,'phim được công nhận là một trong những phim hài hay nhất.');

-- id=37
insert into bangDia(tenBangDia,idTheLoai,idNhaSX,tinhTrang,giaThue,ghiChu)
values ('The Freshman',9,3,'Mới',12000,'phim được công nhận là một trong những phim hài hay nhất.');

-- id=38
insert into bangDia(tenBangDia,idTheLoai,idNhaSX,tinhTrang,giaThue,ghiChu)
values ('Stock and Two Smoking Barrels ',9,2,'Mới',12000,'phim được công nhận là một trong những phim hài hay nhất.');

-- id=39
insert into bangDia(tenBangDia,idTheLoai,idNhaSX,tinhTrang,giaThue,ghiChu)
values ('Double Indemnity ',9,2,'Mới',12000,'phim được công nhận là một trong những phim hài hay nhất.');

-- id=40
insert into bangDia(tenBangDia,idTheLoai,idNhaSX,tinhTrang,giaThue,ghiChu)
values ('The Sting',9,2,'Mới',12000,'phim được công nhận là một trong những phim hài hay nhất.');

-- id=41
insert into bangDia(tenBangDia,idTheLoai,idNhaSX,tinhTrang,giaThue,ghiChu)
values ('Courtroom Drama',9,2,'Mới',12000,'phim được công nhận là một trong những phim hài hay nhất.');

-- id=42
insert into bangDia(tenBangDia,idTheLoai,idNhaSX,tinhTrang,giaThue,ghiChu)
values ('The Godfather',10,2,'Mới',12000,'phim được công nhận là một trong những phim hài hay nhất.');

-- id=43
insert into bangDia(tenBangDia,idTheLoai,idNhaSX,tinhTrang,giaThue,ghiChu)
values ('Scarface',10,5,'Mới',12000,'phim được công nhận là một trong những phim hài hay nhất.');

-- id=44
insert into bangDia(tenBangDia,idTheLoai,idNhaSX,tinhTrang,giaThue,ghiChu)
values ('Once Upon a Time in America',10,5,'Mới',12000,'phim được công nhận là một trong những phim hài hay nhất.');

-- id=45
insert into bangDia(tenBangDia,idTheLoai,idNhaSX,tinhTrang,giaThue,ghiChu)
values ('To Kill A Mockingbird',10,5,'Mới',12000,'phim được công nhận là một trong những phim hài hay nhất.');


-- tạo bảng thành viên
create table if not exists thanhVien
(
    id int primary key auto_increment,
    maTTV varchar(10),
    hoTen varchar(55) not null,
    diaChi varchar(255),
    soCMT char(11) not null,
    ngayTao date not null default current_timestamp,
    ngaySua date,
    phanQuyen int default 0,
    userName varchar(55),
    passW varchar(55)
);
-- thêm dữ liệu bảng thành viên
-- id=1
insert into thanhVien(maTTV,hoTen,diaChi,soCMT,userName,passW)
values ('TV01','phạm hoàng kim','thái nguyên','0912367','kim2k','kim@123');
-- id=2
insert into thanhVien(maTTV,hoTen,diaChi,soCMT,userName,passW)
values ('TV02','cao hải nam','hạ long','0912367','nam2k','nam@123');
-- id=3
insert into thanhVien(maTTV,hoTen,diaChi,soCMT)
values ('TV03','kiều hoàng phúc','hà nội','0912367');
-- id=4
insert into thanhVien(maTTV,hoTen,diaChi,soCMT)
values ('TV04','lò văng hoàng','điện biên','0912367');
-- id=5
insert into thanhVien(maTTV,hoTen,diaChi,soCMT)
values ('TV05','vũ ngọc khanh','hà nội','0912367');
-- id=6
insert into thanhVien(maTTV,hoTen,diaChi,soCMT)
values ('TV06','lê diên mạnh','hà nội','0912367');
-- id=7
insert into thanhVien(maTTV,hoTen,diaChi,soCMT)
values ('TV07','nông văn bửu','hà nội','0912367');
-- id=9
insert into thanhVien(maTTV,hoTen,diaChi,soCMT)
values ('TV08','vũ hoàng long','hà nội','0912367');
-- id=9
insert into thanhVien(maTTV,hoTen,diaChi,soCMT)
values ('TV09','nguyễn thì thi','hà nội','0912367');
-- id=10
insert into thanhVien(maTTV,hoTen,diaChi,soCMT)
values ('TV010','hoàng huyền trang','hà nội','0912367');



-- tạo bảng phiếu thuê
create table if not exists phieuThue
(
    id int primary key auto_increment,
    ngayThue date not null default current_timestamp,
    ngayHenTra date,
    ngayTra date,
    ngaySua date,
    idNguoiThue int not null,
    foreign key(idNguoiThue) references thanhVien(id)
);
--  thêm dữ liệu bảng phieuThue
-- tháng 1/2021
-- id=1
insert into phieuThue(idNguoiThue,ngayThue,ngayHenTra,ngayTra)
values (1,"2021-01-01","2021-05-05","2021-05-05");
-- id=2
insert into phieuThue(idNguoiThue,ngayThue,ngayHenTra,ngayTra)
values (1,"2021-01-01","2021-05-05","2021-05-05");
-- id=3
insert into phieuThue(idNguoiThue,ngayThue,ngayHenTra,ngayTra)
values (1,"2021-01-01","2021-05-05","2021-05-05");
-- id=4
insert into phieuThue(idNguoiThue,ngayThue,ngayHenTra,ngayTra)
values (2,"2021-01-01","2021-05-05","2021-05-05");
-- id=5
insert into phieuThue(idNguoiThue,ngayThue,ngayHenTra,ngayTra)
values (2,"2021-01-01","2021-05-05","2021-05-05");
-- id=6
insert into phieuThue(idNguoiThue,ngayThue,ngayHenTra,ngayTra)
values (2,"2021-01-01","2021-05-05","2021-05-05");
-- id=7
insert into phieuThue(idNguoiThue,ngayThue,ngayHenTra,ngayTra)
values (3,"2021-01-01","2021-05-05","2021-05-05");
-- id=8
insert into phieuThue(idNguoiThue,ngayThue,ngayHenTra,ngayTra)
values (4,"2021-01-01","2021-05-05","2021-05-05");
-- id=9
insert into phieuThue(idNguoiThue,ngayThue,ngayHenTra,ngayTra)
values (5,"2021-01-01","2021-05-05","2021-05-05");
-- id=10
insert into phieuThue(idNguoiThue,ngayThue,ngayHenTra,ngayTra)
values (2,"2021-01-01","2021-05-05","2021-05-05");

-- tháng 2/2021
-- id=11
insert into phieuThue(idNguoiThue,ngayThue,ngayHenTra,ngayTra)
values (3,"2021-02-01","2021-05-05","2021-05-05");
-- id=12
insert into phieuThue(idNguoiThue,ngayThue,ngayHenTra,ngayTra)
values (2,"2021-02-01","2021-05-05","2021-05-05");
-- id=13
insert into phieuThue(idNguoiThue,ngayThue,ngayHenTra,ngayTra)
values (5,"2021-02-01","2021-05-05","2021-05-05");
-- id=14
insert into phieuThue(idNguoiThue,ngayThue,ngayHenTra,ngayTra)
values (7,"2021-02-01","2021-05-05","2021-05-05");
-- id=15
insert into phieuThue(idNguoiThue,ngayThue,ngayHenTra,ngayTra)
values (2,"2021-02-01","2021-05-05","2021-05-05");
-- id=16
insert into phieuThue(idNguoiThue,ngayThue,ngayHenTra,ngayTra)
values (9,"2021-02-01","2021-05-05","2021-05-05");

-- tháng 3/2021
-- id=17
insert into phieuThue(idNguoiThue,ngayThue,ngayHenTra,ngayTra)
values (2,"2021-03-01","2021-05-05","2021-05-05");
-- id=18
insert into phieuThue(idNguoiThue,ngayThue,ngayHenTra,ngayTra)
values (1,"2021-03-01","2021-05-05","2021-05-05");
-- id=19
insert into phieuThue(idNguoiThue,ngayThue,ngayHenTra,ngayTra)
values (2,"2021-03-01","2021-05-05","2021-05-05");
-- id=20
insert into phieuThue(idNguoiThue,ngayThue,ngayHenTra,ngayTra)
values (5,"2021-03-01","2021-05-05","2021-05-05");
-- id=21
insert into phieuThue(idNguoiThue,ngayThue,ngayHenTra,ngayTra)
values (9,"2021-03-01","2021-05-05","2021-05-05");

-- tháng 4/2021
-- id=22
insert into phieuThue(idNguoiThue,ngayThue,ngayHenTra,ngayTra)
values (10,"2021-04-01","2021-05-05","2021-05-05");
-- id=23
insert into phieuThue(idNguoiThue,ngayThue,ngayHenTra,ngayTra)
values (3,"2021-04-01","2021-05-05","2021-05-05");
-- id=24
insert into phieuThue(idNguoiThue,ngayThue,ngayHenTra,ngayTra)
values (1,"2021-04-01","2021-05-05","2021-05-05");
-- id=25
insert into phieuThue(idNguoiThue,ngayThue,ngayHenTra,ngayTra)
values (4,"2021-04-01","2021-05-05","2021-05-05");
-- id=26
insert into phieuThue(idNguoiThue,ngayThue,ngayHenTra,ngayTra)
values (3,"2021-04-01","2021-05-05","2021-05-05");

-- tháng 5/2021
-- id=27
insert into phieuThue(idNguoiThue,ngayThue,ngayHenTra,ngayTra)
values (8,"2021-05-01","2021-05-05","2021-05-05");
-- id=28
insert into phieuThue(idNguoiThue,ngayThue,ngayHenTra,ngayTra)
values (3,"2021-05-01","2021-05-05","2021-05-05");
-- id=29
insert into phieuThue(idNguoiThue,ngayThue,ngayHenTra,ngayTra)
values (10,"2021-05-01","2021-05-05","2021-05-05");
-- id=30
insert into phieuThue(idNguoiThue,ngayThue,ngayHenTra,ngayTra)
values (2,"2021-05-01","2021-05-05","2021-05-05");

-- tháng 6/2021
-- id=31
insert into phieuThue(idNguoiThue,ngayThue,ngayHenTra,ngayTra)
values (6,"2021-06-01","2021-06-05","2021-06-05");
-- id=32
insert into phieuThue(idNguoiThue,ngayThue,ngayHenTra,ngayTra)
values (5,"2021-06-01","2021-06-05","2021-06-05");
-- id=33
insert into phieuThue(idNguoiThue,ngayThue,ngayHenTra,ngayTra)
values (4,"2021-06-01","2021-06-05","2021-06-05");
-- id=34
insert into phieuThue(idNguoiThue,ngayThue,ngayHenTra,ngayTra)
values (9,"2021-06-01","2021-06-05","2021-06-05");

-- tháng 7/2021
-- id=35
insert into phieuThue(idNguoiThue,ngayThue,ngayHenTra,ngayTra)
values (6,"2021-07-01","2021-07-05","2021-07-05");
-- id=36
insert into phieuThue(idNguoiThue,ngayThue,ngayHenTra,ngayTra)
values (7,"2021-07-01","2021-07-05","2021-07-05");
-- id=37
insert into phieuThue(idNguoiThue,ngayThue,ngayHenTra,ngayTra)
values (9,"2021-07-01","2021-07-05","2021-07-05");
-- id=38
insert into phieuThue(idNguoiThue,ngayThue,ngayHenTra,ngayTra)
values (6,"2021-07-01","2021-07-05","2021-07-05");

-- tháng 8/2021
-- id=39
insert into phieuThue(idNguoiThue,ngayThue,ngayHenTra,ngayTra)
values (6,"2021-08-01","2021-08-05","2021-08-05");
-- id=40
insert into phieuThue(idNguoiThue,ngayThue,ngayHenTra,ngayTra)
values (6,"2021-08-01","2021-08-05","2021-08-05");
-- id=41
insert into phieuThue(idNguoiThue,ngayThue,ngayHenTra,ngayTra)
values (4,"2021-08-01","2021-08-05","2021-08-05");
-- id=42
insert into phieuThue(idNguoiThue,ngayThue,ngayHenTra,ngayTra)
values (6,"2021-08-01","2021-08-05","2021-08-05");
-- id=43
insert into phieuThue(idNguoiThue,ngayThue,ngayHenTra,ngayTra)
values (4,"2021-08-01","2021-08-05","2021-08-05");
-- id=44
insert into phieuThue(idNguoiThue,ngayThue,ngayHenTra,ngayTra)
values (6,"2021-08-01","2021-08-05","2021-08-05");
-- id=45
insert into phieuThue(idNguoiThue,ngayThue,ngayHenTra,ngayTra)
values (7,"2021-08-01","2021-08-05","2021-08-05");

-- tháng 9/2021
-- id=46
insert into phieuThue(idNguoiThue,ngayThue,ngayHenTra,ngayTra)
values (7,"2021-09-01","2021-09-05","2021-09-05");
-- id=47
insert into phieuThue(idNguoiThue,ngayThue,ngayHenTra,ngayTra)
values (6,"2021-09-01","2021-09-05","2021-09-05");
-- id=48
insert into phieuThue(idNguoiThue,ngayThue,ngayHenTra,ngayTra)
values (10,"2021-09-01","2021-09-05","2021-09-05");
-- id=49
insert into phieuThue(idNguoiThue,ngayThue,ngayHenTra,ngayTra)
values (6,"2021-09-01","2021-09-05","2021-09-05");
-- id=50
insert into phieuThue(idNguoiThue,ngayThue,ngayHenTra,ngayTra)
values (10,"2021-09-01","2021-09-05","2021-09-05");
-- id=51
insert into phieuThue(idNguoiThue,ngayThue,ngayHenTra,ngayTra)
values (6,"2021-09-01","2021-09-05","2021-09-05");
-- id=52
insert into phieuThue(idNguoiThue,ngayThue,ngayHenTra,ngayTra)
values (9,"2021-09-01","2021-09-05","2021-09-05");
-- id=53
insert into phieuThue(idNguoiThue,ngayThue,ngayHenTra,ngayTra)
values (6,"2021-09-01","2021-09-05","2021-09-05");
-- id=54
insert into phieuThue(idNguoiThue,ngayThue,ngayHenTra,ngayTra)
values (10,"2021-09-01","2021-09-05","2021-09-05");
-- id=55
insert into phieuThue(idNguoiThue,ngayThue,ngayHenTra,ngayTra)
values (6,"2021-09-01","2021-09-05","2021-09-05");
-- id=56
insert into phieuThue(idNguoiThue,ngayThue,ngayHenTra,ngayTra)
values (6,"2021-09-01","2021-09-05","2021-09-05");
-- id=57
insert into phieuThue(idNguoiThue,ngayThue,ngayHenTra,ngayTra)
values (1,"2021-09-01","2021-09-05","2021-09-05");

-- tạo bảng chi tiết phiểu thuê
create table if not exists chiTietPhieuThue
(
    id int primary key auto_increment,
    idPhieuThue int not null,
    idBangDia int not null,
    soLuong int not null,
    donGia float not null,
    constraint pk_1 foreign key(idPhieuThue) references phieuThue(id),
    constraint pk_2 foreign key(idbangDia) references bangDia(id)
);
-- thêm dữ liệu bảng chiTietPhieuThue
-- idphieuThue = 1 
insert into chiTietPhieuThue(idPhieuThue,idBangDia,soLuong,donGia) values
(1,13,20,20000),
(1,33,2,20000),
(1,23,2,20000),
(1,43,2,20000),
(1,43,2,20000);

-- idphieuThue = 2
insert into chiTietPhieuThue(idPhieuThue,idBangDia,soLuong,donGia) values
(2,15,20,20000),
(2,16,2,20000),
(2,27,2,20000),
(2,38,2,20000),
(2,19,2,20000);

-- idphieuThue = 3
insert into chiTietPhieuThue(idPhieuThue,idBangDia,soLuong,donGia) values
(3,1,20,20000),
(3,10,2,20000),
(3,9,2,20000),
(3,8,2,20000),
(3,5,2,20000);

-- idphieuThue = 4
insert into chiTietPhieuThue(idPhieuThue,idBangDia,soLuong,donGia) values
(4,1,20,20000),
(4,5,2,20000),
(4,2,2,20000),
(4,7,2,20000),
(4,9,2,20000);
-- idphieuThue = 5
insert into chiTietPhieuThue(idPhieuThue,idBangDia,soLuong,donGia) values
(5,18,20,20000),
(5,41,2,20000),
(5,43,2,20000),
(5,10,2,20000),
(5,39,2,20000);
-- idphieuThue = 6
insert into chiTietPhieuThue(idPhieuThue,idBangDia,soLuong,donGia) values
(6,1,20,20000),
(6,6,2,20000),
(6,2,2,20000),
(6,8,2,20000),
(6,9,2,20000);
-- idphieuThue = 7
insert into chiTietPhieuThue(idPhieuThue,idBangDia,soLuong,donGia) values
(7,1,20,20000),
(7,36,2,20000),
(7,23,2,20000),
(7,38,2,20000),
(7,9,2,20000);
-- idphieuThue = 8
insert into chiTietPhieuThue(idPhieuThue,idBangDia,soLuong,donGia) values
(8,1,20,20000),
(8,17,2,20000),
(8,27,2,20000),
(8,5,2,20000),
(8,4,2,20000);
-- idphieuThue = 9
insert into chiTietPhieuThue(idPhieuThue,idBangDia,soLuong,donGia) values
(9,13,20,20000),
(9,6,2,20000),
(9,25,2,70000),
(9,7,2,20000),
(9,41,2,20000);
-- idphieuThue = 10
insert into chiTietPhieuThue(idPhieuThue,idBangDia,soLuong,donGia) values
(10,1,20,20000),
(10,6,2,20000),
(10,2,2,50000),
(10,45,2,20000),
(10,9,2,20000);
-- idphieuThue = 11
insert into chiTietPhieuThue(idPhieuThue,idBangDia,soLuong,donGia) values
(11,1,20,20000),
(11,6,2,20000),
(11,10,2,20000),
(11,8,2,20000),
(11,9,2,20000);
-- idphieuThue = 12
insert into chiTietPhieuThue(idPhieuThue,idBangDia,soLuong,donGia) values
(12,41,20,20000),
(12,6,2,20000),
(12,42,2,40000),
(12,8,2,20000),
(12,25,2,20000);
-- idphieuThue = 13
insert into chiTietPhieuThue(idPhieuThue,idBangDia,soLuong,donGia) values
(13,1,20,20000),
(13,6,2,20000),
(13,2,2,20000),
(13,8,2,20000),
(13,9,2,20000);
-- idphieuThue = 14
insert into chiTietPhieuThue(idPhieuThue,idBangDia,soLuong,donGia) values
(14,1,20,20000),
(14,6,2,50000),
(14,2,2,20000),
(14,8,2,20000),
(14,9,2,20000);
-- idphieuThue = 15
insert into chiTietPhieuThue(idPhieuThue,idBangDia,soLuong,donGia) values
(15,16,20,20000),
(15,6,2,20000),
(15,2,2,120000),
(15,38,2,20000),
(15,9,2,20000);
-- idphieuThue = 16
insert into chiTietPhieuThue(idPhieuThue,idBangDia,soLuong,donGia) values
(16,1,20,20000),
(16,6,2,20000),
(16,2,2,20000),
(16,8,2,20000),
(16,9,2,20000);
-- idphieuThue = 17
insert into chiTietPhieuThue(idPhieuThue,idBangDia,soLuong,donGia) values
(17,1,20,20000),
(17,6,2,20000),
(17,22,2,20000),
(17,8,2,120000),
(17,39,2,20000);
-- idphieuThue = 18
insert into chiTietPhieuThue(idPhieuThue,idBangDia,soLuong,donGia) values
(18,1,20,20000),
(18,6,2,20000),
(18,2,2,20000),
(18,8,2,20000),
(18,9,2,20000);
-- idphieuThue = 19
insert into chiTietPhieuThue(idPhieuThue,idBangDia,soLuong,donGia) values
(19,1,20,20000),
(19,6,2,20000),
(19,2,2,20000),
(19,8,2,20000),
(19,10,2,20000);
-- idphieuThue = 20
insert into chiTietPhieuThue(idPhieuThue,idBangDia,soLuong,donGia) values
(20,1,20,20000),
(20,6,2,20000),
(20,2,2,20000),
(20,8,2,20000),
(20,9,2,20000);
-- idphieuThue = 21
insert into chiTietPhieuThue(idPhieuThue,idBangDia,soLuong,donGia) values
(21,1,20,20000),
(21,36,2,20000),
(21,2,2,20000),
(21,38,2,20000),
(21,9,2,20000);
-- idphieuThue = 22
insert into chiTietPhieuThue(idPhieuThue,idBangDia,soLuong,donGia) values
(22,1,20,20000),
(22,6,2,20000),
(22,2,2,20000),
(22,8,2,20000),
(22,9,2,20000);
-- idphieuThue = 23
insert into chiTietPhieuThue(idPhieuThue,idBangDia,soLuong,donGia) values
(23,1,20,20000),
(23,6,2,20000),
(23,32,2,20000),
(23,38,2,20000),
(23,9,2,20000);
-- idphieuThue = 24
insert into chiTietPhieuThue(idPhieuThue,idBangDia,soLuong,donGia) values
(24,1,20,20000),
(24,6,2,20000),
(24,32,2,20000),
(24,18,2,20000),
(24,9,2,20000);
-- idphieuThue = 25
insert into chiTietPhieuThue(idPhieuThue,idBangDia,soLuong,donGia) values
(25,11,20,20000),
(25,16,2,20000),
(25,42,2,20000),
(25,8,2,20000),
(25,29,2,20000);
-- idphieuThue = 26
insert into chiTietPhieuThue(idPhieuThue,idBangDia,soLuong,donGia) values
(26,1,20,20000),
(26,6,2,20000),
(26,2,2,20000),
(26,8,2,20000),
(26,9,2,20000);
-- idphieuThue = 27
insert into chiTietPhieuThue(idPhieuThue,idBangDia,soLuong,donGia) values
(27,21,20,20000),
(27,6,2,20000),
(27,25,2,420000),
(27,28,2,20000),
(27,39,2,20000);
-- idphieuThue = 28
insert into chiTietPhieuThue(idPhieuThue,idBangDia,soLuong,donGia) values
(28,21,20,20000),
(28,6,2,20000),
(28,32,2,20000),
(28,8,2,20000),
(28,9,2,20000);
-- idphieuThue = 29
insert into chiTietPhieuThue(idPhieuThue,idBangDia,soLuong,donGia) values
(29,1,20,20000),
(29,6,2,20000),
(29,2,2,20000),
(29,8,2,20000),
(29,9,2,20000);
-- idphieuThue = 30
insert into chiTietPhieuThue(idPhieuThue,idBangDia,soLuong,donGia) values
(30,1,20,20000),
(30,10,2,20000),
(30,32,2,520000),
(30,8,2,20000),
(30,29,2,20000);
-- idphieuThue = 31
insert into chiTietPhieuThue(idPhieuThue,idBangDia,soLuong,donGia) values
(31,31,20,20000),
(31,7,2,250000),
(31,32,2,20000),
(31,8,2,20000),
(31,9,2,20000);
-- idphieuThue = 32
insert into chiTietPhieuThue(idPhieuThue,idBangDia,soLuong,donGia) values
(32,1,20,20000),
(32,6,2,20000),
(32,2,2,240000),
(32,4,2,20000),
(32,9,2,20000);
-- idphieuThue = 33
insert into chiTietPhieuThue(idPhieuThue,idBangDia,soLuong,donGia) values
(33,1,20,20000),
(33,6,2,20000),
(33,32,2,20000),
(33,8,2,20000),
(33,9,2,20000);
-- idphieuThue = 34
insert into chiTietPhieuThue(idPhieuThue,idBangDia,soLuong,donGia) values
(34,21,20,20000),
(34,25,2,20000),
(34,22,2,20000),
(43,28,2,20000),
(43,29,2,20000);

-- idphieuThue = 35
insert into chiTietPhieuThue(idPhieuThue,idBangDia,soLuong,donGia) values
(35,1,20,20000),
(35,6,2,20000),
(35,2,2,120000),
(35,8,2,20000),
(35,9,2,20000);
-- idphieuThue = 36
insert into chiTietPhieuThue(idPhieuThue,idBangDia,soLuong,donGia) values
(36,1,20,20000),
(36,25,2,20000),
(36,42,2,20000),
(36,8,2,20000),
(36,19,2,20000);
-- idphieuThue = 37
insert into chiTietPhieuThue(idPhieuThue,idBangDia,soLuong,donGia) values
(37,1,20,20000),
(37,6,2,220000),
(37,2,2,20000),
(37,8,2,20000),
(37,9,2,20000);
-- idphieuThue = 38
insert into chiTietPhieuThue(idPhieuThue,idBangDia,soLuong,donGia) values
(38,16,20,20000),
(38,6,2,20000),
(38,25,2,20000),
(38,8,2,20000),
(38,9,2,20000);
-- idphieuThue = 39
insert into chiTietPhieuThue(idPhieuThue,idBangDia,soLuong,donGia) values
(39,1,20,20000),
(39,6,2,20000),
(39,32,2,20000),
(39,8,2,420000),
(39,39,2,20000);
-- idphieuThue = 40
insert into chiTietPhieuThue(idPhieuThue,idBangDia,soLuong,donGia) values
(40,1,20,20000),
(40,6,2,20000),
(40,32,2,20000),
(40,8,2,20000),
(40,9,2,20000);
-- idphieuThue = 41
insert into chiTietPhieuThue(idPhieuThue,idBangDia,soLuong,donGia) values
(41,11,20,20000),
(41,6,2,20000),
(41,12,2,20000),
(41,8,2,20000),
(41,19,2,920000);
-- idphieuThue = 42
insert into chiTietPhieuThue(idPhieuThue,idBangDia,soLuong,donGia) values
(42,1,20,20000),
(42,26,2,20000),
(42,23,2,20000),
(42,34,2,20000),
(42,19,2,20000);
-- idphieuThue = 43
insert into chiTietPhieuThue(idPhieuThue,idBangDia,soLuong,donGia) values
(43,1,20,20000),
(43,16,2,20000),
(43,2,2,20000),
(43,8,2,20000),
(43,9,2,20000);
-- idphieuThue = 44
insert into chiTietPhieuThue(idPhieuThue,idBangDia,soLuong,donGia) values
(44,1,20,620000),
(44,6,2,20000),
(44,2,2,20000),
(44,8,2,20000),
(44,9,2,20000);
-- idphieuThue = 45
insert into chiTietPhieuThue(idPhieuThue,idBangDia,soLuong,donGia) values
(45,1,20,20000),
(45,3,2,20000),
(45,22,2,20000),
(45,8,2,20000),
(45,39,2,20000);
-- idphieuThue = 46
insert into chiTietPhieuThue(idPhieuThue,idBangDia,soLuong,donGia) values
(46,11,20,20000),
(46,6,2,20000),
(46,5,2,20000),
(46,8,2,20000),
(46,9,2,20000);
-- idphieuThue = 47
insert into chiTietPhieuThue(idPhieuThue,idBangDia,soLuong,donGia) values
(47,1,20,20000),
(47,6,2,20000),
(47,23,2,20000),
(47,8,2,20000),
(47,3,2,20000);
-- idphieuThue = 48
insert into chiTietPhieuThue(idPhieuThue,idBangDia,soLuong,donGia) values
(48,1,20,20000),
(48,6,2,20000),
(48,2,2,20000),
(48,8,2,20000),
(48,9,2,20000);
-- idphieuThue = 49
insert into chiTietPhieuThue(idPhieuThue,idBangDia,soLuong,donGia) values
(49,10,20,20000),
(49,6,2,20000),
(49,20,2,62000),
(49,8,2,20000),
(49,9,2,20000);
-- idphieuThue = 50
insert into chiTietPhieuThue(idPhieuThue,idBangDia,soLuong,donGia) values
(50,1,20,20000),
(50,6,2,20000),
(50,32,2,32000),
(50,8,2,20000),
(50,39,2,20000);
-- idphieuThue = 51
insert into chiTietPhieuThue(idPhieuThue,idBangDia,soLuong,donGia) values
(51,31,20,200000),
(51,6,2,20000),
(51,2,2,20000),
(51,7,2,32000),
(51,9,2,20000);
-- idphieuThue = 52
insert into chiTietPhieuThue(idPhieuThue,idBangDia,soLuong,donGia) values
(52,10,20,20000),
(52,6,2,20000),
(52,2,2,20000),
(52,8,2,320000),
(52,9,2,20000);
-- idphieuThue = 53
insert into chiTietPhieuThue(idPhieuThue,idBangDia,soLuong,donGia) values
(53,1,20,20000),
(53,26,2,20000),
(53,7,2,20000),
(53,18,2,20000),
(53,9,2,20000);
-- idphieuThue = 54
insert into chiTietPhieuThue(idPhieuThue,idBangDia,soLuong,donGia) values
(54,1,20,20000),
(54,6,2,20000),
(54,2,2,20000),
(54,8,2,20000),
(54,9,2,20000);
-- idphieuThue = 55
insert into chiTietPhieuThue(idPhieuThue,idBangDia,soLuong,donGia) values
(55,41,20,20000),
(55,5,2,20000),
(55,32,2,204000),
(55,8,2,20000),
(55,9,2,20000);
-- idphieuThue = 56
insert into chiTietPhieuThue(idPhieuThue,idBangDia,soLuong,donGia) values
(56,1,20,20000),
(56,3,2,20000),
(56,5,2,20000),
(56,8,2,20000),
(56,3,2,20000);
-- idphieuThue = 57
insert into chiTietPhieuThue(idPhieuThue,idBangDia,soLuong,donGia) values
(57,1,20,20000),
(57,6,2,20000),
(57,5,2,20000),
(57,37,2,200000),
(57,3,2,200000);




CREATE OR REPLACE VIEW viewDoanhThuTheoNgay as
SELECT  LEFT(phieuthue.ngayThue,7) as monthYear, SUM(chitietphieuthue.soLuong*chitietphieuthue.donGia) as tongTien
FROM phieuthue,chitietphieuthue
WHERE phieuthue.id = chitietphieuthue.idPhieuThue
GROUP BY phieuthue.id, phieuthue.ngayThue;



CREATE OR REPLACE VIEW viewDoanhThuTheoThang as
SELECT monthYear,tongTien
FROM viewDoanhThuTheoNgay
GROUP BY viewDoanhThuTheoNgay.monthYear
ORDER BY monthYear;



CREATE OR REPLACE VIEW luotThueBangDia AS
SELECT chitietphieuthue.idBangDia, COUNT(chitietphieuthue.idBangDia) as luotThue
FROM chitietphieuthue
GROUP BY chitietphieuthue.idBangDia;


CREATE OR REPLACE VIEW luotthuebangdiafull AS
SELECT bangdia.tenBangDia,bangdia.idTheLoai, luotThueBangDia.luotThue
FROM bangdia,luotThueBangDia
WHERE bangdia.id = luotThueBangDia.idBangDia
ORDER BY luotThueBangDia.luotThue DESC;


CREATE OR REPLACE VIEW topthanhvien AS
SELECT thanhvien.hoTen,COUNT(phieuthue.id) as luotThue
FROM phieuthue,thanhvien
WHERE phieuthue.idNguoiThue =thanhvien.id
GROUP BY phieuthue.idNguoiThue
ORDER BY luotThue DESC LIMIT 10;

CREATE OR REPLACE VIEW toptheloai AS
SELECT theloai.tenTheLoai, COUNT(luotthuebangdiafull.luotThue) as luotThue
FROM theloai,luotthuebangdiafull
WHERE theloai.id = luotthuebangdiafull.idTheLoai
GROUP BY luotthuebangdiafull.idTheLoai
ORDER BY luotThue DESC LIMIT 10;



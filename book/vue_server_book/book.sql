SET NAMES UTF8;
DROP DATABASE IF EXISTS book;
CREATE DATABASE book CHARSET=UTF8;
USE book;
CREATE TABLE book_user(
    uid INT PRIMARY KEY AUTO_INCREMENT,
    uname VARCHAR(10),
    email VARCHAR(16),
    upwd VARCHAR(32),
    reupwd VARCHAR(32)
);
INSERT INTO book_user VALUES('1','mint','666@qq.com','666666','666666');
INSERT INTO book_user VALUES('','pb','123@qq.com','123456','123456');


CREATE TABLE book_product(
    pid INT PRIMARY KEY AUTO_INCREMENT,
    pname VARCHAR(20),
    price DECIMAL(4,2),
    category VARCHAR(20),
    salesvol INT(5),
    reserve INT(5),
    author VARCHAR(10),
    decrible VARCHAR(500),
    pic VARCHAR(255)

);
INSERT INTO book_product VALUES('1','等你回来花就开','19.60','四川文艺出版社','20','10','周语,陈吉秀','《等你回来花就开（情感卷）》是“小时光”最美阅读系列之一，为情感主题。','01.jpg');
INSERT INTO book_product VALUES('','零下一度','18.90','天津人民出版社','20','10','韩寒','《零下一度》是韩寒的随笔、杂文和短篇小说的合集。韩寒的文风机智泼辣，语言幽默、诙谐，充满奇特想象，真实地反...','02.jpg');
INSERT INTO book_product VALUES('','吃出来的健康','20.90','辽宁科技技术出版社','20','10','陈培毅','吃对了，就能吃出健康，把吃出来的疾病，再吃回去！《吃出来的健康》介绍了生活中最常见的基本食材，包括肉、米、面、蛋、奶、豆类、蔬菜、水果、菌藻、饮用水等的食用方法和养生...','04.jpg');
INSERT INTO book_product VALUES('','息影天后','16.60','天津人民出版社','20','10','顾苏','在走投无路时，她卖身给了娱乐星公司，为了走红，昧着良心炒作绯闻，蒋大BOSS却一句话把她拍死：“想要做我女朋友，你还不够格。”','03.jpg');
INSERT INTO book_product VALUES('','微雪','19.90','译林出版社','20','10','饶雪漫','《微雪》讲述的正是米砂的故事，在好友莫醒醒离开之后，她独自面临着爱情的背叛、去留的选择，而父亲的新恋情和母亲的失...','05.jpg');
INSERT INTO book_product VALUES('','哈哈1','16.90','译林出版社','20','10','贾名','《微雪》讲述的正是米砂的故事，在好友莫醒醒离开之后，她独自面临着爱情的背叛、去留的选择，而父亲的新恋情和母亲的失...','06.png');
INSERT INTO book_product VALUES('','哈哈2','10.90','译林出版社','20','10','贾名','《微雪》讲述的正是米砂的故事，在好友莫醒醒离开之后，她独自面临着爱情的背叛、去留的选择，而父亲的新恋情和母亲的失...','06.png');
INSERT INTO book_product VALUES('','哈哈3','16.50','译林出版社','20','10','贾名','《微雪》讲述的正是米砂的故事，在好友莫醒醒离开之后，她独自面临着爱情的背叛、去留的选择，而父亲的新恋情和母亲的失...','06.png');
INSERT INTO book_product VALUES('','哈哈4','11.90','译林出版社','20','10','贾名','《微雪》讲述的正是米砂的故事，在好友莫醒醒离开之后，她独自面临着爱情的背叛、去留的选择，而父亲的新恋情和母亲的失...','06.png');
INSERT INTO book_product VALUES('','哈哈5','12.90','译林出版社','20','10','贾名','《微雪》讲述的正是米砂的故事，在好友莫醒醒离开之后，她独自面临着爱情的背叛、去留的选择，而父亲的新恋情和母亲的失...','06.png');
INSERT INTO book_product VALUES('','哈哈6','15.30','译林出版社','20','10','贾名','《微雪》讲述的正是米砂的故事，在好友莫醒醒离开之后，她独自面临着爱情的背叛、去留的选择，而父亲的新恋情和母亲的失...','06.png');
INSERT INTO book_product VALUES('','哈哈7','11.60','译林出版社','20','10','贾名','《微雪》讲述的正是米砂的故事，在好友莫醒醒离开之后，她独自面临着爱情的背叛、去留的选择，而父亲的新恋情和母亲的失...','06.png');

CREATE TABLE book_cart(
    id INT PRIMARY KEY AUTO_INCREMENT,
    uid INT,
    pid INT,
    price DECIMAL(4,2),
    pname VARCHAR(20),
    count INT
);
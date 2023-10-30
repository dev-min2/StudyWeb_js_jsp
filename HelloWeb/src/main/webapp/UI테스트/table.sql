create tabel book (
 book_code varchar2(10) primary key,
 book_title varchar2(30) not null,
 book_author varchar2(30) not null,
 book_press varchar2(30) not null,
 book_price number not null
);

insert into book values('B0001', '이것이 자바다', '윤성빈', '한빛미디어', 20000);
insert into book values('B0002', '스프링5 입문', '최범균', '가메출판사', 25000);
insert into book values('B0003', '리액티브 프로그래밍', '김시영', '위키북스', 27000);
insert into book values('B0004', '자바스크립트 입문', '정인용', '이지스퍼블리싱', 20000);
insert into book values('B0005', 'JSP 프로그래밍', '오정임', '루비페이퍼', 23000);

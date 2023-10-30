package org.yedam.service.serviceimpl;

import java.sql.Connection;
import java.sql.PreparedStatement;
import java.sql.ResultSet;
import java.util.ArrayList;
import java.util.List;

import org.yedam.common.DBConnectionPool;
import org.yedam.service.BookService;
import org.yedam.service.BookVO;

public class BookServiceImpl implements BookService {
	private PreparedStatement pstmt;
	@Override
	public List<BookVO> getBookList() {
		List<BookVO> ret = new ArrayList<BookVO>();
		Connection conn = DBConnectionPool.getInstance().getPoolConnection();
		
		String sql = "SELECT * FROM BOOK";
		try {
			pstmt = conn.prepareStatement(sql);
			ResultSet rs = pstmt.executeQuery();
			while(rs.next()) {
				BookVO vo = new BookVO();
				vo.setBookCode(rs.getString("BOOK_CODE"));
				vo.setBookTitle(rs.getString("BOOK_TITLE"));
				vo.setBookAuthor(rs.getString("BOOK_AUTHOR"));
				vo.setBookPress(rs.getString("BOOK_PRESS"));
				vo.setBookPrice(rs.getInt("BOOK_PRICE"));
				
				ret.add(vo);
			}
			
			rs.close();
		}
		catch(Exception e) {
			e.printStackTrace();
		}
		finally {
			close(conn);
		}
		
		return ret;
	}
	
	private void close(Connection conn) {
		try {
			if(pstmt != null)
				pstmt.close();
			if(conn != null) {
				conn.setAutoCommit(true);
				DBConnectionPool.getInstance().returnConnection(conn);
			}
		}
		catch(Exception e) {
			e.printStackTrace();
		}
	}

}

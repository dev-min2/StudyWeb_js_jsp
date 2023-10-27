package org.yedam.service;

import java.sql.Connection;
import java.sql.PreparedStatement;
import java.sql.ResultSet;
import java.util.ArrayList;
import java.util.List;

import org.yedam.common.DBConnectionPool;

public class MemberServiceImpl implements MemberService {
	private PreparedStatement pstmt;
	
	@Override
	public List<MemberVO> memberList() {
		List<MemberVO> ret = new ArrayList<MemberVO>();
		Connection conn = DBConnectionPool.getInstance().getPoolConnection();
		
		String sql = "SELECT * FROM MEMBER";
		try {
			pstmt = conn.prepareStatement(sql);
			ResultSet rs = pstmt.executeQuery();
			while(rs.next()) {
				MemberVO vo = new MemberVO();
				vo.setMid(rs.getString("MID"));
				vo.setPass(rs.getString("PASS"));
				vo.setName(rs.getString("NAME"));
				vo.setPhone(rs.getString("PHONE"));
				
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
			if(conn != null)
				DBConnectionPool.getInstance().returnConnection(conn);
		}
		catch(Exception e) {
			e.printStackTrace();
		}
	}
}

package org.yedam.service.serviceimpl;

import java.sql.Connection;
import java.sql.PreparedStatement;
import java.sql.ResultSet;
import java.util.ArrayList;
import java.util.List;

import org.yedam.common.DBConnectionPool;
import org.yedam.service.MemberService;
import org.yedam.service.MemberVO;

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
			if(conn != null) {
				conn.setAutoCommit(true);
				DBConnectionPool.getInstance().returnConnection(conn);
			}
		}
		catch(Exception e) {
			e.printStackTrace();
		}
	}


	@Override
	public boolean addMember(MemberVO vo) {
		boolean ret = false;
		Connection conn = DBConnectionPool.getInstance().getPoolConnection();
		
		String sql = "INSERT INTO MEMBER VALUES(?,?,?,?)";
		try {
			pstmt = conn.prepareStatement(sql);
			pstmt.setString(1, vo.getMid());
			pstmt.setString(2, vo.getPass());
			pstmt.setString(3, vo.getName());
			pstmt.setString(4, vo.getPhone());
			
			int result = pstmt.executeUpdate();
			ret = result > 0 ? true : false;
		}
		catch(Exception e) {
			e.printStackTrace();
		}
		finally {
			close(conn);
		}
		
		return ret;
	}


	@Override
	public boolean updateMember(MemberVO vo) {
		boolean ret = false;
		Connection conn = DBConnectionPool.getInstance().getPoolConnection();
		
		String sql = "UPDATE MEMBER SET PASS = ?, NAME = ?, PHONE = ? WHERE MID = ?";
		try {
			pstmt = conn.prepareStatement(sql);
			pstmt.setString(1, vo.getPass());
			pstmt.setString(2, vo.getName());
			pstmt.setString(3, vo.getPhone());
			pstmt.setString(4, vo.getMid());
			
			int result = pstmt.executeUpdate();
			ret = result > 0 ? true : false;
		}
		catch(Exception e) {
			e.printStackTrace();
		}
		finally {
			close(conn);
		}
		
		return ret;
	}
}

package org.yedam;

import java.io.IOException;
import java.io.PrintWriter;
import java.util.List;

import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import org.yedam.service.MemberService;
import org.yedam.service.MemberServiceImpl;
import org.yedam.service.MemberVO;

/**
 * Servlet implementation class MemberListServ
 */
@WebServlet("/MemberListServJson")
public class MemberListServJson extends HttpServlet {
	private static final long serialVersionUID = 1L;
       
    /**
     * @see HttpServlet#HttpServlet()
     */
    public MemberListServJson() {
        super();
        // TODO Auto-generated constructor stub
    }

	/**
	 * @see HttpServlet#doGet(HttpServletRequest request, HttpServletResponse response)
	 */
	protected void doGet(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
		// TODO Auto-generated method stub
		response.setCharacterEncoding("UTF-8");
		response.setContentType("text/json; charset=UTF-8");
		
		MemberService service = new MemberServiceImpl();
		List<MemberVO> memList = service.memberList();
		
		PrintWriter out = response.getWriter();
		// 라이브러리 없이 JSON형태로.
		String str = "[";
		
		int idx = 0;
		for(MemberVO vo : memList) {
			str += "{";
			str += "\"mid\":\"" + vo.getMid() + "\",";
			str += "\"pass\":\"" + vo.getPass() + "\",";
			str += "\"name\":\"" + vo.getName() + "\",";
			str += "\"phone\":\"" + vo.getPhone() + "\"";
			str += "}";
			if(++idx != memList.size()) {
				str += ",";
			}
		}
		str += "]";
		out.print(str);
	}

	/**
	 * @see HttpServlet#doPost(HttpServletRequest request, HttpServletResponse response)
	 */
	protected void doPost(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
		// TODO Auto-generated method stub
	}

}

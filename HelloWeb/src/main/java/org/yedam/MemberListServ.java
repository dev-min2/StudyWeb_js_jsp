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
@WebServlet("/MemberListServ")
public class MemberListServ extends HttpServlet {
	private static final long serialVersionUID = 1L;
       
    /**
     * @see HttpServlet#HttpServlet()
     */
    public MemberListServ() {
        super();
        // TODO Auto-generated constructor stub
    }

	/**
	 * @see HttpServlet#doGet(HttpServletRequest request, HttpServletResponse response)
	 */
	protected void doGet(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
		// TODO Auto-generated method stub
		response.setCharacterEncoding("UTF-8");
		response.setContentType("text/xml; charset=UTF-8");
		
		MemberService service = new MemberServiceImpl();
		List<MemberVO> memList = service.memberList();
		
		PrintWriter out = response.getWriter();
		String str = "<dataset>";
		
		for(MemberVO vo : memList) {
			str += "<record>";
			str += "<mid>" + vo.getMid() + "</mid>";
			str += "<pass>" + vo.getPass() + "</pass>";
			str += "<name>" + vo.getName() + "</name>";
			str += "<phone>" + vo.getPhone() + "</phone>";
			str += "</record>";
		}
		
		str += "</dataset>";
		out.print(str);
	}

	/**
	 * @see HttpServlet#doPost(HttpServletRequest request, HttpServletResponse response)
	 */
	protected void doPost(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
		// TODO Auto-generated method stub
	}

}

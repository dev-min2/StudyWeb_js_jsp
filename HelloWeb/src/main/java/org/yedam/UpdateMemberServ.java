package org.yedam;

import java.io.IOException;
import java.io.PrintWriter;
import java.util.HashMap;
import java.util.Map;

import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import org.yedam.service.MemberService;
import org.yedam.service.MemberVO;
import org.yedam.service.serviceimpl.MemberServiceImpl;

import com.google.gson.Gson;
import com.google.gson.GsonBuilder;

/**
 * Servlet implementation class UpdateMemberServ
 */
@WebServlet("/UpdateMemberServ")
public class UpdateMemberServ extends HttpServlet {
	private static final long serialVersionUID = 1L;
       
    /**
     * @see HttpServlet#HttpServlet()
     */
    public UpdateMemberServ() {
        super();
        // TODO Auto-generated constructor stub
    }

	/**
	 * @see HttpServlet#doGet(HttpServletRequest request, HttpServletResponse response)
	 */
	protected void doGet(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
		// TODO Auto-generated method stub
		
		// TODO Auto-generated method stub
		//doGet(request, response);
		response.setCharacterEncoding("UTF-8");
		response.setContentType("text/html; charset=UTF-8");
		
		String mid = request.getParameter("mid");
		String password = request.getParameter("pass");
		String name = request.getParameter("name");
		String phone = request.getParameter("phone");
		if(mid == null)
			return;
		
		PrintWriter out = response.getWriter();
		MemberService svc = new MemberServiceImpl();
		MemberVO vo = new MemberVO(mid,password,name,phone);

		// 자바 객체 <-> json89
		Gson gson = new GsonBuilder().create();
		gson.toJson(vo); 
		//String json = gson.toJson(map);
		
		Map<String, Object> map = new HashMap<>();
		if(svc.updateMember(vo)) {
			map.put("retCode", "OK");
			map.put("vo", vo);
		}
		else {
			map.put("retCode", "NG");
			map.put("vo", vo.getMid());
		}
			
		// Map타입도 변환이가능.
		String json = gson.toJson(map);
		out.print(json);
		
	}

	/**
	 * @see HttpServlet#doPost(HttpServletRequest request, HttpServletResponse response)
	 */
	protected void doPost(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {

	}

}

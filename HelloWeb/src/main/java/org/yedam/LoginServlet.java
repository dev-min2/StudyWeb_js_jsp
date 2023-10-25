package org.yedam;

import java.io.IOException;
import java.io.PrintWriter;
import java.util.HashMap;
import java.util.Map;
import java.util.Map.Entry;
import java.util.Set;

import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

/**
 * Servlet implementation class LoginServlet
 */
@WebServlet("/LoginServlet")
public class LoginServlet extends HttpServlet {
	private static final long serialVersionUID = 1L;
       
    /**
     * @see HttpServlet#HttpServlet()
     */
    public LoginServlet() {
        super();
        // TODO Auto-generated constructor stub
    }

	/**
	 * @see HttpServlet#doGet(HttpServletRequest request, HttpServletResponse response)
	 */
	protected void doGet(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
		// TODO Auto-generated method stub
		//response.getWriter().append("Served at: ").append(request.getContextPath());
		
		Map<String, Integer> map = new HashMap<>();
		map.put("갓민교", 100);
		map.put("갓경석", 100);
		map.put("갓현진", 100);
		
		response.setCharacterEncoding("UTF-8");
		response.setContentType("text/html; charset=UTF-8");
		PrintWriter pw = response.getWriter();
		
		pw.print("<h3>학생 이름과 점수</h3>");

		String str = "<table border='1'><thead><tr>";
		str += "<th>학생이름</th><th>점수</th></tr></thead>";
		str += "<tbody>";
		
		Set<Entry<String, Integer>> entry = map.entrySet();

		
		for(Entry<String,Integer> data : entry) {
			str += "<tr><td>";
			str += data.getKey();
			str += "</td>";
			
			str += "<td>";
			str += data.getValue().toString();
			str += "</td></tr>";
		}
		
		str += "</tbody></table>";
		
		pw.print(str);
		pw.print("<a href='index.html'>첫페이지</a>");
	}

	/**
	 * @see HttpServlet#doPost(HttpServletRequest request, HttpServletResponse response)
	 */
	protected void doPost(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
		// TODO Auto-generated method stub
		doGet(request, response);
	}

}

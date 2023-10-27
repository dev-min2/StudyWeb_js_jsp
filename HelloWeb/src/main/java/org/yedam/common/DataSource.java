package org.yedam.common;

import java.sql.Connection;
import java.sql.DriverManager;

public class DataSource {
	private DataSource() {}
	
	private static DataSource instance = null;
	
	
	//jdbc
	private static String dbDriver = "oracle.jdbc.OracleDriver";
	private static String dbUrl = "jdbc:oracle:thin:@localhost:1521:xe";
	private static String dbId = "hr";
	private static String dbPwd = "1234";
	
	private static Connection conn;
	
	public static DataSource getInstance() {
		if(instance == null) {
			instance = new DataSource();
		}
		return instance;
	}
	
	public Connection getConnection() {
		try {
			Class.forName(dbDriver);
			conn = DriverManager.getConnection(dbUrl, dbId, dbPwd );
		}
		catch(Exception e) {
			e.printStackTrace();
		}
		
		return conn;
	}
	
}
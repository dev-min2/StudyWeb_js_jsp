package org.yedam.service;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@AllArgsConstructor // 모든 매개값을 가지는 생성자
@NoArgsConstructor
public class MemberVO {
	private String mid;
	private String pass;
	private String name;
	private String phone;
}

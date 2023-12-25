package org.dsi.entity;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;

import org.hibernate.annotations.ColumnDefault;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;


@Entity @AllArgsConstructor @Data @NoArgsConstructor
public class Menu {
	
	@Id
	@GeneratedValue(strategy = GenerationType.AUTO)
	private Long id;
	
	private Double prix;
	
	private String title;
	
	@ColumnDefault(value = "null")
	@Column(length = 999999999) 
	private String Image;

}

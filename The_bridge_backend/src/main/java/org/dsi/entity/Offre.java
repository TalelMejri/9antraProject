package org.dsi.entity;

import javax.persistence.Entity;
import javax.persistence.Id;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;


@Entity @Data @AllArgsConstructor @NoArgsConstructor
public class Offre {
 
	@Id
	private int code;
	private String intitulé;
	private String specialité;
	private String Sociéte;
	private int nbposte;
	private String pays;

}

package org.dsi.controller;

import java.util.List;

import org.dsi.entity.Menu;
import org.dsi.service.MenuService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import net.minidev.json.JSONObject;

@RestController
public class MenuController {

	@Autowired
	MenuService MenuService;
	
	@PostMapping("/AddMenu")
	public ResponseEntity<?> AddMenu(@RequestBody Menu payload){
		MenuService.addMenu(payload);
		JSONObject json=new JSONObject();
		json.appendField("Message","Added Menu With Success");
		return ResponseEntity.ok(json);
	}
	
	@DeleteMapping("/DeleteMenu")
	public ResponseEntity<?> DeleteMenu(@RequestParam("id") long id){
		try {
			MenuService.delete(id);
			JSONObject json=new JSONObject();
			json.appendField("Message","Delete Menu With Success");
			return ResponseEntity.ok(json);
		}catch (Exception e) {
			 return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).body("Error while Delete Menu");
		}
	}
	
	@PutMapping("/UpdateMenu") 
	public ResponseEntity<?> UpdateMenu(@RequestParam("id") long id,@RequestBody Menu menu){
		try {
			MenuService.Updatemenu(id, menu);
			JSONObject json=new JSONObject();
			json.appendField("Message","Updated Menu With Success");
			return ResponseEntity.ok(json);
		}catch (Exception e) {
			 return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).body("Error while Delete Menu");
		}
	}
	
	@GetMapping("/GetById")
	public ResponseEntity<?> UpdateMenu(@RequestParam("id") long id){
		try {
			Menu data=MenuService.getMenuById(id);
			JSONObject json=new JSONObject();
			json.appendField("data",data);
			return ResponseEntity.ok(json);
		}catch (Exception e) {
			 return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).body("Error while Delete Menu");
		}
	}
	
	@GetMapping("/getAll")
	public ResponseEntity<?> getAll(){
		List<Menu> menu=MenuService.getAll();
		JSONObject json=new JSONObject();
		json.appendField("data",menu);
		return ResponseEntity.ok(json);
	}
	
	
}

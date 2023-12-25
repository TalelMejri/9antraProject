package org.dsi.service;

import java.util.List;

import org.dsi.entity.Menu;
import org.dsi.repo.MenuRepo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;


@Service
public class MenuService {

	@Autowired
	MenuRepo MenuRepo;
	
	public void addMenu(Menu data) {
		Menu menu=new Menu();
		menu.setImage(data.getImage());
		menu.setPrix(data.getPrix());
		menu.setTitle(data.getTitle());
		MenuRepo.save(menu);
	}
	
	public void delete(long id) throws Exception {
		if(MenuRepo.findById(id).get()!=null) {
			MenuRepo.deleteById(id);
		}else {
			throw new Exception("Menu Not Found");
		}
	}
	
	public void Updatemenu(long id,Menu menu) throws Exception {
		if(MenuRepo.findById(id).get()!=null) {
			menu.setId(id);
			MenuRepo.save(menu);
		}else {
			throw new Exception("Menu Not Found");
		}
	}
	
	public Menu getMenuById(long id) throws Exception {
		if(MenuRepo.findById(id).get()!=null) {
			return MenuRepo.findById(id).get();
		}else {
			throw new Exception("Menu Not Found");
		}
	}
	
	public List<Menu> getAll(){
		return MenuRepo.findAll();
	}
	
	
}

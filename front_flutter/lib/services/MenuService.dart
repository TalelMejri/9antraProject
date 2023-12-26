import 'dart:convert';
import 'package:front_flutter/Model/Menu.dart';
import 'package:http/http.dart' as http;


class MenuService  {
      List<Menu> menu=[];
      String url="http://10.0.2.2:8000"; // for emulator
      //String url="http://192.168.1.19:8000/Todo"; // android externe

  Future<List<Menu>> AllMenu() async {
  try {
     final Uri uri = Uri.parse('$url/getAll');
     final response = await http.get(uri);
    if (response.statusCode == 200) {
        final  jsonData = jsonDecode(response.body)['data'];
        print(jsonData);
        /* for (var item in jsonData) {
          todos.add(Todo.fromJson(item));
        }*/
        menu = jsonData.map<Menu>((json) => Menu.fromJson(json)).toList();
        return menu;
    }else{
      return [];
    }
  } catch (e) {
    print('Error fetching menu: $e');
    return [];
  }
}

}
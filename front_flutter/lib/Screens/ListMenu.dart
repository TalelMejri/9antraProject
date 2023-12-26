import 'package:flutter/material.dart';
import 'package:front_flutter/Model/Menu.dart';
import 'package:front_flutter/services/MenuService.dart';
import 'dart:convert';
import 'dart:io';

class MyWidget extends StatefulWidget {
  const MyWidget({super.key});

  @override
  State<MyWidget> createState() => _MyWidgetState();
}

class _MyWidgetState extends State<MyWidget> {

   List<Menu> menus = [];
  MenuService menuservice = MenuService();
 @override
  void initState() {
    super.initState();
    fetchMenu();
  }
  
  Future<void> fetchMenu() async {
    menus = await menuservice.AllMenu();
    setState(() {});
  }

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: AppBar(
        backgroundColor: Colors.green,
        title: const Text('List Menu',style: TextStyle(color: Colors.white),),
      ),
      body: Padding(padding: EdgeInsets.all(10),
      child: GridView.builder(
        gridDelegate: const SliverGridDelegateWithFixedCrossAxisCount(
          crossAxisCount: 2,
        ),
        itemCount: menus.length,
        itemBuilder: (BuildContext context, int index) {
          return Card(
            child: Column(
              children: [
               Image.memory(
                  width: 200,
                  height: 100,
                  base64Decode((menus[index].image).split(',').last),
                  ),
                  SizedBox(height: 10),
                Row(
                  mainAxisAlignment: MainAxisAlignment.center,
                  children: [
                    Text("Title :",style: TextStyle(color: Colors.red),),
                    Text(menus[index].title),
                  ],
                ),
                 Row(
                  mainAxisAlignment: MainAxisAlignment.center,
                  children: [
                    Text("Prix :",style: TextStyle(color: Colors.red),),
                    Text(menus[index].prix.toString() +" TND"),
                  ],
                ),
              ],
            ),
          );
        },
      ),
      ),
    );
  }
}
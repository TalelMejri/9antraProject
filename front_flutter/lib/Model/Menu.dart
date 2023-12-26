import 'dart:ffi';

class Menu{

  int id;
  String title;
  double prix;
  String image;

   Menu(
      {
      required this.id,
      required this.title,
      required this.prix,
      required this.image,
      });
      
      factory Menu.fromJson(Map<String,dynamic> json){
        return Menu(
          id: json['id'], 
          title: json['title'],
          prix: json['prix'],
          image: json['image']
        );
      }

  Map<String, dynamic> toJson() {
    return {
        'id':id,
        'title': title, 
        'prix': prix, 
        'image': image
      };
  }

   @override
  String toString() {
    return 'Menu{id: $id, title: $title, prix: $prix, image: $image}';
  }
 
}
// class User{ // js de bir sınıf tanımı yapıyoruz. sınıf aynı türden nesneler örnegın kullanıcılar üretmek için bir şablondur. layout mantıgı gibi.
//     //gelen paramtreler
//     constructor(username, email){ // constructor sınıftan yeni bir nesne ( new User) oluşturuldugunda ilk çalışan fonksiyondur. parametre olarak parantez içindeki veriler alınır
//         this.username = username; // diyerek nesnete bu degerler atanır. ( new User)
//         this.email = email;
//     }

//     //fonksiyonlar dışarıda

//     login(){
//         // return `${this.username} giriş yaptı`;
//         return this;
//     }
//     logout(){
//         // return `${this.username} çıkış yaptı`;
//         return this;
//     }
// }

// const userOne =  new User ('Mehmet', 'mehmet@gmail.com'); // obje ıcınden gonderdıgımız parametreler
// const userTwo = new User ('Rıdvan', 'ridvan@ridvanguzel.com'); // yeni bir kullanıcı oluşturur
// console.log(userOne.login() , userTwo.logout());
// // userOne.login().logout().login();

class User {
  constructor(username, email) {
    this.username = username;
    this.email = email;
  }
  login(){
    return `${this.username} giriş yaptı`;
  }
  logout(){
    return `${this.email} çıkış yaptı`;
  }
}

class Admin extends User{
    deleteUser(deletedUser){
        users = users.filter((user) => user.username !== deletedUser.username);
    }
}
const userOne = new User("Mehmet", "mehmet@gmail.com");
const userTwo = new User("Rıdvan", "risdvan@ridvanguzel.com");
const adminUser = new Admin("Admin", "admin@gmail.com");

let users = [userOne, userTwo, adminUser];
adminUser.deleteUser(userOne);


console.log(userOne, userTwo, adminUser);
console.log(users);
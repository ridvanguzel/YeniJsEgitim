class User {
  constructor(username, email) {
    this.username = username;
    this.email = email;
  }
  login() {
    return `${this.username} giriş yaptı`;
  }
  logout() {
    return `${this.email} çıkış yaptı`;
  }
}

class Admin extends User{ // user sınıfından miras ınheritance alır. Yani Admin aslında bir User'dır, ama ekstraları vardır.
    constructor(username, email ,title){
        super(username, email); // super(...) user sınıfının constructorını calıstırır admin olusturulurken hem username ve email hedme ek olarak admı nclassındaki this.title ı gelir
        this.title = title;
    }
    deleteUser(deletedUsers){
        users = users.filter((user) => user.username !== deletedUsers.username); // filter() ile gelen deletedUsers.username dışındakileri filtreleyerek diziyi yeniden oluşturur.
    }
}

const userOne = new User('Mehmet', 'mehmet@gmail.com');
const userTwo = new User('Rıdvan', 'ridvan@ridvanguzel.com');
const adminUser = new Admin('Admin', 'admin@gmail.com', 'Kitap Kategori Admini');


let users = [userOne, userTwo, adminUser];
adminUser.deleteUser(userOne);
// console.log(userOne, userTwo, adminUser);
console.log(users);





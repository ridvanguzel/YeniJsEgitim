
class User{ // js de bir sınıf tanımı yapıyoruz. sınıf aynı türden nesneler örnegın kullanıcılar üretmek için bir şablondur. layout mantıgı gibi. 
    //gelen paramtreler
    constructor(username, email){ // constructor sınıftan yeni bir nesne ( new User) oluşturuldugunda ilk çalışan fonksiyondur. parametre olarak parantez içindeki veriler alınır
        this.username = username; // diyerek nesnete bu degerler atanır. ( new User)
        this.email = email;
    }

    //fonksiyonlar dışarıda

    login(){
        // return `${this.username} giriş yaptı`;
        return this;
    }
    logout(){
        // return `${this.username} çıkış yaptı`;
        return this;
    }
}

const userOne =  new User ('Mehmet', 'mehmet@gmail.com'); // obje ıcınden gonderdıgımız parametreler
const userTwo = new User ('Rıdvan', 'ridvan@ridvanguzel.com'); // yeni bir kullanıcı oluşturur
console.log(userOne.login() , userTwo.logout());
// userOne.login().logout().login();

import { Injectable } from '@angular/core';
import { SQLite, SQLiteObject } from '@awesome-cordova-plugins/sqlite/ngx';
import { ToastController } from '@ionic/angular';
import { BehaviorSubject } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class DbserviceService {

   public db!: SQLiteObject;

    // observable
    private isDBReady: BehaviorSubject<boolean> = new BehaviorSubject(false); 

  constructor(private sqlite: SQLite, private toastController: ToastController) { 
    this.initDatabase(), this.initDatabase2(); 
  }

  private initDatabase() {
    this.sqlite.create({
      name: 'migueldb.db',
      location: 'default'
    }).then((db: SQLiteObject) => {
      this.db = db;
      this.createTables();
      this.isDBReady.next(true); // Emitimos true cuando la base de datos esté lista
      this.presentToast('Base de datos y tabla creadas con éxito');
    }).catch(error => console.log(error));
  }


  private initDatabase2() {
    this.sqlite.create({
      name: 'casosdb.db',
      location: 'default'
    }).then((db: SQLiteObject) => {
      this.db = db;
      this.createTables2();
      this.isDBReady.next(true); // Emitimos true cuando la base de datos esté lista
      this.presentToast('Base de datos y tabla creadas con éxito');
    }).catch(error => console.log(error));
  }



  private createTables() {
    this.db.executeSql(
      `CREATE TABLE IF NOT EXISTS usuarios (
        id INTEGER PRIMARY KEY AUTOINCREMENT,
        usuario TEXT,
        password TEXT,
        nombre TEXT,
        apellido TEXT,
        nivel_estudios TEXT,
        fecha_nacimiento TEXT,
        casos TEXT
      )`, [])
      .then(() => this.presentToast('Table created'))
      .catch(error => this.presentToast('Error creating table' + error));
  }

  private createTables2() {
    this.db.executeSql(
      `CREATE TABLE IF NOT EXISTS casos (
        id INTEGER PRIMARY KEY AUTOINCREMENT,
        casoID TEXT,
        casoUbica TEXT,
        casoCausa TEXT,
        casoSex TEXT,
        casoEdad TEXT,
        casoEstat TEXT
      )`, [])
      .then(() => this.presentToast('Table created'))
      .catch(error => this.presentToast('Error creating table' + error));
  }



  validarUsuario(usuario: string, password: string) {
    return this.db.executeSql('SELECT * FROM usuarios WHERE usuario = ? AND password = ?', [usuario, password])
      .then((res) => {
        if (res.rows.length > 0) {
          return res.rows.item(0); // Retorna el primer usuario que coincide
        } else {
          return null; // Retorna null si no se encontró ningún usuario
        }
      })
      .catch(error =>  this.presentToast('Error al obtener usuario por credenciales:' + error));
  }



  insertUsuario(nombre: any, apellido: any, usuario: any, password: any, selectedOption: any, selectedDate: any) {
    return this.db.executeSql(`
      INSERT INTO usuarios (nombre, apellido, usuario, password, nivel_de_estudios, fecha_nacimiento) VALUES (?, ?, ?, ?, ?, ?);
    `, [nombre, apellido, usuario, password, selectedOption, selectedDate])
    .then(() => this.presentToast('Usuario insertado correctamente'))
    .catch(error => this.presentToast('Error al insertar usuario:'+ error));
  }

 
  insertCaso(casoID: any, casoUbica: any, casoCausa: any, casoSex: any, casoEdad: any, casoEstat: any) {
    return this.db.executeSql(`
      INSERT INTO usuarios (casoID, casoUbica, casoCausa, casoSex, casoEdad, casoEstat) VALUES (?, ?, ?, ?, ?, ?);
    `, [casoID, casoUbica, casoCausa, casoSex, casoEdad, casoEstat])
    .then(() => this.presentToast('Caso insertado correctamente'))
    .catch(error => this.presentToast('Error al insertar caso:'+ error));
  }

 

 

  private async presentToast(message: string) {
    const toast = await this.toastController.create({
      message: message,
      duration: 2000
    });
    toast.present();
  }

  
  getIsDBReady() {
    return this.isDBReady.asObservable();
  }





}
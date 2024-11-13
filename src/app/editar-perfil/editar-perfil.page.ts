import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';
import { Storage } from '@ionic/storage-angular';

@Component({
  selector: 'app-editar-perfil',
  templateUrl: './editar-perfil.page.html',
  styleUrls: ['./editar-perfil.page.scss'],
})
export class EditarPerfilPage implements OnInit {
  perfil = {
    nombre: '',
    correo: '',
    telefono: '',
    edad: null
  };

  constructor(private navCtrl: NavController, private storage: Storage) {}

  async ngOnInit() {
    // Inicializa el almacenamiento y carga los datos del perfil
    await this.storage.create();
    this.cargarPerfil();
  }

  async cargarPerfil() {
    // Cargar datos del perfil desde el almacenamiento
    const perfilGuardado = await this.storage.get('perfil');
    if (perfilGuardado) {
      this.perfil = perfilGuardado;
    }
  }

  async guardarCambios() {
    // Guardar datos actualizados en el almacenamiento
    await this.storage.set('perfil', this.perfil);
    console.log('Perfil actualizado:', this.perfil);
    this.navCtrl.navigateBack('/perfil'); // Navega de vuelta al perfil
  }

  cambiarFoto() {
    // Aquí se podría implementar una función para cambiar la foto
    console.log('Cambiar foto de perfil');
  }
}

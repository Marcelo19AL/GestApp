import { Component, OnInit } from '@angular/core';
import { Storage } from '@ionic/storage-angular';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-perfil',
  templateUrl: './perfil.page.html',
  styleUrls: ['./perfil.page.scss'],
})
export class PerfilPage implements OnInit {
  perfil = {
    nombre: 'Nombre de Usuario',
    semanasGestacion: 20,
    edad: 30,
    correo: 'correo@gmail.com',
    telefono: '+51 123 456 789',
    peso: '65 kg',
    presion: '120/80',
    hidratacion: 0.6,
    nutricion: 0.8,
    foto: 'assets/images/perfil-placeholder.jpg'
  };

  constructor(private storage: Storage, private navCtrl: NavController) {}

  async ngOnInit() {
    await this.storage.create();
    this.cargarPerfil();
  }

  async cargarPerfil() {
    const perfilGuardado = await this.storage.get('perfil');
    if (perfilGuardado) {
      this.perfil = perfilGuardado;
    }
  }

  editarPerfil() {
    this.navCtrl.navigateForward('/editar-perfil');
  }
}

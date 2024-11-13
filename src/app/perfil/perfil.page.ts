import { Component, OnInit } from '@angular/core';
import { Storage } from '@ionic/storage-angular';

@Component({
  selector: 'app-perfil',
  templateUrl: './perfil.page.html',
  styleUrls: ['./perfil.page.scss'],
})
export class PerfilPage implements OnInit {
  perfil = {
    nombre: '',
    correo: '',
    telefono: '',
    edad: null
  };

  constructor(private storage: Storage) {}

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
}

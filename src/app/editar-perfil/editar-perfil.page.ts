import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';
import { Storage } from '@ionic/storage-angular';
import { Camera, CameraResultType, CameraSource } from '@capacitor/camera';

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
    edad: null,
    foto: ''  // Nueva propiedad para guardar la foto
  };

  constructor(private navCtrl: NavController, private storage: Storage) {}

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

  async guardarCambios() {
    await this.storage.set('perfil', this.perfil);
    console.log('Perfil actualizado:', this.perfil);
    this.navCtrl.navigateBack('/perfil');
  }

  async cambiarFoto() {
    try {
      const image = await Camera.getPhoto({
        quality: 90,
        allowEditing: true,
        resultType: CameraResultType.Base64,  // Guardar en formato Base64
        source: CameraSource.Prompt,          // Permitir al usuario elegir entre cámara o galería
      });

      this.perfil.foto = `data:image/jpeg;base64,${image.base64String}`;
      console.log('Foto de perfil actualizada');
    } catch (error) {
      console.error('Error al cambiar la foto:', error);
    }
  }
}

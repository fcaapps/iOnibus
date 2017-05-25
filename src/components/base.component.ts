import { Signin } from './../pages/signin/signin';
import { OnInit } from "@angular/core";
import { Auth } from './../providers/auth';
import { App, NavController, AlertController, MenuController } from 'ionic-angular';

export abstract class BaseComponent implements OnInit {

    protected navCtrl: NavController;

    constructor(
        public alertCtrl: AlertController,
        public authService: Auth,
        public app: App,
        public menuCtrl: MenuController
    ) {}

    ngOnInit(): void {
        this.navCtrl = this.app.getActiveNav();
    }

    onLogout(): void {
        this.alertCtrl.create({
            message: 'Deseja sair do sistema?',
            buttons: [
                {
                    text: 'Sim',
                    handler: () => {
                        this.authService.logout()
                            .then(() => {
                                this.navCtrl.setRoot(Signin);                                    
                            });                             
                    }
                },
                {
                    text: 'Não'
                }
            ]
        }).present();
    }
}
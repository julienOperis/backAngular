<p align="center">
  <a href="http://nestjs.com/" target="blank"><img src="https://nestjs.com/img/logo-small.svg" width="120" alt="Nest Logo" /></a>
</p>

[circleci-image]: https://img.shields.io/circleci/build/github/nestjs/nest/master?token=abc123def456
[circleci-url]: https://circleci.com/gh/nestjs/nest

  <p align="center">A progressive <a href="http://nodejs.org" target="_blank">Node.js</a> framework for building efficient and scalable server-side applications.</p>
    <p align="center">
<a href="https://www.npmjs.com/~nestjscore" target="_blank"><img src="https://img.shields.io/npm/v/@nestjs/core.svg" alt="NPM Version" /></a>
<a href="https://www.npmjs.com/~nestjscore" target="_blank"><img src="https://img.shields.io/npm/l/@nestjs/core.svg" alt="Package License" /></a>
<a href="https://www.npmjs.com/~nestjscore" target="_blank"><img src="https://img.shields.io/npm/dm/@nestjs/common.svg" alt="NPM Downloads" /></a>
<a href="https://circleci.com/gh/nestjs/nest" target="_blank"><img src="https://img.shields.io/circleci/build/github/nestjs/nest/master" alt="CircleCI" /></a>
<a href="https://coveralls.io/github/nestjs/nest?branch=master" target="_blank"><img src="https://coveralls.io/repos/github/nestjs/nest/badge.svg?branch=master#9" alt="Coverage" /></a>
<a href="https://discord.gg/G7Qnnhy" target="_blank"><img src="https://img.shields.io/badge/discord-online-brightgreen.svg" alt="Discord"/></a>
<a href="https://opencollective.com/nest#backer" target="_blank"><img src="https://opencollective.com/nest/backers/badge.svg" alt="Backers on Open Collective" /></a>
<a href="https://opencollective.com/nest#sponsor" target="_blank"><img src="https://opencollective.com/nest/sponsors/badge.svg" alt="Sponsors on Open Collective" /></a>
  <a href="https://paypal.me/kamilmysliwiec" target="_blank"><img src="https://img.shields.io/badge/Donate-PayPal-ff3f59.svg" alt="Donate us"/></a>
    <a href="https://opencollective.com/nest#sponsor"  target="_blank"><img src="https://img.shields.io/badge/Support%20us-Open%20Collective-41B883.svg" alt="Support us"></a>
  <a href="https://twitter.com/nestframework" target="_blank"><img src="https://img.shields.io/twitter/follow/nestframework.svg?style=social&label=Follow" alt="Follow us on Twitter"></a>
</p>
  <!--[![Backers on Open Collective](https://opencollective.com/nest/backers/badge.svg)](https://opencollective.com/nest#backer)
  [![Sponsors on Open Collective](https://opencollective.com/nest/sponsors/badge.svg)](https://opencollective.com/nest#sponsor)-->

## Description

[Nest](https://github.com/nestjs/nest) framework TypeScript starter repository.

## Project setup

```bash
$ npm install
```

## Compile and run the project

```bash
# development
$ npm run start

# watch mode
$ npm run start:dev

# production mode
$ npm run start:prod
```

## Run tests

```bash
# unit tests
$ npm run test

# e2e tests
$ npm run test:e2e

# test coverage
$ npm run test:cov
```

## Resources

Check out a few resources that may come in handy when working with NestJS:

- Visit the [NestJS Documentation](https://docs.nestjs.com) to learn more about the framework.
- For questions and support, please visit our [Discord channel](https://discord.gg/G7Qnnhy).
- To dive deeper and get more hands-on experience, check out our official video [courses](https://courses.nestjs.com/).
- Visualize your application graph and interact with the NestJS application in real-time using [NestJS Devtools](https://devtools.nestjs.com).
- Need help with your project (part-time to full-time)? Check out our official [enterprise support](https://enterprise.nestjs.com).
- To stay in the loop and get updates, follow us on [X](https://x.com/nestframework) and [LinkedIn](https://linkedin.com/company/nestjs).
- Looking for a job, or have a job to offer? Check out our official [Jobs board](https://jobs.nestjs.com).

## Support

Nest is an MIT-licensed open source project. It can grow thanks to the sponsors and support by the amazing backers. If you'd like to join them, please [read more here](https://docs.nestjs.com/support).

## Stay in touch

- Author - [Kamil Myśliwiec](https://twitter.com/kammysliwiec)
- Website - [https://nestjs.com](https://nestjs.com/)
- Twitter - [@nestframework](https://twitter.com/nestframework)

## License

Nest is [MIT licensed](https://github.com/nestjs/nest/blob/master/LICENSE).


## Extension VS code 
 * Angular Snippets (Version 18)
 * Angular Language Service
 * Git Lens


npm install @nestjs/platform-express multer

Pour cr�er une application backend utilisant **NestJS** avec **Multer** pour g�rer l'upload d'images, voici les �tapes d�taill�es pour configurer et mettre en place l'upload de fichiers dans un projet NestJS.

### �tape 1 : Installer NestJS et cr�er un projet

Si vous n'avez pas encore install� NestJS, vous pouvez commencer par cr�er un nouveau projet avec la commande suivante.

1.  **Installez le CLI NestJS** si vous ne l'avez pas d�j?� install� :
    
2.  **Cr�ez un nouveau projet NestJS** :
    
    ```sh
    bash nest new my-nest-upload-app
    cd my-nest-upload-app
    
    ```
    
3.  **Installez les d�pendances n�cessaires pour Multer et l'upload de fichiers** :
    
    ```bash
    bash npm install @nestjs/platform-express multer
    
    ```
    

### �tape 2 : Configuration de Multer pour g�rer les fichiers

1.  **Cr�ez un dossier `uploads` dans le r�pertoire du projet pour stocker les fichiers t�l�charg�s** (ce sera l'endroit o?� les fichiers seront enregistr�s) :
    
2.  **Cr�ez un module pour g�rer les uploads de fichiers** :
    
    Utilisez le CLI NestJS pour cr�er un module et un contr�leur :
    
    ```bash
    bash nest generate module upload
    nest generate controller upload
    
    ```
    
3.  **Configurez Multer dans votre contr�leur** pour g�rer les uploads.
    

### �tape 3 : Configuration de Multer dans le contr�leur

Dans le fichier `upload.controller.ts`, vous allez configurer Multer pour g�rer l'upload de fichiers.

1.  **Importez les modules n�cessaires** dans `upload.controller.ts` :
    
    ```TS
    typescriptimport { Controller, Post, UseInterceptors, UploadedFile, Body } from '@nestjs/common';
    import { FileInterceptor } from '@nestjs/platform-express';
    import { diskStorage } from 'multer';
    import * as path from 'path';
    import * as fs from 'fs';
    
    @Controller('upload')
    export class UploadController {
    
      // Assurez-vous que le dossier uploads existe ou cr�ez-le
      private static createUploadDirectory(userId: string) {
        const dir = `./uploads/${userId}`;
        if (!fs.existsSync(dir)) {
          fs.mkdirSync(dir, { recursive: true });
        }
        return dir;
      }
    
      @Post()
      @UseInterceptors(
        FileInterceptor('avatar', {
          storage: diskStorage({
            destination: (req, file, cb) => {
              const userId = req.body.userId;  // ID utilisateur ?� partir du corps de la requ?�te
              const uploadPath = UploadController.createUploadDirectory(userId);
              cb(null, uploadPath); // D�finir le r�pertoire de destination
            },
            filename: (req, file, cb) => {
              const ext = path.extname(file.originalname); // Extension du fichier
              cb(null, `${Date.now()}${ext}`); // Nom du fichier avec un timestamp
            },
          }),
        }),
      )
      uploadFile(@UploadedFile() file: Express.Multer.File, @Body() body: { userId: string }) {
        return {
          message: 'Fichier t�l�charg� avec succ?s',
          fileUrl: `/uploads/${body.userId}/${file.filename}`, // URL de l'image t�l�charg�e
        };
      }
    }
    
    ```
    

### Explication du code :

-   **`@UseInterceptors(FileInterceptor('avatar'))`** : Utilise l'intercepteur `FileInterceptor` de NestJS pour g�rer l'upload d'un fichier. Le nom `'avatar'` correspond ?� l'input dans le formulaire de t�l�chargement de fichiers.
    
-   **`diskStorage`** : Utilis� pour configurer l'emplacement o?� les fichiers sont stock�s. On utilise `req.body.userId` pour d�terminer dans quel r�pertoire de l'utilisateur le fichier doit ?�tre sauvegard�.
    
-   **Nom du fichier** : Nous utilisons le timestamp `Date.now()` pour garantir des noms de fichiers uniques.
    
-   **R�ponse** : Apr?s l'upload, on renvoie une r�ponse contenant l'URL du fichier t�l�charg�.
    

### �tape 4 : Configurer le module d'upload

Maintenant, vous devez importer et configurer correctement votre contr�leur dans le module `upload.module.ts`.

1.  **Mettez ?� jour le fichier `upload.module.ts`** :
    
    ```TS
    typescriptimport { Module } from '@nestjs/common';
    import { UploadController } from './upload.controller';
    
    @Module({
      controllers: [UploadController],
    })
    export class UploadModule {}
    
    ```
    
2.  **Importez `UploadModule` dans le module principal `app.module.ts`** :
    
    ```TS
    typescriptimport { Module } from '@nestjs/common';
    import { UploadModule } from './upload/upload.module';
    
    @Module({
      imports: [UploadModule],
    })
    export class AppModule {}
    
    ```
    

### �tape 5 : Configurer le serveur statique pour servir les fichiers t�l�charg�s

Vous devez configurer NestJS pour servir les fichiers statiques (images, documents, etc.) t�l�charg�s dans le dossier `uploads`.

1.  **Configurez les fichiers statiques dans `main.ts`** :
    
    Modifiez le fichier `main.ts` pour permettre ?� NestJS de servir les fichiers dans le dossier `uploads` :
    
    ```TS
    typescriptimport { NestFactory } from '@nestjs/core';
    import { AppModule } from './app.module';
    import { join } from 'path';
    import { NestExpressApplication } from '@nestjs/platform-express';
    
    async function bootstrap() {
      const app = await NestFactory.create<NestExpressApplication>(AppModule);
    
      // Serve les fichiers t�l�charg�s ?� partir du dossier 'uploads'
      app.useStaticAssets(join(__dirname, '..', 'uploads'), {
        prefix: '/uploads/', // URL publique des fichiers t�l�charg�s
      });
    
      await app.listen(3000);
    }
    
    bootstrap();
    
    ```
    

### �tape 6 : Tester l'upload

1.  **Lancez le serveur NestJS** :
    
2.  **Testez avec un client comme Postman ou Insomnia** :
    
    -   **M�thode** : `POST`
        
    -   **URL** : `http://localhost:3000/upload`
        
    -   **Corps de la requ?�te (Form Data)** :
        
        -   **userId** : (ID de l'utilisateur, par exemple "123")
            
        -   **avatar** : (S�lectionnez une image ?� t�l�charger)
            
3.  **R�ponse attendue** :
    
    Si l'upload est r�ussi, la r�ponse contiendra l'URL de l'image t�l�charg�e :
    
    ```json
    json{
      "message": "Fichier t�l�charg� avec succ?s",
      "fileUrl": "/uploads/123/1627548931234.jpg"
    }
    
    ```
    

### Conclusion

Avec cette configuration, vous avez cr�� un backend NestJS qui permet de t�l�charger des images dans des dossiers sp�cifiques ?� chaque utilisateur. L'image est stock�e sur le serveur dans le dossier `uploads/{userId}`, et une URL publique est renvoy�e pour acc�der ?� l'image. Vous pouvez facilement int�grer ce backend avec votre frontend Angular pour g�rer l'upload des images de profil.

N'h�sitez pas ?� me demander si vous avez des questions ou des probl?mes suppl�mentaires !

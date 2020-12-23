import { enableProdMode } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { AppModule } from './app/app.module';
import { environment } from './environments/environment';
import Amplify, { Auth } from 'aws-amplify';

Amplify.configure({

  Auth: {      

      // REQUIRED - Amazon Cognito Region

      region: 'us-east-1',

      // OPTIONAL - Amazon Cognito Federated Identity Pool Region 

      // Required only if it's different from Amazon Cognito Region

      identityPoolRegion: 'us-east-1',

      // OPTIONAL - Amazon Cognito User Pool ID

      userPoolId: 'us-east-1_hZsQ1kVGH',

      // OPTIONAL - Amazon Cognito Web Client ID (26-char alphanumeric string)

      userPoolWebClientId: '220auvv3h0gt518ho49mpajv22',
      oauth: {
        domain:'poc-saml.auth.us-east-1.amazoncognito.com',
        scope: [          
          "email",
          "profile",
          "openid",
          "aws.cognito.signin.user.admin",
        ],
        redirectSignIn: 'app://cognito/home/',
        redirectSignOut: 'http://localhost:8100/',
        responseType: "code"
      }, 

  },

});

if (environment.production) {
  enableProdMode();
}

platformBrowserDynamic().bootstrapModule(AppModule)
  .catch(err => console.log(err));


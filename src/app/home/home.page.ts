import { Component } from '@angular/core';
import { Auth } from 'aws-amplify';
import { CognitoHostedUIIdentityProvider } from "@aws-amplify/auth/lib/types";


@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  constructor() {}


  onclick() {
    Auth.federatedSignIn({customProvider: 'SBBolivar'})
    //Auth.federatedSignIn({provider: CognitoHostedUIIdentityProvider.Google})
  }
}



import { Injectable } from "@nestjs/common"
import firebase from "firebase/app"
import "firebase/firestore"

@Injectable()
export class AppService {
  getHello(): string {
    return 'Hello World!';
  }
  constructor(
    
  ) {
    var firebaseConfig = {
      apiKey: "AIzaSyBaT2PfqyTaDId9Blsw4n36PEh0Ou1sYDY",
      authDomain: "light-team-310607.firebaseapp.com",
      projectId: "light-team-310607",
      storageBucket: "light-team-310607.appspot.com",
      messagingSenderId: "376388844018",
      appId: "1:376388844018:web:7f0fbf55f08a455349936b",
      measurementId: "G-DN2HVEVTH3"
    };
    firebase.initializeApp(firebaseConfig);
    this.addData();
    console.log("Hello");

  }

  async addData() {
    let firestore = firebase.firestore();
    firestore.collection("store").add({
      item: "Nendoroid",
      name: "Hatsune Miku",
      id: 33,
      available: true
    });

  }
}

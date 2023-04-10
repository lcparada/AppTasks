import firebaseConfig from "../config/firebaseConfig";

import {
  getAuth,
  createUserWithEmailAndPassword,
  Auth,
  signInWithEmailAndPassword,
  signOut,
} from "firebase/auth";
import { FirebaseApp, initializeApp } from "firebase/app";
import {
  collection,
  getDocs,
  query,
  getDoc,
  doc,
  Firestore,
  getFirestore,
  deleteDoc,
  setDoc,
  updateDoc,
} from "firebase/firestore";

export default class FireBaseService {
  private firestore: Firestore;
  private auth: Auth;
  private app: FirebaseApp;

  constructor() {
    this.app = initializeApp(firebaseConfig);
    this.firestore = getFirestore(this.app);
    this.auth = getAuth();
  }

  async deletDoc(data: string) {
    await deleteDoc(doc(this.firestore, "tasks", data));
  }

  async getDocs<T>(): Promise<T[]> {
    try {
      const docs: any[] = [];
      const querySnapshot = await getDocs(
        query(collection(this.firestore, "tasks"))
      );
      querySnapshot.forEach((doc) => {
        const data = doc.data();
        data["id"] = doc.id;
        docs.push(data);
      });
      return docs;
    } catch (error) {
      throw error;
    }
  }
  async register(email: string, password: string): Promise<string> {
    try {
      const { user } = await createUserWithEmailAndPassword(
        this.auth,
        email,
        password
      );
      return user.uid;
    } catch (error) {
      throw error;
    }
  }

  async signIn(email: string, password: string): Promise<string> {
    try {
      const { user } = await signInWithEmailAndPassword(
        this.auth,
        email,
        password
      );
      return user.uid;
    } catch (error) {
      throw error;
    }
  }

  async signOut() {
    try {
      await signOut(this.auth);
    } catch (error) {
      throw error;
    }
  }

  async isExist(data: {}, id: string) {
    const docSnap = await getDoc(doc(this.firestore, "tasks", id));
    if (docSnap.exists()) {
      return this.isExist;
    } else {
      try {
        await setDoc(doc(this.firestore, "tasks", id), data);
      } catch (e) {
        throw e;
      }
    }
  }

  async updateDoc(id: string, taskName: string, descriptionTask: string) {
    await updateDoc(doc(this.firestore, "tasks", id), {
      task: taskName,
      descriptionTask: descriptionTask,
    });
  }
}

<template>
  <div class="log">
    <div class="container">
      <form class="form">
        <!-- Connection avec google/facebook -->
        <div class="otherConnectionMode">
          <div @click="googleConnection" class="google">
            <i class="fa-brands fa-google"></i>
          </div>
          <div class="facebook">
            <i class="fa-brands fa-facebook"></i>
          </div>
        </div>
        <!-- Connection avec le formulaire -->
        <div class="formConatiner">
          <div class="switcher">
            <p>Pas encore membre ?</p>
            <router-link to="/">S'inscrire</router-link>
          </div>
          <div class="formInputContainer">
            <div class="fullName">
              <div class="nom">
                <label for="nom">Nom</label>
                <input
                  required
                  autocomplete="none"
                  v-model="nom"
                  type="text"
                  id="nom"
                />
              </div>
              <div class="prenom">
                <label for="prenom">Prenom</label>
                <input
                  required
                  autocomplete="none"
                  v-model="prenom"
                  type="text"
                  id="prenom"
                />
              </div>
            </div>
            <div class="emailPass">
              <div class="email">
                <label for="email">Email</label>
                <input
                  required
                  autocomplete="none"
                  v-model="email"
                  type="text"
                  id="email"
                />
              </div>
              <div class="pass">
                <label for="pass">Pass</label>
                <input
                  required
                  autocomplete="none"
                  v-model="pass"
                  type="password"
                  id="pass"
                />
              </div>
            </div>
            <div class="connectionButton">
              <input
                @click.prevent="userCreation"
                type="submit"
                value="Se connecter"
              />
            </div>
          </div>
        </div>
      </form>
    </div>
  </div>
</template>

<script>
import { ref } from "vue";
import {
  getAuth,
  updateProfile,
  signInWithPopup,
  GoogleAuthProvider,
  createUserWithEmailAndPassword,
} from "../firebase/base";
export default {
  setup() {
    // Model
    const email = ref("");
    const pass = ref("");
    // test@mail.fr

    // F
    function userCreation() {
      const auth = getAuth();
      createUserWithEmailAndPassword(auth, email.value, pass.value)
        .then((userCredential) => {
          // const auth = getAuth();
          updateProfile(auth.currentUser, {
            displayName: "Jane Q. User",
            photoURL: "https://example.com/jane-q-user/profile.jpg",
          })
            .then(() => {
              // Profile updated!
              // ...
            })
            .catch((error) => {
              // An error occurred
              // ...
            });
          // Signed in
          const user = userCredential.user;
          console.log(user);
          localStorage.setItem("userUuid", user.uid);
          // ..."z"
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          // ..
        });
    }

    function googleConnection() {
      const auth = getAuth();
      const provider = new GoogleAuthProvider();
      signInWithPopup(auth, provider)
        .then((result) => {
          // This gives you a Google Access Token. You can use it to access the Google API.
          const credential = GoogleAuthProvider.credentialFromResult(result);
          const token = credential.accessToken;
          // The signed-in user info.
          const user = result.user;
          console.log(user);
          // ...
        })
        .catch((error) => {
          // Handle Errors here.
          const errorCode = error.code;
          const errorMessage = error.message;
          // The email of the user's account used.
          const email = error.customData.email;
          // The AuthCredential type that was used.
          const credential = GoogleAuthProvider.credentialFromError(error);
          // ...
        });
    }

    // R
    return {
      userCreation,
      email,
      pass,
      googleConnection,
    };
  },
};
</script>

<style lang="scss">
@media (min-width: 900px) {
  .log {
    height: 100vh;
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;

    .container {
      height: 90vh;
      width: 80%;
      display: flex;
      justify-content: center;
      align-items: center;

      .form {
        width: 400px;
        height: 100%;

        .otherConnectionMode {
          height: max-content;
          width: 100%;
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;

          div {
            width: 100%;
            height: 50px;
            display: flex;
            justify-content: center;
            align-items: center;
            border-radius: 2em;
            font-size: 1.3em;
            cursor: pointer;
            transition: 200ms;
          }

          .google {
            background-color: #fff;

            &:hover {
              background-color: rgb(244, 244, 244);
            }
          }

          .facebook {
            background-color: #8ab4f8;
            margin-top: 0.5em;

            &:hover {
              background-color: #70a7ff;
            }
          }
        }

        .formConatiner {
          margin-top: 2em;
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
          width: 100%;

          .switcher {
            width: 100%;
            display: flex;
            justify-content: center;
            align-items: center;

            a {
              color: #000;
            }
          }

          .formInputContainer {
            width: 100%;
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: center;

            .fullName {
              width: 100%;
              display: flex;
              flex-direction: column;
              justify-content: center;
              align-items: center;

              .nom,
              .prenom {
                width: 100%;
                display: flex;
                flex-direction: column;
                justify-content: center;
                align-items: center;

                label {
                  width: 100%;
                  height: 40px;
                  display: flex;
                  justify-content: flex-start;
                  align-items: center;
                }

                input {
                  width: 100%;
                  height: 50px;
                  border-radius: 0 2em 2em 2em;
                  border: none;
                  outline: none;
                  text-align: center;
                  background-color: #6f141fba;
                  color: #fff;
                  font-family: "Poiret One", cursive;
                }
              }
            }

            .emailPass {
              width: 100%;
              display: flex;
              flex-direction: column;
              justify-content: center;
              align-items: center;

              .email,
              .pass {
                width: 100%;
                display: flex;
                flex-direction: column;
                justify-content: center;
                align-items: center;

                label {
                  width: 100%;
                  height: 40px;
                  display: flex;
                  justify-content: flex-start;
                  align-items: center;
                }

                input {
                  width: 100%;
                  height: 50px;
                  border-radius: 0 2em 2em 2em;
                  border: none;
                  outline: none;
                  text-align: center;
                  background-color: #6f141fba;
                  color: #fff;
                  font-family: "Poiret One", cursive;
                }
              }
            }

            .connectionButton {
              width: 100%;
              height: 50px;
              display: flex;
              justify-content: center;
              align-items: center;
              margin-top: 3em;
              border-radius: 2em;
              overflow: hidden;

              input {
                height: 100%;
                width: 100%;
                border: none;
                background-color: #fff;
                cursor: pointer;
                transition: 300ms;
                font-family: "Poiret One", cursive;
                font-weight: bold;
                &:hover {
                  background-color: rgb(173, 173, 173);
                }
              }
            }
          }
        }
      }
    }
  }
}
</style>

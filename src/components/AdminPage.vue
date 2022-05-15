<template>
    <div class="container">
         <div class="card p-2 m-3">
    <form>
       <h5 class="mb-3">Create new employee</h5>
        <label for="email" class="form-label">Email</label>
         <input id="email" class="form-control" type="email" v-model="email"/>
    <button class="btn btn-primary m-3 w-12-rem " @click="signup">Create user</button>
    </form>
     </div>
    </div>
</template>

<script>
import { auth, authMethods, db, dbMethods } from '@/firebase';
 const employees = dbMethods.collection(db,"newEmployees");   
export default {

data(){
    return{
        email:""
    }
},
methods:{
        signup:async function(e){
        e.preventDefault();
        const password="123456789";
        try{ 
           // const {user}= 
            await authMethods.createUserWithEmailAndPassword(auth, this.email, password);
            await dbMethods.setDoc(dbMethods.doc(employees,this.email), {
        vaModules:[]
     })
            this.restPassword();
        }
      catch(error) {
            const errorCode = error.code;
            const errorMessage = error.message;
            console.log(errorCode,errorMessage);
            // ..
        }
      },
      restPassword: async function(){
          try{
             await authMethods.sendPasswordResetEmail(auth, this.email) 
             console.log("user sent password reset email")
          } 
        catch(error) {
            const errorCode = error.code;
            const errorMessage = error.message;
            // ..
            console.log(errorCode,errorMessage);
        }
      }
}
}
</script>

<style lang="scss" scoped>

</style>
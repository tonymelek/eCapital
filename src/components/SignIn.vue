<template>
    <div class="container">
    <div class="card p-3 m-2">
        <form @submit="signin" autocomplete="off">
        <h5>Sign in</h5>
        <label for="email" class="form-label">Email</label>
        <input type="email" id="email" class="form-control" v-model="email" />
        <label for="password" class="form-label">Password</label>
        <input type="password" id="password"  class="form-control" v-model="password" autocomplete="off"/>
        <button class="btn btn-primary mt-2 w-12-rem">Sign in</button>
        </form>
    </div>
    </div>
</template>

<script>
import { auth, authMethods } from '@/firebase';
export default {
   data(){
       return{
          email:"",
          password:"" 
        }
    } ,
   methods:{
        signin:async function(e){
            e.preventDefault();
        try{ 
            const {user}= await authMethods.signInWithEmailAndPassword(auth, this.email, this.password)
            console.log(user);
            const token=await auth.currentUser.getIdTokenResult();
    
            if (token.claims.role==='admin') {
                this.$router.push('/admin')
            }else{
                this.$router.push('/onboarding')
            }
        }
      catch(error) {
            const errorCode = error.code;
            const errorMessage = error.message;
            console.log(errorCode,errorMessage);
            // ..
        }
    
      }
   },
   mounted:async function(){
       //await authMethods.signOut(auth);
       try{
           const token=await auth.currentUser.getIdTokenResult();
           if (token.claims.role==='manager') console.log('redirect to create users')
       }catch(error){
           console.log(error);
       }
       
    
   }
}
</script>

<style scoped>

</style>
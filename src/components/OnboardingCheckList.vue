<template>
    <div class="container">
        Welcome {{email}}
    <h1 class="text-center">E-Capital New Employee Onboarding Check List</h1>
    <div v-if="loading">
    Loading ...
    </div>
    <ul v-else>
        <li v-for="item in VAcheckList" :key="item">
          <label class="switch" :class="disableFinished(item)?'text-success':'text-bold'">
           <input type="checkbox" :value="item" class="mx-2" v-model="VAFinished" :disabled="disableFinished(item)" >
             {{item}}
            <span class="slider round"></span>
         </label>
        </li>
    </ul>

    </div>
</template>

<script>
import { auth, db, dbMethods } from '@/firebase';


export default {
  data(){
      return {
          name:"Tonton",
          VAcheckList:['Orientation with Becky',
          'Opening meeting with Arie',
          'Provide ID documents to eCapital',
          'Signed the contract',
          'Canva training',
          'Social media management',
          'Fiverr & Upwork training'],
          CSCcheckList:['Register for and finish the lessons',
          'Watch CSC training video',
          'Handover session',
          'Read CSC manual',
          'Software Training sessions'
          ],
          VAFinished:[],
          email:"",
          loading:true

      }
  },
  computed:{

  },
  methods:{
      disableFinished(item){
          return this.VAFinished.includes(item)
      },


  },
  watch:{
      VAFinished: async function (){
        const docRef = dbMethods.doc(db, "newEmployees",this.email);  
        await dbMethods.setDoc((docRef), {
        vaModules:this.VAFinished
     },{merge:true});
      }
  },
  mounted: async function(){
      try{
            const token=await auth.currentUser.getIdTokenResult();
            this.email=token.claims.email;
            const docRef = dbMethods.doc(db, "newEmployees", token.claims.email);
            const docSnap = await dbMethods.getDoc(docRef);
            if (docSnap.exists()) {
                this.VAFinished=docSnap.data().vaModules;
                this.loading=false;
            } else {
            // doc.data() will be undefined in this case
            console.log("No such document!");
    }
      }catch(error){
          this.$router.push('/');
      }
 

  },
  updated(){
      //console.log("updated");
      
      //dbMethods.getDocs(employees).then(snapshot=>snapshot.forEach(doc=>console.log(doc.data()))

  }


}
</script>

<style>
ul{
    list-style-type: none;
}
.text-bold{
font-weight:700;
}
.w-12-rem{
min-width: 12rem;
max-width:15rem;
}
</style>
export const reducer=(state,action)=>{
 
 switch (action.type){
     case "add":{
        
         state.todos=[...state.todos,{title:action.payload,stat:false}]
       
         return{...state}
     }
     default:{
         return{...state}
     }
     
 }
 
}